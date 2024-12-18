import { useState } from 'react';
import { BookingService } from '../services/booking.service';
import type { Booking } from '../types';

export function useBookingActions() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const cancelBooking = async (bookingId: string) => {
    setLoading(true);
    try {
      await BookingService.updateStatus(bookingId, 'cancelled');
      return true;
    } catch (err) {
      setError(err as Error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const rescheduleBooking = async (bookingId: string, newDate: Date) => {
    setLoading(true);
    try {
      await BookingService.updateDate(bookingId, newDate);
      return true;
    } catch (err) {
      setError(err as Error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    cancelBooking,
    rescheduleBooking,
    loading,
    error
  };
}