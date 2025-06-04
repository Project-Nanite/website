import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Docs - Nanite',
  description: 'Explore the documentation for Nanite and learn how to use our innovative solutions.',
  keywords: 'nanite, docs, documentation, help, support, guide',
};

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-4xl font-bold mb-4">Nanite Documentation</h1>
      <p className="text-lg">
        Welcome to the Nanite documentation. Here you will find all the information you need to get started and make the most of our platform.
      </p>
      {/* Add more content here as needed */}
    </div>
  );
}
