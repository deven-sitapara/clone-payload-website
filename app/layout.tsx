import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Deven Sitapara | Software Consultant',
  description: 'Personal portfolio showcasing my work and expertise in software development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen text-white bg-black">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
          <Header />
          <main className="min-h-[80vh]">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}