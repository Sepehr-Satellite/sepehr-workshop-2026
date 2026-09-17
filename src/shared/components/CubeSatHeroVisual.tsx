// src/components/CubeSatHeroVisual.tsx
'use client';

import {
  Paper,
  Group,
  Text,
  Badge,
  SimpleGrid,
  ThemeIcon,
  Stack,
  Divider,
  rem,
} from '@mantine/core';
import {
  IconSatellite,
  IconCpu,
  IconAntenna,
  IconCheck,
  IconAward,
} from '@tabler/icons-react';

const specs = [
  { label: 'پلتفرم مرجع', value: 'CubeSat 1U / 3U Standard' },
  { label: 'محیط پیاده‌سازی', value: 'Altium, STM32 & PlutoSDR' },
  { label: 'سطح کارگاه‌ها', value: 'عملیاتی و پروژه محور' },
  { label: 'میزبان علمی', value: 'دانشگاه صنعتی شریف' },
];

export default function CubeSatHeroVisual() {
  return (
    <Paper
      withBorder
      shadow="xl"
      radius="xl"
      p={{ base: 'md', sm: 'xl' }}
      bg="white"
      style={{
        borderColor: 'var(--mantine-color-gray-3)',
        boxShadow: '0 20px 40px -15px rgba(30, 41, 59, 0.08)',
      }}
    >
      {/* هدر باکس */}
      <Group justify="space-between" align="center" mb="lg">
        <Group gap="sm">
          <ThemeIcon size={44} radius="md" color="indigo" variant="light">
            <IconSatellite style={{ width: rem(24), height: rem(24) }} />
          </ThemeIcon>
          <div>
            <Text fw={700} size="md" c="dark.8">
              بسته جامع مهندسی فضایی
            </Text>
            <Text size="xs" c="dimmed">
              World Space Week Special Edition
            </Text>
          </div>
        </Group>
        <Badge color="teal" variant="light" size="lg" radius="sm">
          ظرفیت محدود
        </Badge>
      </Group>

      <Divider color="gray.2" mb="md" />

      {/* دو باکس کوچک زیرسیستم‌ها */}
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm" mb="lg">
        <Paper withBorder p="xs" radius="md" bg="gray.0">
          <Group gap="xs">
            <ThemeIcon size={34} radius="sm" color="indigo" variant="light">
              <IconCpu style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>
            <div>
              <Text size="xs" c="dimmed">کنترل و فرمان</Text>
              <Text size="sm" fw={700} c="dark.8">C&DH (STM32)</Text>
            </div>
          </Group>
        </Paper>

        <Paper withBorder p="xs" radius="md" bg="gray.0">
          <Group gap="xs">
            <ThemeIcon size={34} radius="sm" color="cyan" variant="light">
              <IconAntenna style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>
            <div>
              <Text size="xs" c="dimmed">لینک مخابراتی</Text>
              <Text size="sm" fw={700} c="dark.8">TT&C (PlutoSDR)</Text>
            </div>
          </Group>
        </Paper>
      </SimpleGrid>

      {/* لیست مشخصات با چک‌مارک */}
      <Stack gap="xs" mb="lg">
        {specs.map((item, idx) => (
          <Group key={idx} justify="space-between" py={4} style={{ borderBottom: '1px solid var(--mantine-color-gray-1)' }}>
            <Group gap="xs">
              <IconCheck style={{ width: rem(16), height: rem(16), color: 'var(--mantine-color-indigo-6)' }} />
              <Text size="sm" c="gray.7">{item.label}</Text>
            </Group>
            <Text size="sm" fw={600} c="dark.8">{item.value}</Text>
          </Group>
        ))}
      </Stack>

      {/* باکس گواهینامه در انتهای کارت */}
      <Paper p="sm" radius="md" bg="indigo.0" style={{ border: '1px solid var(--mantine-color-indigo-2)' }}>
        <Group justify="space-between">
          <Group gap="xs">
            <ThemeIcon size={32} radius="md" color="indigo" variant="filled">
              <IconAward style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>
            <div>
              <Text size="xs" fw={700} c="indigo.9">گواهی‌نامه رسمی دو زبانه</Text>
              <Text size="xs" c="indigo.7">با تاییدیه شرکت سپهر و شریف</Text>
            </div>
          </Group>
          <Badge color="indigo" variant="white" size="md">معتبر</Badge>
        </Group>
      </Paper>
    </Paper>
  );
}
