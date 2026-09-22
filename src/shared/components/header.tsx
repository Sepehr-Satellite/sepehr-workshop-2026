'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Container,
  Group,
  Button,
  Burger,
  Drawer,
  Stack,
  Text,
  Badge,
  Box,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { getAssetPath } from '@/utils/prefix';

const navLinks = [
  { link: '/', label: 'صفحه اصلی' },
  { link: '/#workshops', label: 'کارگاه‌های تخصصی' },
  { link: '/#about', label: 'درباره هفته جهانی فضا' },
  { link: '/#schedule', label: 'برنامه زمانی' },
];

export default function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <Box
      component="header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <Container size="xl" h={72}>
        <Group justify="space-between" align="center" h="100%" wrap="nowrap">
          {/* Brand / Logo (Desktop) */}
          <Box
            visibleFrom="md"
            style={{ flex: 1, display: 'flex', alignItems: 'center' }}
          >
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Group gap="xs" wrap="nowrap">
                <Box
                  style={{
                    position: 'relative',
                    width: 72,
                    height: 72,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    src={getAssetPath('/logo.svg')}
                    alt="لوگوی گروه فضایی سپهر"
                    width={72}
                    height={72}
                    style={{ objectFit: 'contain' }}
                    priority
                  />
                </Box>
                <Text fw={800} size="md" c="slate.9" style={{ whiteSpace: 'nowrap' }}>
                  گروه فضایی سپهر
                </Text>
              </Group>
            </Link>
          </Box>

          {/* Full brand on mobile: keep both logo and title visible */}
          <Box hiddenFrom="md" style={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'block' }}>
              <Group gap={6} wrap="nowrap" align="center">
                <Box
                  style={{
                    width: 58,
                    height: 58,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    src={getAssetPath('/logo.svg')}
                    alt="لوگوی گروه فضایی سپهر"
                    width={58}
                    height={58}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    priority
                  />
                </Box>
                <Text
                  fw={800}
                  size="sm"
                  c="slate.9"
                  style={{ whiteSpace: 'nowrap', lineHeight: 1.35 }}
                >
                  گروه فضایی سپهر
                </Text>
              </Group>
            </Link>
          </Box>

          {/* Centered Navigation Links (Desktop) */}
          <Group gap="xl" visibleFrom="md" justify="center" style={{ flex: 2 }}>
            {navLinks.map((item) => (
              <Text
                key={item.link}
                component={Link}
                href={item.link}
                size="sm"
                fw={600}
                c={item.link === '/#schedule' ? 'blue.6' : '#4c1d95'}
                style={{
                  textDecoration: 'none',
                  transition: 'color 0.2s ease, background-color 0.2s ease',
                  padding: '6px 10px',
                  borderRadius: '6px',
                }}
                styles={{
                  root: {
                    '&:hover': {
                      color: item.link === '/#schedule' ? 'var(--mantine-color-blue-7)' : '#3b1674',
                      backgroundColor: item.link === '/#schedule' ? 'var(--mantine-color-blue-0)' : '#f5f0ff',
                    },
                  },
                }}
              >
                {item.label}
              </Text>
            ))}
          </Group>

          {/* Right Action / Mobile Burger Placeholder */}
          <Box visibleFrom="md" style={{ flex: 1 }} />
          <Box hiddenFrom="md" style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            <Burger opened={opened} onClick={toggle} size="sm" />
          </Box>
        </Group>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        size="75%"
        position="right"
        title={
          <Group gap="xs">
            <Image
              src={getAssetPath('/logo.svg')}
              alt="Logo"
              width={26}
              height={26}
              style={{ objectFit: 'contain' }}
            />
            <Text fw={800} size="sm" c="slate.9">
              گروه فضایی سپهر شریف
            </Text>
          </Group>
        }
      >
        <Stack gap="md" mt="lg">
          {navLinks.map((item) => (
            <Text
              key={item.link}
              component={Link}
              href={item.link}
              size="md"
              fw={600}
              c={item.link === '/#schedule' ? 'blue.6' : '#4c1d95'}
              onClick={close}
              style={{ textDecoration: 'none', padding: '8px 0' }}
            >
              {item.label}
            </Text>
          ))}
          <Button
            component={Link}
            href="/#workshops"
            onClick={close}
            fullWidth
            size="md"
            radius="md"
            variant="gradient"
            gradient={{ from: '#1e3a8a', to: '#2563eb', deg: 105 }}
            mt="md"
          >
            ثبت‌نام در کارگاه‌ها
          </Button>
        </Stack>
      </Drawer>
    </Box>
  );
}
