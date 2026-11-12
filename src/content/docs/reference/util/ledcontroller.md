---
title: LEDController
slug: reference/util/ledcontroller
---

# LEDController

## Methods

### __init__()

Initializes the LED controller.

:param pwm_port: The PWM port the LED strip is connected to.
:param length: Number of LEDs in the strip.

### _reset_move_cache()



### _clear_all()



### apply_pattern()

Applies a wpilib.LEDPattern to the LED buffer and updates the strip.

### _write_data()



### set_solid_color()

Sets the entire LED strip to a solid color.

### set_pixel()

Sets the color of a single LED pixel.

### set_gradient()

Custom preset that Sets a gradient from start_color to end_color across the LED strip.

### static_rainbow()

Custom preset that Creates a rainbow effect across the LED strip.

The offset parameter (in degrees) can be used to animate the rainbow.

### scolling_rainbow()

Custom preset that Creates a rainbow effect across the LED strip.

The offset parameter (in degrees) can be used to animate the rainbow.

### move_across()

Moves a block of LEDs across the strip using RobotController.getTime() for timing.

### move_across_multi()

Moves a fixed-size multicolor block across the strip using RobotController.getTime() for timing.

### blink()

Blinks the entire strip between two colors at the given frequency.

:param color1: The first RGB color.
:param color2: The second RGB color. Defaults to off (0, 0, 0).
:param hertz: Blink frequency in Hz (full cycles per second). Default is 2 Hz.

### clear()

Turns off all LEDs.

