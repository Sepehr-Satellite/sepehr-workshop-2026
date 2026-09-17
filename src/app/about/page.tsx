// src/app/about/page.tsx
import Link from 'next/link';
import { Container, Title, Text, Stack, Card, SimpleGrid, Button, Group, ThemeIcon, Paper } from '@mantine/core';
import { IconCheck, IconArrowLeft, IconRocket, IconCode, IconCertificate } from '@tabler/icons-react';

export default function AboutPage() {
  return (
    <Container size="md" py={60}>
      {/* دکمه بازگشت به خانه */}
      <Link href="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1.5rem' }}>
        <Button variant="subtle" color="gray" leftSection={<IconArrowLeft size={16} />}>
          Back to Home
        </Button>
      </Link>

      <Stack gap="xl">
        {/* هدر صفحه */}
        <div>
          <Title order={1} mb="sm" style={{ fontWeight: 850, fontSize: '2.25rem' }}>
            About the Workshop Series
          </Title>
          <Text size="lg" c="dimmed">
            Why we created 9 modular mini-workshops instead of one massive, overwhelming course.
          </Text>
        </div>

        <Text size="md" style={{ lineHeight: 1.7 }}>
          Most software workshops either skim the surface of too many tools or force you into a 40-hour lecture marathon where retention is low. We designed this series as <strong>nine self-contained modules</strong>. Each mini-workshop targets one specific core skill needed to build, scale, and deploy real-world Next.js and TypeScript applications.
        </Text>

        {/* مخاطبان دوره */}
        <div>
          <Title order={2} size="h3" mb="md">
            Who Is This For?
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            <Card withBorder radius="md" padding="lg">
              <Group gap="xs" mb="xs">
                <ThemeIcon color="teal" variant="light" size="md" radius="xl">
                  <IconCheck size={16} />
                </ThemeIcon>
                <Text fw={600}>Frontend Developers</Text>
              </Group>
              <Text size="sm" c="dimmed">
                Looking to transition to Next.js App Router, modern UI frameworks, Mantine v7, and clean state patterns.
              </Text>
            </Card>

            <Card withBorder radius="md" padding="lg">
              <Group gap="xs" mb="xs">
                <ThemeIcon color="teal" variant="light" size="md" radius="xl">
                  <IconCheck size={16} />
                </ThemeIcon>
                <Text fw={600}>Engineering Teams</Text>
              </Group>
              <Text size="sm" c="dimmed">
                Seeking unified standards for architecture, component styling, and automated static deployments.
              </Text>
            </Card>
          </SimpleGrid>
        </div>

        {/* ارزش‌ها و ویژگی‌های کلیدی دوره */}
        <div>
          <Title order={2} size="h3" mb="md">
            What You Get
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
            <Paper withBorder p="md" radius="md">
              <ThemeIcon color="indigo" variant="light" size="lg" radius="md" mb="xs">
                <IconCode size={20} />
              </ThemeIcon>
              <Text fw={600} size="sm" mb={4}>Practical Code</Text>
              <Text size="xs" c="dimmed">Real production patterns without artificial toy examples.</Text>
            </Paper>

            <Paper withBorder p="md" radius="md">
              <ThemeIcon color="indigo" variant="light" size="lg" radius="md" mb="xs">
                <IconRocket size={20} />
              </ThemeIcon>
              <Text fw={600} size="sm" mb={4}>Instant Deployment</Text>
              <Text size="xs" c="dimmed">Set up CI/CD pipelines to GitHub Pages and production hosts.</Text>
            </Paper>

            <Paper withBorder p="md" radius="md">
              <ThemeIcon color="indigo" variant="light" size="lg" radius="md" mb="xs">
                <IconCertificate size={20} />
              </ThemeIcon>
              <Text fw={600} size="sm" mb={4}>Direct Takeaways</Text>
              <Text size="xs" c="dimmed">Ready-to-use boilerplates and architectural blueprints.</Text>
            </Paper>
          </SimpleGrid>
        </div>

        {/* CTA دکمه شروع */}
        <Group mt="lg">
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Button color="indigo" size="md" radius="md">
              Browse the Workshops
            </Button>
          </Link>
        </Group>
      </Stack>
    </Container>
  );
}
