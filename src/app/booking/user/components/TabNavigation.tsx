'use client';

import { TabsList } from '@telegram-apps/telegram-ui';

interface TabNavigationProps {
    activeTab: 'businesses' | 'bookings';
    onTabChange: (tab: 'businesses' | 'bookings') => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
    return (
        <TabsList>
            <TabsList.Item
                selected={activeTab === 'businesses'}
                onClick={() => onTabChange('businesses')}
            >
                Businesses
            </TabsList.Item>
            <TabsList.Item
                selected={activeTab === 'bookings'}
                onClick={() => onTabChange('bookings')}
            >
                My Bookings
            </TabsList.Item>
        </TabsList>
    );
}