import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PreferencesProvider } from "@/hooks/usePreferences";
import { CustomCursor } from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

// Rorix Studio Branding Metadata
export const metadata: Metadata = {
  title: "Rorix Studio | Visionary Architecture & Luxury Interiors",
  description:
    "Dubai's premier boutique agency specializing in high-end architecture and uncompromising luxury interior designs.",
  metadataBase: new URL("https://rorixstudio.vercel.app/"),

  openGraph: {
    title: "Rorix Studio | Visionary Architecture",
    description:
      "Crafting Dubai's most prestigious interiors — one extraordinary project at a time.",
    url: "https://rorixstudio.vercel.app/",
    siteName: "Rorix Studio",
    images: [
      {
        url: "/banner.jpg", // Public folder এ থাকা banner.jpg ব্যবহার হবে
        width: 1200,
        height: 630,
        alt: "Rorix Studio Luxury Interior Design Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rorix Studio | Luxury Interior Design",
    description:
      "Explore the art of living with Dubai's most elite architecture and design studio.",
    images: ["/banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor />
        <PreferencesProvider>{children}</PreferencesProvider>
      </body>
    </html>
  );
}
