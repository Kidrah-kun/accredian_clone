import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Accredian Enterprise | Corporate Training & Learning Solutions",
  description:
    "Accredian Enterprise offers industry-specific, customizable corporate training programs in Leadership, AI, Data, Fintech, and more. Upskill your workforce today.",
  keywords:
    "corporate training, enterprise learning, upskilling, Accredian, leadership development, AI training",
  openGraph: {
    title: "Accredian Enterprise | Corporate Training & Learning Solutions",
    description:
      "Customizable corporate training programs tailored to your organization's goals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
