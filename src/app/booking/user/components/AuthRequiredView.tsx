'use client';

import { Page } from '@/components/Page';
import { Placeholder } from '@telegram-apps/telegram-ui';

export function AuthRequiredView() {
  return (
    <Page>
      <Placeholder
        header="Authentication Required"
        description="Please log in with Telegram to continue"
      />
    </Page>
  );
}