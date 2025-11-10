"use client";

import Link from "next/link";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo-icon.png"
              alt="Full Stack AI Icon"
              width={40}
              height={40}
              className="w-auto h-10"
            />
            {/* Type logo changes based on theme */}
            {mounted && (
              <Image
                src={theme === "dark" ? "/images/logo-type-dark.png" : "/images/logo-type-light.png"}
                alt="Full Stack AI"
                width={120}
                height={32}
                className="w-auto h-8"
                priority
              />
            )}
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/solutions"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link
                href="/results"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Results
              </Link>
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
                Process
              </Link>
            </li>
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
            <li>
              <Link href="/analysis">
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase"
                  size="lg"
                >
                  GET MY FREE AI AUDIT
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
