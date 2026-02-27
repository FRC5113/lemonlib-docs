---
title: AsymmetricSlewLimiter
slug: reference/util/asymmetricslewlimiter
---

# AsymmetricSlewLimiter

slew rate limiter with separate rising and falling rates.

## Methods

### __init__()

Args:
    rising_rate (float): Maximum rate of change when signal is increasing (units/sample)
    falling_rate (float): Maximum rate of change when signal is decreasing (units/sample)
    initial_value (float, optional): Starting value of the limiter (default: 0.

### get_time_seconds()

Get the time in seconds

### calculate()

Process input signal through slew rate limiter.

Uses rising_rate when the magnitude of the signal is increasing
(accelerating) and falling_rate when it is decreasing (decelerating),
so that the limiter behaves correctly for both positive and negative
velocity commands.

Args:
    input_signal (float): Input signal value

Returns:
    Rate-limited output signal

### lastValue()

Get the last output value of the limiter.

### reset()

Reset the limiter to a specific value.

