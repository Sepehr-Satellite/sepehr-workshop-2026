'use client';

import React from 'react';
import Image from 'next/image';
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Badge,
} from '@mantine/core';
import { IconRocket, IconChevronLeft } from '@tabler/icons-react';

export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '5rem 0 6rem',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
      }}
    >
      <Container size="xl">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '3.5rem',
          }}
        >
          {/* Right Column: Text & CTA Content (RTL) */}
          <Stack gap="xl">
            <Badge
              size="lg"
              variant="light"
              color="blue"
              leftSection={<IconRocket size={16} />}
              style={{
                width: 'fit-content',
                fontWeight: 600,
                padding: '12px 16px',
                borderRadius: '9999px',
              }}
            >
              هفته جهانی فضا • گروه فضایی سپهر شریف
            </Badge>

            <div>
              <Title
                order={1}
                style={{
                  fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                  fontWeight: 900,
                  lineHeight: 1.25,
                  color: '#0f172a',
                  marginBottom: '1rem',
                }}
              >
                کارگاه‌های تخصصی <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #1d4ed8 0%, #0284c7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  مهندسی ماهواره و فضایی
                </span>
              </Title>

              <Text
                size="lg"
                style={{
                  color: '#475569',
                  lineHeight: 1.85,
                  maxWidth: '560px',
                  fontWeight: 400,
                }}
              >
                سلسله کارگاه‌های عملی و کاربردی جهت آشنایی و ورود به صنعت فضایی، 
                طراحی ماهواره‌های کیوب‌ست، سیستم‌های ناوبری، و مخابرات پیشرفته فضایی.
              </Text>
            </div>

            <Group gap="md">
              <Button
                component="a"
                href="#workshops"
                size="lg"
                color="blue"
                rightSection={<IconChevronLeft size={18} />}
                style={{
                  borderRadius: '12px',
                  fontWeight: 700,
                  boxShadow: '0 10px 25px -5px rgba(29, 78, 216, 0.3)',
                  height: '52px',
                  paddingInline: '28px',
                }}
              >
                مشاهده کارگاه‌ها
              </Button>

              <Button
                component="a"
                href="#about"
                variant="subtle"
                color="gray"
                size="lg"
                style={{
                  borderRadius: '12px',
                  fontWeight: 600,
                  height: '52px',
                  paddingInline: '24px',
                }}
              >
                درباره رویداد
              </Button>
            </Group>
          </Stack>

          {/* Left Column: Direct Image (No Box / Border / Container) */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              minHeight: '400px',
            }}
          >
            {/* Subtle light ambient glow behind the satellite */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                width: '75%',
                height: '75%',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
                filter: 'blur(40px)',
                pointerEvents: 'none',
              }}
            />

            {/* Satellite Image */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '520px',
                aspectRatio: '1 / 1',
                filter: 'drop-shadow(0 20px 35px rgba(15, 23, 42, 0.12))',
              }}
            >
              <Image
                src="/logo.svg"
                alt="مدل ماهواره کیوب‌ست"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
