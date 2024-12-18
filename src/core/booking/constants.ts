export const TIME_SLOTS = {
    DEFAULT_INTERVAL: 30,
    DEFAULT_START_TIME: '09:00',
    DEFAULT_END_TIME: '18:00'
} as const;

export const BOOKING_STATUS_COLORS = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800'
} as const;