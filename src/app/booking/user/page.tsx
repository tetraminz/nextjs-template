'use client';

import { useState } from 'react';
import { UserBookingPageContent } from './components/UserBookingPageContent';
import { BookingWizard } from '../components/BookingWizard';
import type { Business } from '@/core/business/types';

export default function UserBookingPage() {
    const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);

    if (selectedBusiness) {
        return (
            <BookingWizard
                business={selectedBusiness}
                onSubmit={async (data) => {
                    // Handle booking submission
                    setSelectedBusiness(null);
                }}
                onCancel={() => setSelectedBusiness(null)}
            />
        );
    }

    return <UserBookingPageContent onBusinessSelect={setSelectedBusiness} />;
}