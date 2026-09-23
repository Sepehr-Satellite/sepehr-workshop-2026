// src/shared/components/WorkshopTimeline.tsx
'use client';

import React from 'react';
import { Container, Title } from '@mantine/core';
import { WORKSHOPS, type Workshop } from '@/modules/workshop/data/workshops';

export default function WorkshopTimeline() {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#ffffff' }} dir="rtl">
      <style>{`
        .desktop-layout { display: block; }
        .mobile-layout { display: none; }

        @media (max-width: 768px) {
          .desktop-layout { display: none; }
          .mobile-layout { display: block; }

          .mobile-timeline {
            position: relative;
            padding-right: 28px;
            padding-left: 8px;
          }

          .mobile-timeline::before {
            content: '';
            position: absolute;
            top: 10px;
            bottom: 10px;
            right: 6px;
            width: 2px;
            background-color: #e2e8f0;
          }

          .mobile-item {
            position: relative;
            margin-bottom: 2.5rem;
          }

          .mobile-item:last-child {
            margin-bottom: 0.5rem;
          }

          .mobile-dot {
            position: absolute;
            right: -28px;
            top: 4px;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: #ffffff;
            border: 3px solid #1a2238;
            z-index: 2;
          }
        }
      `}</style>

      <Container size="lg" style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* ═══════════ لایه دسکتاپ (زیگزاگی) ═══════════ */}
        <div className="desktop-layout">
          <div style={{ position: 'relative' }}>
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

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
              {WORKSHOPS.map((workshop, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={workshop.id}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      position: 'relative',
                      width: '100%',
                    }}
                  >
                    {/* ستون راست */}
                    <div
                      style={{
                        width: '45%',
                        paddingLeft: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        textAlign: 'right',
                      }}
                    >
                      {isEven ? (
                        <DateTimeInfo date={workshop.date} time={workshop.time} align="end" />
                      ) : (
                        <WorkshopContent w={workshop} align="end" />
                      )}
                    </div>

                    {/* گره مرکزی */}
                    <div
                      style={{
                        width: '16px',
                        height: '16px',
                        minWidth: '16px',
                        borderRadius: '50%',
                        backgroundColor: '#fff',
                        border: '3px solid #1a2238',
                        zIndex: 2,
                        marginTop: '4px',
                      }}
                    />

                    {/* ستون چپ */}
                    <div
                      style={{
                        width: '45%',
                        paddingRight: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        textAlign: 'right',
                      }}
                    >
                      {isEven ? (
                        <WorkshopContent w={workshop} align="start" />
                      ) : (
                        <DateTimeInfo date={workshop.date} time={workshop.time} align="start" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ═══════════ لایه موبایل (ساده و بدون بج) ═══════════ */}
        <div className="mobile-layout">
          <div className="mobile-timeline">
            {WORKSHOPS.map((workshop) => (
              <div key={workshop.id} className="mobile-item">
                <div className="mobile-dot" />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {/* تاریخ و ساعت ساده متنی بدون بج */}
                  <div
                    style={{
                      fontSize: '0.85rem',
                      color: '#475569',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <span>{workshop.date}</span>
                    <span style={{ color: '#cbd5e1' }}>•</span>
                    <span style={{ direction: 'rtl', unicodeBidi: 'isolate' }}>
                      {formatPersianTime(workshop.time)}
                    </span>
                  </div>

                  {/* عنوان کارگاه */}
                  <Title
                    order={4}
                    style={{
                      fontSize: '1.02rem',
                      lineHeight: 1.8,
                      fontWeight: 800,
                      color: '#0f172a',
                      margin: 0,
                    }}
                  >
                    {workshop.title}
                  </Title>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─────────── تابع فرمت درست ساعت به صورت «۰۹:۰۰ الی ۱۷:۰۰» ─────────── */
function formatPersianTime(rawTime: string) {
  if (!rawTime) return '';
  // حذف کاراکترهای اضافه و تمیزکاری فاصله‌ها
  const clean = rawTime.replace(/[\u200B-\u200D\uFEFF]/g, '').trim();
  
  // اگر شامل تا یا الی یا خط تیره بود فرمت استاندارد راست‌به‌چپ می‌سازد
  const parts = clean.split(/[-–—]|الی|تا/).map((s) => s.trim());
  if (parts.length === 2) {
    return `${parts[0]} الی ${parts[1]}`;
  }
  return clean;
}

/* ─────────── کامپوننت‌های کمکی ─────────── */
const DateTimeInfo = ({
  date,
  time,
  align,
}: {
  date: string;
  time: string;
  align: 'start' | 'end';
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      alignItems: align === 'end' ? 'flex-end' : 'flex-start',
    }}
  >
    <span
      style={{
        fontSize: '0.95rem',
        fontWeight: 700,
        color: '#0f172a',
      }}
    >
      {date}
    </span>
    <span
      style={{
        fontSize: '0.85rem',
        color: '#64748b',
        fontWeight: 600,
        direction: 'rtl',
        unicodeBidi: 'isolate',
      }}
    >
      {formatPersianTime(time)}
    </span>
  </div>
);

const WorkshopContent = ({ w, align }: { w: Workshop; align: 'start' | 'end' }) => (
  <div style={{ textAlign: align === 'end' ? 'left' : 'right', width: '100%' }}>
    <Title
      order={4}
      style={{
        fontSize: '1.1rem',
        lineHeight: 1.75,
        fontWeight: 800,
        color: '#0f172a',
        margin: 0,
      }}
    >
      {w.title}
    </Title>
  </div>
);
