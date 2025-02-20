import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Circle from "@/components/backgroundCircle/Circle";
import SmoothScrollWrapper from "@/components/smoothScrollWrapper/SmoothScrollWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trinity Physiotherapy Clinic",
  description:
    "Trinity Physiotherapy is a leading physiotherapy clinic based in Manchester, dedicated to helping individuals recover from injuries, improve mobility, and enhance overall well-being. With a focus on expert care, evidence-based treatments, and a compassionate approach, we empower our clients to move freely and live pain-free. Whether you're recovering from an injury, managing a chronic condition, or looking to optimize movement, our team is here to support your journey to better health.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased tracking-tighter font-sans text[14px]`}
      >
        <SmoothScrollWrapper>
          {children}
          <Circle />
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
