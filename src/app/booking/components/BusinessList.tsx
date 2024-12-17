import { Cell } from '@telegram-apps/telegram-ui';
import type { Business } from "@/core/business/types";

interface BusinessListProps {
    businesses: Business[];
    onBusinessClick?: (businessId: string) => void;
    showBookButton?: boolean;
}

export function BusinessList({
                                 businesses,
                                 onBusinessClick,
                                 showBookButton = true
                             }: BusinessListProps) {
    if (!businesses?.length) {
        return <Cell>No businesses available at the moment</Cell>;
    }

    return (
        <>
            {businesses.map((business) => (
                <Cell
                    key={business.id}
                    subtitle={business.category}
                    onClick={() => business.id && onBusinessClick?.(business.id)}
                >
                    {business.name}
                </Cell>
            ))}
        </>
    );
}