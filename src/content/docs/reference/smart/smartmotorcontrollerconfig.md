---
title: SmartMotorControllerConfig
slug: reference/smart/smartmotorcontrollerconfig
---

# SmartMotorControllerConfig

Minimal config stub — expand with real fields from your config class.

## Methods

### getTelemetryName()



### getMotorControllerMode()



### getLinearClosedLoopControllerUse()



### getVelocityTrapezoidalProfileInUse()



### getClosedLoopControlPeriod()

Returns period in seconds, or None.

### getStatorStallCurrentLimit()



### getMechanismLowerLimit()

Rotations.

### getMechanismUpperLimit()

Rotations.

### getArmFeedforward()



### getElevatorFeedforward()



### getSimpleFeedforwardMeters()



### getTemperatureCutoff()

Celsius.

### getClosedLoopControllerMaximumVoltage()

Volts.

### getVerbosity()



### getSubsystem()



### getSmartControllerTelemetryConfig()



### convertFromMechanism()

Convert a mechanism value (rotations or RPS) to the measurement unit (meters or m/s).
Stub — implement with your gearing/circumference math.

