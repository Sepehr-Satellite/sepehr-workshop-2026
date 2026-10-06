'use client';

import { useState } from 'react';
import { ActionIcon, Button, Box } from '@mantine/core';
import { IconBrandTelegram } from '@tabler/icons-react';
import { TELEGRAM_CHANNEL_ID, TELEGRAM_CHANNEL_URL } from '@/shared/constants/socialLinks';

type TelegramLinkProps = {
  iconOnly?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  fullWidth?: boolean;
  size?: string;
  variant?: string;
  color?: string;
  radius?: string;
};

async function copyChannelId() {
  try {
    await navigator.clipboard.writeText(TELEGRAM_CHANNEL_ID);
  } catch {
    const input = document.createElement('textarea');
    input.value = TELEGRAM_CHANNEL_ID;
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    input.remove();
  }
}

export default function TelegramLink({
  iconOnly = false,
  children = 'کانال تلگرام',
  ...props
}: TelegramLinkProps) {
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setShowCopiedMessage(false);
    window.location.href = TELEGRAM_CHANNEL_URL;

    window.setTimeout(async () => {
      if (document.visibilityState !== 'visible') return;
      await copyChannelId();
      setShowCopiedMessage(true);
      window.setTimeout(() => setShowCopiedMessage(false), 3000);
    }, 900);
  };

  const content = <IconBrandTelegram size={iconOnly ? 20 : 18} />;
  const linkProps = {
    component: 'a' as const,
    href: TELEGRAM_CHANNEL_URL,
    onClick: handleClick,
    'aria-label': iconOnly ? 'کانال تلگرام' : undefined,
    ...props,
  };

  return (
    <>
      {iconOnly ? (
        <ActionIcon {...linkProps}>
          {content}
        </ActionIcon>
      ) : (
        <Button {...linkProps} leftSection={content}>
          {children}
        </Button>
      )}
      {showCopiedMessage && (
        <Box
          role="status"
          style={{
            position: 'fixed',
            right: 20,
            bottom: 20,
            zIndex: 1000,
            padding: '10px 16px',
            borderRadius: 8,
            color: '#ffffff',
            background: '#1e293b',
            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.25)',
            fontSize: 14,
          }}
        >
          آیدی کانال کپی شد.
        </Box>
      )}
    </>
  );
}
