import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ask Nanite AI - Get Instant Help with Nanite OS",
  description: "Chat with our AI assistant to get instant answers about Nanite OS installation, development guides, troubleshooting, and more. Powered by advanced AI technology.",
  keywords: ["Nanite OS", "AI assistant", "Linux help", "OS support", "AI development", "chat bot", "technical support"],
  openGraph: {
    title: "Ask Nanite AI - Get Instant Help with Nanite OS",
    description: "Chat with our AI assistant to get instant answers about Nanite OS installation, development guides, troubleshooting, and more.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ask Nanite AI - Get Instant Help with Nanite OS",
    description: "Chat with our AI assistant to get instant answers about Nanite OS installation, development guides, troubleshooting, and more.",
  },
};

export default function AskAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
