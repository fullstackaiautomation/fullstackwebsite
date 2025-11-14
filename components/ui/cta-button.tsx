"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  onClick?: () => void;
}

export function CTAButton({ href = "/analysis", children, className = "", size = "lg", onClick }: CTAButtonProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { theme } = useTheme();
  const [isPressed, setIsPressed] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle mounting for hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset pressed state when pathname changes
  useEffect(() => {
    setIsPressed(false);
  }, [pathname]);

  const handlePress = () => {
    setIsPressed(true);
    setTimeout(() => {
      if (onClick) {
        onClick();
      } else if (href) {
        router.push(href);
      }
      // Reset after navigation starts
      setTimeout(() => setIsPressed(false), 100);
    }, 200);
  };

  // Don't render theme-dependent styles until mounted to avoid hydration errors
  if (!mounted) {
    return (
      <Button
        onClick={handlePress}
        size={size}
        className={`font-bold uppercase transition-all duration-200 bg-primary text-white hover:bg-primary/90 ${className}`}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      onClick={handlePress}
      size={size}
      className={`font-bold uppercase transition-all duration-200 ${
        isPressed
          ? theme === "dark"
            ? "bg-white text-primary border-2 border-primary"
            : "bg-black text-primary border-2 border-primary"
          : "bg-primary text-white hover:bg-primary/90"
      } ${className}`}
    >
      {children}
    </Button>
  );
}
