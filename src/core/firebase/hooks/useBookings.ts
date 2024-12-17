import { useState, useEffect } from 'react';
import { BookingService, type Booking } from '../../booking/services/booking.service';

export function useBookings(type: 'user' | 'business', id: string) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadBookings() {
      try {
        const data = type === 'user' 
          ? await BookingService.getByUser(id)
          : await BookingService.getByBusiness(id);
        setBookings(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    loadBookings();
  }, [type, id]);

  return { bookings, loading, error };
}