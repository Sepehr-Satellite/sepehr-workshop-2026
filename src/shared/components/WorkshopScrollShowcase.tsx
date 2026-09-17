'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Title,
  Text,
  Badge,
  Button,
  Stack,
  Group,
  Grid,
  Image,
  rem,
} from '@mantine/core';
import { IconArrowLeft, IconClock, IconCircleCheck } from '@tabler/icons-react';
import { WORKSHOPS } from '@/modules/workshop/data/workshops';

export default function WorkshopScrollShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: null,
        // Active zone is centered in middle 20% of viewport for precise triggers
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      }
    );

    triggerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const currentWorkshop = WORKSHOPS[activeIndex] || WORKSHOPS[0];

  return (
    <Box style={{ position: 'relative', backgroundColor: '#05070d' }}>
      {/* ============================================================ */}
      {/* 1. STICKY VIEWPORT LAYER: Handles background & object cross-fade */}
      {/* ============================================================ */}
      <Box
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        {/* A. Background Atmosphere Transitions */}
        {WORKSHOPS.map((workshop, idx) => {
          const isActive = activeIndex === idx;
          return (
            <Box
              key={`bg-${workshop.slug}`}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: isActive ? 1 : 0,
                transform: isActive ? 'scale(1)' : 'scale(1.08)',
                transition: 'opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s ease-out',
                backgroundImage: `url(${workshop.bgImage || workshop.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.35) contrast(1.15)',
              }}
            />
          );
        })}

        {/* B. Ambient Overlay Gradients */}
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at center, rgba(5, 7, 13, 0.2) 0%, rgba(5, 7, 13, 0.85) 90%)',
          }}
        />

        {/* C. The Fixed Stage: Floating Hero Objects & Content Cross-Fade */}
        <Container
          size="xl"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            pointerEvents: 'auto',
          }}
        >
          <Box style={{ width: '100%', position: 'relative', minHeight: '520px' }}>
            {WORKSHOPS.map((workshop, idx) => {
              const isActive = activeIndex === idx;

              return (
                <Box
                  key={`stage-${workshop.slug}`}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: isActive ? 1 : 0,
                    // In-and-Out 3D translation
                    transform: isActive
                      ? 'translateY(0) scale(1)'
                      : activeIndex > idx
                      ? 'translateY(-60px) scale(0.96)'
                      : 'translateY(60px) scale(0.96)',
                    pointerEvents: isActive ? 'auto' : 'none',
                    transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <Grid align="center" gutter={{ base: 30, md: 60 }} style={{ height: '100%' }}>
                    {/* Left/Hero Object Column: The 3D Hardware/Model */}
                    <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: 1 }}>
                      <Box
                        style={{
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {/* Glow halo colored specifically for this workshop */}
                        <Box
                          style={{
                            position: 'absolute',
                            width: '320px',
                            height: '320px',
                            borderRadius: '50%',
                            background: workshop.color,
                            opacity: isActive ? 0.3 : 0,
                            filter: 'blur(90px)',
                            transition: 'opacity 0.8s ease',
                          }}
                        />

                        {/* Foreground Hero Image with float effect */}
                        <Box
                          style={{
                            transform: isActive ? 'scale(1) rotate(0deg)' : 'scale(0.85) rotate(-3deg)',
                            transition: 'transform 0.85s cubic-bezier(0.2, 0.8, 0.2, 1)',
                            maxWidth: '460px',
                            width: '100%',
                          }}
                        >
                          <Image
                            src={workshop.heroImage || workshop.image}
                            alt={workshop.title}
                            fallbackSrc="https://placehold.co/600x450/1e293b/fff?text=CubeSat+Hardware"
                            style={{
                              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.7))',
                              objectFit: 'contain',
                              maxHeight: '400px',
                            }}
                          />
                        </Box>
                      </Box>
                    </Grid.Col>

                    {/* Right Column: Workshop Title, Subtitle, Highlights & Action */}
                    <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: 2 }}>
                      <Stack
                        gap="md"
                        style={{
                          transform: isActive ? 'translateX(0)' : 'translateX(30px)',
                          transition: 'transform 0.65s cubic-bezier(0.2, 0.8, 0.2, 1)',
                        }}
                      >
                        <Group justify="space-between" align="center">
                          <Badge
                            size="lg"
                            radius="sm"
                            style={{
                              backgroundColor: workshop.color,
                              color: '#fff',
                            }}
                          >
                            کارگاه {workshop.id || `۰${idx + 1}`} • {workshop.category}
                          </Badge>
                          <Text size="sm" c="gray.5" fw={600}>
                            {idx + 1} / {WORKSHOPS.length}
                          </Text>
                        </Group>

                        <Title
                          order={2}
                          size="clamp(1.8rem, 3.2vw, 2.6rem)"
                          fw={900}
                          c="white"
                          lh={1.2}
                        >
                          {workshop.title}
                        </Title>

                        <Text size="lg" fw={600} style={{ color: workshop.color }}>
                          {workshop.subtitle}
                        </Text>

                        <Text size="sm" c="gray.3" lh={1.8} maw={520}>
                          {workshop.description}
                        </Text>

                        {/* Bullet Highlights */}
                        {workshop.highlights && (
                          <Stack gap="xs" mt="xs">
                            {workshop.highlights.map((h, i) => (
                              <Group key={i} gap="xs">
                                <IconCircleCheck size={16} style={{ color: workshop.color }} />
                                <Text size="sm" c="gray.3">
                                  {h}
                                </Text>
                              </Group>
                            ))}
                          </Stack>
                        )}

                        {/* Action Bar */}
                        <Group mt="lg" gap="md">
                          <Button
                            component={Link}
                            href={`/workshops/${workshop.slug}`}
                            size="lg"
                            radius="md"
                            style={{
                              backgroundColor: workshop.color,
                              boxShadow: `0 10px 25px ${workshop.color}50`,
                            }}
                            rightSection={<IconArrowLeft size={18} />}
                          >
                            مشاهده سرفصل‌ها و ثبت‌نام
                          </Button>

                          <Group gap="xs">
                            <IconClock size={18} style={{ color: workshop.color }} />
                            <Text size="sm" c="gray.4" fw={500}>
                              مدت: {workshop.hours}
                            </Text>
                          </Group>
                        </Group>
                      </Stack>
                    </Grid.Col>
                  </Grid>
                </Box>
              );
            })}
          </Box>
        </Container>

        {/* D. Vertical Progress Indicator (Right Edge) */}
        <Box
          style={{
            position: 'absolute',
            right: '24px',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            pointerEvents: 'auto',
            zIndex: 10,
          }}
        >
          {WORKSHOPS.map((w, idx) => (
            <Box
              key={`dot-${w.slug}`}
              onClick={() => {
                triggerRefs.current[idx]?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                width: activeIndex === idx ? '8px' : '5px',
                height: activeIndex === idx ? '32px' : '8px',
                borderRadius: '999px',
                backgroundColor: activeIndex === idx ? w.color : 'rgba(255,255,255,0.25)',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: activeIndex === idx ? `0 0 12px ${w.color}` : 'none',
              }}
            />
          ))}
        </Box>
      </Box>

      {/* ============================================================ */}
      {/* 2. INVISIBLE SCROLL TIMELINE: Empty sections driving the scroll */}
      {/* ============================================================ */}
      <Box style={{ position: 'relative', zIndex: 2, marginTop: '-100vh' }}>
        {WORKSHOPS.map((workshop, idx) => (
          <Box
            key={`trigger-${workshop.slug}`}
            ref={(el: HTMLDivElement | null) => {
              triggerRefs.current[idx] = el;
            }}
            data-index={idx}
            style={{
              height: '110vh', // Slightly more than 100vh gives user breathing room per workshop
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
