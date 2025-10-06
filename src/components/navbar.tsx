"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FORM_LINK, seasons } from "@/lib/nav-constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-primary/90 backdrop-blur-xl border-b border-primary-foreground/20 shadow-lg shadow-black/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 h-16">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Home"
          className="flex items-center gap-2 group transition-opacity hover:opacity-90"
        >
          <Image
            src="/logo-main.png"
            alt="Logo"
            priority
            className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
            height={72}
            width={72}
          />
          <span className="block md:hidden lg:block font-bold text-xl text-white transition-colors">
            RBAC
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <NavigationMenu className="text-background">
            <NavigationMenuList className="gap-1 lg:gap-2 bg-transparent">
              <NavigationMenuItem className="bg-transparent">
                <NavigationMenuLink
                  href="/about"
                  className="text-background bg-transparent hover:bg-secondary/40 focus-visible:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded-md px-3 py-2 transition-all duration-200 font-medium"
                >
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className="bg-transparent">
                <NavigationMenuLink
                  href="/seasons/6"
                  className="text-background bg-transparent hover:bg-secondary/40 focus-visible:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded-md px-3 py-2 transition-all duration-200 font-medium"
                >
                  RBAC Season 6
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className="border-none bg-transparent">
                <NavigationMenuTrigger
                  className="px-3 py-2
                text-background
                bg-transparent
                hover:bg-secondary/40 active:bg-secondary/40 focus:bg-secondary/40
                data-[state=open]:bg-secondary/40
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60
                transition-all duration-200
                font-medium rounded-md"
                >
                  RBAC Seasons
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-primary/95 backdrop-blur-xl border-2 border-primary-foreground/20 rounded-lg shadow-xl shadow-black/20">
                  <div className="w-80 p-2">
                    {seasons.map((season) => (
                      <NavigationMenuLink
                        key={season.name}
                        href={season.href}
                        className="block px-4 py-2.5 text-sm text-background hover:bg-secondary/40 focus-visible:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded-md transition-all duration-200"
                      >
                        {season.name}
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="bg-transparent">
                <NavigationMenuLink
                  href="/faqs"
                  className="text-background bg-transparent hover:bg-secondary/40 focus-visible:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded-md px-3 py-2 transition-all duration-200 font-medium"
                >
                  FAQs
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <Link href="/contact">
            <Button
              variant="ghost"
              className="text-background hover:bg-secondary/40 focus-visible:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 transition-all duration-200"
            >
              Contact Us
            </Button>
          </Link>
          <Link href={FORM_LINK} target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-primary transition-all duration-300">
              Join Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="text-background hover:bg-secondary/40 focus-visible:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 transition-all duration-200"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-80 bg-slate-950/98 backdrop-blur-xl border-l border-blue-500/30 p-6 flex flex-col"
          >
            <SheetHeader className="p-0 mb-6">
              <SheetTitle className="text-left px-0">
                <Link
                  href="/"
                  aria-label="Home"
                  className="flex items-center gap-2 group"
                  onClick={() => setIsOpen(false)}
                >
                  <Image
                    src="/logo-main.png"
                    alt="Logo"
                    priority
                    className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
                    height={64}
                    width={64}
                  />
                  <span className="font-bold text-xl text-white">RBAC</span>
                </Link>
              </SheetTitle>
            </SheetHeader>

            <nav
              className="flex-1 flex flex-col gap-2"
              aria-label="Mobile navigation"
            >
              <Link
                href="/about"
                className="text-background hover:text-white hover:bg-secondary/40 active:bg-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded-lg transition-all duration-200 font-medium py-3 px-4"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>

              <Link
                href="/seasons/6"
                className="text-background hover:text-white hover:bg-secondary/40 active:bg-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded-lg transition-all duration-200 font-medium py-3 px-4"
                onClick={() => setIsOpen(false)}
              >
                RBAC Season 6
              </Link>

              <Accordion type="single" collapsible className="border-none">
                <AccordionItem value="seasons" className="border-none">
                  <AccordionTrigger className="text-background hover:text-white hover:bg-secondary/40 active:bg-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded-lg text-base font-medium py-3 px-4 transition-all duration-200 hover:no-underline">
                    RBAC Seasons
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-1 px-2 space-y-1">
                    {seasons.map((season) => (
                      <Link
                        key={season.name}
                        href={season.href}
                        className="block text-sm text-slate-300 hover:text-white hover:bg-secondary/40 active:bg-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded-lg transition-all duration-200 py-2.5 px-4"
                        onClick={() => setIsOpen(false)}
                      >
                        {season.name}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link
                href="/faqs"
                className="text-background hover:text-white hover:bg-secondary/40 active:bg-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded-lg transition-all duration-200 font-medium py-3 px-4"
                onClick={() => setIsOpen(false)}
              >
                FAQs
              </Link>
            </nav>

            <div className="mt-auto pt-6 space-y-3 border-t border-blue-500/30">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block"
              >
                <Button
                  variant="ghost"
                  className="w-full text-background hover:text-white hover:bg-secondary/40 active:bg-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 justify-start h-12 transition-all duration-200"
                >
                  Contact Us
                </Button>
              </Link>
              <Link
                href={FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block"
              >
                <Button className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition-all duration-300">
                  Join Now
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
