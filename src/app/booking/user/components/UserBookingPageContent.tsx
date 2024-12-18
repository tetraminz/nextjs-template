'use client';

import { useState } from 'react';
import { useSignal, initData } from '@telegram-apps/sdk-react';
import { useAuth, useBusiness, useBookings } from '@/core/firebase';
import { BusinessView } from './BusinessView';
import { MainView } from './MainView';
import { LoadingView } from './LoadingView';
import { AuthRequiredView } from './AuthRequiredView';
import { filterBusinesses, getUniqueCategories } from '@/core/business/utils/filters';
import type { BusinessFilters } from '../../components/BusinessFilter';
import type { Business } from '@/core/business/types';

interface UserBookingPageContentProps {
  onBusinessSelect: (business: Business) => void;
}

export function UserBookingPageContent({ onBusinessSelect }: UserBookingPageContentProps) {
  const telegramUser = useSignal(initData.user);
  const { user, loading: authLoading } = useAuth();
  const { businesses, loading: businessLoading } = useBusiness();
  const [selectedBusinessId, setSelectedBusinessId] = useState<string | null>(null);
  const [filters, setFilters] = useState<BusinessFilters>({
    search: '',
    category: ''
  });

  const { bookings: userBookings, loading: userBookingsLoading } = useBookings(
      'user',
      telegramUser?.id.toString() || ''
  );

  const filteredBusinesses = filterBusinesses(businesses, filters.search, filters.category);
  const categories = getUniqueCategories(businesses);

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
          businesses={filteredBusinesses}
          userBookings={userBookings}
          userBookingsLoading={userBookingsLoading}
          onBusinessSelect={onBusinessSelect}
          filters={filters}
          onFilterChange={setFilters}
          categories={categories}
      />
  );
}