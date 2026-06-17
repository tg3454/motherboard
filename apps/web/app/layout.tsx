import React from 'react';
import '@bnb/ui/index.css';

export const metadata = {
  title: 'Venture Past Our Sky — Cinematic Space Travel',
  description: 'Discover the universe in ways once unimaginable with bits&bytes operations platform.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600&family=Instrument+Serif:ital,wght@0,400;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
