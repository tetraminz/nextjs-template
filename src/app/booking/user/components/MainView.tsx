'use client';

import { useState } from 'react';
import { List } from '@telegram-apps/telegram-ui';
import { Page } from '@/components/Page';
import { TabNavigation } from './TabNavigation';
import { BusinessesSection } from './BusinessesSection';
import { BookingsSection } from './BookingsSection';
import { BusinessFilter } from '../../components/BusinessFilter';
import type { Business } from '@/core/business/types';
import type { Booking } from '@/core/booking/types';
import type { BusinessFilters } from '../../components/BusinessFilter';

interface MainViewProps {
    businesses: Business[];
    userBookings: Booking[];
    userBookingsLoading: boolean;
    onBusinessSelect: (business: Business) => void;
    filters: BusinessFilters;
    onFilterChange: (filters: BusinessFilters) => void;
    categories: string[];
}

export function MainView({
                             businesses,
                             userBookings,
                             userBookingsLoading,
                             onBusinessSelect,
                             filters,
                             onFilterChange,
                             categories
                         }: MainViewProps) {
    const [activeTab, setActiveTab] = useState<'businesses' | 'bookings'>('businesses');

    return (
        <Page>
            <TabNavigation
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
            <List>
                {activeTab === 'businesses' && (
                    <>
                        <BusinessFilter
                            categories={categories}
                            onFilterChange={onFilterChange}
                        />
                        <BusinessesSection
                            businesses={businesses}
                            onBusinessSelect={onBusinessSelect}
                        />
                    </>
                )}
                {activeTab === 'bookings' && (
                    <BookingsSection
                        bookings={userBookings}
                        loading={userBookingsLoading}
                    />
                )}
            </List>
        </Page>
    );
}