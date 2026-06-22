import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Nandhakumar Manikandasamy | AI Engineer & Security Researcher",
  description: "Master's student in Cybersecurity at Nottingham Trent University. Former SDE-II at AppViewX. Expertise in AI/ML, Software Engineering, and Cybersecurity.",
  keywords: ["AI Engineer", "Software Developer", "Cybersecurity", "Machine Learning", "Next.js", "Python"],
  authors: [{ name: "Nandhakumar Manikandasamy" }],
  openGraph: {
    title: "Nandhakumar Manikandasamy | AI Engineer",
    description: "AI Engineer & Security Researcher",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
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
