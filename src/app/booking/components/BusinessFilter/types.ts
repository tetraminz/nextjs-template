export interface BusinessFilters {
  search: string;
  category: string;
}

export interface BusinessFilterProps {
  categories: string[];
  onFilterChange: (filters: BusinessFilters) => void;
}