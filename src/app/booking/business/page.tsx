'use client';

import { Page } from '@/components/Page';
import { List, Section, Placeholder, Cell } from '@telegram-apps/telegram-ui';
import { useState } from 'react';
import { useSignal, initData } from '@telegram-apps/sdk-react';
import { useAuth, useBusiness, BusinessService } from '@/core/firebase';
import { BusinessList } from '../components/BusinessList';
import { BusinessRegistrationForm } from '../components/BusinessRegistrationForm';

import {BusinessRegistrationData} from "@/core/business/types";

export default function BusinessBookingPage() {
    const telegramUser = useSignal(initData.user);
    const { user, loading: authLoading } = useAuth();
    const { businesses, loading: businessLoading } = useBusiness(telegramUser?.id.toString());
    const [isRegistering, setIsRegistering] = useState(false);

    if (authLoading || businessLoading) {
        return (
            <Page>
                <Placeholder header="Loading" description="Please wait..." />
            </Page>
        );
    }

    if (!telegramUser) {
        return (
            <Page>
                <Placeholder
                    header="Authentication Required"
                    description="Please log in with Telegram to continue"
                />
            </Page>
        );
    }

    const handleRegisterBusiness = async (data: BusinessRegistrationData) => {
        if (!telegramUser) return;

        try {
            setIsRegistering(true);
            await BusinessService.create({
                ownerId: telegramUser.id.toString(),
                ...data
            });
            window.location.reload();
        } catch (error) {
            console.error('Registration error:', error);
        } finally {
            setIsRegistering(false);
        }
    };

    if (businesses.length === 0) {
        return (
            <Page>
                <List>
                    <Section header="Register Your Business">
                        <BusinessRegistrationForm
                            onSubmit={handleRegisterBusiness}
                            isLoading={isRegistering}
                        />
                    </Section>
                </List>
            </Page>
        );
    }

    return (
        <Page>
            <List>
                <Section header="Your Businesses">
                    <BusinessList
                        businesses={businesses}
                        showBookButton={false}
                    />
                </Section>
                <Section header="Business Dashboard">
                    <Cell subtitle="View and manage appointments">
                        Appointments
                    </Cell>
                    <Cell subtitle="Set your working hours">
                        Working Hours
                    </Cell>
                    <Cell subtitle="Manage your services">
                        Services
                    </Cell>
                    <Cell subtitle="Update business information">
                        Settings
                    </Cell>
                </Section>
            </List>
        </Page>
    );
}