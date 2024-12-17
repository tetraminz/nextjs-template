import { db } from '../../firebase/config';
import { 
  collection, 
  addDoc, 
  getDocs,
  query,
  where 
} from 'firebase/firestore';

export interface Booking {
  id?: string;
  businessId: string;
  userId: string;
  serviceId: string;
  date: Date;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
}

export const BookingService = {
  async create(booking: Omit<Booking, 'id' | 'createdAt' | 'status'>) {
    try {
      const docRef = await addDoc(collection(db, 'bookings'), {
        ...booking,
        status: 'pending',
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
      })) as Booking[];
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
      })) as Booking[];
    } catch (error) {
      console.error('Error getting business bookings:', error);
      throw error;
    }
  }
};