import { Cell, Placeholder } from '@telegram-apps/telegram-ui';
import { Booking } from '@/core/booking/types';
import { formatBookingDate } from '@/core/booking/utils/format';
import { BookingStatusBadge } from './BookingStatusBadge';
import { BookingListItem } from './BookingListItem';

interface BookingListProps {
    bookings: Booking[];
    loading?: boolean;
}

export function BookingList({ bookings, loading }: BookingListProps) {
    if (loading) {
        return <Placeholder header="Loading" description="Fetching bookings..." />;
    }

    if (!bookings?.length) {
        return <Cell>No bookings found</Cell>;
    }

    return (
        <>
            {bookings.map((booking) => (
                <BookingListItem key={booking.id} booking={booking} />
            ))}
        </>
    );
}