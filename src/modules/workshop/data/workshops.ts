// src/data/workshops.ts

export interface Workshop {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  level: string;
  hours: string;
  bgImage: string;   // Fullscreen ambient background
  heroImage: string; // Foreground 3D hardware / model
  category: string;
  color: string;
  highlights: string[];
}

export const WORKSHOPS: Workshop[] = [
  {
    id: "W-01",
    slug: "ttnc-sdr",
    title: "مخابرات فضایی (TT&C)",
    subtitle: "پیاده‌سازی فرستنده/گیرنده ماهواره با ADALM-Pluto SDR",
    description: "در این کارگاه زنجیره کامل لینک مخابراتی فضایی، شبیه‌سازی مدولاسیون‌های FSK/QPSK در متلب و دریافت زنده تله‌متری با رادیو نرم‌افزاری اجرا می‌شود.",
    level: "تخصصی عملی",
    hours: "۱۰ ساعت",
    bgImage: "/images/workshops/ttnc-bg.jpg",
    heroImage: "/images/workshops/ttnc-hero.png", // PNG with transparent or clean cutout
    category: "مخابرات و پردازش سیگنال",
    color: "#6366f1",
    highlights: ["کار با برد SDR ADALM-Pluto", "پردازش سیگنال در MATLAB", "محاسبات Link Budget"],
  },
  {
    id: "W-02",
    slug: "cdh-stm32",
    title: "کامپیوتر پرواز (C&DH)",
    subtitle: "طراحی پردازنده اصلی CubeSat با میکروکنترلر STM32",
    description: "معماری سخت‌افزار و نرم‌افزار OBC ماهواره، پروتکل‌های صنعتی I2C/SPI/CAN، پیاده‌سازی FreeRTOS و مکانیزم‌های تحمل خطای فضایی.",
    level: "پیشرفته",
    hours: "۱۲ ساعت",
    bgImage: "/images/workshops/stm32-bg.jpg",
    heroImage: "/images/workshops/stm32-hero.png",
    category: "سیستم‌های نهفته",
    color: "#10b981",
    highlights: ["برنامه‌نویسی FreeRTOS", "مدیریت پایپ‌لاین داده‌های سنسوری", "سیستم بازیابی خطا"],
  },
  {
    id: "W-03",
    slug: "adcs-control",
    title: "تعیین و کنترل وضعیت (ADCS)",
    subtitle: "شبیه‌سازی دینامیک فضایی و الگوریتم‌های نشانه روی",
    description: "مدل‌سازی دینامیک مداری و وضعیت ۳ محوره ماهواره، الگوریتم B-Dot برای میراسازی زاویه‌ای و درایو مغناطیس‌سنج‌ها و چرخ‌های عکس‌العملی.",
    level: "پیشرفته",
    hours: "۱۰ ساعت",
    bgImage: "/images/workshops/adcs-bg.png",
    heroImage: "/images/workshops/adcs-hero.png",
    category: "کنترل و دینامیک",
    color: "#a855f7",
    highlights: ["شبیه‌سازی کامل در Simulink", "کالیبراسیون IMU فضایی", "تست شبیه‌ساز گشتاوردهنده"],
  },
  // Add the remaining 6 workshops using the same structure...
];
