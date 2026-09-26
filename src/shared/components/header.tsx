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
import { getAssetPath, getPagePath } from '@/utils/prefix';

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
                <Button
                
                  key={item.link}
                  component="a"
                  href={getPagePath(item.link)}
                  variant="subtle" // This removes the solid background
                  color="blue"     // Keeps the blue text color
                  styles={{
                    root: {
                      borderRadius: '8px',      // Slightly rounded, not a full pill
                      fontWeight: 700,          // Bold to match your visual
                      height: 'auto',           // Shrinks to fit the text size
                      padding: '8px 16px',      // Comfortable padding
                      // Optional: Add a subtle hover effect if desired
                      '&:hover': {
                        backgroundColor: '#f0f7ff', // Very light blue background on hover
                      }
                    }
                  }}
                >
                  {item.label}
                </Button>
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
        transitionProps={{ transition: 'slide-right', duration: 250 }}
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
                <Button
                  key={item.link}
                  component="a"
                  href={getPagePath(item.link)}
                  onClick={close}
                  variant="subtle" // This removes the solid background
                  color="blue"     // Keeps the blue text color
                  styles={{
                    root: {
                      borderRadius: '8px',      // Slightly rounded, not a full pill
                      fontWeight: 700,          // Bold to match your visual
                      height: 'auto',           // Shrinks to fit the text size
                      padding: '8px 16px',      // Comfortable padding
                      // Optional: Add a subtle hover effect if desired
                      '&:hover': {
                        backgroundColor: '#f0f7ff', // Very light blue background on hover
                      }
                    }
                  }}
                >
                  {item.label}
                </Button>
          ))}

        </Stack>
      </Drawer>
    </Box>
  );
}
