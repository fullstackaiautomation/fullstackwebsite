"use client";

import Link from "next/link";
import Image from "next/image";
import { Moon, Sun, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/ui/cta-button";
import { useEffect, useState } from "react";
// import { MobileNav } from "./mobile-nav"; // Option 1: Slide-Out Drawer
import { MobileNavOption2 as MobileNav } from "./mobile-nav-option2"; // Option 2: Full-Screen Overlay
// import { MobileNavOption3 as MobileNav } from "./mobile-nav-option3"; // Option 3: Slide-Down Accordion

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo-icon.png"
              alt="Full Stack AI Icon"
              width={40}
              height={40}
              className="w-auto h-8 sm:h-10"
            />
            {/* Type logo changes based on theme */}
            {mounted && (
              <Image
                src={theme === "dark" ? "/images/logo-type-dark.png" : "/images/logo-type-light.png"}
                alt="Full Stack AI"
                width={120}
                height={32}
                className="w-auto h-6 sm:h-8"
                priority
              />
            )}
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </Link>
            </li>
            <li
              className="relative group"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <button
                className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1"
                aria-expanded={solutionsDropdownOpen}
                aria-haspopup="true"
              >
                Solutions
                <ChevronDown className={`h-4 w-4 transition-transform ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-48 bg-background border border-border rounded-lg shadow-lg py-2">
                    <Link
                      href="/solutions"
                      className="block px-4 py-2 text-foreground hover:bg-accent hover:text-primary transition-colors"
                    >
                      Overview
                    </Link>
                    <Link
                      href="/results"
                      className="block px-4 py-2 text-foreground hover:bg-accent hover:text-primary transition-colors"
                    >
                      Case Studies
                    </Link>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/process"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Pricing & Process
              </Link>
            </li>
            <li>
              <CTAButton>
                GET MY FREE AI AUDIT
              </CTAButton>
            </li>
            {mounted && (
              <li>
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-10 h-10 rounded-full border-2 border-muted-foreground flex items-center justify-center hover:border-primary transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </button>
              </li>
            )}
          </ul>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
