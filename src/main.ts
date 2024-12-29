import { LitElement, html, css, PropertyValues, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { fireEvent } from "./common/fire_event";
import { mdiClose } from "@mdi/js";

import * as packageJson from "../package.json";

import { TimeAgoCard } from "./time-since-card";

customElements.define("time-since-card", TimeAgoCard);
/* eslint-disable @typescript-eslint/no-explicit-any */
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: "time-since-card",
  name: "Time Since Card",
  preview: false,
  description:
    "A card that displays the time since an input_datetime was last changed",
});

console.info(
  `%c Binary Sensor Helpers %c ${packageJson.version} `,
  "color: cyan; background: black; font-weight: bold;",
  "color: darkblue; background: white; font-weight: bold;",
);

// Base calendar class that contains shared functionality
class BaseOccupancyCalendar extends LitElement {
  @property({ attribute: false }) public hass!: any;
  @property({ attribute: true }) public stateObj!: any;
  @property({ attribute: false }) public entry?: any;
  @property({ attribute: false }) public editMode?: boolean;

  @state() protected _selectedDate: Date = startOfDay(new Date());
  @state() protected _currentMonth: Date = new Date();
  @state() protected _dayStats: DayStats[] = [];
  @state() protected _maxEvents: number = 0;
  @state() protected _hasRendered: boolean = false;
  @state() protected _isFetching: boolean = false;
  protected _disconnected: boolean = false;

  connectedCallback() {
    super.connectedCallback();
    this._disconnected = false;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._disconnected = true;
  }

  protected shouldUpdate(_changedProperties: PropertyValues): boolean {
    if (
      _changedProperties.has("stateObj") ||
      _changedProperties.has("_selectedDate") ||
      !this._hasRendered
    ) {
      return !this._disconnected;
    }
    return false;
  }

  protected willUpdate(changedProps: PropertyValues): void {
    if (
      (changedProps.has("stateObj") || !this._hasRendered) &&
      this.stateObj?.entity_id &&
      !this._isFetching
    ) {
      this._fetchHistory();
    }
  }

  private async _fetchHistory() {
    if (this._isFetching || this._disconnected) return;

    this._isFetching = true;
    const start = startOfMonth(this._currentMonth);
    const end = endOfMonth(this._currentMonth);

    try {
      const history = await this.hass.callApi(
        "GET",
        `history/period/${start.toISOString()}?filter_entity_id=${this.stateObj.entity_id}&end_time=${end.toISOString()}&no_attributes`,
      );

      if (this._disconnected) return;

      const days = eachDayOfInterval({ start, end });
      const dayStats: DayStats[] = [];
      let maxEvents = 0;

      days.forEach((date) => {
        const dayEvents = history
          .flat()
          .filter(
            (state) =>
              state.entity_id === this.stateObj.entity_id &&
              new Date(state.last_updated).getDate() === date.getDate() &&
              state.state === "on",
          );

        const eventCount = dayEvents.length;
        if (eventCount > maxEvents) maxEvents = eventCount;

        dayStats.push({
          date,
          eventCount,
          events: dayEvents.map((event) => ({
            timestamp: new Date(event.last_updated).toLocaleTimeString(),
            state: event.state,
          })),
        });
      });

      this._dayStats = dayStats;
      this._maxEvents = maxEvents;
      this.requestUpdate();
    } catch (err) {
      console.error("Error fetching history:", err);
    } finally {
      this._isFetching = false;
    }
  }

  // Shared methods
  protected _getColorIntensity(eventCount: number): string {
    if (eventCount === 0) return "var(--primary-background-color)";
    const intensity = Math.max(0.4, Math.min(1, eventCount / this._maxEvents));
    return `rgba(var(--rgb-primary-color), ${intensity})`;
  }

  protected _handleDateClick(date: Date) {
    this._selectedDate = date;
    this.requestUpdate();
  }

  protected _previousMonth() {
    this._currentMonth = new Date(
      this._currentMonth.getFullYear(),
      this._currentMonth.getMonth() - 1,
    );
    this._hasRendered = false;
    this._dayStats = [];
    this._maxEvents = 0;
    this._fetchHistory();
  }

  protected _nextMonth() {
    this._currentMonth = new Date(
      this._currentMonth.getFullYear(),
      this._currentMonth.getMonth() + 1,
    );
    this._hasRendered = false;
    this._dayStats = [];
    this._maxEvents = 0;
    this._fetchHistory();
  }

  protected _renderEventList(date: Date) {
    const dayData = this._dayStats.find((day) => isEqual(day.date, date));
    if (!dayData || dayData.events.length === 0) {
      return html`<div class="no-events">No events on this day</div>`;
    }

    return html`
      <div class="event-list">
        <h3>Events on ${formatDate(date, "MMMM d, yyyy")}</h3>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            ${dayData.events.map(
              (event) => html`
                <tr>
                  <td>${event.timestamp}</td>
                  <td>${event.state}</td>
                </tr>
              `,
            )}
          </tbody>
        </table>
      </div>
    `;
  }

  protected _renderCalendar() {
    if (!this.stateObj || this._dayStats.length === 0) {
      return html``;
    }

    this._hasRendered = true;

    const days = this._dayStats;
    const monthStart = startOfMonth(this._currentMonth);
    const monthName = formatDate(this._currentMonth, "MMMM yyyy");

    const startDayOffset = monthStart.getDay();
    const emptyCells = Array((startDayOffset + 6) % 7).fill(null);

    return html`
      <div class="calendar-header">
        <md-filled-button @click=${this._previousMonth}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </md-filled-button>
        <span>${monthName}</span>
        <md-filled-button @click=${this._nextMonth}>
          <ha-icon icon="mdi:chevron-right"></ha-icon>
        </md-filled-button>
      </div>
      <div class="calendar">
        <div class="weekday-header">
          ${["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
            (day) => html`<div class="weekday">${day}</div>`,
          )}
        </div>
        <div class="days">
          ${emptyCells.map(() => html` <div class="day empty"></div> `)}
          ${days.map(
            ({ date, eventCount }) => html`
              <div
                class="day ${isEqual(date, this._selectedDate)
                  ? "selected"
                  : ""}"
                style="background-color: ${this._getColorIntensity(eventCount)}"
                @click=${() => this._handleDateClick(date)}
              >
                ${formatDate(date, "d")}
                ${eventCount > 0
                  ? html`<div class="event-indicator"></div>`
                  : ""}
              </div>
            `,
          )}
        </div>
      </div>
      ${this._selectedDate ? this._renderEventList(this._selectedDate) : ""}
    `;
  }

  static styles = [
    css`
      ha-dialog {
        --mdc-dialog-min-width: 300px;
        --mdc-dialog-max-width: 500px;
        --mdc-dialog-heading-ink-color: var(--primary-text-color);
        --mdc-dialog-content-ink-color: var(--primary-text-color);
        --justify-action-buttons: space-between;
        --dialog-content-padding: 8px;
      }
      ha-dialog .form {
        color: var(--primary-text-color);
      }
      a {
        color: var(--primary-color);
      }
      /* make dialog fullscreen on small screens */
      @media all and (max-width: 450px), all and (max-height: 500px) {
        ha-dialog {
          --mdc-dialog-min-width: calc(
            100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
          );
          --mdc-dialog-max-width: calc(
            100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
          );
          --mdc-dialog-min-height: 100%;
          --mdc-dialog-max-height: 100%;
          --vertical-align-dialog: flex-end;
          --ha-dialog-border-radius: 0px;
        }
      }
      mwc-button.warning {
        --mdc-theme-primary: var(--error-color);
      }
      .error {
        color: var(--error-color);
      }
      ha-dialog {
        --dialog-surface-position: static;
        --dialog-content-position: static;
        --vertical-align-dialog: flex-start;
      }
      .content {
        outline: none;
      }
      .heading {
        border-bottom: 1px solid
          var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
      }
      :host([tab="time"]) ha-dialog {
        --dialog-content-padding: 0px;
      }
      @media all and (min-width: 600px) and (min-height: 501px) {
        ha-dialog {
          --mdc-dialog-min-width: 560px;
          --mdc-dialog-max-width: 580px;
          --dialog-surface-margin-top: 40px;
          --mdc-dialog-max-height: calc(100% - 72px);
        }
        :host([large]) ha-dialog {
          --mdc-dialog-min-width: 90vw;
          --mdc-dialog-max-width: 90vw;
        }
      }
      mwc-tab[disabled] {
        --mdc-tab-text-label-color-default: var(--material-disabled-text-color);
        pointer-events: none;
      }
    `,
    css`
      :host {
        display: block;
      }

      ha-card {
        padding: 16px;
      }

      .calendar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      }

      .calendar-header md-filled-button {
        min-width: 48px;
        height: 48px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 24px;
        transition: background-color 0.2s;
      }

      .calendar-header md-filled-button:hover {
        background-color: var(--primary-color);
      }

      .calendar-header md-filled-button ha-icon {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .weekday-header {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        text-align: center;
        font-weight: bold;
        margin-bottom: 8px;
      }

      .days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 4px;
      }

      .day {
        position: relative;
        padding: 8px;
        text-align: center;
        cursor: pointer;
        border-radius: 4px;
        transition: background-color 0.2s;
      }

      .day:hover {
        background-color: var(--primary-color);
        color: var(--text-primary-color);
      }

      .day.selected {
        border: 2px solid var(--primary-color);
      }

      .day.empty {
        background-color: transparent;
        cursor: default;
      }

      .day.empty:hover {
        background-color: transparent;
      }

      .event-indicator {
        position: absolute;
        bottom: 2px;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: var(--primary-color);
      }

      .event-list {
        margin-top: 16px;
        border-top: 1px solid var(--divider-color);
        padding-top: 16px;
      }

      .event-list table {
        width: 100%;
        border-collapse: collapse;
      }

      .event-list th,
      .event-list td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid var(--divider-color);
      }

      .no-events {
        margin-top: 16px;
        text-align: center;
        color: var(--secondary-text-color);
      }

      .header_title {
        display: flex;
        align-items: center;
      }

      .header_title span {
        margin-left: 8px;
      }
    `,
  ];
}

// More Info Card version
@customElement("ha-more-info-occupancy-calendar")
export class MoreInfoOccupancyCalendar extends BaseOccupancyCalendar {
  protected render() {
    return html` <ha-card> ${this._renderCalendar()} </ha-card> `;
  }
}

// Dialog version
@customElement("hui-dialog-occupancy-calendar")
export class HuiDialogOccupancyCalendar extends BaseOccupancyCalendar {
  public showDialog(params: any): void {
    this.stateObj = params;
  }

  public closeDialog() {
    this.stateObj = undefined;
    fireEvent(this, "dialog-closed", { dialog: this.localName });
  }

  protected render() {
    if (!this.stateObj) {
      return nothing;
    }

    return html`
      <ha-dialog open @closed=${this.closeDialog} .heading=${true} hideActions>
        <ha-dialog-header slot="heading">
          <ha-icon-button
            slot="navigationIcon"
            dialogAction="cancel"
            .label=${this.hass?.localize(
              "ui.dialogs.more_info_control.dismiss",
            ) ?? "Dismiss"}
            .path=${mdiClose}
          ></ha-icon-button>
          <span slot="title">
            ${this.stateObj.title || "Occupancy Calendar"}
          </span>
        </ha-dialog-header>
        ${this._renderCalendar()}
      </ha-dialog>
    `;
  }
}

// Helper functions (unchanged)
const formatDate = (date: Date, format: string): string => {
  if (format === "d") {
    return date.getDate().toString();
  }
  const options: Intl.DateTimeFormatOptions = {
    month: format.includes("MMMM") ? "long" : "short",
    year: format.includes("yyyy") ? "numeric" : undefined,
    day: format.includes("d") ? "numeric" : undefined,
  };
  return new Intl.DateTimeFormat("en-GB", options).format(date);
};

const startOfMonth = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

const endOfMonth = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};

const startOfDay = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
};

const eachDayOfInterval = ({
  start,
  end,
}: {
  start: Date;
  end: Date;
}): Date[] => {
  const days: Date[] = [];
  const current = new Date(start);
  while (current <= end) {
    days.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return days;
};

const isEqual = (date1: Date, date2: Date | undefined): boolean => {
  if (!date2) return false;
  return date1.getTime() === date2.getTime();
};

interface DayStats {
  date: Date;
  eventCount: number;
  events: Array<{ timestamp: string; state: string }>;
}

declare global {
  interface HASSDomEvents {
    "dialog-closed": { dialog: string };
  }

  interface HTMLElementTagNameMap {
    "ha-more-info-occupancy-calendar": MoreInfoOccupancyCalendar;
    "hui-dialog-occupancy-calendar": HuiDialogOccupancyCalendar;
  }
}
