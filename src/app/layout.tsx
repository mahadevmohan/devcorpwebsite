import type { Metadata } from "next";
import Link from "next/link";
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
      >
        <header className="border-b">
          <nav className="max-w-5xl mx-auto p-4 flex gap-4 text-sm">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/projects" className="hover:underline">Projects</Link>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
