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
  Divider,
  Box,
} from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons-react';

export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(3rem, 6vw, 5.5rem) 0 clamp(3.5rem, 7vw, 6.5rem)',
        background: '#fafbfd',
        backgroundImage: `
          radial-gradient(#cbd5e1 0.75px, transparent 0.75px),
          radial-gradient(circle at 85% 20%, rgba(37, 99, 235, 0.07) 0%, transparent 50%),
          radial-gradient(circle at 15% 80%, rgba(14, 165, 233, 0.05) 0%, transparent 45%)
        `,
        backgroundSize: '24px 24px, 100% 100%, 100% 100%',
      }}
      dir="rtl"
    >
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: 3.5rem;
        }

        .hero-stack {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          align-items: flex-start;
          text-align: right;
        }

        .hero-cta-group {
          display: flex;
          gap: 1rem;
        }

        .hero-cta-btn {
          height: 52px;
          border-radius: 14px;
        }

        .hero-stats-group {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e2e8f0;
          margin-top: 0.5rem;
        }

        .hero-stats-divider {
          display: block;
        }

        .hero-logo-box {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 320px;
        }

        .hero-logo-item {
          position: relative;
          flex: 1;
          height: 170px;
          filter: drop-shadow(0 12px 24px rgba(15, 23, 42, 0.07));
        }

        .orbital-ring {
          position: absolute;
          top: 50%;
          left: 20%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          pointer-events: none;
        }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            text-align: center;
          }

          .hero-stack {
            align-items: center;
            text-align: center;
          }

          .hero-cta-group {
            flex-direction: column;
            width: 100%;
          }

          .hero-cta-btn {
            width: 100% !important;
          }

          .hero-stats-group {
            justify-content: space-around;
            gap: 0.75rem;
          }

          .hero-logo-box {
            min-height: 180px;
            order: -1;
          }

          .hero-logo-item {
            height: 110px;
          }

          .orbital-ring {
            left: 50%;
            opacity: 0.6;
          }
        }

        @media (max-width: 480px) {
          .hero-stats-group {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
            text-align: center;
          }
          .hero-stats-divider {
            display: none !important;
          }
        }
      `}</style>

      {/* حلقه‌های مداری ریسپانسیو */}
      <div
        aria-hidden="true"
        className="orbital-ring"
        style={{
          width: 'clamp(320px, 60vw, 650px)',
          height: 'clamp(320px, 60vw, 650px)',
          border: '1px dashed rgba(148, 163, 184, 0.25)',
        }}
      />
      <div
        aria-hidden="true"
        className="orbital-ring"
        style={{
          width: 'clamp(420px, 80vw, 850px)',
          height: 'clamp(420px, 80vw, 850px)',
          border: '1px solid rgba(148, 163, 184, 0.12)',
        }}
      />

      <Container size="xl" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-grid">
          {/* ستون راست (یا اصلی) */}
          <div className="hero-stack">
            <Box style={{ width: '100%' }}>
              <Title
                order={1}
                style={{
                  fontSize: 'clamp(1.75rem, 5vw, 3.2rem)',
                  fontWeight: 900,
                  lineHeight: 1.3,
                  color: '#0f172a',
                  marginBottom: '1rem',
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
                  lineHeight: 1.85,
                  maxWidth: '560px',
                  fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)',
                  marginInline: 'auto',
                }}
              >
                از طراحی مفهومی تا پیاده‌سازی زیرسیستم‌های کیوب‌ست،
                مخابرات فضایی، و ایستگاه‌های زمینی هوشمند.
              </Text>
            </Box>

            {/* دکمه‌های اقدام */}
            <div className="hero-cta-group" style={{ width: '100%' }}>
              <Button
                component="a"
                href="#workshops"
                size="lg"
                color="blue"
                rightSection={<IconChevronLeft size={18} />}
                className="hero-primary-cta hero-cta-btn"
                style={{
                  fontWeight: 700,
                  boxShadow: '0 12px 28px -6px rgba(29, 78, 216, 0.35)',
                  paddingInline: '28px',
                }}
              >
                مشاهده کارگاه‌ها
              </Button>

              <Button
                component="a"
                href="#schedule"
                onClick={(event) => {
                  event.preventDefault();
                  document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  window.history.replaceState(null, '', '#schedule');
                }}
                className="hero-secondary-cta hero-cta-btn"
                variant="default"
                size="lg"
                style={{
                  fontWeight: 600,
                  paddingInline: '24px',
                  backgroundColor: '#ffffff',
                  borderColor: '#e2e8f0',
                }}
              >
                برنامه زمان‌بندی
              </Button>
            </div>

            {/* نوار آمار سریع */}
            <div className="hero-stats-group" style={{ width: '100%' }}>
              <div>
                <Text fw={800} size="xl" c="blue.7" style={{ fontSize: 'clamp(1.15rem, 3.5vw, 1.4rem)' }}>
                  ۹ کارگاه
                </Text>
                <Text size="xs" c="dimmed" fw={500}>
                  تخصصی و مهارتی
                </Text>
              </div>

              <Divider orientation="vertical" className="hero-stats-divider" />

              <div>
                <Text fw={800} size="xl" c="blue.7" style={{ fontSize: 'clamp(1.15rem, 3.5vw, 1.4rem)' }}>
                  +۵۰ ساعت
                </Text>
                <Text size="xs" c="dimmed" fw={500}>
                  آموزش پروژه‌محور
                </Text>
              </div>

              <Divider orientation="vertical" className="hero-stats-divider" />

              <div>
                <Text fw={800} size="xl" c="blue.7" style={{ fontSize: 'clamp(1.15rem, 3.5vw, 1.4rem)' }}>
                  گواهی رسمی
                </Text>
                <Text size="xs" c="dimmed" fw={500}>
                  مرکز رشد شریف
                </Text>
              </div>
            </div>
          </div>

          {/* ستون لوگوها */}
          <div className="hero-logo-box">
            <Group
              gap="md"
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
              <div className="hero-logo-item">
                <Image
                  src={getAssetPath('/logo.svg')}
                  alt="لوگوی گروه فضایی سپهر"
                  fill
                  priority
                  sizes="(max-width: 768px) 40vw, 25vw"
                  style={{ objectFit: 'contain' }}
                />
              </div>

              {/* خط جداکننده */}
              <Divider
                orientation="vertical"
                color="#cbd5e1"
                style={{
                  height: '80px',
                  alignSelf: 'center',
                  borderRightWidth: '1.5px',
                }}
              />

              {/* لوگوی سازمان همکار */}
              <div className="hero-logo-item">
                <Image
                  src={getAssetPath('/sharif-logo.svg')}
                  alt="لوگوی سازمان همکار"
                  fill
                  priority
                  sizes="(max-width: 768px) 40vw, 25vw"
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
