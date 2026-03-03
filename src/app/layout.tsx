import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/CustomCursor";
import CanvasEntrance from "@/components/CanvasEntrance";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Brian De Santiago — Product Designer",
  description:
    "I design clarity within complexity — translating intricate business and operational challenges into seamless user experiences.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Brian De Santiago — Product Designer",
    description:
      "I design clarity within complexity — translating intricate business and operational challenges into seamless user experiences.",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian De Santiago — Product Designer",
    description:
      "I design clarity within complexity — translating intricate business and operational challenges into seamless user experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable} font-sans antialiased`}>
        <CanvasEntrance />
        <CustomCursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
