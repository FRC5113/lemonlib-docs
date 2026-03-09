---
title: LemonCameraSim
slug: reference/simulation/lemoncamerasim
---

# LemonCameraSim

Simulated version of a LemonCamera. This class functions exactly
the same in code except for the following:
1. Must be initialized with an `AprilTagFieldLayout` and an FOV
2. Must be registered with a shared `LemonVisionSim` instance
3. `LemonVisionSim.update()` must be called once per tick to update
all cameras together with the robot pose

## Methods

### __init__()

Args:
field_layout (AprilTagFieldLayout): layout of the tags on the field, such as
    `AprilTagField.k2024Crescendo`
fov (float): horizontal range of vision (degrees)

