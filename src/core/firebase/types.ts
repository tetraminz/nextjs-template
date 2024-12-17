export interface Business {
    id?: string;
    ownerId: string;
    name: string;
    category: string;
    description: string;
    createdAt: Date;
}

export interface Booking {
    id?: string;
    businessId: string;
    userId: string;
    serviceId: string;
    date: Date;
    status: 'pending' | 'confirmed' | 'cancelled';
    createdAt: Date;
}

export type BusinessRegistrationData = Pick<Business, 'name' | 'category' | 'description'>;