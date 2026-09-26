export interface SyllabusContent {
  subtitle: string;
  bullets: string[];
}

export interface SyllabusBlock {
  title: string;
  duration: string;
  content: SyllabusContent[];
}

export interface Workshop {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  level: string;
  hours: string;
  bgImage: string;
  heroImage: string;
  category: string;
  color: string;
  highlights: string[];
  date: string;
  time: string;
  location: string;
  speaker: string;
  price?: string;
  registrationUrl?: string;
  status: 'open' | 'filling' | 'completed';
  statusLabel: string;
  prerequisites: string[];
  // فیلدهای جدیدی که اضافه کردیم:
  requirements: string[];
  syllabus: SyllabusBlock[];
}
