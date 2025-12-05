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

### calculate()

Process input signal through slew rate limiter.

Args:
    input_signal (float): float Input signal value(s)

Returns:
    Rate-limited output signal

### lastValue()

Get the last output value of the limiter.

### reset()

Reset the limiter to a specific value.

