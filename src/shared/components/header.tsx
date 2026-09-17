// src/shared/components/Header.tsx
'use client';

import Link from 'next/link';
import { Container, Group, Text, Button, Anchor, Box } from '@mantine/core';
import { IconSchool } from '@tabler/icons-react';

export function Header() {
  return (
    <Box component="header" py="md" style={{ borderBottom: '1px solid var(--mantine-color-default-border)' }}>
      <Container size="lg">
        <Group justify="space-between">
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Group gap="xs">
              <IconSchool size={28} color="var(--mantine-color-indigo-6)" />
              <Text fw={700} size="lg">Frontend Workshop Series</Text>
            </Group>
          </Link>

          <Group gap="lg">
            <Anchor component={Link} href="/" fw={500} c="dimmed" underline="never">
              Home
            </Anchor>
            <Anchor component={Link} href="/about" fw={500} c="dimmed" underline="never">
              About
            </Anchor>
            <Button component={Link} href="/#workshops" color="indigo" radius="md" size="sm">
              Explore 9 Workshops
            </Button>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
