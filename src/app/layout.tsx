import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Hampshire Locksmith & Mobile Door / Window Repair Service | Clearly Secure",
  description: "Provide Locksmith and Window & Door Repair or Replacement service across Hampshire. Over 30 years experience, 5-star reviews.",
  openGraph: {
    title: "Hampshire Locksmith & Mobile Door / Window Repair Service",
    description: "Expert Locksmith and Window & Door Repair/Replacement in Hampshire.",
    url: "https://clearly-secure.co.uk",
    siteName: "Clearly Secure Glazing and Locks Ltd",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body className={`${inter.className} min-h-screen transition-colors duration-300 antialiased`}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen pt-0">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
