// src/components/Hero.tsx
'use client';

import { 
  Container, 
  Title, 
  Text, 
  Stack, 
  Group, 
  Badge, 
  Button, 
  Box, 
  SimpleGrid,
  Paper
} from '@mantine/core';
import { 
  IconRocket, 
  IconChevronDown, 
  IconSatellite, 
  IconCpu, 
  IconAward, 
  IconBuildingArch 
} from '@tabler/icons-react';

export default function Hero() {
  return (
    <Box 
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
        paddingBottom: '70px',
        background: 'radial-gradient(ellipse 80% 50% at 50% -15%, rgba(67, 56, 202, 0.25), transparent 70%), #090D16',
        borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
      }}
    >
      <Container size="lg">
        <Stack align="center" ta="center" gap="xl">
          
          {/* Top Pill / Status */}
          <Group gap="xs">
            <Paper
              radius="xl"
              px="md"
              py={6}
              style={{
                background: 'rgba(30, 41, 59, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Group gap="xs">
                <Box
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: '#10B981',
                    boxShadow: '0 0 10px #10B981',
                  }}
                />
                <Text size="sm" fw={600} c="slate.200">
                  هفته جهانی فضا ۱۴۰۳ • دانشگاه صنعتی شریف
                </Text>
              </Group>
            </Paper>

            <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} size="lg" radius="xl">
              شرکت سپهر
            </Badge>
          </Group>

          {/* Main Title */}
          <Box maw={900}>
            <Title
              order={1}
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                fontWeight: 900,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
              }}
            >
              طراحی، ساخت و تست ماهواره
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #818CF8 0%, #38BDF8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                از آزمایشگاه تا مدار عملیاتی
              </span>
            </Title>
          </Box>

          {/* Subtitle */}
          <Text
            size="xl"
            maw={760}
            c="dimmed"
            lh={1.7}
            style={{ fontSize: '1.15rem' }}
          >
            سلسله رویداد جامع ۹ کارگاه فنی تخصصی در تمام زیرسیستم‌های اصلی فضاپیما؛
            اویونیک، کامپیوتر پرواز (C&DH)، مخابرات فضایی با SDR، کنترل وضعیت (ADCS) و هوش مصنوعی.
          </Text>

          {/* Key Quick Tags */}
          <Group justify="center" gap="xs" maw={850}>
            {[
              'Altium Designer',
              'STM32 Flight MCU',
              'ADALM-Pluto SDR',
              'سیستم‌های توان EPS',
              'شبیه‌سازی ADCS',
              'سنجش از دور (Payload)',
              'پرینت ۳بعدی فضایی',
              'AI-Assist در مهندسی',
            ].map((tag) => (
              <Badge 
                key={tag} 
                variant="outline" 
                color="gray" 
                radius="sm"
                styles={{
                  root: { borderColor: 'rgba(255, 255, 255, 0.15)', color: '#CBD5E1' }
                }}
              >
                {tag}
              </Badge>
            ))}
          </Group>

          {/* Call to Actions */}
          <Group mt="md" gap="md">
            <Button
              component="a"
              href="#catalog"
              size="lg"
              color="indigo"
              radius="md"
              rightSection={<IconRocket size={20} />}
              style={{
                boxShadow: '0 4px 20px rgba(99, 102, 241, 0.35)',
              }}
            >
              مشاهده سرفصل‌ها و انتخاب کارگاه
            </Button>

            <Button
              component="a"
              href="#details"
              size="lg"
              variant="default"
              radius="md"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(255, 255, 255, 0.12)',
              }}
            >
              برنامه زمانی رویداد
            </Button>
          </Group>

          {/* Stats Ribbon */}
          <SimpleGrid 
            cols={{ base: 2, sm: 4 }} 
            spacing="lg" 
            mt={40} 
            w="100%" 
            maw={920}
          >
            {[
              { icon: IconRocket, title: '۹ کارگاه تخصصی', subtitle: 'پوشش کامل زیرسیستم‌ها' },
              { icon: IconBuildingArch, title: 'دانشگاه صنعتی شریف', subtitle: 'میزبان و همکار علمی' },
              { icon: IconCpu, title: 'تجهیزات سخت‌افزاری واقعی', subtitle: 'SDR, STM32 & 3D Lab' },
              { icon: IconAward, title: 'گواهی رسمی سپهر', subtitle: 'دوزبانه با کد پیگیری' },
            ].map((stat, idx) => (
              <Paper
                key={idx}
                p="md"
                radius="md"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  textAlign: 'right',
                }}
              >
                <stat.icon size={24} color="#818CF8" style={{ marginBottom: 8 }} />
                <Text fw={700} size="sm" c="white">
                  {stat.title}
                </Text>
                <Text size="xs" c="dimmed">
                  {stat.subtitle}
                </Text>
              </Paper>
            ))}
          </SimpleGrid>

        </Stack>
      </Container>
    </Box>
  );
}
