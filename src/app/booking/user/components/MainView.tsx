'use client';

import { useState } from 'react';
import { List } from '@telegram-apps/telegram-ui';
import { Page } from '@/components/Page';
import { TabNavigation } from './TabNavigation';
import { BusinessesSection } from './BusinessesSection';
import { BookingsSection } from './BookingsSection';
import type { Business } from '@/core/business/types';
import type { Booking } from '@/core/booking/types';

interface MainViewProps {
    businesses: Business[];
    userBookings: Booking[];
    userBookingsLoading: boolean;
    onBusinessClick: (businessId: string) => void;
}

export function MainView({
                             businesses,
                             userBookings,
                             userBookingsLoading,
                             onBusinessClick
                         }: MainViewProps) {
    const [activeTab, setActiveTab] = useState<'businesses' | 'bookings'>('businesses');

    return (
        <Page>
            <TabNavigation
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
            <List>
                {activeTab === 'businesses' ? (
                    <BusinessesSection
                        businesses={businesses}
                        onBusinessClick={onBusinessClick}
                    />
                ) : (
                    <BookingsSection
                        bookings={userBookings}
                        loading={userBookingsLoading}
                    />
                )}
            </List>
        </Page>
    );
}