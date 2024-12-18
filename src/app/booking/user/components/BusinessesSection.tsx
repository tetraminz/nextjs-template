'use client';

import { Section } from '@telegram-apps/telegram-ui';
import { BusinessCard } from '../../components/BusinessCard';
import type { Business } from '@/core/business/types';

interface BusinessesSectionProps {
    businesses: Business[];
    onBusinessSelect: (business: Business) => void;
}

export function BusinessesSection({ businesses, onBusinessSelect }: BusinessesSectionProps) {
    return (
        <Section header="Available Businesses">
            <div className="grid grid-cols-1 gap-4">
                {businesses.map((business) => (
                    <BusinessCard
                        key={business.id}
                        business={business}
                        onBook={() => onBusinessSelect(business)}
                    />
                ))}
            </div>
        </Section>
    );
}