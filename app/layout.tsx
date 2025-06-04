import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider"; // Added

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nanite - The Future of AI Development on Linux",
  description: "Revolutionary Linux distribution designed exclusively for AI engineers. Pre-configured with everything you need to build the future of artificial intelligence.",
  keywords: "nanite, ai development, linux distribution, machine learning, artificial intelligence, pytorch, tensorflow",
  openGraph: {
    title: "Nanite - The Future of AI Development on Linux",
    description: "Revolutionary Linux distribution designed exclusively for AI engineers.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nanite - The Future of AI Development on Linux",
    description: "Revolutionary Linux distribution designed exclusively for AI engineers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning> {/* Added suppressHydrationWarning for next-themes */}
      <body className={`${inter.className} flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300`}> {/* Added dark mode background and transition */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow"> {/* Increased padding-top for new navbar height */}
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
