// src/app/workshops/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Container,
  Title,
  Text,
  Badge,
  Group,
  Stack,
  Card,
  Breadcrumbs,
  Button,
  Divider,
} from '@mantine/core';
import { IconClock, IconTag, IconArrowLeft } from '@tabler/icons-react';
import { WORKSHOPS } from '@/modules/workshop/data/workshops';

interface PageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

// ساخت صفحات به صورت استاتیک در زمان Build برای GitHub Pages
export async function generateStaticParams() {
  return WORKSHOPS.map((workshop) => ({
    slug: workshop.slug,
  }));
}

export default async function WorkshopDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const workshop = WORKSHOPS.find((w) => w.slug === resolvedParams.slug);

  if (!workshop) {
    notFound();
  }

  const breadcrumbLinkStyle = {
    textDecoration: 'none',
    color: 'var(--mantine-color-indigo-6)',
    fontSize: 'var(--mantine-font-size-sm)',
    fontWeight: 500,
  };

  return (
    <Container size="md" py={50}>
      {/* Navigation Breadcrumb - کاملاً بومی با Next.js Link */}
      <Breadcrumbs mb="xl">
        <Link href="/" style={breadcrumbLinkStyle}>
          Home
        </Link>
        <Link href="/#workshops" style={breadcrumbLinkStyle}>
          Workshops
        </Link>
        <Text size="sm" c="dimmed">
          {workshop.title}
        </Text>
      </Breadcrumbs>

      <Stack gap="xl">
        <div>
          <Group gap="xs" mb="sm">
            {workshop.tags?.map((tag) => (
              <Badge key={tag} variant="light" color="indigo" leftSection={<IconTag size={12} />}>
                {tag}
              </Badge>
            ))}
          </Group>

          <Title order={1} mb="xs">
            {workshop.title}
          </Title>

          <Group gap="lg" c="dimmed" mt="xs">
            <Group gap={6}>
              <IconClock size={16} />
              <Text size="sm">{workshop.duration || '2 Hours'}</Text>
            </Group>
          </Group>
        </div>

        <Divider />

        <Card withBorder radius="md" padding="lg">
          <Title order={2} size="h4" mb="sm">
            Overview
          </Title>
          <Text size="md" style={{ lineHeight: 1.7 }}>
            {workshop.description}
          </Text>
        </Card>

        {/* دکمه‌های هدایت به صفحات دیگر */}
        <Group justify="space-between" mt="xl">
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Button variant="subtle" color="gray" leftSection={<IconArrowLeft size={16} />}>
              Back to all workshops
            </Button>
          </Link>

          <Link href="/about" style={{ textDecoration: 'none' }}>
            <Button color="indigo">
              Register for Workshop
            </Button>
          </Link>
        </Group>
      </Stack>
    </Container>
  );
}
