import { useState } from 'react';
import { BusinessService } from '../services/business.service';
import type { Business, BusinessRegistrationData } from '../types';

export function useBusinessActions() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const registerBusiness = async (data: BusinessRegistrationData, ownerId: string) => {
    setLoading(true);
    try {
      const businessId = await BusinessService.create({
        ...data,
        ownerId
      });
      return businessId;
    } catch (err) {
      setError(err as Error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateBusiness = async (businessId: string, data: Partial<Business>) => {
    setLoading(true);
    try {
      await BusinessService.update(businessId, data);
      return true;
    } catch (err) {
      setError(err as Error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    registerBusiness,
    updateBusiness,
    loading,
    error
  };
}