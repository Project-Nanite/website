import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

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
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
