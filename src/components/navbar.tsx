"use client";

import { useState } from "react";
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

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const seasons = [
    { name: "Season 1", href: "/seasons/1" },
    { name: "Season 2", href: "/seasons/2" },
    { name: "Season 3", href: "/seasons/3" },
    { name: "Season 4", href: "/seasons/4" },
    { name: "Season 5", href: "/seasons/5" },
    { name: "Season 6", href: "/seasons/6" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-xl 
    border-b border-primary-foreground/20"
    >
      <div className=" w-full flex justify-between px-4 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          <span className="block md:hidden lg:block font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
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
          <Link href="/join">
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
              className="text-background hover:bg-secondary/30"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-80 bg-slate-950/95 backdrop-blur-xl border-l border-blue-500/20"
          >
            <SheetHeader>
              <SheetTitle className="text-left">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm opacity-90" />
                  </div>
                  <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    RBAC
                  </span>
                </div>
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col space-y-4 mt-8">
              <Link
                href="/about"
                className="text-background hover:text-primary-foreground hover:bg-secondary/30 transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>

              <Link
                href="/seasons/6"
                className="text-background hover:text-primary-foreground hover:bg-secondary/30 transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                RBAC Season 6
              </Link>

              <div className="space-y-2">
                <div className="text-background font-medium py-2 flex items-center">
                  RBAC Seasons
                  <ChevronDown className="ml-2 h-4 w-4" />
                </div>
                <div className="pl-4 space-y-2">
                  {seasons.map((season) => (
                    <Link
                      key={season.name}
                      href={season.href}
                      className="block text-sm text-slate-400 hover:text-primary-foreground hover:bg-secondary/30 transition-colors py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {season.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/faqs"
                className="text-background hover:text-primary-foreground hover:bg-secondary/30 transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                FAQs
              </Link>

              <div className="pt-6 space-y-3 border-t border-blue-500/20">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button
                    variant="ghost"
                    className="w-full text-background hover:text-primary-foreground hover:bg-secondary/30 hover:bg-blue-500/10 justify-start"
                  >
                    Contact Us
                  </Button>
                </Link>
                <Link href="/join" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300">
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
