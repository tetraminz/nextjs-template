import { db } from '../../firebase/config';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import type { TelegramUser } from '../types';

export const UserService = {
  async saveUser(user: TelegramUser) {
    try {
      const q = query(
        collection(db, 'users'), 
        where('id', '==', user.id)
      );
      const snapshot = await getDocs(q);
      
      if (snapshot.empty) {
        await addDoc(collection(db, 'users'), {
          ...user,
          createdAt: new Date()
        });
      }
      
      return true;
    } catch (error) {
      console.error('Error saving user:', error);
      throw error;
    }
  }
};