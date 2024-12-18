import { format } from 'date-fns';
import { Cell } from '@telegram-apps/telegram-ui';
import type { Booking } from '@/core/booking/types';
import { BookingStatusBadge } from '../BookingStatusBadge/BookingStatusBadge';

interface BookingCardProps {
  booking: Booking;
  onCancel?: () => void;
  onReschedule?: () => void;
}

export function BookingCard({ booking, onCancel, onReschedule }: BookingCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">Booking #{booking.id?.slice(0, 8)}</h3>
        <BookingStatusBadge status={booking.status} />
      </div>
      <div className="space-y-2 text-gray-600">
        <p>Date: {format(booking.date, 'PPp')}</p>
        {booking.status === 'pending' && (
          <div className="flex gap-2 mt-4">
            {onReschedule && (
              <button
                onClick={onReschedule}
                className="text-blue-500 hover:text-blue-600"
              >
                Reschedule
              </button>
            )}
            {onCancel && (
              <button
                onClick={onCancel}
                className="text-red-500 hover:text-red-600"
              >
                Cancel
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}