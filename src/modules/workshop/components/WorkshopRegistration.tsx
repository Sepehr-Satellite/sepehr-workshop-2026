'use client';

import { useState } from 'react';
import { Button, List, Modal, Paper, SimpleGrid, Stack, Text } from '@mantine/core';
import { IconBrandTelegram, IconMessageCircle } from '@tabler/icons-react';

type WorkshopRegistrationProps = {
  workshopTitle: string;
  telegramUrl: string;
  baleUrl: string;
};

export default function WorkshopRegistration({
  workshopTitle,
  telegramUrl,
  baleUrl,
}: WorkshopRegistrationProps) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button fullWidth color="blue" onClick={() => setOpened(true)} aria-haspopup="dialog">
        ثبت‌نام دوره
      </Button>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="راهنمای ثبت‌نام کارگاه"
        centered
        radius="md"
        padding="lg"
        dir="rtl"
        closeButtonProps={{ 'aria-label': 'بستن راهنمای ثبت‌نام' }}
        styles={{ title: { fontWeight: 700 }, content: { direction: 'rtl' } }}
      >
        <Stack gap="md">
          <Paper p="sm" radius="md" bg="blue.0">
            <Text size="sm" fw={700} c="blue.8">
              ثبت‌نام این کارگاه به‌صورت دستی و از طریق پیام به ادمین در پیام‌رسان تلگرام یا بله انجام می‌شود.
            </Text>
          </Paper>

          <List type="ordered" spacing="sm" size="sm" styles={{ item: { lineHeight: 1.8 } }}>
            <List.Item>از طریق یکی از دکمه‌های زیر وارد گفت‌وگو با ادمین شوید.</List.Item>
            <List.Item>
             نام کارگاه‌هایی که می‌خواهید ثبت نام کنید را برای ادمین بفرستید. مثال: {workshopTitle}
            </List.Item>
            <List.Item>
              راهنمای پرداخت و مراحل تکمیل ثبت‌نام را از ادمین دریافت کنید. ثبت‌نام پس از تأیید ادمین نهایی می‌شود.
            </List.Item>
          </List>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
            <Button
              component="a"
              href={telegramUrl}
              color="blue"
              leftSection={<IconBrandTelegram size={18} />}
            >
              پیام به ادمین در تلگرام
            </Button>
            <Button
              component="a"
              href={baleUrl}
              target="_blank"
              rel="noopener noreferrer"
              color="teal"
              leftSection={<IconMessageCircle size={18} />}
            >
              پیام به ادمین در بله
            </Button>
          </SimpleGrid>

          <Text size="xs" c="dimmed" lh={1.7}>
            برای باز شدن لینک تلگرام، برنامه تلگرام باید روی دستگاه شما نصب باشد.
          </Text>
        </Stack>
      </Modal>
    </>
  );
}
