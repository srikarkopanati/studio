interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={`mb-8 md:mb-12 text-center ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground max-w-xl mx-auto">{subtitle}</p>}
    </div>
  );
}
