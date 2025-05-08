
'use client';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  imageHint?: string; 
  ctaText?: string;
  ctaLink?: string;
  children?: ReactNode;
}

export function HeroSection({ title, subtitle, imageUrl, imageHint, ctaText, ctaLink, children }: HeroSectionProps) {
  return (
    <section className="relative bg-gray-800 text-primary-foreground py-24 md:py-32 overflow-hidden">
      {imageUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30" // Increased opacity for better image visibility
          style={{ backgroundImage: `url(${imageUrl})` }}
          data-ai-hint={imageHint || "abstract car background"}
        />
      )}
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-xl"> {/* Changed to white, font-extrabold */}
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-200 drop-shadow-md"> {/* Lighter text, larger max-width */}
            {subtitle}
          </p>
        )}
        {ctaText && ctaLink && (
          <Link href={ctaLink} passHref>
            <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-3 shadow-lg"> {/* Changed to default variant */}
              {ctaText}
            </Button>
          </Link>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
