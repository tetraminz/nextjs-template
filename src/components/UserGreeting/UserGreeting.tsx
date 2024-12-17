import { type FC } from 'react';
import type { UserGreeting as UserGreetingType } from '@/core/user/types';

interface UserGreetingProps {
    user: UserGreetingType;
}

export const UserGreeting: FC<UserGreetingProps> = ({ user }) => (
    <div className="p-4 bg-blue-50 mb-4 rounded-lg">
        <h2 className="text-xl font-semibold text-blue-800">
            Привет, {user.firstName} {user.lastName}!
        </h2>
    </div>
);