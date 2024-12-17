import { db } from '../config';
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc,
  query,
  where
} from 'firebase/firestore';

export interface Business {
  id?: string;
  ownerId: string;
  name: string;
  category: string;
  description: string;
  createdAt: Date;
}

export const BusinessService = {
  async create(business: Omit<Business, 'id' | 'createdAt'>) {
    try {
      const docRef = await addDoc(collection(db, 'businesses'), {
        ...business,
        createdAt: new Date()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating business:', error);
      throw error;
    }
  },

  async getByOwner(ownerId: string) {
    try {
      const q = query(
        collection(db, 'businesses'), 
        where('ownerId', '==', ownerId)
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Business[];
    } catch (error) {
      console.error('Error getting businesses:', error);
      throw error;
    }
  },

  async getAll() {
    try {
      const snapshot = await getDocs(collection(db, 'businesses'));
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Business[];
    } catch (error) {
      console.error('Error getting all businesses:', error);
      throw error;
    }
  },

  async update(id: string, data: Partial<Business>) {
    try {
      const docRef = doc(db, 'businesses', id);
      await updateDoc(docRef, data);
      return true;
    } catch (error) {
      console.error('Error updating business:', error);
      throw error;
    }
  }
};