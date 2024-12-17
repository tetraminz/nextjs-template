'use client';

import { Page } from '@/components/Page';
import { List, Section, Cell, Placeholder } from '@telegram-apps/telegram-ui';
import { Link } from '@/components/Link/Link';
import { useAuth } from '@/core/firebase';
import { useSignal, initData } from '@telegram-apps/sdk-react';
import { UserGreeting } from '@/components/UserGreeting/UserGreeting';
import { useEffect } from 'react';
import { UserService } from '@/core/user/services/user.service';

export default function BookingPage() {
    const user = useSignal(initData.user);
    const { loading } = useAuth();

    // Save user data when they access booking system
    useEffect(() => {
        if (user) {
            UserService.saveUser({
                id: user.id.toString(),
                firstName: user.firstName,
                lastName: user.lastName || '',
                username: user.username || ''
            }).catch(console.error);
        }
    }, [user]);

    if (loading) {
        return (
            <Page>
                <Placeholder header="Loading" description="Please wait..." />
            </Page>
        );
    }

    return (
        <Page>
            {user && (
                <UserGreeting
                    user={{
                        firstName: user.firstName,
                        lastName: user.lastName
                    }}
                />
            )}
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