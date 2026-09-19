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
    slug: "cdh-arduino",
    title: "کامپیوتر پرواز (C&DH)",
    subtitle: "طراحی پردازنده اصلی CubeSat با میکروکنترلر STM32",
    description: "معماری سخت‌افزار و نرم‌افزار OBC ماهواره، پروتکل‌های صنعتی I2C/SPI/CAN، پیاده‌سازی FreeRTOS و مکانیزم‌های تحمل خطای فضایی.",
    level: "مقدماتی",
    hours: "4",
    bgImage: "/images/workshops/cdh-arduino-bg.png",
    heroImage: "/images/workshops/cdh-arduino-hero.png",
    category: "سیستم‌های نهفته",
    color: "#10b981",
    highlights: ["برنامه‌نویسی FreeRTOS", "مدیریت پایپ‌لاین داده‌های سنسوری", "سیستم بازیابی خطا"],
  },
  {
    id: "W-02",
    slug: "cdh-stm32",
    title: "کامپیوتر پرواز (C&DH)",
    subtitle: "طراحی پردازنده اصلی CubeSat با میکروکنترلر STM32",
    description: "معماری سخت‌افزار و نرم‌افزار OBC ماهواره، پروتکل‌های صنعتی I2C/SPI/CAN، پیاده‌سازی FreeRTOS و مکانیزم‌های تحمل خطای فضایی.",
    level: "پیشرفته",
    hours: "۱۲ ساعت",
    bgImage: "/images/workshops/cdh-stm32-bg2.png",
    heroImage: "/images/workshops/cdh-stm32-hero.jpg",
    category: "سیستم‌های نهفته",
    color: "#10b981",
    highlights: ["برنامه‌نویسی FreeRTOS", "مدیریت پایپ‌لاین داده‌های سنسوری", "سیستم بازیابی خطا"],
  },
  {
    id: "W-03",
    slug: "avionics-altium",
    title: "دوره مقدماتی Altium Designer",
    subtitle: "ساخت شماتیک و طراحی PCB",
    description: "",
    level: "پیشرفته",
    hours: "8 ساعت",
    bgImage: "/images/workshops/avionics-altium-bg.png",
    heroImage: "/images/workshops/avionics-altium-hero.png",
    category: "سیستم‌های نهفته",
    color: "#d3af27",
    highlights: ["برنامه‌نویسی FreeRTOS", "مدیریت پایپ‌لاین داده‌های سنسوری", "سیستم بازیابی خطا"],
  },
  {
    id: "W-04",
    slug: "avionics-power",
    title: "دوره مقدماتی Altium Designer",
    subtitle: "ساخت شماتیک و طراحی PCB",
    description: "",
    level: "پیشرفته",
    hours: "8 ساعت",
    bgImage: "/images/workshops/avionics-altium-bg.png",
    heroImage: "/images/workshops/avionics-altium-hero.png",
    category: "سیستم‌های نهفته",
    color: "#d3af27",
    highlights: ["برنامه‌نویسی FreeRTOS", "مدیریت پایپ‌لاین داده‌های سنسوری", "سیستم بازیابی خطا"],
  },
  {
    id: "W-05",
    slug: "additive-manufacturing",
    title: "دوره مقدماتی Altium Designer",
    subtitle: "ساخت شماتیک و طراحی PCB",
    description: "",
    level: "پیشرفته",
    hours: "8 ساعت",
    bgImage: "/images/workshops/avionics-altium-bg.png",
    heroImage: "/images/workshops/avionics-altium-hero.png",
    category: "سیستم‌های نهفته",
    color: "#d3af27",
    highlights: ["برنامه‌نویسی FreeRTOS", "مدیریت پایپ‌لاین داده‌های سنسوری", "سیستم بازیابی خطا"],
  },
  {
    id: "W-06",
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
  {
    id: "W-07",
    slug: "remote-sensing-control",
    title: "مقدمه‌ای بر سنجش از دور و محموله‌های تصویربرداری فضایی",
    subtitle: "از سنسور تا استخراج داده‌های زمین‌شناختی",
    description: "مدل‌سازی دینامیک مداری و وضعیت ۳ محوره ماهواره، الگوریتم B-Dot برای میراسازی زاویه‌ای و درایو مغناطیس‌سنج‌ها و چرخ‌های عکس‌العملی.",
    level: "پیشرفته",
    hours: "8 ساعت",
    bgImage: "/images/workshops/remote-sensing-bg.png",
    heroImage: "/images/workshops/remote-sensing-hero.png",
    category: "محموله فضایی",
    color: "#55f7d7",
    highlights: ["هندسه و اپتیک سنجش از دور", "پیاده‌سازی محموله با ESP32-CAM", "شبیه‌سازی ماموریت رصدی", " استانداردسازی داده‌های فضایی"," تحلیل‌های چندطیفی و شاخص‌های محیطی","پردازش داده‌های ماهواره‌های واقعی"],
  },
  {
    id: "W-08",
    slug: "Agentic with AI",
    title: "مقدمه‌ای بر سنجش از دور و محموله‌های تصویربرداری فضایی",
    subtitle: "از سنسور تا استخراج داده‌های زمین‌شناختی",
    description: "مدل‌سازی دینامیک مداری و وضعیت ۳ محوره ماهواره، الگوریتم B-Dot برای میراسازی زاویه‌ای و درایو مغناطیس‌سنج‌ها و چرخ‌های عکس‌العملی.",
    level: "پیشرفته",
    hours: "8 ساعت",
    bgImage: "/images/workshops/remote-sensing-bg.png",
    heroImage: "/images/workshops/remote-sensing-hero.png",
    category: "محموله فضایی",
    color: "#55f7d7",
    highlights: ["هندسه و اپتیک سنجش از دور", "پیاده‌سازی محموله با ESP32-CAM", "شبیه‌سازی ماموریت رصدی", " استانداردسازی داده‌های فضایی"," تحلیل‌های چندطیفی و شاخص‌های محیطی","پردازش داده‌های ماهواره‌های واقعی"],
  },
  {
    id: "W-09",
    slug: "ttnc-sdr",
    title: "مخابرات فضایی (TT&C)",
    subtitle: "پیاده‌سازی فرستنده/گیرنده ماهواره با ADALM-Pluto SDR",
    description: "در این کارگاه زنجیره کامل لینک مخابراتی فضایی، شبیه‌سازی مدولاسیون‌های FSK/QPSK در متلب و دریافت زنده تله‌متری با رادیو نرم‌افزاری اجرا می‌شود.",
    level: "تخصصی عملی",
    hours: "۱۰ ساعت",
    bgImage: "/images/workshops/comm-bg.jpg",
    heroImage: "/images/workshops/comm-hero.png", // PNG with transparent or clean cutout
    category: "مخابرات و پردازش سیگنال",
    color: "#6366f1",
    highlights: ["کار با برد SDR ADALM-Pluto", "پردازش سیگنال در MATLAB", "محاسبات Link Budget"],
  },
  
];
