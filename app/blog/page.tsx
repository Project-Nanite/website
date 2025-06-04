import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Nanite',
  description: 'Read the latest news, articles, and insights from the Nanite team on our blog.',
  keywords: 'nanite, blog, news, articles, updates, insights',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-4xl font-bold mb-4">Nanite Blog</h1>
      <p className="text-lg">
        Stay updated with the latest news and articles from Nanite.
      </p>
      {/* Add blog posts or links here */}
    </div>
  );
}
