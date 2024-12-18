import type { Business } from '../types';

export function filterBusinesses(businesses: Business[], search: string, category: string): Business[] {
    return businesses.filter(business => {
        const matchesSearch = business.name.toLowerCase().includes(search.toLowerCase()) ||
            business.description.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = !category || business.category === category;
        return matchesSearch && matchesCategory;
    });
}

export function getUniqueCategories(businesses: Business[]): string[] {
    const categories = businesses.map(b => b.category);
    return Array.from(new Set(categories));
}