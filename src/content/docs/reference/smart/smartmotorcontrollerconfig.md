---
title: SmartMotorControllerConfig
slug: reference/smart/smartmotorcontrollerconfig
---

# SmartMotorControllerConfig

Python port of yams.motorcontrollers.SmartMotorControllerConfig.

All unit conventions (plain floats):
  - Angles / positions : rotations
  - Angular velocities : r/s
  - Angular accel      : r/s^2
  - Distances          : m
  - Linear velocities  : m/s
  - Linear accel       : m/s^2
  - Jerk               : m/s^3
  - Voltage            : V
  - Current            : amps
  - Temperature        : C
  - Time               : s
  - Mass               : kg
  - MOI                : kg*m^2

## Methods

### __init__()



### clone()

Return a deep copy of this config.

### with_vendor_config()

Set vendor-specific config as a base. SmartMotorControllerConfig options
always take precedence and will overwrite the vendor config.

### get_vendor_config()



### with_subsystem()



### get_subsystem()



### with_motor_inverted()



### get_motor_inverted()



### with_encoder_inverted()



### get_encoder_inverted()



### with_external_encoder_inverted()



### get_external_encoder_inverted()



### with_use_external_feedback_encoder()



### get_use_external_feedback()



### with_control_mode()



### get_motor_controller_mode()



### with_followers()

followers: variable number of (motor_object, inverted) pairs.
Motor objects must be the raw vendor type (not SmartMotorController).

### get_followers()



### clear_followers()



### with_loosely_coupled_followers()

followers: SmartMotorController instances (only position/velocity requests forwarded).

### get_loosely_coupled_followers()



### with_stator_current_limit()



### get_stator_stall_current_limit()



### with_supply_current_limit()



### get_supply_stall_current_limit()



### with_voltage_compensation()



### get_voltage_compensation()



### with_idle_mode()



### get_idle_mode()



### with_open_loop_ramp_rate()



### get_open_loop_ramp_rate()



### with_closed_loop_ramp_rate()



### get_closed_loop_ramp_rate()



### with_gearing()

gear: MechanismGearing instance OR a float reduction ratio
(e.g. 3.0 for a 3:1 gearbox).

### get_gearing()



### with_external_encoder_gearing()



### get_external_encoder_gearing()



### with_mechanism_circumference()



### with_wheel_radius()



### with_wheel_diameter()



### get_mechanism_circumference()



### with_linear_closed_loop_controller()



### get_linear_closed_loop_controller_use()



### with_velocity_trapezoidal_profile()



### get_velocity_trapezoidal_profile_in_use()



### with_closed_loop_control_period()

Period in seconds (or pass a frequency in Hz — use 1/hz).

### get_closed_loop_control_period()



### with_soft_limit_angle()

Angle-based soft limits in rotations.

### with_soft_limit_distance()

Distance-based soft limits in meters (requires mechanism circumference).

### get_mechanism_lower_limit()

Returns lower soft limit in rotations.

### get_mechanism_upper_limit()

Returns upper soft limit in rotations.

### with_moment_of_inertia()

moi: float (kg·m²), or pass (length_meters, mass_kg) as a tuple to estimate.
The double-arg form mirrors withMomentOfInertia(Distance, Mass).

### get_moi()

Moment of inertia in kg·m².

### with_continuous_wrapping()



### get_max_discontinuity_point()



### get_min_discontinuity_point()



### _check_discontinuity_bounds()



### with_closed_loop_tolerance_angle()



### with_closed_loop_tolerance_distance()



### get_closed_loop_tolerance()

Closed loop tolerance in rotations.

### with_temperature_cutoff()



### get_temperature_cutoff()



### with_external_encoder_zero_offset_angle()



### with_external_encoder_zero_offset_distance()



### get_zero_offset()

Zero offset in rotations.

### with_starting_position_angle()



### with_starting_position_distance()



### get_starting_position()

Starting position in rotations.

### with_closed_loop_controller_maximum_voltage()



### get_closed_loop_controller_maximum_voltage()



### with_feedback_synchronization_threshold()



### get_feedback_synchronization_threshold()



### with_telemetry()

Overloaded forms:
  with_telemetry(verbosity)                   -> name = "motor"
  with_telemetry(name, verbosity)             -> named telemetry
  with_telemetry(name, telemetry_config)      -> named + custom config

### get_telemetry_name()



### get_verbosity()



### get_smart_controller_telemetry_config()



### with_external_encoder()



### get_external_encoder()



### with_feedforward_arm()



### with_feedforward_elevator()



### with_feedforward_simple()



### get_arm_feedforward()



### get_elevator_feedforward()



### get_simple_feedforward()



### with_sim_feedforward_arm()



### with_sim_feedforward_elevator()



### with_sim_feedforward_simple()



### with_profile_trap_constraints()

Set a TrapezoidProfile.Constraints directly.
For linear controllers: max_vel in m/s, max_accel in m/s².
For rotational: max_vel in rot/s, max_accel in rot/s².

### with_trapezoidal_profile_linear()



### with_trapezoidal_profile_angular()



### with_trapezoidal_profile_angular_velocity()

Velocity-mode trapezoidal profile (angular).

### with_trapezoidal_profile_linear_velocity()

Velocity-mode trapezoidal profile (linear).

### with_exponential_profile_constraints()



### with_exponential_profile_arm()

Build ExponentialProfile.Constraints from arm system identification.
max_volts: volts; moi_kg_m2: kg·m²
Requires gearing to be set first.

### with_exponential_profile_elevator()

Build ExponentialProfile.Constraints for an elevator.
Requires gearing.

### with_exponential_profile_angular()



### get_exponential_profile()

Returns ExponentialProfile.Constraints or None.

### get_trapezoid_profile()

Returns TrapezoidProfile.Constraints or None.

### with_closed_loop_controller_pid()



### with_closed_loop_controller_pid_instance()



### with_closed_loop_controller_lqr()



### with_closed_loop_controller_linear()



### with_closed_loop_controller_angular()



### with_closed_loop_controller_angular_velocity()



### with_closed_loop_controller_linear_velocity()



### get_pid()



### with_sim_closed_loop_controller_pid()



### with_sim_closed_loop_controller_pid_instance()



### with_sim_closed_loop_controller_linear()



### with_sim_closed_loop_controller_angular()



### with_sim_closed_loop_controller_angular_velocity()



### with_sim_closed_loop_controller_linear_velocity()



### _require_circumference()



### convert_to_mechanism_from_distance()

meters -> rotations

### convert_from_mechanism_to_distance()

rotations -> meters

### convert_to_mechanism_from_linear_velocity()

m/s -> rot/s

### convert_from_mechanism_to_linear_velocity()

rot/s -> m/s

### convert_to_mechanism_from_linear_accel()

m/s² -> rot/s²

### convert_from_mechanism_to_linear_accel()

rot/s² -> m/s²

### convert_to_mechanism_from_jerk_linear()

m/s³ -> rot/s³

### convert_from_mechanism_to_jerk_linear()

rot/s³ -> m/s³

### convert_from_mechanism()

Generic conversion: rotations -> meters (or rot/s -> m/s, etc.).
The Java version is overloaded; Python callers should use the explicit helpers above
for clarity, but this alias works for position/velocity conversion.

### reset_validation_check()



### validate_basic_options()



### validate_external_encoder_options()



### __repr__()



