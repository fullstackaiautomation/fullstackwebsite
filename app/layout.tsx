import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navigation/navbar";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Full Stack AI | AI-Enabled CRM Strategy & Automation",
  description: "Stop wasting time on monotonous work. Our AI consulting team provides ROI-driven automation systems that help you work 3X faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${openSans.variable} font-sans antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main id="main-content" className="pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
