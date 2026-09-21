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
          {/* Brand / Logo (Left side) */}
          <Box style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Group gap="xs" wrap="nowrap">
                <Box
                  style={{
                    position: 'relative',
                    width: 72,
                    height: 72,
                    borderRadius: '10px',
                    overflow: 'hidden',
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
                <Stack gap={0}>
                  <Group gap={6} align="center" wrap="nowrap">
                    <Text fw={800} size="md" c="slate.9">
                      گروه فضایی سپهر
                    </Text>
                  </Group>
                </Stack>
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
                c="slate.7"
                style={{
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  padding: '6px 10px',
                  borderRadius: '6px',
                }}
                styles={{
                  root: {
                    '&:hover': {
                      color: 'var(--mantine-color-blue-6)',
                      backgroundColor: '#f1f5f9',
                    },
                  },
                }}
              >
                {item.label}
              </Text>
            ))}
          </Group>

          {/* Right Action / Mobile Burger Placeholder */}
          <Box
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
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
              c="slate.8"
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
