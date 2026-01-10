"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { navigationItems, getAllProducts, type Product } from "@/data/products";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);

  // Buscar productos cuando cambia el query
  useEffect(() => {
    if (searchQuery.trim().length >= 2) {
      const allProducts = getAllProducts();
      const filtered = allProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.brand?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
        (product.description?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false)
      );
      setSearchResults(filtered.slice(0, 10)); // Máximo 10 resultados
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchQuery]);

  // Cerrar resultados al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current && !searchRef.current.contains(event.target as Node) &&
        mobileSearchRef.current && !mobileSearchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleProductClick = () => {
    setSearchQuery("");
    setShowResults(false);
  };

  const SearchResultsDropdown = () => (
    showResults && searchResults.length > 0 ? (
      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
        {searchResults.map((product, index) => (
          <div key={product.id}>
            <Link 
              href={`/producto/${product.id}`}
              onClick={handleProductClick}
              className="flex items-center gap-3 p-3 hover:bg-pink-50 transition-colors"
            >
              <div className="w-16 h-16 relative flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                {product.image && (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-gray-900 truncate">{product.name}</h4>
                {product.brand && <p className="text-xs text-gray-500 truncate">{product.brand}</p>}
                {product.description && <p className="text-xs text-gray-400 line-clamp-1">{product.description}</p>}
                <p className="text-sm font-bold text-pink-500 mt-1">${product.price}</p>
              </div>
            </Link>
            {index < searchResults.length - 1 && (
              <div className="border-b border-gray-100 mx-3" />
            )}
          </div>
        ))}
      </div>
    ) : showResults && searchQuery.length >= 2 ? (
      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
        <p className="text-gray-500 text-sm text-center">No se encontraron productos</p>
      </div>
    ) : null
  );

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
            <div ref={searchRef} className="hidden md:flex max-w-sm relative flex-shrink-0">
              <Input
                type="search"
                placeholder="Buscar..."
                className="pr-10 rounded-full w-32 md:w-40 lg:w-48 xl:w-56"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery.length >= 2 && setShowResults(true)}
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <SearchResultsDropdown />
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

          {/* Mobile Search - se oculta cuando el menú está abierto */}
          {!menuOpen && (
            <div className="md:hidden mt-4">
              <div ref={mobileSearchRef} className="flex max-w-sm relative mx-auto">
                <Input
                  type="search"
                  placeholder="Buscar..."
                  className="pr-10 rounded-full w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => searchQuery.length >= 2 && setShowResults(true)}
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <SearchResultsDropdown />
              </div>
            </div>
          )}

          {/* Mobile Menu - solo enlaces */}
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
