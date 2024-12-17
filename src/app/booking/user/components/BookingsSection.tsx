'use client';

import { Section } from '@telegram-apps/telegram-ui';
import { BookingList } from '../../components/BookingList';
import type { Booking } from '@/core/booking/types';

interface BookingsSectionProps {
  bookings: Booking[];
  loading: boolean;
}

export function BookingsSection({ bookings, loading }: BookingsSectionProps) {
  return (
    <Section header="Your Bookings">
      <BookingList 
        bookings={bookings} 
        loading={loading} 
      />
    </Section>
  );
}