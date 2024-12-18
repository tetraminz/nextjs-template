import type { BusinessDocument } from './services/types';

export type Business = BusinessDocument;

export type BusinessRegistrationData = Pick<Business, 'name' | 'category' | 'description'>;