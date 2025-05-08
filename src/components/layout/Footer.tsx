// src/components/layout/Footer.tsx
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-8 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Wheels Online. All rights reserved.</p>
        <p className="mt-1">Designed by an IIM Bangalore Student Project</p>
      </div>
    </footer>
  );
}
