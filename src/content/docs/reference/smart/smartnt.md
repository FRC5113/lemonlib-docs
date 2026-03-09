---
title: SmartNT
slug: reference/smart/smartnt
---

# SmartNT

Lightweight NetworkTables wrapper for simple key-value publishing.

Entries are cached on first access so repeated puts/gets only pay
a single dict lookup — no string splitting, no sub-table traversal.

## Methods

### __init__()



### _get_entry()



### set_type()

Set the `.type` metadata entry so dashboards render the correct widget.

### put_number()



### put_boolean()



### put_string()



### put_string_array()



### get_number()



### get_boolean()



### get_string()



### put()



### get()



