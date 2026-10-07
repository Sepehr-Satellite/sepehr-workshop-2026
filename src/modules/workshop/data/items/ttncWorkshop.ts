import { getAssetPath } from "@/utils/prefix"
import { Workshop } from "../../types"

export const ttncWorkshop: Workshop =
 {
    id: "W-09",
    slug: "ttnc",
    title: "کارگاه عملی طراحی و پیاده‌سازی لینک TT&C با MATLAB و ADALM-Pluto (SDR)",
    subtitle: "",
    description: "مخاطبان: دانشجویان مهندسی برق، مخابرات، هوافضا و علاقه‌مندان به مخابرات ماهواره‌ای",
    level: "پیشرفته",
    hours: "۱۲ ساعت",
    bgImage: getAssetPath("/images/workshops/comm-bg.jpg"),
    heroImage: getAssetPath("/images/workshops/comm-hero.png"),
    category: "مخابرات و پردازش سیگنال",
    color: "#CAC09E",
    highlights: [
      "مبانی ارتباطات ماهواره‌ای و Link Budget",
      "آشنایی عملی با SDR و ADALM-Pluto",
      "مخابرات دیجیتال و QPSK",
      "همزمان‌سازی Carrier و Timing",
      "سنکرون‌سازی فریم و انجام تله‌متری",
      "پیاده‌سازی یکپارچه لینک TT&C با SDR"
    ],
    date: "21 و 22 آبان 1405",
    price: "5,000,000 تومان",
    time: "9:00 الی 16:00",
    location: "دانشکده هوافضا",
    speaker: "مهندس سینا صفی‌زاده",
    status: "open",
    statusLabel: "ثبت‌نام فعال",
    prerequisites: [
      "آشنایی مقدماتی با سیگنال‌ها و سیستم‌ها، مخابرات و MATLAB"
    ],
    requirements: [
      "MATLAB",
      "Communications Toolbox",
      "DSP System Toolbox",
      "ADALM-Pluto SDR (توسط برگزارکننده تامین می‌شود.)",
      "MATLAB Support for MinGW-w64 C/C++/Fortran Compiler",
      "نکته: حتماً MATLAB R2025b برای حداقل یکی از اعضای گروه نصب باشد."
    ],
    syllabus: [
      {
        title: "بلوک ۱ — مبانی ارتباطات ماهواره‌ای و Link Budget",
        duration: "۲ ساعت",
        content: [
          {
            subtitle: "",
            bullets: [
              "معرفی معماری سامانه‌های ماهواره‌ای",
              "بررسی نقش TT&C",
              "بررسی Uplink و Downlink",
              "بررسی مسیر انتشار سیگنال",
              "بررسی توان فرستنده، بهره آنتن، فاصله، فرکانس و تلفات مسیر",
              "محاسبه و شبیه‌سازی Link Budget در MATLAB",
              "بررسی توان دریافتی، نویز و SNR",
              "بررسی ارتباط SNR با عملکرد سیستم"
            ]
          }
        ]
      },
      {
        title: "بلوک ۲ — آشنایی عملی با SDR و ADALM-Pluto",
        duration: "۲ ساعت",
        content: [
          {
            subtitle: "",
            bullets: [
              "معرفی Software-Defined Radio",
              "آشنایی با معماری ADALM-Pluto",
              "بررسی زنجیره رادیویی،  ADC/DAC و پردازش دیجیتال",
              "دریافت و تحلیل AIS کشتی‌ها با Pluto",
              "دریافت و تحلیل ADS-B هواپیماها با Pluto",
              "دریافت نمونه‌های I/Q",
              "مشاهده سیگنال در حوزه زمان و فرکانس",
              "اجرای FFT و مشاهده Spectrum",
              "تنظیم فرکانس مرکزی و نرخ نمونه‌برداری",
              "تنظیم Gain",
              "تولید Noise",
              "اجرای Loopback"
            ]
          }
        ]
      },
      {
        title: "بلوک ۳ — مخابرات دیجیتال و QPSK",
        duration: "۲ ساعت",
        content: [
          {
            subtitle: "",
            bullets: [
              "بررسی تبدیل اطلاعات به سیگنال قابل انتقال",
              "تولید داده باینری",
              "تبدیل داده به Symbol",
              "معرفی و پیاده‌سازی  QPSK",
              "نمایش Constellation",
              "بررسی اثر Noise و SNR",
              "معرفی و بررسی BER",
              "آشنایی با Pulse Shaping",
              "آشنایی با Matched Filtering",
              "پیاده‌سازی زنجیره TX/RX در MATLAB"
            ]
          }
        ]
      },
      {
        title: "بلوک ۴ — همزمان‌سازی Carrier و Timing",
        duration: "۲ ساعت",
        content: [
          {
            subtitle: "",
            bullets: [
              "بررسی اختلاف کلاک و نوسان‌ساز فرستنده و گیرنده",
              "مشاهده Frequency Offset و Phase Offset",
              "بررسی اثر خطاهای فرکانسی و فازی بر سیگنال و Constellation",
              "تخمین و اصلاح خطای فرکانسی",
              "بررسی Timing Offset",
              "بررسی Matched Filtering",
              "بازیابی زمان صحیح سمبل‌ها",
              "اجرای Carrier Synchronization",
              "اجرای Timing Synchronization و Timing Recovery"
            ]
          }
        ]
      },
      {
        title: "بلوک ۵  — سنکرون‌سازی فریم و انجام تله‌متری",
        duration: "۲ ساعت",
        content: [
          {
            subtitle: "",
            bullets: [
              "معرفی ساختار Frame و Packet",
              "طراحی قالب ساده برای Telemetry ماهواره‌ای",
              "استفاده از Preamble و Sync Word",
              "تشخیص شروع فریم با Cross-Correlation",
              "استخراج Packet",
              "تفکیک Header و Payload",
              "تبدیل داده و بررسی صحت با CRC",
              "طراحی Telemetry شامل: شناسه ماهواره، شماره Packet، ولتاژ باتری، دما وضعیت OBC و Payload",
            ]
          }
        ]
      },
      {
        title: "بلوک ۶ — پیاده‌سازی یکپارچه لینک TT&C با SDR",
        duration: "۲ ساعت",
        content: [
          {
            subtitle: "",
            bullets: [
              "تولید داده وضعیت ماهواره",
              "تبدیل داده به Packet",
              "افزودن CRC",
              "تبدیل داده به Bits",
              "مدولاسیون  QPSK",
              "ارسال توسط Pluto",
              "عبور سیگنال از کانال RF",
              "دریافت توسط Pluto",
              "Filtering",
              "Carrier Synchronization",
              "Timing Synchronization",
              "Demodulation",
              "Frame Detection",
              "استخراج Packet",
              "بررسی CRC",
              "Decode اطلاعات Telemetry",
              "نمایش اطلاعات Telemetry"
            ]
          }
        ]
      }
    ]
  }
