import type { BusinessRegistrationData } from '@/core/business/types';

export interface BusinessRegistrationFormProps {
  onSubmit: (data: BusinessRegistrationData) => Promise<void>;
  isLoading: boolean;
}