'use client';

import { useState } from 'react';
import { useSignal, initData } from '@telegram-apps/sdk-react';
import { useAuth, useBusiness, useBookings } from '@/core/firebase';
import { BusinessView } from './BusinessView';
import { MainView } from './MainView';
import { LoadingView } from './LoadingView';
import { AuthRequiredView } from './AuthRequiredView';

export function UserBookingPageContent() {
  const telegramUser = useSignal(initData.user);
  const { user, loading: authLoading } = useAuth();
  const { businesses, loading: businessLoading } = useBusiness();
  const [selectedBusinessId, setSelectedBusinessId] = useState<string | null>(null);

  const { bookings: userBookings, loading: userBookingsLoading } = useBookings(
    'user',
    telegramUser?.id.toString() || ''
  );

  if (authLoading || businessLoading) {
    return <LoadingView />;
  }

  if (!telegramUser) {
    return <AuthRequiredView />;
  }

  if (selectedBusinessId) {
    return (
      <BusinessView 
        businessId={selectedBusinessId} 
        onBack={() => setSelectedBusinessId(null)} 
      />
    );
  }

  return (
    <MainView
      businesses={businesses}
      userBookings={userBookings}
      userBookingsLoading={userBookingsLoading}
      onBusinessClick={setSelectedBusinessId}
    />
  );
}