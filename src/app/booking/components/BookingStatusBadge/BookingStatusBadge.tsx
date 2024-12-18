import type { BookingStatus } from '@/core/booking/types';

interface BookingStatusBadgeProps {
  status: BookingStatus;
}

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  confirmed: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800'
};

export function BookingStatusBadge({ status }: BookingStatusBadgeProps) {
  return (
    <span className={`px-2 py-1 rounded-full text-sm ${statusColors[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}