import { useState } from 'react';
import { Input, Select } from '@telegram-apps/telegram-ui';

interface BusinessFilterProps {
  categories: string[];
  onFilterChange: (filters: BusinessFilters) => void;
}

interface BusinessFilters {
  search: string;
  category: string;
}

export function BusinessFilter({ categories, onFilterChange }: BusinessFilterProps) {
  const [filters, setFilters] = useState<BusinessFilters>({
    search: '',
    category: ''
  });

  const handleChange = (key: keyof BusinessFilters, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="space-y-4 mb-6">
      <Input
        type="search"
        placeholder="Search businesses..."
        value={filters.search}
        onChange={(e) => handleChange('search', e.target.value)}
      />
      <Select
        value={filters.category}
        onChange={(e) => handleChange('category', e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
    </div>
  );
}