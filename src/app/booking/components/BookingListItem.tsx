'use client';

import { Cell } from '@telegram-apps/telegram-ui';
import { Booking } from '@/core/booking/types';
import { formatBookingDate } from '@/core/booking/utils/format';
import { BookingStatusBadge } from './BookingStatusBadge';

interface BookingListItemProps {
    booking: Booking;
}

export function BookingListItem({ booking }: BookingListItemProps) {
    const bookingId = booking.id?.slice(0, 8) || 'N/A';
    const formattedDate = formatBookingDate(booking.date);

    return (
        <Cell
            subtitle={`Date: ${formattedDate}`}
            after={<BookingStatusBadge status={booking.status} />}
        >
            Booking #{bookingId}
        </Cell>
    );
}