import { Cell, Image } from '@telegram-apps/telegram-ui';
import type { Business } from '@/core/business/types';

interface BusinessCardProps {
  business: Business;
  onBook: () => void;
}

export function BusinessCard({ business, onBook }: BusinessCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{business.name}</h3>
        <p className="text-gray-600 mb-2">{business.category}</p>
        <p className="text-sm text-gray-500">{business.description}</p>
        <button
          onClick={onBook}
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}