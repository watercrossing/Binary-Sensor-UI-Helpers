# Binary Sensor UI Helpers

[Binary Sensors](https://www.home-assistant.io/integrations/binary_sensor/) (occupancy detection, door sensor, smoke, sound) do not have useful UI elements in home assistant.

This custom component defines two custom UI elements to make the integration better.

Make sure the `binary-sensor-helpers.js` resource is loaded.

## Time-since card

Displays the time elapsed since a binary_sensor was activated. It uses an additional `input_datetime` helper that stores the last motion time.

Add to your `configuration.yaml`:

```
input_datetime:
  last_motion_time:
    name: Last Motion Time
    has_date: true
    has_time: true
    icon: mdi:motion-sensor

automation:
  - alias: "Store motion detection time"
    triggers:
    - trigger: state
      entity_id: binary_sensor.motion_occupancy
      to: "on"
    actions:
      - action: input_datetime.set_datetime
        target:
          entity_id: input_datetime.last_motion_time
        data:
          datetime: "{{ now() }}"
```

And then the custom card can be added to lovelace using:

```
type: custom:time-since-card
entity: input_datetime.last_motion_time
clickEntity: binary_sensor.motion_occupancy
title: Last motion
```

## More info dialog

The default more info dialog for `binary_sensors` is not very helpful: Especially for motion sensors where the activations are rare the default horizontal history view is not very intuitive, and it only shows today's data.

This custom component defines a more-info card that adds a calendar view to highlight the days and frequency of sensor activations on those days.

To activate this more-info card for a binary_sensor, add the following customization to your your `configuration.yaml`:

```
homeassistant:
  customize:
    binary_sensor.motion_occupancy:
      custom_ui_more_info: ha-more-info-occupancy-calendar
```

The time-since card opens the calendar view as a [ha-dialog](https://github.com/home-assistant/frontend/blob/dev/src/components/ha-dialog.ts), which looks even better than when using the `custom_ui_more_info`.

# Todo

- The package depends on `lit`, which is a standard dependency of the home assistant frontend. Is it possible to reuse it instead of repackaging it here? Would moving to a dev-container based on the full HA frontend repo help?
- `custom_ui_more_info` only adds to the more_info card, it does not replace it. How can it fully be replaced?
- binary_sensors are not preserved in HAs long term data storage ([only normal sensor](https://developers.home-assistant.io/docs/core/entity/sensor/#long-term-statistics)), so by [default only 10 days are stored](https://www.home-assistant.io/integrations/recorder/#purge_keep_days). That does not make for a useful calendar view. Perhaps one could create a template sensor that counts the number of `binary_sensor` activations. Those would then be stored in HA's long term storage.
