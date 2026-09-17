// src/components/PageContainer.tsx
import React from 'react';

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
}

export function PageContainer({
  children,
  as: Component = 'div',
  className = '',
  ...props
}: PageContainerProps) {
  return (
    <Component
      className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
