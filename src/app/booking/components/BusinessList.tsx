'use client';

import { Cell, Button } from '@telegram-apps/telegram-ui';

import {Business} from "@/core/business/types";

interface BusinessListProps {
  businesses: Business[];
  onBooking?: (businessId: string) => void;
  bookingInProgress?: string | null;
  showBookButton?: boolean;
}

export function BusinessList({ 
  businesses, 
  onBooking, 
  bookingInProgress,
  showBookButton = true 
}: BusinessListProps) {
  if (businesses.length === 0) {
    return <Cell>No businesses available at the moment</Cell>;
  }

  return (
    <>
      {businesses.map((business) => (
        <Cell
          key={business.id}
          subtitle={business.category}
          after={showBookButton && onBooking && (
            <Button 
              size="m"
              loading={bookingInProgress === business.id}
              onClick={() => business.id && onBooking(business.id)}
            >
              Book Now
            </Button>
          )}
        >
          {business.name}
        </Cell>
      ))}
    </>
  );
}