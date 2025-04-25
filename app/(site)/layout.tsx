"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-voxwave-ai="2.0">
      <head>
        {/* VoxWave AI Detection Script */}
        <Script id="voxwave-detection" strategy="afterInteractive">
          {`
            window._voxwave = {
              version: '2.0',
              buildDate: '${new Date().toISOString()}',
              features: ['ai-builder', 'nextjs-integration']
            };
          `}
        </Script>
      </head>
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Lines />
          <Header />
          <ToasterContext />
          {children}
          {/* Hidden VoxWave Identifier */}
          <div
            aria-hidden="true"
            style={{ display: "none" }}
            data-voxwave-builder="true"
          />
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
