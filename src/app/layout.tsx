import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { Vazirmatn } from 'next/font/google';
import Header from '@/shared/components/Header';
import Footer from '@/shared/components/Footer';

// فونت وزیرمتن
const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  display: 'swap',
  variable: '--font-vazirmatn',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const theme = createTheme({
  fontFamily: 'var(--font-vazirmatn), system-ui, -apple-system, sans-serif',
  headings: {
    fontFamily: 'var(--font-vazirmatn), system-ui, -apple-system, sans-serif',
    fontWeight: '800',
  },
  primaryColor: 'blue',
});

export const metadata = {
  title: 'رویداد هفته جهانی فضا | گروه فضایی سپهر شریف',
  description: 'سلسله کارگاه‌های تخصصی مهندسی ماهواره و سامانه‌های فضایی دانشگاه صنعتی شریف',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={vazirmatn.variable}
      data-mantine-color-scheme="light"
      suppressHydrationWarning
    >
      <head />
      <body
        className={vazirmatn.className}
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: '#f8fafc',
          fontFamily: 'var(--font-vazirmatn), system-ui, sans-serif',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        {/* با قرار دادن forceColorScheme="light" تم بدون اسکریپت‌های اضافی روی لایت قفل می‌شود */}
        <MantineProvider theme={theme} forceColorScheme="light">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <Header />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
