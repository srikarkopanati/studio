
'use client';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image'; // Import next/image

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
    <section className="relative bg-gray-900 text-primary-foreground py-24 md:py-32 overflow-hidden">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={imageHint || "Hero background image"}
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-30" // Apply opacity directly to the image
          data-ai-hint={imageHint || "abstract car background"}
          priority // Hero images are typically high priority
          sizes="100vw" // Image spans the full viewport width
        />
      )}
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" /> {/* Adjusted gradient for potentially better readability over image */}

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-200 drop-shadow-md">
            {subtitle}
          </p>
        )}
        {ctaText && ctaLink && (
          <Link href={ctaLink} passHref>
            <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-3 shadow-lg">
              {ctaText}
            </Button>
          </Link>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}

