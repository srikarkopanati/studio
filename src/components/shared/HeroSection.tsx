'use client';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  ctaText?: string;
  ctaLink?: string;
  children?: ReactNode;
}

export function HeroSection({ title, subtitle, imageUrl, ctaText, ctaLink, children }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-r from-primary to-blue-700 text-primary-foreground py-20 md:py-32 overflow-hidden">
      {imageUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${imageUrl})` }}
          data-ai-hint="abstract car background"
        />
      )}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-sm">
            {subtitle}
          </p>
        )}
        {ctaText && ctaLink && (
          <Link href={ctaLink} passHref>
            <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              {ctaText}
            </Button>
          </Link>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
