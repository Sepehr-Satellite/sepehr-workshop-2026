'use client';

import Link from 'next/link';
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
import { IconRocket, IconSparkles } from '@tabler/icons-react';

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
        <Group justify="space-between" h="100%">
          {/* Brand / Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Group gap="xs">
              <Box
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)',
                }}
              >
                <IconRocket size={22} />
              </Box>
              <Stack gap={0}>
                <Group gap={6} align="center">
                  <Text fw={800} size="md" c="slate.9">
                    گروه فضایی سپهر
                  </Text>
                  <Badge size="xs" variant="light" color="blue" radius="sm">
                    دانشگاه شریف
                  </Badge>
                </Group>
                <Text size="xs" c="dimmed" fw={500}>
                  رویداد هفته جهانی فضا ۲۰۲۴
                </Text>
              </Stack>
            </Group>
          </Link>

          {/* Navigation Links */}
          <Group gap="xl" visibleFrom="md">
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
                }}
              >
                {item.label}
              </Text>
            ))}
          </Group>

          {/* Call to Action & Mobile Hamburger */}
          <Group gap="sm">
            
            <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
          </Group>
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
            <IconRocket size={20} color="#2563eb" />
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
