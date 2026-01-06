"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { navigationItems } from "@/data/products";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-pink-400 to-pink-500 text-white text-center py-2 text-sm">
        Envío gratuito a partir de 50$ (Quito)
      </div>

      {/* Header */}
      <header className="border-b sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 py-1">
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logos/logOrig.svg"
                alt="GlossyCandy Logo"
                width={128}
                height={128}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
                priority
              />
            </Link>

            {/* Company Name */}
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold font-bricolage">
                <span className="text-pink-500">glossy</span>
                <span className="text-pink-400">candy</span>
              </h1>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex max-w-sm relative flex-shrink-0">
              <Input
                type="search"
                placeholder="Buscar..."
                className="pr-10 rounded-full w-32 md:w-40 lg:w-48 xl:w-56"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex gap-4 xl:gap-6 text-sm flex-shrink-0">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-pink-500 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-2 sm:gap-4 ml-auto flex-shrink-0">
              <button
                className="lg:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
              <button aria-label="User account">
                <User className="w-6 h-6 text-pink-500" />
              </button>
              <button className="relative" aria-label="Wishlist">
                <Heart className="w-6 h-6 text-pink-500" />
              </button>
              <button className="relative" aria-label="Shopping cart">
                <ShoppingCart className="w-6 h-6 text-pink-500" />
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden mt-4">
            <div className="flex max-w-sm relative mx-auto">
              <Input
                type="search"
                placeholder="Buscar..."
                className="pr-10 rounded-full w-full"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden bg-white border-t">
              <div className="px-4 py-4">
                <nav className="flex flex-col gap-4 text-sm">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="hover:text-pink-500 font-medium transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
