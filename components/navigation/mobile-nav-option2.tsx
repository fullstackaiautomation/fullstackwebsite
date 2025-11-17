"use client";

import Link from "next/link";
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function MobileNavOption2() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [solutionsExpanded, setSolutionsExpanded] = useState(false);

  const navLinks = [
    { href: "/", label: "HOME" },
    {
      label: "SOLUTIONS",
      submenu: [
        { href: "/solutions", label: "OVERVIEW" },
        { href: "/results", label: "CASE STUDIES" }
      ]
    },
    { href: "/about", label: "ABOUT" },
    { href: "/process", label: "PRICING & PROCESS" },
  ];

  const handleLinkClick = () => {
    setOpen(false);
  };

  const handleButtonPress = () => {
    setIsPressed(true);
    setTimeout(() => {
      setOpen(false);
      window.location.href = "/analysis";
    }, 200);
  };

  // Handle mounting for hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden w-10 h-10 sm:w-11 sm:h-11 rounded-lg border-2 border-muted-foreground hover:border-primary hover:bg-accent transition-all flex items-center justify-center"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
      >
        <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Full-Screen Overlay */}
      {open && (
        <>
          {/* Backdrop with blur */}
          <div
            className="fixed inset-0 bg-background z-50 md:hidden overflow-hidden"
            style={{
              animation: "fadeIn 0.25s ease-out forwards",
            }}
            onClick={handleLinkClick}
          >
            {/* Close Button */}
            <button
              onClick={handleLinkClick}
              className="absolute top-4 right-4 w-10 h-10 sm:w-11 sm:h-11 rounded-lg border-2 border-muted-foreground hover:border-primary hover:bg-accent transition-all flex items-center justify-center"
              aria-label="Close navigation menu"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Decorative Line */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-[#00CC88]"
              style={{
                animation: "slideDown 0.4s ease-out forwards",
              }}
            />

            {/* Centered Content */}
            <div
              className="flex flex-col items-center justify-center h-full px-4 w-full max-w-md mx-auto"
              style={{
                animation: "scaleIn 0.35s ease-out forwards",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Navigation Links */}
              <nav className="mb-12">
                <ul className="space-y-8 text-center">
                  {navLinks.map((link, index) => (
                    <li
                      key={link.href || link.label}
                      style={{
                        animation: `slideUp 0.3s ease-out ${
                          0.1 + index * 0.05
                        }s forwards`,
                        opacity: 0,
                      }}
                    >
                      {link.submenu ? (
                        <div>
                          <button
                            onClick={() => setSolutionsExpanded(!solutionsExpanded)}
                            className="text-2xl sm:text-3xl font-bold text-foreground hover:text-primary transition-colors block py-2 mx-auto flex items-center gap-2"
                          >
                            {link.label}
                            <ChevronDown className={`h-5 w-5 transition-transform ${solutionsExpanded ? 'rotate-180' : ''}`} />
                          </button>
                          {solutionsExpanded && (
                            <ul className="mt-4 space-y-3">
                              {link.submenu.map((sublink) => (
                                <li key={sublink.href}>
                                  <Link
                                    href={sublink.href}
                                    onClick={handleLinkClick}
                                    className="text-lg sm:text-xl text-muted-foreground hover:text-primary transition-colors block py-1"
                                  >
                                    {sublink.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={handleLinkClick}
                          className="text-2xl sm:text-3xl font-bold text-foreground hover:text-primary transition-colors block py-2"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* CTA Button */}
              <div
                style={{
                  animation: "slideUp 0.3s ease-out 0.4s forwards",
                  opacity: 0,
                }}
              >
                <Button
                  onClick={handleButtonPress}
                  className={`font-bold uppercase text-sm sm:text-base px-6 sm:px-8 h-14 sm:h-16 w-full max-w-[280px] transition-all duration-200 ${
                    isPressed
                      ? theme === "dark"
                        ? "bg-white text-primary border-2 border-primary"
                        : "bg-black text-primary border-2 border-primary"
                      : "bg-primary text-white hover:bg-primary/90"
                  }`}
                >
                  GET MY FREE AI AUDIT
                </Button>
              </div>

              {/* Theme Toggle - Moved below CTA */}
              {mounted && (
                <div
                  className="mt-8 flex items-center gap-3"
                  style={{
                    animation: "slideUp 0.3s ease-out 0.45s forwards",
                    opacity: 0,
                  }}
                >
                  <Sun className="h-5 w-5 text-muted-foreground" />
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="relative w-20 h-9 rounded-full border-2 border-muted-foreground hover:border-primary transition-all"
                    aria-label="Toggle theme"
                  >
                    <div
                      className={`absolute top-0.5 ${
                        theme === "dark" ? "right-0.5" : "left-0.5"
                      } w-7 h-7 rounded-full bg-primary transition-all duration-300`}
                    />
                  </button>
                  <Moon className="h-5 w-5 text-muted-foreground" />
                </div>
              )}
              {mounted && (
                <p className="text-xs text-muted-foreground mt-2">Theme</p>
              )}
            </div>
          </div>

          {/* Animations */}
          <style jsx>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }

            @keyframes scaleIn {
              from {
                opacity: 0;
                transform: scale(0.9) rotate(2deg);
              }
              to {
                opacity: 1;
                transform: scale(1) rotate(0deg);
              }
            }

            @keyframes slideUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes slideDown {
              from {
                transform: translateY(-100%);
              }
              to {
                transform: translateY(0);
              }
            }

            @keyframes pulse {
              0%,
              100% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.02);
              }
            }
          `}</style>
        </>
      )}
    </>
  );
}
