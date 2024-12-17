export interface Booking {
    id?: string;
    businessId: string;
    userId: string;
    serviceId: string;
    date: Date;
    status: 'pending' | 'confirmed' | 'cancelled';
    createdAt: Date;
}