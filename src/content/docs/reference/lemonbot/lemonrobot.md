---
title: LemonRobot
slug: reference/lemonbot/lemonrobot
---

# LemonRobot

Wrapper for the magicbot robot class to allow for command-based
functionality. This class is used to create a robot that can be
controlled using commands, while still using the magicbot framework.

## Methods

### __init__()



### add_periodic()



### _run_periodics()



### autonomousPeriodic()



### autonomous()



### enabledperiodic()



### _on_mode_enable_components()



### on_enable()



### robotPeriodic()

Periodic code for all modes should go here.

Users must override this method to utilize it
but it is not required.

This function gets called last in each mode.
You may use it for any code you need to run
during all modes of the robot (e.g NetworkTables updates)

The default implementation will update
SmartDashboard and LiveWindow

### _enabled_periodic()



### _do_periodics()



### get_period()

Get the period of the robot loop in seconds.

