import { getAssetPath } from "@/utils/prefix"
import { Workshop } from "../../types"

export const ttncWorkshop: Workshop =
 {
    id: "W-09",
    slug: "ttnc-sdr",
    title: "مخابرات فضایی (TT&C)",
    subtitle: "طراحی، شبیه‌سازی و پیاده‌سازی فرستنده/گیرنده ماهواره با MATLAB و SDR",
    description: "آموزش جامع زنجیره کامل لینک مخابراتی تله‌متری و تله‌کامند فضایی؛ از محاسبه Link Budget و تحلیل سناریوی ماهواره با Satellite Communications Toolbox تا مدولاسیون BPSK، همزمان‌سازی‌های سه گانه (Timing, Carrier, Frame) و اجرای عملی لینک فرستنده/گیرنده با سخت‌افزار ADALM-Pluto SDR.",
    level: "تخصصی عملی",
    hours: "۱۲ ساعت",
    bgImage: getAssetPath("/images/workshops/comm-bg.jpg"),
    heroImage: getAssetPath("/images/workshops/comm-hero.png"),
    category: "مخابرات و پردازش سیگنال",
    color: "#CAC09E",
    highlights: [
      "محاسبه و تحلیل عملی Link Budget و حاشیه لینک (Link Margin)",
      "مدل‌سازی کانال و سناریوی فضایی با Satellite Communications Toolbox",
      "ارسال و دریافت زنده سیگنال‌های I/Q با سخت‌افزار ADALM-Pluto SDR",
      "پیاده‌سازی الگوریتم‌های همزمان‌سازی زمان، فرکانس حامل و فریم",
      "پیاده‌سازی کامل پروژه‌ محور زنجیره ارسال و دریافت بسته‌های Telemetry"
    ],
    date: "21 و 22 آبان 1405",
    price: "6,000,000 تومان",
    time: "ساعت دقیق اعلام می‌شود",
    location: "دانشکده هوافضا",
    speaker: "مهندس سینا صفی‌زاده",
    status: "open",
    statusLabel: "ثبت‌نام فعال",
    prerequisites: [
      "آشنایی با مبانی پردازش سیگنال‌های دیجیتال (DSP)",
      "آشنایی با مفاهیم اولیه مخابرات دیجیتال و سیگنال‌های I/Q",
      "برنامه‌نویسی مقدماتی در محیط MATLAB"
    ],
    requirements: [
      "لپ‌تاپ شخصی با توان پردازشی مناسب",
      "نرم‌افزار MATLAB به همراه Satellite Communications Toolbox",
      "درایورها و بسته‌های پشتیبانی سخت‌افزاری ADALM-Pluto روی MATLAB",
      "سخت‌افزار رادیو نرم‌افزاری ADALM-Pluto SDR (توسط برگزارکننده تامین می‌شود)"
    ],
    syllabus: [
      {
        title: "بلوک اول: مبانی TT&C، محاسبات Link Budget و شبیه‌سازی در MATLAB",
        duration: "۳.۵ ساعت",
        content: [
          {
            subtitle: "مبانی TT&C، SDR و محاسبات بودجه لینک",
            bullets: [
              "معماری سامانه‌های تله‌متری و تله‌کامند، سیگنال‌های I/Q و تحلیل زمان/فرکانس",
              "محاسبه Link Budget: توان فرستنده، بهره آنتن، تلفات مسیر، SNR، نویز گیرنده و حاشیه لینک (Link Margin)",
              "بررسی ارتباط Link Margin با نرخ خطای بیت (BER) و اثر تغییرات فاصله و فرکانس مداری"
            ]
          },
          {
            subtitle: "کار با Satellite Communications Toolbox و مدولاسیون",
            bullets: [
              "تعریف سناریوی ماهواره و ایستگاه زمینی در toolbox تخصصی متلب",
              "مدل‌سازی کانال ارتباطی، اعتبارسنجی Link Budget و تحلیل عملکرد لینک",
              "تولید داده باینری، مدولاسیون BPSK، بررسی کانستلیشن و تحلیل BER در حضور نویز"
            ]
          }
        ]
      },
      {
        title: "بلوک دوم: راه‌اندازی ADALM-Pluto و الگوریتم‌های همزمان‌سازی (Synchronization)",
        duration: "۳.۵ ساعت",
        content: [
          {
            subtitle: "راه‌اندازی SDR و همزمان‌سازی زمان و حامل",
            bullets: [
              "آشنایی با زنجیره TX/RX برد ADALM-Pluto و برقراری اولین لینک واقعی RF در MATLAB",
              "بازیابی زمان سمبل‌ها (Timing Synchronization) با فیلتر تطبیقی و رفع خطای زمانی",
              "همزمان‌سازی فرکانس حامل (Carrier Synchronization)، تخمین و اصلاح خطای فرکانسی و فازی"
            ]
          },
          {
            subtitle: "همزمان‌سازی فریم (Frame Synchronization)",
            bullets: [
              "طراحی الگوی پیشوند (Preamble) جهت همزمان‌سازی سطح فریم",
              "تشخیص شروع فریم با استفاده از همبستگی متقابل (Cross-Correlation)",
              "استخراج صحیح پکت‌های داده فضایی از میان جریان سیگنال دریافتی"
            ]
          }
        ]
      },
      {
        title: "بلوک سوم: پیاده‌سازی کامل لینک TT&C و پروژه عملی نهایی",
        duration: "۳ ساعت",
        content: [
          {
            subtitle: "زنجیره کامل ارسال و دریافت تله‌متری",
            bullets: [
              "تولید داده‌های تله‌متری، مدولاسیون، ارسال، دریافت RF با Pluto، همزمان‌سازی و دکودینگ پکت",
              "مقایسه نتایج عملی لینک واقعی با مقادیر پیش‌بینی‌شده توسط Link Budget"
            ]
          },
          {
            subtitle: "اجرای پروژه نهایی ماهواره",
            bullets: [
              "طراحی، ارسال و دریافت یک بسته تله‌متری کامل شامل ولتاژ باتری، دما، شناسه ماهواره و وضعیت OBC/Payload",
              "ارزیابی عملکرد کامل زنجیره ارسال و دریافت، عیب‌یابی خطاهای لینک و جمع‌بندی کارگاه"
            ]
          }
        ]
      }
    ]
  }