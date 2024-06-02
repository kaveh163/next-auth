"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";
export default function NavLink({ href, children }: {href: string, children: React.ReactNode}) {
  
  //console.log(href);
  return (
    <Link
      href={href}
      legacyBehavior
      passHref
      
    >
      {children}
    </Link>
  );
}
