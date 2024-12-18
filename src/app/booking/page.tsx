'use client';

import { Section, Cell, List } from '@telegram-apps/telegram-ui';
import { Link } from '@/components/Link/Link';

export default function BookingPage() {
    return (
        <List>
            <Section
                header="Booking System"
                footer="Choose your role to proceed with the booking system"
            >
                <Link href="/booking/user">
                    <Cell subtitle="Book services from businesses">
                        I&apos;m a Customer
                    </Cell>
                </Link>
                <Link href="/booking/business">
                    <Cell subtitle="Manage your business bookings">
                        I&apos;m a Business
                    </Cell>
                </Link>
            </Section>
        </List>
    );
}