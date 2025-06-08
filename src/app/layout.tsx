import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import LayoutClient from "@/components/LayoutClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nanite - OS for AI Developers",
  description:
    "Nanite is an operating system designed for AI developers, providing tools and infrastructure to streamline AI development.",
  openGraph: {
    title: "Nanite - OS for AI Developers",
    description:
      "Nanite is an operating system designed for AI developers, providing tools and infrastructure to streamline AI development.",
    // images: ['/og-image.png'], // Add your OG image here
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <Providers>
          <LayoutClient>{children}</LayoutClient>
        </Providers>
      </body>
    </html>
  );
}
