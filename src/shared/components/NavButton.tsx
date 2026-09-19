'use client';

import { Button, ButtonProps } from '@mantine/core';
import Link from 'next/link';

export default function NavButton({ href, children, ...props }: { href: string; children: React.ReactNode } & ButtonProps) {
  return (
    <Button component={Link} href={href} {...props}>
      {children}
    </Button>
  );
}
