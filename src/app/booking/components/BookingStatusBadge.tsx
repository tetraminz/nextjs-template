'use client';

import { classNames } from '@telegram-apps/sdk-react';

interface BookingStatusBadgeProps {
    status: 'pending' | 'confirmed' | 'cancelled';
    className?: string;
}

export function BookingStatusBadge({ status, className }: BookingStatusBadgeProps) {
    return (
        <span className={classNames(`status-${status}`, className)}>
    {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
);
}