export interface TelegramUser {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  createdAt?: Date;
}

export interface UserGreeting {
  firstName: string;
  lastName?: string;
}