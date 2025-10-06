"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
import { Menu, ChevronDown } from "lucide-react";
import { FORM_LINK, seasons } from "@/lib/nav-constants";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-primary/80 backdrop-blur-xl border-b border-primary-foreground/20 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 h-16">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Home"
          className="flex items-center space-x-2"
        >
          <Image
            src="/logo-main.png"
            alt="Logo"
            priority
            className="hover:animate-spin hover:duration-2000"
            height={72}
            width={72}
          />
          <span className="block md:hidden lg:block font-bold text-xl text-white">
            RBAC
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2 lg:space-x-6">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className="text-background  hover:bg-secondary/30 transition-colors font-medium"
                >
                  About Us
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/seasons/6"
                  className="text-background hover:bg-secondary/30 transition-colors font-medium"
                >
                  RBAC Season 6
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className="border-none">
                <NavigationMenuTrigger
                  className="px-1.5 ring-0
                text-background 
                hover:bg-secondary/30 active:bg-secondary/30 focus:bg-secondary/30
                data-[state=open]:focus:bg-secondary/30 data-[state=open]:hover:bg-secondary/30 
                transition-colors 
                font-medium bg-transparent"
                >
                  RBAC Seasons
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-primary/85 backdrop-blur-xl border-2  rounded-lg">
                  <div className="w-96">
                    {seasons.map((season) => (
                      <NavigationMenuLink
                        key={season.name}
                        href={season.href}
                        className="block px-3 py-2 text-sm text-background hover:bg-secondary/30 rounded-md transition-colors"
                      >
                        {season.name}
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/faqs"
                  className="text-background hover:bg-secondary/30 transition-colors font-medium"
                >
                  FAQs
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          <Link href="/contact">
            <Button
              variant="ghost"
              className="text-background hover:bg-secondary/30"
            >
              Contact Us
            </Button>
          </Link>
          <Link href={FORM_LINK} target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300">
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
              className="text-background hover:bg-secondary/30"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-80 bg-slate-950/95 backdrop-blur-xl border-l border-blue-500/20 p-4 md:p-6"
          >
            <SheetHeader className="p-0">
              <SheetTitle className="text-left px-0">
                <Link href="/" aria-label="Home" className="flex items-center">
                  <Image
                    src="/logo-main.png"
                    alt="Logo"
                    priority
                    className="hover:animate-spin hover:duration-2000"
                    height={72}
                    width={72}
                  />
                  <span className="block md:hidden lg:block font-bold text-xl text-white">
                    RBAC
                  </span>
                </Link>
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col space-y-4 mt-8">
              <Link
                href="/about"
                className="text-background hover:text-primary-foreground hover:bg-secondary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded-md transition-colors font-medium py-2 px-2"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>

              <Link
                href="/seasons/6"
                className="text-background hover:text-primary-foreground hover:bg-secondary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded-md transition-colors font-medium py-2 px-2"
                onClick={() => setIsOpen(false)}
              >
                RBAC Season 6
              </Link>

              <div className="space-y-2 px-2">
                <Accordion type="single" collapsible>
                  <AccordionItem value="seasons">
                    <AccordionTrigger className="text-background text-base font-medium py-2 flex items-center">
                      RBAC Seasons
                    </AccordionTrigger>
                    <AccordionContent className="pl-4 space-y-2">
                      {seasons.map((season) => (
                        <Link
                          key={season.name}
                          href={season.href}
                          className="block text-sm text-slate-400 hover:text-primary-foreground hover:bg-secondary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded-md transition-colors py-1 px-2"
                          onClick={() => setIsOpen(false)}
                        >
                          {season.name}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                {/* <div className="text-background font-medium py-2 flex items-center">
                  RBAC Seasons
                  <ChevronDown className="ml-2 h-4 w-4" />
                </div> */}
                {/* <div >
                  
                </div> */}
              </div>

              <Link
                href="/faqs"
                className="text-background hover:text-primary-foreground hover:bg-secondary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded-md transition-colors font-medium py-2 px-2"
                onClick={() => setIsOpen(false)}
              >
                FAQs
              </Link>

              <div className="pt-6 space-y-3 border-t border-blue-500/20">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button
                    variant="ghost"
                    className="w-full text-background hover:text-primary-foreground hover:bg-secondary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 justify-start"
                  >
                    Contact Us
                  </Button>
                </Link>
                <Link
                  href={FORM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 transition-all duration-300">
                    Join Now
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
