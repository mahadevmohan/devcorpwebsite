import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ActiveLink from "@/components/ActiveLink";
import Footer from "@/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devcorp",
  description: "Code. Create. Conquer. - Devcorp development projects and insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <header className="border-b">
          <nav className="max-w-5xl mx-auto p-4 flex items-center justify-between text-sm">
            <Link href="/" className="shrink-0" aria-label="Devcorp Home">
              <Image src="/Images/logo.png" alt="Devcorp logo" width={36} height={36} />
            </Link>
            <div className="ml-auto pr-4 flex items-center gap-3">
              <ActiveLink href="/">Home</ActiveLink>
              <ActiveLink href="/projects">Projects</ActiveLink>
              <ActiveLink href="/blog">Blog</ActiveLink>
              <ActiveLink href="/about">About</ActiveLink>
              <ActiveLink href="/contact">Contact</ActiveLink>
            </div>
          </nav>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
