import type { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  variant?: 'rose' | 'dark';
}

export default function GradientText({ children, className = '', variant = 'rose' }: GradientTextProps) {
  return (
    <span
      className={`inline-block ${
        variant === 'rose' ? 'text-gradient-vyld' : 'text-gradient-vyld-dark'
      } ${className}`}
    >
      {children}
    </span>
  );
}
