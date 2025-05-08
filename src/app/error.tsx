// src/app/error.tsx
'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center space-y-6 px-4 py-12 text-center">
      <AlertTriangle className="h-16 w-16 text-destructive" />
      <h1 className="text-3xl font-bold text-destructive md:text-4xl">
        Oops! Something went wrong.
      </h1>
      <p className="max-w-md text-lg text-muted-foreground">
        We encountered an unexpected issue. Please try again, or if the problem persists, contact support.
      </p>
      <p className="text-sm text-muted-foreground">Error: {error.message}</p>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        variant="default"
        size="lg"
      >
        Try again
      </Button>
    </div>
  );
}
