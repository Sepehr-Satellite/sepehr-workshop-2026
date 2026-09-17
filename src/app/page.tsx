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
  Grid,
  SimpleGrid,
  Card,
  Group,
  Stack,
  Image,
  rem,
} from '@mantine/core';
import {
  IconArrowLeft,
  IconChevronLeft,
  IconClock,
  IconBookmark,
  IconVideo,
} from '@tabler/icons-react';
import { WORKSHOPS } from '@/modules/workshop/data/workshops';
import WorkshopScrollShowcase from '@/shared/components/WorkshopScrollShowcase';

export default function HomePage() {
  return (
    <Box component="main" bg="#fcfcfd">
      {/* 1. HERO SECTION (کاملاً بر اساس سبک تصویر نمونه) */}
      <Box
        py={{ base: 60, md: 110 }}
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#f8fafc',
          backgroundImage:
            'radial-gradient(circle at 80% 20%, rgba(159, 18, 57, 0.05) 0%, transparent 40%), radial-gradient(circle at 20% 80%, rgba(79, 70, 229, 0.05) 0%, transparent 40%)',
          borderBottom: '1px solid var(--mantine-color-gray-2)',
        }}
      >
        {/* ذرات محو پس‌زمینه مانند تصویر */}
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.6,
            pointerEvents: 'none',
            backgroundImage:
              'radial-gradient(#9f1239 1px, transparent 1px), radial-gradient(#4f46e5 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px',
          }}
        />

        <Container size="xl" style={{ position: 'relative', zIndex: 1 }}>
          <Grid align="center" gutter={{ base: 40, md: 60 }}>
            {/* سمت راست: تایپوگرافی دوتایی و متن */}
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Badge
                color="rose"
                variant="light"
                size="lg"
                radius="sm"
                mb="lg"
                fw={700}
              >
                دانشگاه صنعتی شریف • هفته جهانی فضا
              </Badge>

              <Title
                order={1}
                fw={900}
                style={{
                  fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                }}
                c="dark.9"
              >
                گروه فضایی سپهر
                <Text
                  component="span"
                  display="block"
                  inherit
                  c="#9f1239" // رنگ زرشکی الهام‌گرفته از تصویر نمونه
                  mt={6}
                >
                  سلسله کارگاه‌های CubeSat
                </Text>
              </Title>

              <Text size="lg" c="gray.7" mt="xl" lh={1.8} maw={620}>
                به مناسبت هفته جهانی فضا، مجموعه ۹ کارگاه عملیاتی و پروژه محور برای تحلیل،
                طراحی و ساخت زیرسیستم‌های ماهواره‌های مکعبی (CubeSat) توسط متخصصین شرکت سپهر در دانشگاه صنعتی شریف برگزار می‌گردد.
              </Text>

              {/* دکمه‌ها دقیقاً با استایل تصویر نمونه */}
              <Group mt={35} gap="md">
                <Button
                  component="a"
                  href="#workshops-grid"
                  size="xl"
                  radius="md"
                  bg="#9f1239"
                  style={{ transition: 'transform 0.2s ease' }}
                  rightSection={<IconBookmark size={20} />}
                >
                  مشاهده دوره‌ها
                </Button>
                <Button
                  component="a"
                  href="#scroll-showcase"
                  size="xl"
                  radius="md"
                  variant="default"
                  bg="white"
                  c="dark.8"
                  rightSection={<IconVideo size={20} />}
                >
                  معرفی تصویری زیرسیستم‌ها
                </Button>
              </Group>

              <Text size="xs" c="dimmed" mt="xl" style={{ letterSpacing: '2px' }}>
                SEPEHR SPACE GROUP • WORLD SPACE WEEK
              </Text>
            </Grid.Col>

            {/* سمت چپ: تصویر ماهواره با افکت ذرات نوری */}
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Box pos="relative">
                <Image
                  src="/images/hero-cubesat.png"
                  alt="CubeSat Satellite"
                  radius="xl"
                  style={{
                    filter: 'drop-shadow(0 25px 35px rgba(159, 18, 57, 0.15))',
                  }}
                />
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

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
              withBorder
              radius="lg"
              padding="lg"
              shadow="sm"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <Card.Section pos="relative">
                  <Image
                    src={workshop.image}
                    height={190}
                    alt={workshop.title}
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
    </Box>
  );
}
