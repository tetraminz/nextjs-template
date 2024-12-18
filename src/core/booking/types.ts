export type BookingStatus = 'pending' | 'confirmed' | 'cancelled';

export interface Booking {
    id?: string;
    businessId: string;
    userId: string;
    serviceId: string;
    date: Date;
    status: BookingStatus;
    createdAt: Date;
}

export interface BookingFormData {
    date: Date;
    time: string;
    service: string;
}