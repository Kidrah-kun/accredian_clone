import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Accredian Enterprise | Upskilling Programs for Industry Leaders",
  description: "Reimagine your workforce with Accredian Enterprise. Explore our custom-fit upskilling programs designed for operations excellence, digital transformation, and leadership.",
  keywords: ["Upskilling", "Enterprise Training", "Digital Transformation", "Accredian", "Executive Education"],
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
