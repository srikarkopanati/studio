
// src/components/layout/Footer.tsx
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-8 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} The Wheels Garage. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
