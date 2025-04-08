import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Script from 'next/script';

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
        <ThemeProvider defaultTheme="dark">
          <Header />
          <main className="min-h-[80vh]">
            {children}
          </main>

          {/* whatsapp script */}
          <Script type="text/javascript"
      src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
      id="aisensy-wa-widget"
      widget-id="aaaaww"></Script>

        
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}