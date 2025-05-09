import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';


export const metadata: Metadata = {
  title: 'ResumeRocket - Create Your Perfect CV & Cover Letter in Minutes',
  description: 'Generate professional CVs and cover letters in minutes with our easy-to-use online tool. Land your dream job with a winning resume.',
  keywords: 'CV builder, resume maker, cover letter generator, job application, professional resume',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}