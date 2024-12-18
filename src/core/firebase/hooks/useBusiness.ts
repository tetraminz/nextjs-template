import { useState, useEffect } from 'react';
import { BusinessService } from '../../business/services/business.service';
import type { Business } from '../../business/types';

export function useBusiness(ownerId?: string) {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadBusinesses() {
      try {
        if (ownerId) {
          const data = await BusinessService.getByOwner(ownerId);
          setBusinesses(data);
        } else {
          const data = await BusinessService.getAll();
          setBusinesses(data);
        }
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    loadBusinesses();
  }, [ownerId]);

  return { businesses, loading, error };
}