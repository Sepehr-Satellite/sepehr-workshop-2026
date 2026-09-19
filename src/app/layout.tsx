import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core';
import { Vazirmatn } from 'next/font/google';
import Header from '@/shared/components/Header';
import Footer from '@/shared/components/Footer';

// تعریف فونت فارسی استاندارد Next.js
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
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
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
        <MantineProvider theme={theme} defaultColorScheme="light">
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
