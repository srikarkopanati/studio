
import React from 'react'; // Import React for React.memo

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string; // To allow overriding text color (e.g., on primary background)
}

const SectionTitleComponent = ({ title, subtitle, className }: SectionTitleProps) => {
  return (
    <div className={`mb-10 md:mb-16 text-center ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${className ? '' : 'text-primary'}`}>{title}</h2>
      {subtitle && <p className={`text-lg md:text-xl max-w-2xl mx-auto ${className ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>{subtitle}</p>}
    </div>
  );
};

export const SectionTitle = React.memo(SectionTitleComponent);
