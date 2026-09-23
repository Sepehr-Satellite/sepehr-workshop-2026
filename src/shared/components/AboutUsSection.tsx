import React from 'react';
import {
  Box,
  Container,
  Title,
  Text,
  Badge,
  Group,
  Stack,
  SimpleGrid,
  Paper,
  Divider,
} from '@mantine/core';
import {
  IconRocket,
  IconSparkles,
  IconSatellite,
} from '@tabler/icons-react';

const WORKSHOP_IMAGES = [
  '/images/gallery/ws_gallery_1.jpg',
  '/images/gallery/ws_gallery_2.jpg',
  '/images/gallery/ws_gallery_3.jpg',
  '/images/gallery/ws_gallery_4.jpg',
];
export default function AboutUsSection() {
  return (
    <Box
      component="section"
      id="about-us"
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#0f172a',
        padding: '4.5rem 0',
        minHeight: '620px',
        display: 'flex',
        alignItems: 'center',
      }}
      dir="rtl"
    >
      {/* استایل انیمیشن ممتد و روان بیلبورد */}
      <style>{`
        @keyframes marqueeRTL {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(50%);
          }
        }

        .marquee-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }

        .marquee-inner {
          display: flex;
          width: max-content;
          height: 100%;
          animation: marqueeRTL 30s linear infinite;
        }

        .marquee-group {
          display: flex;
          align-items: center;
          gap: 20px;
          padding-left: 20px;
          height: 100%;
          flex-shrink: 0;
        }

        .marquee-card {
          width: 580px;
          height: 92%;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25);
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .marquee-card {
            width: 320px;
            height: 85%;
          }
          .marquee-group {
            gap: 12px;
            padding-left: 12px;
          }
        }
      `}</style>

      {/* ================= پس‌زمینه متحرک بیلبورد ================= */}
      <div className="marquee-container" style={{ opacity: 0.9 }}>
        <div className="marquee-inner">
          {/* گروه ۱ */}
          <div className="marquee-group">
            {WORKSHOP_IMAGES.map((imgSrc, idx) => (
              <div key={`g1-${idx}`} className="marquee-card">
                <img
                  src={imgSrc}
                  alt={`کارگاه ${idx + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            ))}
          </div>

          {/* گروه ۲ برای لوپ نامرئی */}
          <div className="marquee-group" aria-hidden="true">
            {WORKSHOP_IMAGES.map((imgSrc, idx) => (
              <div key={`g2-${idx}`} className="marquee-card">
                <img
                  src={imgSrc}
                  alt={`کارگاه ${idx + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= کارت شیشه‌ای نیمه‌شفاف شامل عنوان و محتوا ================= */}
      <Container size="lg" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <Paper
          radius="2rem"
          p={{ base: '1.8rem', sm: '2.8rem' }}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.85)', // شفافیت شیشه‌ای
            backdropFilter: 'blur(1px)',                  // محو کردن پشت کادر
            WebkitBackdropFilter: 'blur(1px)',
            border: '1px solid rgba(255, 255, 255, 0)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0)',
          }}
        >
          {/* بخش عنوان و زیرنویس داخلی */}
          <Stack align="center" gap="xs" mb="1.8rem">
            <Title
              order={2}
              style={{
                fontSize: 'clamp(1.7rem, 3.2vw, 2.3rem)',
                color: '#0f172a',
                fontWeight: 800,
                textAlign: 'center',
              }}
            >
             گروه فضایی سپهر
            </Title>

            <Text
              size="md"
              style={{
                maxWidth: 680,
                textAlign: 'center',
                color: '#334155',
                fontWeight: 600,
                lineHeight: 1.8,
              }}
            >
             پیشگام آموزش‌های عملیاتی و مهندسی فضایی
            </Text>
          </Stack>

          <Divider mb="2rem" color="rgba(0, 0, 0, 0.08)" />

          {/* محتوای ستونی دوگانه */}
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: 'xl', md: '2.5rem' }}>
            {/* ستون ما چه کار می‌کنیم */}
            <Stack gap="sm">
              <Group gap="xs">
                <IconSparkles size={24} color="#2563eb" />
                <Title order={3} size="h3" style={{ color: '#0f172a', fontWeight: 700 }}>
                  ما چه کار می‌کنیم؟
                </Title>
              </Group>
              <Text size="sm" style={{ color: '#1e293b', lineHeight: 2, textAlign: 'justify', fontWeight: 500 }}>
                <strong>گروه فضایی سپهر</strong> بستری برای تجمیع دانش طراحی ماهواره، مخابرات فضایی
                و سامانه‌های اویونیک است. تمرکز ما بر یادگیری عمیق از طریق پروژه‌های عملی و آزمایشگاهی
                است.
              </Text>
              <Text size="sm" style={{ color: '#1e293b', lineHeight: 2, textAlign: 'justify', fontWeight: 500 }}>
                شرکت‌کنندگان مستقیماً با سخت‌افزارهای صنعتی نظیر میکروکنترلرهای ARM، رادیوهای نرم‌افزاری (SDR)
                و زیرسیستم‌های واقعی ماهواره کار می‌کنند.
              </Text>
            </Stack>

            {/* ستون هدف و مأموریت ما */}
            <Stack gap="sm">
              <Group gap="xs">
                <IconRocket size={24} color="#059669" />
                <Title order={3} size="h3" style={{ color: '#0f172a', fontWeight: 700 }}>
                  هدف و مأموریت ما
                </Title>
              </Group>
              <Text size="sm" style={{ color: '#1e293b', lineHeight: 2, textAlign: 'justify', fontWeight: 500 }}>
                پر کردن فاصله میان فضای آکادمیک و صنعت هوافضا رسالت اصلی ماست. کارگاه‌های تخصصی طراحی
                ماهواره‌های مکعبی (CubeSat) فرصتی برای ورود مستقیم به پروژه‌های فضایی کشور فراهم می‌سازند.
              </Text>

            </Stack>
          </SimpleGrid>
        </Paper>
      </Container>
    </Box>
  );
}
