export class TimeAgoCard extends HTMLElement {
  constructor() {
    super();
    this._timeoutId = null;
    this._config = {};
    this._lastTime = null;
    this.attachShadow({ mode: "open" });
  }

  setConfig(config) {
    if (!config.entity || !config.entity.startsWith("input_datetime.")) {
      throw new Error("Specify an input_datetime entity");
    }
    this._config = config;
  }

  set hass(hass) {
    const entityId = this._config.entity;
    const state = hass.states[entityId];

    if (!state) {
      throw new Error(`Entity ${entityId} not found`);
    }

    // Only update DOM if state has changed or first render
    if (state.last_changed !== this._lastTime) {
      this._lastTime = state.last_changed;
      this._updateContent(state, hass);
    }
  }

  _updateContent(state) {
    const name =
      this._config.title || state.attributes.friendly_name || "Last Update";
    const icon = this._config.icon || state.attributes.icon || "mdi:clock";
    const clickEntity = this._config.clickEntity || this._config.entity;

    // Get the datetime from the state
    const lastTime = new Date(state.state);

    this.shadowRoot.innerHTML = `
        <ha-card>
          <style>
            .container {
              padding: 8px 16px 8px 16px;
              display: flex;
              justify-content: space-between;
              flex-direction: column;
              cursor: pointer;
            }

            .header {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .name {
                color: var(--secondary-text-color);
                line-height: 40px;
                font-weight: 500;
                font-size: 16px;
                overflow-x: hidden;
                overflow-y: hidden;
                text-wrap-mode: nowrap;
                white-space-collapse: collapse;
                text-overflow: ellipsis;
            }
            
            .icon {
                color: var(--paper-item-icon-color,#44739e);
                --state-inactive-color: var(--paper-item-icon-color, #44739e);
                line-height: 40px;
            }

            .relative-time {
              font-size: 24px;
              font-weight: 500;
              color: var(--primary-text-color);
              margin-bottom: 12px;
            }

            .absolute-time {
              font-size: 12px;
              color: var(--secondary-text-color);
            }
          </style>
          <div class="container">
            <div class="header">
              <div class="name">${name}</div>
              <ha-icon class="icon" icon="${icon}"></ha-icon>
            </div>
            <div class="relative-time">${this._getRelativeTime(lastTime)}</div>
            <div class="absolute-time">${lastTime.toLocaleString()}</div>
          </div>
        </ha-card>
      `;

    // Set up click handler
    const card = this.shadowRoot.querySelector("ha-card");
    card.onclick = (e) => {
      const event = new Event("hass-more-info", {
        bubbles: true,
        cancelable: false,
        composed: true,
      });
      event.detail = {
        entityId: clickEntity,
        moreInfoType: "ha-more-info-occupancy-calendar", // Specify custom component
      };
      this.dispatchEvent(event);
    };

    // Set up interval to update time display
    this._setupUpdateInterval(lastTime);
  }

  _setupUpdateInterval(lastTime) {
    if (this._timeoutId) {
      clearInterval(this._timeoutId);
    }

    // Update the display periodically
    this._timeoutId = setInterval(() => {
      const relativeTimeElement =
        this.shadowRoot.querySelector(".relative-time");
      if (relativeTimeElement) {
        relativeTimeElement.textContent = this._getRelativeTime(lastTime);
      }
    }, 60000); // Update every minute
  }

  _getRelativeTime(datetime) {
    const now = new Date().getTime();
    const time = new Date(datetime).getTime();
    const diff = Math.floor((now - time) / 1000);

    if (diff < 60) {
      //return `${diff} second${diff === 1 ? '' : 's'} ago`;
      return "Just now";
    } else if (diff < 3600) {
      const minutes = Math.floor(diff / 60);
      return `${minutes}min ago`;
    } else if (diff < 86400) {
      const hours = Math.floor(diff / 3600);
      return `${hours}h ago`;
    } else {
      const days = Math.floor(diff / 86400);
      return `${days} day${days === 1 ? "" : "s"} ago`;
    }
  }

  disconnectedCallback() {
    if (this._timeoutId) {
      clearInterval(this._timeoutId);
      this._timeoutId = null;
    }
  }

  getCardSize() {
    return 2;
  }

  static getLayoutOptions() {
    return {
      scale: 1,
    };
  }
}
