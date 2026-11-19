---
title: Frequently Asked Questions
---

## What operations generate an activity?

All operations performed from the Console or through its API: writes (creation, modification, deletion) as well as reads. Each activity shows, among other things, the initiator, the date, the operation type, the affected resources and the status. See [Activities](./concepts.md#activities).

## When does an activity move from "Recent" to "Archived"?

Once the operation has finished, whether it succeeded or failed, the activity moves to **Archived** between 24 and 30 hours after its creation. A longer operation stays in **Recent** while it is in progress, then moves to **Archived** within 6 hours after it ends.

## How long are archived activities retained?

558 days, or approximately 18 months, from the date they are archived. This goes beyond the 6-month minimum associated with the Console's SecNumCloud qualification.

## Are these durations the same for all tenants?

Yes. They are set by Cloud Temple at the platform level, identical for all tenants, and cannot be configured.

## How can I view or retrieve archived activities?

In the Console, from the **Logs** menu, **Archived** tab, with the `activity_read` permission. Through the API, with the `GET /activity/v1/activities/archive` route: see the [Console API](./api.md#activities).

## Do activities cover infrastructure events?

No. They track operations performed on the Console and its API, not events of the underlying infrastructure.
