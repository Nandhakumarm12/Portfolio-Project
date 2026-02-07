import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nandhakumar Manikandasamy | AI Engineer & Software Developer",
  description: "Master's student in Cybersecurity at Nottingham Trent University. Former SDE-II at AppViewX. Expertise in AI/ML, Software Engineering, and Cybersecurity.",
  keywords: ["AI Engineer", "Software Developer", "Cybersecurity", "Machine Learning", "Next.js", "Python"],
  authors: [{ name: "Nandhakumar Manikandasamy" }],
  openGraph: {
    title: "Nandhakumar Manikandasamy | AI Engineer",
    description: "AI Engineer & Software Developer specializing in cybersecurity and machine learning",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandhakumar Manikandasamy | AI Engineer",
    description: "AI Engineer & Software Developer specializing in cybersecurity and machine learning",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
