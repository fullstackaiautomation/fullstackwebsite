"use client";

import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

export function MobileNav() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

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

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden w-11 h-11 rounded-lg border-2 border-muted-foreground hover:border-primary hover:bg-accent transition-all flex items-center justify-center"
        aria-label="Toggle navigation menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Sheet Drawer */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-[280px] sm:w-[320px] flex flex-col"
        >
          {/* Header with Close Button */}
          <SheetHeader className="border-b pb-4">
            <div className="flex items-center justify-between">
              <SheetTitle className="text-lg font-bold">Menu</SheetTitle>
              <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </SheetClose>
            </div>
          </SheetHeader>

          {/* Theme Toggle - Top Section */}
          <div className="py-6 border-b">
            <div className="flex items-center justify-center">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-12 h-12 rounded-full border-2 border-muted-foreground hover:border-primary hover:bg-accent transition-all flex items-center justify-center"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-6 w-6" />
                ) : (
                  <Moon className="h-6 w-6" />
                )}
              </button>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-2">
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 py-6">
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block px-4 py-3 text-base font-medium rounded-lg hover:bg-accent hover:text-primary transition-all"
                    style={{
                      animation: open
                        ? `slideIn 0.3s ease-out ${index * 0.05}s forwards`
                        : "none",
                      opacity: 0,
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button - Bottom */}
          <div className="border-t pt-4 pb-2">
            <Link href="/analysis" onClick={handleLinkClick}>
              <Button
                className="w-full bg-gradient-to-r from-primary to-[#00CC88] hover:opacity-90 text-white font-bold uppercase text-sm h-14 shadow-lg shadow-primary/30"
                size="lg"
              >
                GET MY FREE AI AUDIT
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
