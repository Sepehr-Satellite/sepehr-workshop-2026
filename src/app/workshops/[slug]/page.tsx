import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Container,
  Title,
  Text,
  Badge,
  Card,
  Group,
  Stack,
  Button,
  ThemeIcon,
  SimpleGrid,
  Paper,
  Divider,
  Box,
  Image,
} from '@mantine/core';
import {
  IconArrowRight,
  IconClock,
  IconCalendar,
  IconMapPin,
  IconUser,
  IconCoin,
  IconListCheck,
  IconDeviceLaptop,
  IconSparkles,
  IconChevronLeft,
  IconBook,
  IconPointFilled,
} from '@tabler/icons-react';

import { WORKSHOPS, Workshop } from '@/modules/workshop/data/workshops';

// اسلاگ‌های ثابت برای تضمین Static Export
const STATIC_SLUGS = [
  'cdh-arduino',
  'cdh-stm32',
  'avionics-altium',
  'avionics-power',
  'additive-manufacturing',
  'adcs-control',
  'remote-sensing-control',
  'agentic-ai-ground-station',
  'ttnc-sdr',
];

export function generateStaticParams() {
  const dynamicSlugs =
    Array.isArray(WORKSHOPS) && WORKSHOPS.length > 0
      ? WORKSHOPS.map((w) => ({ slug: String(w.slug) }))
      : [];

  const allSlugs = Array.from(
    new Set([...dynamicSlugs.map((s) => s.slug), ...STATIC_SLUGS])
  );

  return allSlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

interface PageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export default async function WorkshopDetailPage({ params }: PageProps) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const { slug } = resolvedParams;

  const workshop: Workshop | undefined = WORKSHOPS?.find(
    (w) => w.slug === slug || w.id?.toLowerCase() === slug.toLowerCase()
  );

  if (!workshop) {
    notFound();
  }

  return (
    <Box
      style={{
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
        color: '#1e293b',
        paddingBottom: '5rem',
      }}
      dir="rtl"
    >
      {/* مدیا کوئری‌های صریح و استاندارد برای هندل دسکتاپ و موبایل */}
      <style>{`
        .workshop-layout-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          width: 100%;
        }
        @media (min-width: 900px) {
          .workshop-layout-grid {
            grid-template-columns: 1fr 360px;
            gap: 2.5rem;
            align-items: start;
          }
        }
      `}</style>

      {/* هدر ناوبری / دکمه بازگشت */}
      <Box
        style={{
          borderBottom: '1px solid #e2e8f0',
          backgroundColor: '#ffffff',
          position: 'sticky',
          top: 0,
          zIndex: 20,
        }}
        py="sm"
      >
        <Container size="xl" px={{ base: 'md', sm: 'lg' }}>
          <Link href="/#workshops" style={{ textDecoration: 'none' }}>
            <Button
              variant="subtle"
              color="gray"
              size="sm"
              leftSection={<IconArrowRight size={18} />}
              style={{ color: '#475569', fontWeight: 600 }}
            >
              بازگشت به فهرست کارگاه‌ها
            </Button>
          </Link>
        </Container>
      </Box>

      {/* بخش Hero دوره */}
      <Box
        style={{
          borderBottom: '1px solid #e2e8f0',
          background: 'linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)',
        }}
        py={{ base: 'lg', md: '3rem' }}
      >
        <Container size="xl" px={{ base: 'md', sm: 'lg' }}>
          <div className="workshop-layout-grid">
            {/* ستون راست (محتوای اصلی در دسکتاپ) */}
            <div style={{ width: '100%', minWidth: 0 }}>
              <Group gap="xs" mb="sm" wrap="wrap">
                <Badge
                  size="md"
                  variant="filled"
                  style={{
                    backgroundColor: workshop.color || '#2563eb',
                    color: '#fff',
                    fontWeight: 700,
                  }}
                >
                  {workshop.id}
                </Badge>
                <Badge size="md" variant="light" color="blue">
                  {workshop.category}
                </Badge>
              </Group>

              <Title
                order={1}
                mb="xs"
                style={{
                  color: '#0f172a',
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.3rem)',
                  fontWeight: 800,
                  lineHeight: 1.35,
                }}
              >
                {workshop.title}
              </Title>

              <Text size="md" c="dimmed" mb="md" style={{ fontWeight: 500 }}>
                {workshop.subtitle}
              </Text>

              <Text
                size="sm"
                mb="lg"
                style={{ lineHeight: 1.85, color: '#334155' }}
              >
                {workshop.description}
              </Text>

              {/* هایلایت‌ها */}
              {workshop.highlights && workshop.highlights.length > 0 && (
                <Paper
                  p="md"
                  radius="md"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <Group gap="xs" mb="xs">
                    <IconSparkles size={18} color="#d97706" />
                    <Text fw={700} size="sm" c="dark.7">
                      محورهای کلیدی دوره:
                    </Text>
                  </Group>
                  <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xs">
                    {workshop.highlights.map((h, i) => (
                      <Group key={i} gap="xs" align="flex-start" wrap="nowrap">
                        <ThemeIcon
                          size={18}
                          radius="xl"
                          color="amber"
                          variant="light"
                          mt={2}
                          style={{ flexShrink: 0 }}
                        >
                          <IconChevronLeft size={12} />
                        </ThemeIcon>
                        <Text size="xs" style={{ color: '#475569', lineHeight: 1.6 }}>
                          {h}
                        </Text>
                      </Group>
                    ))}
                  </SimpleGrid>
                </Paper>
              )}
            </div>

            {/* ستون چپ (کارت مشخصات سریع در دسکتاپ) */}
            <div style={{ width: '100%' }}>
              <Paper
                radius="md"
                p="md"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 12px -2px rgba(0, 0, 0, 0.06)',
                  width: '100%',
                }}
              >
                {workshop.heroImage && (
                  <Box
                    mb="md"
                    style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      border: '1px solid #e2e8f0',
                    }}
                  >
                    <Image
                      src={workshop.heroImage}
                      alt={workshop.title}
                      height={170}
                      fallbackSrc="https://placehold.co/600x400/f1f5f9/475569?text=Sepehr+Workshop"
                      style={{ objectFit: 'cover', width: '100%' }}
                    />
                  </Box>
                )}

                <Stack gap="sm">
                  <Group justify="space-between" wrap="nowrap">
                    <Group gap="xs" wrap="nowrap">
                      <IconClock size={16} color="#2563eb" style={{ flexShrink: 0 }} />
                      <Text size="xs" c="dimmed">مدت زمان:</Text>
                    </Group>
                    <Text size="xs" fw={600} c="dark.8">{workshop.hours}</Text>
                  </Group>

                  <Divider color="#f1f5f9" />

                  <Group justify="space-between" wrap="nowrap">
                    <Group gap="xs" wrap="nowrap">
                      <IconCalendar size={16} color="#2563eb" style={{ flexShrink: 0 }} />
                      <Text size="xs" c="dimmed">تاریخ برگزاری:</Text>
                    </Group>
                    <Text size="xs" fw={600} c="dark.8">{workshop.date}</Text>
                  </Group>

                  <Divider color="#f1f5f9" />

                  <Group justify="space-between" wrap="nowrap">
                    <Group gap="xs" wrap="nowrap">
                      <IconClock size={16} color="#2563eb" style={{ flexShrink: 0 }} />
                      <Text size="xs" c="dimmed">ساعت برگزاری:</Text>
                    </Group>
                    <Text size="xs" fw={600} c="dark.8">{workshop.time}</Text>
                  </Group>

                  <Divider color="#f1f5f9" />

                  <Group justify="space-between" wrap="nowrap">
                    <Group gap="xs" wrap="nowrap">
                      <IconMapPin size={16} color="#2563eb" style={{ flexShrink: 0 }} />
                      <Text size="xs" c="dimmed">محل برگزاری:</Text>
                    </Group>
                    <Text size="xs" fw={600} c="dark.8">{workshop.location}</Text>
                  </Group>

                  <Divider color="#f1f5f9" />

                  <Group justify="space-between" wrap="nowrap">
                    <Group gap="xs" wrap="nowrap">
                      <IconUser size={16} color="#2563eb" style={{ flexShrink: 0 }} />
                      <Text size="xs" c="dimmed">مدرس دوره:</Text>
                    </Group>
                    <Text size="xs" fw={600} c="dark.8">{workshop.speaker}</Text>
                  </Group>

                  <Divider color="#f1f5f9" />

                  <Group justify="space-between" wrap="nowrap">
                    <Group gap="xs" wrap="nowrap">
                      <IconCoin size={16} color="#2563eb" style={{ flexShrink: 0 }} />
                      <Text size="xs" c="dimmed">قیمت دوره:</Text>
                    </Group>
                    <Text size="xs" fw={600} c="dark.8">
                      {workshop.price || 'به‌زودی اعلام می‌شود'}
                    </Text>
                  </Group>

                  {workshop.registrationUrl && workshop.status !== 'completed' ? (
                    <Button
                      component="a"
                      href={workshop.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      fullWidth
                      color="blue"
                    >
                      ثبت‌نام دوره
                    </Button>
                  ) : (
                    <Button fullWidth disabled>
                      {workshop.status === 'completed' ? 'ثبت‌نام پایان یافته' : 'لینک ثبت‌نام به‌زودی اعلام می‌شود'}
                    </Button>
                  )}
                </Stack>
              </Paper>
            </div>
          </div>
        </Container>
      </Box>

      {/* بخش سرفصل‌ها، پیش‌نیازها و نیازمندی‌ها */}
      <Container size="xl" mt="2rem" px={{ base: 'md', sm: 'lg' }}>
        <div className="workshop-layout-grid">
          {/* ستون سرفصل‌های کارگاه */}
          <div style={{ width: '100%', minWidth: 0 }}>
            <Group gap="xs" mb="md">
              <IconBook size={22} color="#2563eb" />
              <Title order={2} size="h3" c="dark.8" style={{ fontSize: '1.25rem' }}>
                سرفصل‌های آموزشی کارگاه
              </Title>
            </Group>

            <Stack gap="md">
              {workshop.syllabus && workshop.syllabus.length > 0 ? (
                workshop.syllabus.map((block, bIndex) => (
                  <Card
                    key={bIndex}
                    radius="md"
                    p="md"
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
                      width: '100%',
                    }}
                  >
                    <Group justify="space-between" mb="sm" wrap="wrap" gap="xs">
                      <Title
                        order={3}
                        style={{ fontSize: '1.05rem', color: '#1e40af' }}
                      >
                        {block.title}
                      </Title>
                      {block.duration && (
                        <Badge variant="light" color="blue" size="sm">
                          {block.duration}
                        </Badge>
                      )}
                    </Group>

                    <Stack gap="xs">
                      {block.content.map((item, cIndex) => (
                        <Paper
                          key={cIndex}
                          p="sm"
                          radius="sm"
                          style={{
                            backgroundColor: '#f8fafc',
                            border: '1px solid #e2e8f0',
                          }}
                        >
                          <Text fw={600} size="xs" c="dark.7" mb={6}>
                            {item.subtitle}
                          </Text>

                          <Stack gap={6}>
                            {item.bullets.map((bullet, bulletIdx) => (
                              <Group
                                key={bulletIdx}
                                gap="xs"
                                align="flex-start"
                                wrap="nowrap"
                              >
                                <ThemeIcon
                                  size={16}
                                  radius="xl"
                                  color="blue"
                                  variant="light"
                                  mt={2}
                                  style={{ flexShrink: 0 }}
                                >
                                  <IconChevronLeft size={10} />
                                </ThemeIcon>
                                <Text size="xs" style={{ color: '#475569', lineHeight: 1.6 }}>
                                  {bullet}
                                </Text>
                              </Group>
                            ))}
                          </Stack>
                        </Paper>
                      ))}
                    </Stack>
                  </Card>
                ))
              ) : (
                <Text size="sm" c="dimmed">
                  سرفصل‌های این دوره به‌زودی بارگذاری خواهند شد.
                </Text>
              )}
            </Stack>
          </div>

          {/* ستون پیش‌نیازها و ملزومات */}
          <div style={{ width: '100%' }}>
            <Stack gap="md" style={{ width: '100%' }}>
              {/* کارت پیش‌نیازها */}
              <Card
                radius="md"
                p="md"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
                  width: '100%',
                }}
              >
                <Group gap="xs" mb="xs">
                  <IconListCheck size={18} color="#2563eb" />
                  <Title order={4} size="h4" c="dark.8" style={{ fontSize: '1rem' }}>
                    پیش‌نیازهای دوره
                  </Title>
                </Group>
                <Divider mb="sm" color="#f1f5f9" />
                {workshop.prerequisites && workshop.prerequisites.length > 0 ? (
                  <Stack gap="xs">
                    {workshop.prerequisites.map((p, idx) => (
                      <Group
                        key={idx}
                        gap="xs"
                        align="flex-start"
                        wrap="nowrap"
                      >
                        <IconPointFilled
                          size={12}
                          color="#2563eb"
                          style={{ marginTop: 4, flexShrink: 0 }}
                        />
                        <Text size="xs" style={{ color: '#475569', lineHeight: 1.6 }}>
                          {p}
                        </Text>
                      </Group>
                    ))}
                  </Stack>
                ) : (
                  <Text size="xs" c="dimmed">
                    این دوره پیش‌نیاز خاصی ندارد.
                  </Text>
                )}
              </Card>

              {/* کارت نیازمندی‌ها */}
              <Card
                radius="md"
                p="md"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
                  width: '100%',
                }}
              >
                <Group gap="xs" mb="xs">
                  <IconDeviceLaptop size={18} color="#059669" />
                  <Title order={4} size="h4" c="dark.8" style={{ fontSize: '1rem' }}>
                    تجهیزات و نیازمندی‌ها
                  </Title>
                </Group>
                <Divider mb="sm" color="#f1f5f9" />
                {workshop.requirements && workshop.requirements.length > 0 ? (
                  <Stack gap="xs">
                    {workshop.requirements.map((r, idx) => (
                      <Group
                        key={idx}
                        gap="xs"
                        align="flex-start"
                        wrap="nowrap"
                      >
                        <IconPointFilled
                          size={12}
                          color="#059669"
                          style={{ marginTop: 4, flexShrink: 0 }}
                        />
                        <Text size="xs" style={{ color: '#475569', lineHeight: 1.6 }}>
                          {r}
                        </Text>
                      </Group>
                    ))}
                  </Stack>
                ) : (
                  <Text size="xs" c="dimmed">
                    تجهیزات خاصی ذکر نشده است.
                  </Text>
                )}
              </Card>
            </Stack>
          </div>
        </div>
      </Container>
    </Box>
  );
}
