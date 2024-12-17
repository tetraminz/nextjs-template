export interface Business {
    id?: string;
    ownerId: string;
    name: string;
    category: string;
    description: string;
    createdAt: Date;
}

export type BusinessRegistrationData = Pick<Business, 'name' | 'category' | 'description'>;