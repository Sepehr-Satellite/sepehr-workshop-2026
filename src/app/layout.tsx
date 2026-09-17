// src/app/layout.tsx
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core';
import { Vazirmatn } from 'next/font/google';
import './globals.css';

const vazir = Vazirmatn({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-vazir',
});

const theme = createTheme({
  fontFamily: vazir.style.fontFamily,
  headings: {
    fontFamily: vazir.style.fontFamily,
  },
  primaryColor: 'indigo',
});

export const metadata = {
  title: 'هفته جهانی فضا | سلسله کارگاه‌های تخصصی شرکت سپهر',
  description: '۹ کارگاه تخصصی و عملی طراحی زیرسیستم‌های ماهواره - دانشگاه صنعتی شریف',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={vazir.className} suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body className="bg-white text-slate-900 antialiased" style={{ margin: 0 }}>
        <MantineProvider theme={theme} defaultColorScheme="light">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
