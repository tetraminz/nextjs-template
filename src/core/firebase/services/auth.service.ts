import { auth } from '../config';
import { signInWithCustomToken } from 'firebase/auth';
import type { User } from '@telegram-apps/sdk-react';

export const AuthService = {
  async signInWithTelegram(telegramUser: User) {
    try {
      // Here you would typically make a call to your backend to generate a custom token
      // const token = await fetch('/api/auth/telegram', {
      //   method: 'POST',
      //   body: JSON.stringify({ telegramUser })
      // }).then(res => res.json());
      
      // For now, we'll just console log the user
      console.log('Telegram user:', telegramUser);
      
      // Then sign in with the token
      // await signInWithCustomToken(auth, token);
      
      return true;
    } catch (error) {
      console.error('Error signing in with Telegram:', error);
      return false;
    }
  },

  async signOut() {
    try {
      await auth.signOut();
      return true;
    } catch (error) {
      console.error('Error signing out:', error);
      return false;
    }
  }
};