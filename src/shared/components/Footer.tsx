'use client';

import Link from 'next/link';
import {
  Container,
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
  IconBrandInstagram,
  IconBrandLinkedin,
  IconRocket,
  IconMapPin,
  IconMail,
  IconPhone,
} from '@tabler/icons-react';

export default function Footer() {
  return (
    <Box
      component="footer"
      style={{
        backgroundColor: '#0b1329',
        color: '#f8fafc',
        paddingTop: '64px',
        paddingBottom: '32px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <Container size="xl">
        <Grid gutter={{ base: 40, md: 50 }}>
          {/* Col 1: About */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Stack gap="md">
              <Group gap="xs">
                <Box
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                  }}
                >
                  <IconRocket size={20} />
                </Box>
                <Title order={3} size="h4" fw={800} c="white">
                  گروه فضایی سپهر شریف
                </Title>
              </Group>

              <Text size="sm" c="gray.4" lh={1.8} maw={420}>
                برگزارکننده رویدادها و دوره‌های تخصصی مهندسی هوافضا، ماهواره‌های مدار پایین (LEO) و سامانه‌های فضایی در دانشکده مهندسی هوافضای دانشگاه صنعتی شریف.
              </Text>

              <Group gap="sm" mt="xs">
                <ActionIcon
                  size="lg"
                  radius="md"
                  variant="subtle"
                  color="gray"
                  component="a"
                  href="https://t.me"
                  target="_blank"
                >
                  <IconBrandTelegram size={20} />
                </ActionIcon>
                <ActionIcon
                  size="lg"
                  radius="md"
                  variant="subtle"
                  color="gray"
                  component="a"
                  href="https://instagram.com"
                  target="_blank"
                >
                  <IconBrandInstagram size={20} />
                </ActionIcon>
                <ActionIcon
                  size="lg"
                  radius="md"
                  variant="subtle"
                  color="gray"
                  component="a"
                  href="https://linkedin.com"
                  target="_blank"
                >
                  <IconBrandLinkedin size={20} />
                </ActionIcon>
              </Group>
            </Stack>
          </Grid.Col>

          {/* Col 2: Quick Links */}
          <Grid.Col span={{ base: 6, md: 3 }}>
            <Stack gap="xs">
              <Text fw={700} c="white" size="md" mb="xs">
                دسترسی سریع
              </Text>
              <Text component={Link} href="/#workshops" size="sm" c="gray.4" style={{ textDecoration: 'none' }}>
                کارگاه‌های تخصصی
              </Text>
              <Text component={Link} href="/#schedule" size="sm" c="gray.4" style={{ textDecoration: 'none' }}>
                برنامه زمان‌بندی
              </Text>
              <Text component={Link} href="/#about" size="sm" c="gray.4" style={{ textDecoration: 'none' }}>
                درباره رویداد
              </Text>
            </Stack>
          </Grid.Col>

          {/* Col 3: Contact Details */}
          <Grid.Col span={{ base: 6, md: 4 }}>
            <Stack gap="sm">
              <Text fw={700} c="white" size="md" mb="xs">
                ارتباط و دبیرخانه
              </Text>
              <Group gap="xs" align="flex-start">
                <IconMapPin size={18} color="#60a5fa" style={{ flexShrink: 0, marginTop: 2 }} />
                <Text size="sm" c="gray.4">
                  تهران، دانشگاه صنعتی شریف، دانشکده مهندسی هوافضا
                </Text>
              </Group>
              <Group gap="xs">
                <IconMail size={18} color="#60a5fa" style={{ flexShrink: 0 }} />
                <Text size="sm" c="gray.4">
                  info@sepehr-space.ir
                </Text>
              </Group>
              <Group gap="xs">
                <IconPhone size={18} color="#60a5fa" style={{ flexShrink: 0 }} />
                <Text size="sm" c="gray.4">
                  ۰۲۱-۶۶۱۶۴۰۰۰
                </Text>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>

        <Divider my="xl" color="rgba(255, 255, 255, 0.1)" />

        <Group justify="space-between" align="center">
          <Text size="xs" c="gray.5">
            © ۱۴۰۳ تمامی حقوق برای گروه فضایی سپهر دانشگاه صنعتی شریف محفوظ است.
          </Text>
          <Text size="xs" c="gray.5">
            World Space Week • Sharif University of Technology
          </Text>
        </Group>
      </Container>
    </Box>
  );
}
