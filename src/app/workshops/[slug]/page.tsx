import { notFound } from 'next/navigation';
import { WORKSHOPS } from '@/modules/workshop/data/workshops';
import NavButton from '@/shared/components/NavButton'; // استفاده از کامپوننت کلاینتی که ساختیم
import {
  Container,
  Title,
  Text,
  Paper,
  Group,
  Badge,
  Stack,
  ThemeIcon,
  SimpleGrid,
} from '@mantine/core';
import {
  IconClock,
  IconMapPin,
  IconUser,
  IconCheck,
  IconArrowRight,
} from '@tabler/icons-react';

// تولید استاتیک مسیرها
export async function generateStaticParams() {
  return WORKSHOPS.map((w) => ({
    slug: w.slug,
  }));
}

export default async function WorkshopDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const workshop = WORKSHOPS.find((w) => w.slug === slug);

  if (!workshop) {
    notFound();
  }

  const isCompleted = workshop.status === 'completed';

  return (
    <div style={{ paddingTop: '3rem', paddingBottom: '6rem', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <Container size="lg">
        {/* دکمه بازگشت */}
        <div style={{ marginBottom: '2rem' }}>
          <NavButton
            href="/#timeline"
            variant="subtle"
            color="gray"
            leftSection={<IconArrowRight size={18} />}
          >
            بازگشت به برنامه کارگاه‌ها
          </NavButton>
        </div>

        {/* هدر */}
        <div style={{ marginBottom: '2.5rem' }}>
          <Badge color={workshop.color || 'blue'} size="lg" variant="light" mb="md" radius="md">
            {workshop.category}
          </Badge>
          <Title order={1} style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, color: '#0f172a', marginBottom: '1rem' }}>
            {workshop.title}
          </Title>
          <Text size="lg" c="dimmed" style={{ maxWidth: '800px', lineHeight: 1.7 }}>
            {workshop.subtitle}
          </Text>
        </div>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="2rem">
          {/* ستون اصلی */}
          <div style={{ gridColumn: 'span 2' }}>
            <Paper shadow="xs" p={{ base: 'lg', md: 'xl' }} withBorder style={{ borderRadius: '16px', backgroundColor: '#ffffff' }}>
              <Title order={3} mb="md" style={{ color: '#1e293b' }}>درباره کارگاه</Title>
              <Text style={{ lineHeight: 1.9, fontSize: '1.05rem', color: '#334155', whiteSpace: 'pre-line' }}>
                {workshop.description}
              </Text>

              {workshop.highlights && workshop.highlights.length > 0 && (
                <>
                  <Title order={3} mt="2.5rem" mb="1.25rem" style={{ color: '#1e293b' }}>سرفصل‌ها</Title>
                  <Stack gap="sm">
                    {workshop.highlights.map((item, index) => (
                      <Group key={index} align="flex-start" wrap="nowrap" gap="sm" style={{ padding: '0.5rem 0', borderBottom: index !== workshop.highlights.length - 1 ? '1px dashed #f1f5f9' : 'none' }}>
                        <ThemeIcon color={workshop.color || 'blue'} size={24} radius="xl" variant="light" style={{ flexShrink: 0, marginTop: '2px' }}>
                          <IconCheck size={14} />
                        </ThemeIcon>
                        <Text size="md" style={{ color: '#475569', lineHeight: 1.6 }}>{item}</Text>
                      </Group>
                    ))}
                  </Stack>
                </>
              )}
            </Paper>
          </div>

          {/* سایدبار */}
          <div>
            <Paper shadow="sm" p="xl" withBorder style={{ borderRadius: '16px', backgroundColor: '#ffffff', position: 'sticky', top: '2rem' }}>
              <Title order={4} mb="lg" style={{ color: '#0f172a' }}>مشخصات برگزاری</Title>
              <Stack gap="lg">
                <InfoItem icon={<IconClock size={20} />} label="زمان برگزاری" value={`${workshop.date} | ساعت ${workshop.time}`} />
                <InfoItem icon={<IconMapPin size={20} />} label="مکان برگزاری" value={workshop.location} />
                <InfoItem icon={<IconUser size={20} />} label="مدرس" value={workshop.speaker} />
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1.25rem', marginTop: '0.5rem' }}>
                  <Text size="xs" c="dimmed" mb="xs">وضعیت کارگاه:</Text>
                  <div style={{ padding: '0.6rem', textAlign: 'center', backgroundColor: isCompleted ? '#f1f5f9' : '#f0fdf4', borderRadius: '8px', color: isCompleted ? '#64748b' : '#15803d', fontWeight: 600 }}>
                    {workshop.statusLabel || (isCompleted ? 'برگزار شده' : 'ثبت‌نام')}
                  </div>
                </div>
              </Stack>
            </Paper>
          </div>
        </SimpleGrid>
      </Container>
    </div>
  );
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <Group align="flex-start" gap="sm" wrap="nowrap">
      <ThemeIcon color="gray" variant="light" size={36} radius="md" style={{ flexShrink: 0 }}>{icon}</ThemeIcon>
      <div>
        <Text size="xs" c="dimmed" fw={500}>{label}</Text>
        <Text fw={600} size="sm" style={{ color: '#1e293b', marginTop: '2px' }}>{value}</Text>
      </div>
    </Group>
  );
}
