'use client';

import { Page } from '@/components/Page';
import { List, Section, Cell, Button, Input } from '@telegram-apps/telegram-ui';
import { useState } from 'react';
import { useSignal, initData } from '@telegram-apps/sdk-react';

export default function BusinessBookingPage() {
    const user = useSignal(initData.user);
    const [isRegistered, setIsRegistered] = useState(false);
    const [businessInfo, setBusinessInfo] = useState({
        name: '',
        category: '',
        description: '',
    });

    if (!user) {
        return (
            <Page>
                <div className="p-4">
                    <p className="text-center mb-4">Please log in to continue</p>
                    <Button>Login with Telegram</Button>
                </div>
            </Page>
        );
    }

    if (!isRegistered) {
        return (
            <Page>
                <List>
                    <Section header="Register Your Business">
                        <Cell>
                            <Input
                                type="text"
                                placeholder="Business Name"
                                value={businessInfo.name}
                                onChange={(e) => setBusinessInfo(prev => ({ ...prev, name: e.target.value }))}
                            />
                        </Cell>
                        <Cell>
                            <Input
                                type="text"
                                placeholder="Category"
                                value={businessInfo.category}
                                onChange={(e) => setBusinessInfo(prev => ({ ...prev, category: e.target.value }))}
                            />
                        </Cell>
                        <Cell>
                            <Input
                                type="text"
                                placeholder="Description"
                                value={businessInfo.description}
                                onChange={(e) => setBusinessInfo(prev => ({ ...prev, description: e.target.value }))}
                            />
                        </Cell>
                        <Cell>
                            <Button onClick={() => setIsRegistered(true)}>Register Business</Button>
                        </Cell>
                    </Section>
                </List>
            </Page>
        );
    }

    return (
        <Page>
            <List>
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