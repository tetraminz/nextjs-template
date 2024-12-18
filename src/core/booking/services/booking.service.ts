import { db } from '../../firebase/config';
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  doc
} from 'firebase/firestore';
import type { BookingDocument, BookingStatus } from './types';

export const BookingService = {
  async create(booking: Omit<BookingDocument, 'id' | 'createdAt' | 'status'>) {
    try {
      const docRef = await addDoc(collection(db, 'bookings'), {
        ...booking,
        status: 'pending' as BookingStatus,
        createdAt: new Date()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating booking:', error);
      throw error;
    }
  },

  async getByUser(userId: string) {
    try {
      const q = query(
          collection(db, 'bookings'),
          where('userId', '==', userId)
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BookingDocument[];
    } catch (error) {
      console.error('Error getting user bookings:', error);
      throw error;
    }
  },

  async getByBusiness(businessId: string) {
    try {
      const q = query(
          collection(db, 'bookings'),
          where('businessId', '==', businessId)
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BookingDocument[];
    } catch (error) {
      console.error('Error getting business bookings:', error);
      throw error;
    }
  },

  async updateStatus(bookingId: string, status: BookingStatus) {
    try {
      const bookingRef = doc(db, 'bookings', bookingId);
      await updateDoc(bookingRef, { status });
      return true;
    } catch (error) {
      console.error('Error updating booking status:', error);
      throw error;
    }
  },

  async updateDate(bookingId: string, date: Date) {
    try {
      const bookingRef = doc(db, 'bookings', bookingId);
      await updateDoc(bookingRef, { date });
      return true;
    } catch (error) {
      console.error('Error updating booking date:', error);
      throw error;
    }
  }
};