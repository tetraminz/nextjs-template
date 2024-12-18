'use client';

import { backButton } from '@telegram-apps/sdk-react';
import { PropsWithChildren, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface PageProps {
  /**
   * True if it is allowed to go back from this page.
   * @default true
   */
  back?: boolean;
  /**
   * Callback function to be called when back button is clicked
   */
  onBackClick?: () => void;
}

export function Page({
                       children,
                       back = true,
                       onBackClick
                     }: PropsWithChildren<PageProps>) {
  const router = useRouter();

  const handleBackClick = useCallback(() => {
    if (onBackClick) {
      onBackClick();
    } else {
      router.back();
    }
  }, [onBackClick, router]);

  useEffect(() => {
    if (back) {
      backButton.show();
    } else {
      backButton.hide();
    }
  }, [back]);

  useEffect(() => {
    return backButton.onClick(handleBackClick);
  }, [handleBackClick]);

  return <>{children}</>;
}