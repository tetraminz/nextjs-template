'use client';

import { Page } from '@/components/Page';
import { List, Section, Placeholder } from '@telegram-apps/telegram-ui';
import { useState } from 'react';
import { useSignal, initData } from '@telegram-apps/sdk-react';
import { useAuth, useBusiness, BookingService } from '@/core/firebase';
import { BusinessList } from '../components/BusinessList';

export default function UserBookingPage() {
    const telegramUser = useSignal(initData.user);
    const { user, loading: authLoading } = useAuth();
    const { businesses, loading: businessLoading, error } = useBusiness();
    const [bookingInProgress, setBookingInProgress] = useState<string | null>(null);

    if (authLoading || businessLoading) {
        return (
            <Page>
                <Placeholder header="Loading" description="Please wait..." />
            </Page>
        );
    }

    if (error) {
        return (
            <Page>
                <Placeholder
                    header="Error"
                    description="Failed to load businesses. Please try again later."
                />
            </Page>
        );
    }

    const handleBooking = async (businessId: string) => {
        if (!telegramUser) return;

        try {
            setBookingInProgress(businessId);
            await BookingService.create({
                businessId,
                userId: telegramUser.id.toString(),
                serviceId: 'default',
                date: new Date()
            });
        } catch (error) {
            console.error('Booking error:', error);
        } finally {
            setBookingInProgress(null);
        }
    };

    return (
        <Page>
            <List>
                <Section header="Available Businesses">
                    <BusinessList
                        businesses={businesses}
                        onBooking={handleBooking}
                        bookingInProgress={bookingInProgress}
                    />
                </Section>
            </List>
        </Page>
    );
}