'use client';

import { Page } from '@/components/Page';
import { List, Section, Cell, Placeholder } from '@telegram-apps/telegram-ui';
import { Link } from '@/components/Link/Link';
import { useAuth } from '@/core/firebase';
import { useSignal, initData } from '@telegram-apps/sdk-react';

export default function BookingPage() {
    const user = useSignal(initData.user);
    const { loading } = useAuth();

    if (loading) {
        return (
            <Page>
                <Placeholder header="Loading" description="Please wait..." />
            </Page>
        );
    }

    return (
        <Page>
            <List>
                <Section
                    header="Booking System"
                    footer="Choose your role to proceed with the booking system"
                >
                    <Link href="/booking/user">
                        <Cell subtitle="Book services from businesses">
                            I'm a Customer
                        </Cell>
                    </Link>
                    <Link href="/booking/business">
                        <Cell subtitle="Manage your business bookings">
                            I'm a Business
                        </Cell>
                    </Link>
                </Section>
            </List>
        </Page>
    );
}