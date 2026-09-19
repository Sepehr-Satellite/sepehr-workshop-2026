// src/shared/components/WorkshopTimeline.tsx
'use client';

import React from 'react';
import { Container, Title, Text, Badge, Group } from '@mantine/core';
import { IconMapPin } from '@tabler/icons-react';
import { WORKSHOPS, type Workshop } from '@/modules/workshop/data/workshops';

export default function WorkshopTimeline() {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
      <Container size="lg">
        <div style={{ position: 'relative', margin: '0 auto', maxWidth: '900px' }}>
          
          {/* Central Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              backgroundColor: '#e2e8f0',
              zIndex: 1,
            }}
          />

          {/* Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {WORKSHOPS.map((workshop, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={workshop.id}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start', // تراز از بالا برای جلوگیری از به‌هم‌ریختگی
                    justifyContent: 'center',
                    position: 'relative',
                    width: '100%',
                  }}
                >
                  {/* --- ستون سمت راست (حاوی تاریخ یا محتوا) --- */}
                  <div style={{ width: '40%', paddingLeft: '2rem', textAlign: isEven ? 'left' : 'right' }}>
                    {isEven ? <DateBadge date={workshop.date} time={workshop.time} /> : <WorkshopContent w={workshop} />}
                  </div>

                  {/* --- گره مرکزی --- */}
                  <div
                    style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      backgroundColor: '#fff',
                      border: '3px solid #1a2238',
                      zIndex: 2,
                      marginTop: '5px',
                    }}
                  />

                  {/* --- ستون سمت چپ (حاوی تاریخ یا محتوا) --- */}
                  <div style={{ width: '40%', paddingRight: '2rem', textAlign: isEven ? 'right' : 'left' }}>
                    {isEven ? <WorkshopContent w={workshop} /> : <DateBadge date={workshop.date} time={workshop.time} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

// کامپوننت‌های کمکی برای تمیزی کد
const DateBadge = ({ date, time }: { date: string, time: string }) => (
  <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '4px' }}>
    <span style={{ backgroundColor: '#f8fafc', padding: '4px 12px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600 }}>{date}</span>
    <Text size="xs" c="dimmed">{time}</Text>
  </div>
);

const WorkshopContent = ({ w }: { w: Workshop }) => (
  <div>
    <Title order={4} style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{w.title}</Title>
    <Text size="xs" c="gray.6" mb="xs">{w.subtitle}</Text>
    <Group gap="xs">
      <Badge size="xs" variant="light" color={w.status === 'open' ? 'teal' : 'orange'}>{w.statusLabel}</Badge>
      <Text size="xs" c="dimmed" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
        <IconMapPin size={12} /> {w.location}
      </Text>
    </Group>
  </div>
);
