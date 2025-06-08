'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WaitlistPopup from '@/components/WaitlistPopup';
import MobileAIButton from '@/components/MobileAIButton';

interface LayoutClientProps {
  children: React.ReactNode;
}

export default function LayoutClient({ children }: LayoutClientProps) {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const handleWaitlistOpen = () => {
    setIsWaitlistOpen(true);
  };

  const handleWaitlistClose = () => {
    setIsWaitlistOpen(false);
  };

  return (
    <>
      <Navbar onWaitlistOpen={handleWaitlistOpen} />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <WaitlistPopup isOpen={isWaitlistOpen} onClose={handleWaitlistClose} />
      <MobileAIButton />
    </>
  );
}
