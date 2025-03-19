"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../ui/ThemeToggle";
import { motion } from "framer-motion";
import { UserDropdown } from "../auth/UserDropdown";

const navLinks = [
  { name: "Information", href: "/information" },
  { name: "Queue", href: "/queue" },
  { name: "Request", href: "/request" },
  { name: "My Requests", href: "/my-requests" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 backdrop-blur-sm">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold text-purple-600 dark:text-purple-400">
            Dorchaders Modding Queue
          </Link>
          
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-purple-600 dark:hover:text-purple-400 ${
                    isActive 
                      ? "text-purple-600 dark:text-purple-400" 
                      : "text-neutral-600 dark:text-neutral-400"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400"
                      layoutId="navbar-indicator"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <UserDropdown />
        </div>
      </div>
    </header>
  );
} 