// src/app/page.tsx
'use client';

import Link from 'next/link';
import {
  Box,
  Container,
  Title,
  Text,
  Button,
  Badge,
  SimpleGrid,
  Card,
  Group,
  Stack,
  Image,
} from '@mantine/core';
import {
  IconChevronLeft,
  IconClock,
} from '@tabler/icons-react';
import { WORKSHOPS } from '@/modules/workshop/data/workshops';
import WorkshopScrollShowcase from '@/shared/components/WorkshopScrollShowcase';
import WorkshopTimeline from '@/shared/components/WorkshopTimeline';
import HeroSection from '@/shared/components/HeroSection';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <Box component="main" bg="#fcfcfd">
      <HeroSection/>
      {/* 2. CATALOG GRID (کارت‌ها همراه با عکس و مشخصات) */}
      <Container size="xl" py={{ base: 60, md: 90 }} id="workshops-grid">
        <Stack align="center" gap="xs" mb={50} ta="center">
          <Badge color="rose" variant="outline" size="md">
            کاتالوگ ۹ کارگاه
          </Badge>
          <Title order={2} fw={900} size="h1" c="dark.9">
            انتخاب زیرسیستم تخصصی
          </Title>
          <Text c="dimmed" size="md" maw={550}>
            بر روی کارگاه مورد نظر کلیک کنید تا سرفصل‌ها و فرم ثبت‌نام را مشاهده کنید.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
          {WORKSHOPS.map((workshop) => (
            <Card
              key={workshop.slug}
              data-workshop-card={workshop.slug}
              withBorder
              radius="lg"
              padding="lg"
              shadow="sm"
              className={styles.workshopCard}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <Card.Section pos="relative" className={styles.workshopImageFrame}>
                  <Image
                    src={workshop.heroImage}
                    height={250}
                    fit="contain"
                    alt={workshop.title}
                    className={styles.workshopImage}
                    fallbackSrc="https://placehold.co/600x400/e2e8f0/1e293b?text=CubeSat+Subsystem"
                  />
                  <Badge
                    pos="absolute"
                    top={12}
                    right={12}
                    color="dark"
                    size="sm"
                    radius="sm"
                  >
                    {workshop.id}
                  </Badge>
                  <Badge
                    pos="absolute"
                    bottom={12}
                    left={12}
                    style={{ backgroundColor: workshop.color }}
                    size="sm"
                    radius="sm"
                  >
                    {workshop.category}
                  </Badge>
                </Card.Section>

                <Stack gap="xs" mt="md">
                  <Group justify="space-between" align="center">
                    <Badge color="gray" variant="light" size="sm">
                      {workshop.level}
                    </Badge>

                    <Group gap={4}>
                      <IconClock size={14} style={{ color: 'var(--mantine-color-gray-6)' }} />
                      <Text size="xs" c="dimmed" fw={600}>
                        {workshop.hours}
                      </Text>
                    </Group>
                  </Group>

                  <Title order={3} size="h4" fw={700} c="dark.9" mt={4}>
                    {workshop.title}
                  </Title>
                  <Text size="sm" c="gray.6" lh={1.6}>
                    {workshop.description}
                  </Text>
                </Stack>
              </div>

              <Button
                component={Link}
                href={`/workshops/${workshop.slug}`}
                variant="light"
                color="indigo"
                radius="md"
                fullWidth
                mt="xl"
                rightSection={<IconChevronLeft size={16} />}
              >
                جزئیات دوره و ثبت‌نام
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

      {/* 3. DYNAMIC SCROLL SHOWCASE (ابتکار اسکرول تعاملی) */}
      <Box id="scroll-showcase">
        <WorkshopScrollShowcase />
      </Box>

      {/* 3. DYNAMIC SCROLL SHOWCASE (ابتکار اسکرول تعاملی) */}
      <Box>
        <WorkshopTimeline />
      </Box>
    </Box>
  );
}
