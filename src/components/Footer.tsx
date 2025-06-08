// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-center py-8">
      <p className="text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Nanite. All rights reserved.
      </p>
      {/* Add social media links here if needed */}
    </footer>
  );
};

export default Footer;
