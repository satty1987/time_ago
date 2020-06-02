function format(diff: number, divisor: number, unit: string, past: string, future: string, isInTheFuture: boolean) {
    var val = Math.round(Math.abs(diff) / divisor);
    if (isInTheFuture) return val <= 1 ? future : 'in ' + val + ' ' + unit + 's';
    return val <= 1 ? past : val + ' ' + unit + 's ago';
}

const units = [
    { max: 2760000, value: 60000, name: 'minute', past: 'a minute ago', future: 'in a minute' }, // max: 46 minutes
    { max: 72000000, value: 3600000, name: 'hour', past: 'an hour ago', future: 'in an hour' }, // max: 20 hours
    { max: 518400000, value: 86400000, name: 'day', past: 'yesterday', future: 'tomorrow' }, // max: 6 days
    { max: 2419200000, value: 604800000, name: 'week', past: 'last week', future: 'in a week' }, // max: 28 days
    { max: 28512000000, value: 2592000000, name: 'month', past: 'last month', future: 'in a month' } // max: 11 months
];

export function timeAgo(date: Date): string {
    const diff = Date.now() - date.getTime();

    if (Math.abs(diff) < 60000) return 'just now';

    for (var i = 0; i < units.length; i++) {
        if (Math.abs(diff) < units[i].max) {
            return format(diff, units[i].value, units[i].name, units[i].past, units[i].future, diff < 0);
        }
    }
    return format(diff, 31536000000, 'year', 'last year', 'in a year', diff < 0);
};

