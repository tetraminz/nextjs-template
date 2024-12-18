import type { BookingDocument, BookingStatus } from './services/types';

export type { BookingStatus };
export type Booking = BookingDocument;

export interface BookingFormData {
    date: Date;
    time: string;
    service: string;
}