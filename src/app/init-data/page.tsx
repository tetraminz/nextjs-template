'use client';

import { useMemo } from 'react';
import { useSignal, initData } from '@telegram-apps/sdk-react';
import { List, Placeholder } from '@telegram-apps/telegram-ui';
import Image from 'next/image';
import { DisplayData } from '@/components/DisplayData/DisplayData';
import { Page } from '@/components/Page';

export default function InitDataPage() {
  const initDataRaw = useSignal(initData.raw);
  const initDataState = useSignal(initData.state);

  const initDataRows = useMemo(() => {
    if (!initDataState || !initDataRaw) {
      return undefined;
    }
    const {
      authDate,
      hash,
      queryId,
      chatType,
      chatInstance,
      canSendAfter,
      startParam,
    } = initDataState;
    return [
      { title: 'raw', value: initDataRaw },
      { title: 'auth_date', value: authDate.toLocaleString() },
      { title: 'auth_date (raw)', value: authDate.getTime() / 1000 },
      { title: 'hash', value: hash },
      {
        title: 'can_send_after',
        value: initData.canSendAfterDate()?.toISOString(),
      },
      { title: 'can_send_after (raw)', value: canSendAfter },
      { title: 'query_id', value: queryId },
      { title: 'start_param', value: startParam },
      { title: 'chat_type', value: chatType },
      { title: 'chat_instance', value: chatInstance },
    ];
  }, [initDataState, initDataRaw]);

  const chatRows = useMemo(() => {
    if (!initDataState?.chat) {
      return undefined;
    }
    const { id, title, type, username, photoUrl } = initDataState.chat;
    return [
      { title: 'id', value: id.toString() },
      { title: 'title', value: title },
      { title: 'type', value: type },
      { title: 'username', value: username },
      { title: 'photo_url', value: photoUrl },
    ];
  }, [initDataState?.chat]);

  if (!initDataRows) {
    return (
        <Page>
          <Placeholder
              header="Oops"
              description="Application was launched with missing init data"
          >
            <Image
                src="https://xelene.me/telegram.gif"
                alt="Telegram sticker animation"
                width={144}
                height={144}
                style={{ display: 'block' }}
            />
          </Placeholder>
        </Page>
    );
  }

  return (
      <Page>
        <List>
          <DisplayData header="Init Data" rows={initDataRows} />
          {chatRows && <DisplayData header="Chat" rows={chatRows} />}
        </List>
      </Page>
  );
}