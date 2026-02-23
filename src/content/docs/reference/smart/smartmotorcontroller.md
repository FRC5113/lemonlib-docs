---
title: SmartMotorController
slug: reference/smart/smartmotorcontroller
---

# SmartMotorController

Python port of yams.motorcontrollers.SmartMotorController.

Unit conventions (all floats):
  - Angles / positions: rotations
  - Angular velocities: rps
  - Distances: m
  - Linear velocities: m/s
  - Voltage: V
  - Current: amps
  - Temperature: C
  - Time: s

## Methods

### create()

Instantiate the correct SmartMotorController subclass based on the
motor_controller object type. Returns None until subclasses are registered.

### is_motor()

Return True if both DCMotor specs describe the same motor type.

### check_config_safety()

Validate config for motor-specific safe current limits.
Raises SmartMotorControllerConfigurationException on violation.

### get_sim_supplier()



### set_sim_supplier()



### _get_trapezoidal_profile_state()

Current encoder state as a TrapezoidProfile.State.

### stop_closed_loop_controller()



### start_closed_loop_controller()



### iterate_closed_loop_controller()

Run one iteration of the closed-loop controller.
Called periodically by the Notifier thread.

All angles in rotations, velocities in rot/s (or meters / m/s when
linear mode is active).

### setup_simulation()

Configure simulation for this motor controller.

### seed_relative_encoder()

Seed the relative encoder from the absolute encoder position.

### synchronize_relative_encoder()

Re-sync the relative encoder if it has drifted from the absolute encoder.

### sim_iterate()

Advance the simulation by one timestep.

### set_idle_mode()

Set COAST or BRAKE idle mode (use MotorMode constants).

### set_encoder_velocity_angular()

Set encoder velocity (rotations/second).

### set_encoder_velocity_linear()

Set encoder velocity (meters/second).

### set_encoder_position_angular()

Set encoder position (rotations).

### set_encoder_position_linear()

Set encoder position (meters).

### set_position_angular()

Command the mechanism to an angle setpoint (rotations).

### set_position_linear()

Command the mechanism to a distance setpoint (meters).

### set_velocity_linear()

Command the mechanism to a linear velocity setpoint (m/s).

### set_velocity_angular()

Command the mechanism to an angular velocity setpoint (rot/s).

### apply_config()

Apply a SmartMotorControllerConfig. Returns True on success.

### get_duty_cycle()

Return duty cycle in [-1, 1].

### set_duty_cycle()

Set duty cycle output in [-1, 1].

### get_supply_current()

Supply current in amps, or None if unavailable.

### get_stator_current()

Stator current in amps.

### get_voltage()

Motor output voltage in volts.

### set_voltage()

Set motor output voltage in volts.

### get_dc_motor()

Return the DCMotor model for this motor controller.

### get_measurement_velocity()

Linear velocity of the mechanism in meters/second (post-gearing).

### get_measurement_position()

Linear position of the mechanism in meters (post-gearing).

### get_mechanism_velocity()

Angular velocity of the mechanism in rotations/second (post-gearing).

### get_mechanism_position()

Angular position of the mechanism in rotations (post-gearing).

### get_rotor_velocity()

Raw rotor angular velocity in rotations/second.

### get_rotor_position()

Raw rotor position in rotations (since power-on).

### set_motor_inverted()

Invert the motor output direction.

### set_encoder_inverted()

Invert the encoder phase.

### set_motion_profile_max_velocity_linear()

Max velocity for trapezoidal profile (m/s).

### set_motion_profile_max_acceleration_linear()

Max acceleration for trapezoidal profile (m/s²).

### set_motion_profile_max_velocity_angular()

Max velocity for trapezoidal profile (rot/s).

### set_motion_profile_max_acceleration_angular()

Max acceleration for trapezoidal profile (rot/s²).

### set_motion_profile_max_jerk()

Max jerk for the motion profile (rot/s³).

### set_kp()



### set_ki()



### set_kd()



### set_feedback()



### set_ks()



### set_kv()



### set_ka()



### set_kg()



### set_feedforward()



### set_stator_current_limit()



### set_supply_current_limit()



### set_closed_loop_ramp_rate()



### set_open_loop_ramp_rate()



### set_measurement_upper_limit()



### set_measurement_lower_limit()



### set_mechanism_upper_limit()



### set_mechanism_lower_limit()



### get_temperature()

Motor temperature in celsius.

### get_config()



### get_motor_controller()



### get_motor_controller_config()



### get_unsupported_telemetry_fields()



### setup_telemetry()

Setup NetworkTables telemetry.
If tables are not provided, defaults to /Mechanisms and /Tuning.

### update_telemetry()



### get_mechanism_position_setpoint()

Mechanism setpoint in rotations.

### get_mechanism_setpoint_velocity()

Mechanism velocity setpoint in rotations/second.

### get_name()



### close()



### __str__()



### __repr__()



