'use client';

import React from 'react';
import { getAssetPath } from '@/utils/prefix';
import Image from 'next/image';
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Divider,
} from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons-react';

export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '5.5rem 0 6.5rem',
        background: '#fafbfd',
        backgroundImage: `
          radial-gradient(#cbd5e1 0.75px, transparent 0.75px),
          radial-gradient(circle at 85% 20%, rgba(37, 99, 235, 0.07) 0%, transparent 50%),
          radial-gradient(circle at 15% 80%, rgba(14, 165, 233, 0.05) 0%, transparent 45%)
        `,
        backgroundSize: '24px 24px, 100% 100%, 100% 100%',
      }}
    >
      {/* حلقه‌های مداری تقویت‌شده و واضح‌تر (Orbital Rings) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '25%',
          transform: 'translate(-50%, -50%)',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          border: '1px dashed rgba(148, 163, 184, 0.25)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '25%',
          transform: 'translate(-50%, -50%)',
          width: '850px',
          height: '850px',
          borderRadius: '50%',
          border: '1px solid rgba(148, 163, 184, 0.12)',
          pointerEvents: 'none',
        }}
      />
      <Container size="xl" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '4rem',
          }}
        >
          {/* ستون راست: عنوان، توضیحات، دکمه‌ها و آمار */}
          <Stack gap="xl">
            <div>
              <Title
                order={1}
                style={{
                  fontSize: 'clamp(2.3rem, 4.3vw, 3.7rem)',
                  fontWeight: 900,
                  lineHeight: 1.25,
                  color: '#0f172a',
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.02em',
                }}
              >
                مجموعه کارگاه‌های تخصصی <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #1d4ed8 0%, #0284c7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  فناوری و مهندسی ماهواره
                </span>
              </Title>

              <Text
                size="lg"
                style={{
                  color: '#475569',
                  lineHeight: 1.9,
                  maxWidth: '560px',
                  fontSize: '1.05rem',
                }}
              >
                مسیر جامع و کاربردی از طراحی مفهومی تا پیاده‌سازی زیرسیستم‌های کیوب‌ست،
                مخابرات فضایی، و ایستگاه‌های زمینی هوشمند با تکیه بر تجارب صنعتی.
              </Text>
            </div>

            {/* دکمه‌های CTA */}
            <Group gap="md">
              <Button
                component="a"
                href="#workshops"
                size="lg"
                color="blue"
                rightSection={<IconChevronLeft size={18} />}
                style={{
                  borderRadius: '14px',
                  fontWeight: 700,
                  boxShadow: '0 12px 28px -6px rgba(29, 78, 216, 0.35)',
                  height: '52px',
                  paddingInline: '28px',
                }}
              >
                مشاهده کارگاه‌ها
              </Button>

              <Button
                component="a"
                href="#schedule"
                variant="default"
                size="lg"
                style={{
                  borderRadius: '14px',
                  fontWeight: 600,
                  height: '52px',
                  paddingInline: '24px',
                  backgroundColor: '#ffffff',
                  borderColor: '#e2e8f0',
                }}
              >
                برنامه زمان‌بندی
              </Button>
            </Group>

            {/* نوار آمار سریع */}
            <Group
              gap="xl"
              style={{
                paddingTop: '1.5rem',
                borderTop: '1px solid #e2e8f0',
                marginTop: '0.5rem',
              }}
            >
              <div>
                <Text fw={800} size="xl" c="blue.7">
                  ۹ کارگاه
                </Text>
                <Text size="xs" c="dimmed" fw={500}>
                  تخصصی و مهارتی
                </Text>
              </div>

              <Divider orientation="vertical" />

              <div>
                <Text fw={800} size="xl" c="blue.7">
                  +۵۰ ساعت
                </Text>
                <Text size="xs" c="dimmed" fw={500}>
                  آموزش پروژه‌محور
                </Text>
              </div>

              <Divider orientation="vertical" />

              <div>
                <Text fw={800} size="xl" c="blue.7">
                  گواهی رسمی
                </Text>
                <Text size="xs" c="dimmed" fw={500}>
                  معتبر دوزبانه
                </Text>
              </div>
            </Group>
          </Stack>

          {/* ستون چپ: نمایش مستقیم و شناور دو لوگو بدون کانتینر محصورکننده */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              minHeight: '340px',
            }}
          >
            <Group
              gap={{ base: 'lg', sm: '2.5rem' }}
              align="center"
              justify="center"
              wrap="nowrap"
              style={{
                position: 'relative',
                zIndex: 2,
                width: '100%',
                maxWidth: '540px',
              }}
            >
              {/* لوگوی گروه فضایی سپهر */}
              <div
                style={{
                  position: 'relative',
                  flex: 1,
                  height: '180px',
                  filter: 'drop-shadow(0 12px 24px rgba(15, 23, 42, 0.07))',
                }}
              >
                <Image
                  src={getAssetPath('/logo.svg')}
                  alt="لوگوی گروه فضایی سپهر"
                  fill
                  priority
                  sizes="(max-width: 768px) 50vw, 30vw"
                  style={{ objectFit: 'contain' }}
                />
              </div>

              {/* خط جداکننده مدرن */}
              <Divider
                orientation="vertical"
                color="#cbd5e1"
                style={{
                  height: '110px',
                  alignSelf: 'center',
                  borderRightWidth: '1.5px',
                }}
              />

              {/* لوگوی سازمان همکار */}
              <div
                style={{
                  position: 'relative',
                  flex: 1,
                  height: '180px',
                  filter: 'drop-shadow(0 12px 24px rgba(15, 23, 42, 0.07))',
                }}
              >
                <Image
                  src={getAssetPath('/sharif-logo.svg')}
                  alt="لوگوی سازمان همکار"
                  fill
                  priority
                  sizes="(max-width: 768px) 50vw, 30vw"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </Group>
          </div>
        </div>
      </Container>
    </section>
  );
}
