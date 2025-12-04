---
title: OneWaySlewRateLimiter
slug: reference/util/onewayslewratelimiter
---

# OneWaySlewRateLimiter

A one-direction slew-rate limiter that only limits the rate of decrease.
Increases are applied immediately without any limiting.

This mirrors the API style of wpimath.filter.SlewRateLimiter but with
the following behavioral differences:
    - Only negative direction (falling) is limited.
    - Positive direction (rising) is unlimited.

Suitable for controlling values where overshoot on the positive side
is acceptable, but large negative steps must be smoothed.

## Methods

### __init__()

Creates a new OneWaySlewRateLimiter where only the negative rate limit
is used. The provided rateLimit must be positive, and internally the
negative rate limit becomes -rateLimit.

:param rateLimit: Positive rate limit magnitude.

### calculate()

Filters the input value, limiting only the negative (falling)
slew rate. Positive changes are applied immediately.

:param input: Input value.
:param dt:    Time step in seconds.

:returns: The filtered value.

### lastValue()

Returns the last output value produced by calculate().

:returns: The last value.

### reset()

Resets the limiter's output to the given value. No rate limiting
is applied during a reset.

:param value: New stored value.

