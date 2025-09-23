"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const isActive = pathname === href;
  const base = "px-3 py-1 rounded transition-colors";
  const hover = "hover:bg-davy-gray hover:text-seasalt";
  const className = isActive
    ? `${base} bg-black text-white`
    : `${base} ${hover}`;
  return (
    <Link href={href} className={className} aria-current={isActive ? "page" : undefined}>
      {children}
    </Link>
  );
}

