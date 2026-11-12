---
title: VisionUtils
slug: reference/vision/visionutils
---

# VisionUtils

## Methods

### __init__()



### compute_std_devs()

Compute standard deviations for a vision measurement.

### reject_measurement()

Return True if the measurement should be rejected.

### fuse_estimates()

Fuse multiple vision estimates using inverse-variance weighting.

Each estimate is (pose2d, timestamp, (std_x, std_y, std_rot)).
Returns fused (pose2d, timestamp, std_devs).

