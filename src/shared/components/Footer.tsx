'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getAssetPath } from '@/utils/prefix';
import {
  Container,
  Button,
  Grid,
  Text,
  Group,
  Stack,
  Box,
  Divider,
  ActionIcon,
  Title,
} from '@mantine/core';
import {
  IconBrandTelegram,
  IconMapPin,
  IconMail,
  IconPhone,
} from '@tabler/icons-react';

const COLORS = {
  bg: '#0b1329',
  border: 'rgba(255, 255, 255, 0.08)',
  textMuted: '#cbd5e1',
  textFaint: '#94a3b8',
  accent: '#60a5fa',
};

const socialLinks = [
  { icon: IconBrandTelegram, href: 'https://t.me', label: 'تلگرام' },
];

const quickLinks = [
  { link: '/', label: 'صفحه اصلی' },
  { link: '/#workshops', label: 'کارگاه‌های تخصصی' },
  { link: '/#about', label: 'درباره سپهر' },
  { link: '/#schedule', label: 'برنامه زمانی' },
];

const contactItems = [
  { icon: IconMapPin, text: 'تهران، دانشگاه صنعتی شریف، دانشکده مهندسی هوافضا', dir: 'rtl' },
  { icon: IconMail, text: 'info@sepehr-space.ir', dir: 'ltr' },
  { icon: IconPhone, text: '۰۲۱-۶۶۱۶۴۰۰۰', dir: 'rtl' },
] as const;

export default function Footer() {
  return (
    <Box
      component="footer"
      style={{
        backgroundColor: COLORS.bg,
        color: '#f8fafc',
        paddingTop: '64px',
        paddingBottom: '32px',
        borderTop: `1px solid ${COLORS.border}`,
      }}
    >
      <Container size="xl">
        <Grid>
          {/* ستون ۱: درباره */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Stack gap="md">
              <Group gap="sm" wrap="nowrap">
                <Box
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '6px',
                    flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  <Box style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image
                      src={getAssetPath('/logo.svg')}
                      alt="لوگوی گروه فضایی سپهر"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </Box>
                </Box>
                <Title order={3} size="h4" fw={800} c="white">
                  گروه فضایی سپهر شریف
                </Title>
              </Group>

              <Text size="sm" c={COLORS.textMuted} lh={1.9} maw={420}>
                گروه فضایی سپهر بستری برای تجمیع دانش طراحی ماهواره، مخابرات فضایی و سامانه‌های اویونیک است. تمرکز ما بر یادگیری عمیق از طریق پروژه‌های عملی و آزمایشگاهی است.
              </Text>

              <Group gap="sm" mt="xs">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <ActionIcon
                    key={label}
                    size="lg"
                    radius="md"
                    variant="subtle"
                    color="white"
                    aria-label={label}
                    component="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    <Icon size={20} stroke={1.8} />
                  </ActionIcon>
                ))}
              </Group>
            </Stack>
          </Grid.Col>

          {/* ستون ۲: دسترسی سریع */}
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Stack gap={6} align="flex-start">
              <Text fw={700} c="white" size="md" mb={4}>
                دسترسی سریع
              </Text>
              {quickLinks.map((item) => (
                <Button
                  key={item.link}
                  component={Link}
                  href={item.link}
                  variant="subtle"
                  fullWidth={false}
                  justify="flex-start"
                  style={{
                    borderRadius: '8px',
                    fontWeight: 600,
                    height: 'auto',
                    padding: '8px 12px',
                    color: COLORS.textMuted,
                    backgroundColor: 'transparent',
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
          </Grid.Col>

          {/* ستون ۳: ارتباط و دبیرخانه */}
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <Stack gap="sm">
              <Text fw={700} c="white" size="md" mb={4}>
                ارتباط و دبیرخانه
              </Text>
              {contactItems.map(({ icon: Icon, text, dir }) => (
                <Group key={text} gap="xs" wrap="nowrap" align="flex-start">
                  <Icon size={18} color={COLORS.accent} style={{ flexShrink: 0, marginTop: 2 }} />
                  <Text size="sm" c={COLORS.textMuted} dir={dir}>
                    {text}
                  </Text>
                </Group>
              ))}
            </Stack>
          </Grid.Col>
        </Grid>

        <Divider my="xl" color="rgba(255, 255, 255, 0.1)" />

        <Stack gap={8} align="center">
          <Text size="xs" c={COLORS.textFaint} ta="center">
            © ۱۴۰۵ تمامی حقوق برای گروه فضایی سپهر دانشگاه صنعتی شریف محفوظ است.
          </Text>
          <Text size="xs" c={COLORS.textFaint} ta="center" dir="ltr">
            World Space Week • Sharif University of Technology
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
