// src/components/StyledLink.tsx
import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';

interface StyledLinkProps {
  href: string;
  children: ReactNode;
  style?: CSSProperties;
}

export default function StyledLink({ href, children, style }: StyledLinkProps) {
  return (
<Link
href={href}
style={{
textDecoration: 'none',
color: 'var(--mantine-color-indigo-6)',
...style,
}}
>
{children}
</Link>
  );
}
