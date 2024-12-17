'use client';

import { Page } from '@/components/Page';
import { List, Section, Cell, Button } from '@telegram-apps/telegram-ui';
import { useState } from 'react';
import { useSignal, initData } from '@telegram-apps/sdk-react';

export default function UserBookingPage() {
    const user = useSignal(initData.user);
    const [businesses] = useState([
        { id: 1, name: 'Beauty Salon', category: 'Beauty' },
        { id: 2, name: 'Dental Clinic', category: 'Healthcare' },
        { id: 3, name: 'Fitness Center', category: 'Sports' },
    ]);

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

    return (
        <Page>
            <List>
                <Section header="Available Businesses">
                    {businesses.map((business) => (
                        <Cell
                            key={business.id}
                            subtitle={business.category}
                            after={<Button size="m">Book Now</Button>}
                        >
                            {business.name}
                        </Cell>
                    ))}
                </Section>
            </List>
        </Page>
    );
}