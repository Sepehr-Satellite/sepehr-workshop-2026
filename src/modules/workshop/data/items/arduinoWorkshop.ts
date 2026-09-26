import { getAssetPath } from "@/utils/prefix"
import { Workshop } from "../../types"

export const arduinoWorkshop: Workshop =
  {
    id: "W-01",
    slug: "cdh-arduino",
    title: "دوره آموزش Arduino با محوریت کامپیوتر پرواز (C&DH)",
    subtitle: "توسعه نرم‌افزار زیرسیستم C&DH بر بستر Arduino",
    description: "آموزش مفاهیم پایه توسعه سیستم‌های امبدد",
    level: "مقدماتی",
    hours: "۶ ساعت",
    bgImage: getAssetPath("/images/workshops/cdh-arduino-bg.png"),
    heroImage: getAssetPath("/images/workshops/cdh-arduino-hero.png"),
    category: "سیستم‌های نهفته",
    color: "#27969C",
    highlights: ["آشنایی با ساختار برنامه‌نویسی و مفاهیم اولیه","آشنایی با Command و Telemetry", "Scheduler", "ابزارهای ارتباطی GPIO, I2C, UART", "خوانش سنسور"],
    date: "23 مهر 1405",
    price: "3,000,000 تومان",
    time: "ساعت دقیق اعلام می‌شود",
    location: "دانشکده هوافضا",
    speaker: "رهام کاوه‌ای",
    status: "open",
    statusLabel: "ثبت‌نام فعال",
    
    // داده‌های جدید اضافه شده:
    prerequisites: ["علاقه به برنامه‌نویسی سیستم‌های نهفته"],
    requirements: ["نرم‌افزار ArduinoIDE"],
    syllabus: [
      {
        title: "بلوک اول: مفاهیم پایه و راه‌اندازی",
        duration: "۲ ساعت",
        content: [
          {
            subtitle: "مفاهیم کلی زیر سیستم OBC و ارتباطات",
            bullets: [
              "وظایف زیر سیستم OBC در ماهواره",
              "نحوه باز کردن ایستگاه زمینی (GS) و ارسال کامند",
              "مشاهده تلمتری دریافتی روی ماهواره Primary"
            ]
          },
          {
            subtitle: "راه‌اندازی میکروکنترلر",
            bullets: [
              "مفاهیم ابتدایی میکروکنترلر",
              "ستاپ Arduino IDE",
              "پیاده‌سازی مثال LED Blinker",
              "Pulse Width Modulation"
            ]
          }
        ]
      },
      {
        title: "بلوک دوم: برنامه‌نویسی پیشرفته و ارتباطات",
        duration: "۲ ساعت",
        content: [
          {
            subtitle: "مدیریت تسک‌ها و زمان‌بندی",
            bullets: [
              "مفهوم Scheduler در برنامه‌نویسی نهفته",
              "به‌کارگیری Scheduler برای مدیریت یک task"
            ]
          },
          {
            subtitle: "ارتباطات و سنسورها",
            bullets: [
              "یادگیری پروتکل UART",
              "یادگیری پروتکل I2C",
              "راه‌اندازی سنسور AHT10 به وسیله I2C"
            ]
          }
        ]
      }
    ]
  }
