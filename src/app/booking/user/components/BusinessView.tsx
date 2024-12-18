'use client';

import { List, Section } from '@telegram-apps/telegram-ui';
import { Page } from '@/components/Page';
import { BookingList } from '../../components/BookingList';
import { useBookings } from '@/core/firebase';

interface BusinessViewProps {
    businessId: string;
    onBack: () => void;
}

export function BusinessView({ businessId, onBack }: BusinessViewProps) {
    const { bookings, loading } = useBookings('business', businessId);

    return (
        <Page back={true} onBackClick={onBack}>
            <List>
                <Section header="Business Bookings">
                    <BookingList bookings={bookings} loading={loading} />
                </Section>
            </List>
        </Page>
    );
}