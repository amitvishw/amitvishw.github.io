import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amit Vishwakarma | MERN Stack Developer",
  description:
    "4.5+ years of work experience as a full-stack developer. I have hands-on experience of building end-to-end systems including mobile apps, front-end and back-end in Node.js, React.js, Java, and Python.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
