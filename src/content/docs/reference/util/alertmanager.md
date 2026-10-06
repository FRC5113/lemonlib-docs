---
title: AlertManager
slug: reference/util/alertmanager
---

# AlertManager

Manages a collection of alerts and integrates with the SmartDashboard.

## Methods

### __init__()

Initialize the AlertManager.

Args:
    logger (Logger): Logger instance for logging alert messages.
    enabled (bool): Whether to publish alerts to dashboard.

### initSendable()



### get_strings()

Retrieve active alerts of a specified type as strings.

Args:
    type (AlertType): The type of alerts to retrieve.

Returns:
    List[str]: List of alert messages.

### instant_alert()

Create and immediately enable a new alert.

Args:
    text (str): The alert message.
    type (AlertType): The severity level of the alert.
    timeout (float): The timeout in seconds for the alert.

