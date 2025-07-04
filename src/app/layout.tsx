import type { Metadata } from "next";
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
  title: "Cave of Founders - Language Learning Platform",
  description:
    "Cave of Founders is an innovative education technology company focused on language learning applications that unlock global opportunities.",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "any" },
      { url: "/cave-favicon.png", sizes: "any" },
    ],
    shortcut: "/cave-favicon.png",
    apple: "/cave-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/cave-favicon.png" />
        <link rel="shortcut icon" href="/cave-favicon.png" />
        <link rel="apple-touch-icon" href="/cave-favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
