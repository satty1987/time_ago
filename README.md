# Time Ago

This is the smallest, fully unit tested module to convert Date objects into human readable relative timestamps, such as `'4 minutes ago'`, `'yesterday'`, `'tomorrow'`, or `'in 3 months'`.

## Usage
```
import { timeAgo } from "https://deno.land/x/timeAgo/mod.ts";

const now = new Date();
const yesterday = new Date(now.getTime() - (24 * 60 * 60 * 1000));
const hoursAgo = new Date(now.getTime() - (6 * 60 * 60 * 1000));
const yesterday = new Date(now.getTime() - (24 * 60 * 60 * 1000));
const tomorrow = new Date(now.getTime() + (6 * 60 * 60 * 1000));
const inSixHours = new Date(now.getTime() + (6 * 60 * 60 * 1000));

// present
timeAgo(now); // 'just now'

// past
timeAgo(yesterday); // 'yesterday'
timeAgo(hoursAgo); // '6 hours ago'

// future
timeAgo(inSixHours); // 'in 6 hours'
timeAgo(tomorrow); // 'tomorrow'
```

Output is as follows:

Time | Output | Future output
--- | --- | ---
Less than 1 minute | `just now` | `just now`
1-2 minutes | `a minute ago` | `in a minute`
2-46 minutes | `# minutes ago` | `in # minutes`
46 minutes - 2 hours | `an hour ago` | `in an hour`
2-20 hours | `# hours ago` | `in # hours`
20-48 hours | `yesterday` | `tomorrow`
2-6 days | `last week` | `in a week`
7-28 days | `# weeks ago` | `in # weeks`
28 days - 2 months | `last month` | `in a month`
2-11 months | `# months ago` | `in # months`
11-23 months | `last year` | `in a year`
2+ years | `# years ago` | `in # years`