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

(No documentation provided)

### add_periodic()

(No documentation provided)

### autonomousPeriodic()

Periodic code for autonomous mode should go here.
Runs when not enabled for trajectory display.

Users should override this method for code which will be called
periodically at a regular rate while the robot is in autonomous mode.

This code executes before the ``execute`` functions of all
components are called.

### autonomous()

(No documentation provided)

### enabledperiodic()

Periodic code for when the bot is enabled should go here.
Runs when not enabled for trajectory display.

Users should override this method for code which will be called

### _stop_notifiers()

(No documentation provided)

### _on_mode_disable_components()

(No documentation provided)

### _on_mode_enable_components()

(No documentation provided)

### on_enable()

(No documentation provided)

### _restart_periodics()

(No documentation provided)

### _enabled_periodic()

Run components and all periodic methods.

### _do_periodics()

(No documentation provided)

### get_period()

Get the period of the robot loop in seconds.

