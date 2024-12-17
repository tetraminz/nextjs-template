import { format, isValid } from 'date-fns';

export function formatBookingDate(date: Date | string | number): string {
    try {
        const bookingDate = date instanceof Date ? date : new Date(date);

        if (!isValid(bookingDate)) {
            return 'Invalid date';
        }

        return format(bookingDate, 'PPp');
    } catch (error) {
        console.error('Error formatting date:', error);
        return 'Invalid date';
    }
}