export interface BusinessDocument {
    id?: string;
    ownerId: string;
    name: string;
    category: string;
    description: string;
    createdAt: Date;
}