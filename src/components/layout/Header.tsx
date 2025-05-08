
// src/components/layout/Header.tsx
"use client";

import Link from 'next/link';
import { Menu, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Car Gallery' },
  { href: '/ai-finder', label: 'AI Car Finder' },
  { href: '/contact', label: 'Contact Us' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between"> {/* Increased header height */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 mr-4 p-2 rounded-md hover:bg-accent/10 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
          <Car className="h-8 w-8 text-primary" /> {/* Increased logo icon size */}
          <span className="text-2xl font-bold text-primary whitespace-nowrap">The Wheels Garage</span> {/* Increased text size */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-2 items-center"> {/* Reduced gap for tighter nav items */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary whitespace-nowrap px-3 py-2 rounded-md", // Adjusted padding
                pathname === item.href ? "text-primary bg-primary/10" : "text-muted-foreground hover:bg-accent/10"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10"> {/* Ensure consistent button size */}
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[320px] bg-background p-6"> {/* Slightly adjusted width */}
              <div className="flex flex-col space-y-5"> {/* Adjusted spacing */}
                <Link href="/" className="flex items-center gap-3 mb-5 p-2 rounded-md hover:bg-accent/10 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  <Car className="h-8 w-8 text-primary" />
                  <span className="text-2xl font-bold text-primary whitespace-nowrap">The Wheels Garage</span>
                </Link>
                {navItems.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary py-2.5 px-2 rounded-md", // Adjusted padding
                        pathname === item.href ? "text-primary bg-primary/10" : "text-foreground hover:bg-accent/10"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
