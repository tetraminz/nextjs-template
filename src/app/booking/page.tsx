'use client';

import { Page } from '@/components/Page';
import { List, Section, Cell } from '@telegram-apps/telegram-ui';
import { Link } from '@/components/Link/Link';

export default function BookingPage() {
    return (
        <Page>
            <List>
                <Section header="Booking System">
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