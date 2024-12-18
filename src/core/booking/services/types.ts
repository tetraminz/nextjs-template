export type BookingStatus = 'pending' | 'confirmed' | 'cancelled';

export interface BookingDocument {
    id?: string;
    businessId: string;
    userId: string;
    serviceId: string;
    date: Date;
    status: BookingStatus;
    createdAt: Date;
}