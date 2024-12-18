'use client';

import { Section, Cell, List } from '@telegram-apps/telegram-ui';
import Image from 'next/image';
import { Link } from '@/components/Link/Link';
import { useTranslations } from 'next-intl';
import { LocaleSwitcher } from '@/components/LocaleSwitcher/LocaleSwitcher';
import { Page } from '@/components/Page';
import tonSvg from './_assets/ton.svg';

export default function Home() {
  const t = useTranslations('i18n');

  return (
      <Page back={false}>
        <List>
          <Section
              header="Booking System"
              footer="Book services or manage your business"
          >
            <Link href="/booking">
              <Cell subtitle="Access the booking system">
                Booking System
              </Cell>
            </Link>
          </Section>
          <Section
              header="Features"
              footer="You can use these pages to learn more about features"
          >
            <Link href="/ton-connect">
              <Cell
                  before={
                    <Image
                        src={tonSvg}
                        alt="TON logo"
                        style={{ backgroundColor: '#007AFF' }}
                    />
                  }
                  subtitle="Connect your TON wallet"
              >
                TON Connect
              </Cell>
            </Link>
          </Section>
          <Section header={t('header')} footer={t('footer')}>
            <LocaleSwitcher />
          </Section>
        </List>
      </Page>
  );
}