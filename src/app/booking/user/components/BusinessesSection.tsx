'use client';

import { Section } from '@telegram-apps/telegram-ui';
import { BusinessList } from '../../components/BusinessList';
import type { Business } from '@/core/business/types';

interface BusinessesSectionProps {
    businesses: Business[];
    onBusinessClick: (businessId: string) => void;
}

export function BusinessesSection({ businesses, onBusinessClick }: BusinessesSectionProps) {
    return (
        <Section header="Available Businesses">
            <BusinessList
                businesses={businesses}
                onBusinessClick={onBusinessClick}
                showBookButton={false}
            />
        </Section>
    );
}