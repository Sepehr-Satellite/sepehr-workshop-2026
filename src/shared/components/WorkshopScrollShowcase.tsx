'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconArrowLeft, IconCircleCheck, IconClock } from '@tabler/icons-react';
import { WORKSHOPS } from '@/modules/workshop/data/workshops';

const HEADER_HEIGHT = 72;

export default function WorkshopScrollShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) {
      return;
    }

    // The narrow center band selects whichever content-sized slide occupies
    // the middle of the showcase, independent of that slide's total height.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));

            if (!Number.isNaN(index)) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: scrollContainer,
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0,
      }
    );

    slideRefs.current.forEach((slide) => {
      if (slide) {
        observer.observe(slide);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSlide = (index: number) => {
    const scrollContainer = scrollContainerRef.current;
    const slide = slideRefs.current[index];

    if (scrollContainer && slide) {
      scrollContainer.scrollTo({
        top: slide.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box
      ref={scrollContainerRef}
      className="workshop-scroll-showcase"
      data-testid="workshop-scroll-showcase"
      style={{
        position: 'relative',
        height: `calc(100dvh - ${HEADER_HEIGHT}px)`,
        minHeight: '520px',
        overflowY: 'auto',
        overflowX: 'hidden',
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
        scrollPaddingBlock: '1px',
        backgroundColor: '#05070d',
      }}
    >
      <Box
        aria-label="Workshop slides"
        style={{
          position: 'sticky',
          top: '50%',
          height: 0,
          zIndex: 20,
          pointerEvents: 'none',
        }}
      >
        <Box
          style={{
            position: 'absolute',
            right: '24px',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            pointerEvents: 'auto',
          }}
        >
          {WORKSHOPS.map((workshop, index) => (
            <button
              key={`dot-${workshop.slug}`}
              type="button"
              aria-label={`Go to workshop ${index + 1}: ${workshop.title}`}
              aria-current={activeIndex === index ? 'step' : undefined}
              onClick={() => scrollToSlide(index)}
              style={{
                width: activeIndex === index ? '8px' : '6px',
                height: activeIndex === index ? '32px' : '8px',
                padding: 0,
                border: 0,
                borderRadius: '999px',
                backgroundColor:
                  activeIndex === index ? workshop.color : 'rgba(255,255,255,0.32)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: activeIndex === index ? `0 0 12px ${workshop.color}` : 'none',
              }}
            />
          ))}
        </Box>
      </Box>

      {WORKSHOPS.map((workshop, index) => {
        const isActive = activeIndex === index;

        return (
          <Box
            component="section"
            key={workshop.slug}
            ref={(element: HTMLElement | null) => {
              slideRefs.current[index] = element;
            }}
            data-index={index}
            data-workshop-slide={workshop.slug}
            style={{
              position: 'relative',
              isolation: 'isolate',
              display: 'flex',
              alignItems: 'center',
              minHeight: '100%',
              boxSizing: 'border-box',
              paddingBlock: 'clamp(32px, 6vh, 72px)',
              overflow: 'hidden',
              scrollSnapAlign: 'start',
              scrollSnapStop: 'always',
            }}
          >
            <Box
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: -3,
                backgroundImage: `url(${workshop.bgImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                opacity: isActive ? 1 : 0.78,
                transform: isActive ? 'scale(1)' : 'scale(1.02)',
                filter: 'brightness(0.48) contrast(1.15)',
                transition:
                  'opacity 1.15s cubic-bezier(0.22, 1, 0.36, 1), transform 1.4s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            />
            <Box
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: -2,
                background:
                  'linear-gradient(to bottom, rgba(5, 7, 13, 0.5) 0%, transparent 15%, transparent 85%, rgba(5, 7, 13, 0.5) 100%), radial-gradient(circle at center, rgba(5, 7, 13, 0.18) 0%, rgba(5, 7, 13, 0.88) 92%)',
              }}
            />

            <Container size="xl" w="100%" px={{ base: 'xl', md: 48 }}>
              <Grid align="center" gap={{ base: 32, md: 60 }}>
                <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: 1 }}>
                  <Box
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        width: 'min(320px, 70vw)',
                        height: 'min(320px, 70vw)',
                        borderRadius: '50%',
                        background: workshop.color,
                        opacity: isActive ? 0.3 : 0,
                        filter: 'blur(90px)',
                        transition: 'opacity 1s cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                    />
                    <Box
                      style={{
                        width: '100%',
                        maxWidth: '460px',
                        transform: isActive ? 'translateY(0) scale(1)' : 'translateY(14px) scale(0.98)',
                        opacity: isActive ? 1 : 0.42,
                        transition:
                          'opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 1s cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                    >
                      <Image
                        src={workshop.heroImage}
                        alt={workshop.title}
                        fallbackSrc="https://placehold.co/600x450/1e293b/fff?text=CubeSat+Hardware"
                        style={{
                          maxHeight: 'min(400px, 42vh)',
                          objectFit: 'contain',
                          filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.7))',
                        }}
                      />
                    </Box>
                  </Box>
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: 2 }}>
                  <Stack
                    gap="md"
                    style={{
                      opacity: isActive ? 1 : 0.4,
                      transform: isActive ? 'translateX(0)' : 'translateX(14px)',
                      transition:
                        'opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 1s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    <Group justify="space-between" align="center">
                      <Badge
                        size="lg"
                        radius="sm"
                        style={{ backgroundColor: workshop.color, color: '#fff' }}
                      >
                        کارگاه {workshop.id || `۰${index + 1}`} • {workshop.category}
                      </Badge>
                      <Text size="sm" c="gray.5" fw={600}>
                        {index + 1} / {WORKSHOPS.length}
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

                    {workshop.highlights.length > 0 && (
                      <Stack gap="xs" mt="xs">
                        {workshop.highlights.map((highlight) => (
                          <Group key={highlight} gap="xs" wrap="nowrap" align="flex-start">
                            <IconCircleCheck
                              size={16}
                              style={{ color: workshop.color, flexShrink: 0, marginTop: 3 }}
                            />
                            <Text size="sm" c="gray.3">
                              {highlight}
                            </Text>
                          </Group>
                        ))}
                      </Stack>
                    )}

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
            </Container>
          </Box>
        );
      })}
    </Box>
  );
}
