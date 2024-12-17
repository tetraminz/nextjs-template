'use client';

import { Page } from '@/components/Page';
import { Placeholder } from '@telegram-apps/telegram-ui';

export function LoadingView() {
  return (
    <Page>
      <Placeholder header="Loading" description="Please wait..." />
    </Page>
  );
}