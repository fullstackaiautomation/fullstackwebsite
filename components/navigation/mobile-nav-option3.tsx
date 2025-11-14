"use client";

import Link from "next/link";
import { Moon, Sun, Menu, X, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function MobileNavOption3() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/solutions", label: "Solutions" },
    { href: "/results", label: "Results" },
    { href: "/about", label: "About" },
    { href: "/process", label: "Process" },
  ];

  const handleLinkClick = () => {
    setOpen(false);
  };

  // Handle mounting for hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (!open) return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <>
      {/* Hamburger/X Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden w-10 h-10 sm:w-11 sm:h-11 rounded-lg border-2 border-muted-foreground hover:border-primary hover:bg-accent transition-all flex items-center justify-center"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
      >
        {open ? (
          <X className="h-5 w-5 sm:h-6 sm:w-6" />
        ) : (
          <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
        )}
      </button>

      {/* Slide-Down Menu */}
      <div
        className={`md:hidden fixed left-0 right-0 bg-background/98 backdrop-blur-sm border-b-2 border-primary shadow-lg overflow-hidden transition-all duration-400 ease-in-out ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          top: "64px", // Below the navbar (h-16 = 64px)
          zIndex: 40,
        }}
      >
        <div className="container mx-auto px-3 sm:px-4 py-4 max-w-full">
          {/* Navigation Links */}
          <nav>
            <ul className="space-y-0">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="flex items-center justify-between px-3 py-4 text-base font-medium text-foreground hover:bg-accent hover:text-primary transition-all rounded-lg border-b border-border last:border-b-0"
                    style={{
                      animation: open
                        ? `slideIn 0.3s ease-out ${index * 0.08}s forwards`
                        : "none",
                      opacity: open ? 1 : 0,
                    }}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme Toggle Row */}
          {mounted && (
            <div
              className="mt-4 px-3 py-4 bg-accent/50 rounded-lg flex items-center justify-between"
              style={{
                animation: open
                  ? `slideIn 0.3s ease-out ${navLinks.length * 0.08}s forwards`
                  : "none",
                opacity: open ? 1 : 0,
              }}
            >
              <div className="flex items-center gap-2">
                <Sun className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Theme</span>
              </div>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="relative w-16 h-8 rounded-full border-2 border-muted-foreground hover:border-primary transition-all"
                aria-label="Toggle theme"
              >
                <div
                  className={`absolute top-0.5 ${
                    theme === "dark" ? "right-0.5" : "left-0.5"
                  } w-6 h-6 rounded-full bg-primary transition-all duration-300`}
                />
              </button>
              <Moon className="h-4 w-4 text-muted-foreground" />
            </div>
          )}

          {/* CTA Button */}
          <div
            className="mt-4"
            style={{
              animation: open
                ? `slideIn 0.3s ease-out ${
                    (navLinks.length + 1) * 0.08
                  }s forwards`
                : "none",
              opacity: open ? 1 : 0,
            }}
          >
            <Link href="/analysis" onClick={handleLinkClick} className="block">
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase text-sm h-14"
                size="lg"
              >
                GET MY FREE AI AUDIT
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
