import React from 'react';
import { Search, ShoppingCart, Menu } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenMobileMenu: () => void;
  onOpenSearch?: () => void;
  onOpenCart?: () => void;
  onNavigateHome?: () => void;
  cartCount?: number;
  variant?: 'dark' | 'light';
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenMobileMenu,
  onOpenSearch,
  onOpenCart,
  onNavigateHome,
  cartCount = 0,
  variant = 'dark',
}) => {
  const isLight = variant === 'light';
  const navLinks = [
    { label: 'Catégories', href: '#categories' },
    { label: 'PC Portables', href: '#best-sellers' },
    { label: 'Marques', href: '#brands' },
    { label: 'Contact', href: '#store-location' },
  ];

  return (
    <header
      id="main-header"
      className={`relative z-30 w-full flex-shrink-0 flex items-center justify-between transition-colors ${
        isLight
          ? 'py-3 sm:py-4 px-4 sm:px-8 md:px-12 lg:px-16 bg-white border-b border-neutral-200/80 shadow-xs'
          : 'pt-4 sm:pt-6 md:pt-8 px-6 sm:px-10 md:px-14 lg:px-16'
      }`}
    >
      {/* Brand Logo */}
      <div className="flex items-center">
        <button
          onClick={onNavigateHome}
          id="brand-logo-link"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded-full"
          aria-label="AMTECH Accueil"
        >
          <Logo size={42} className="sm:w-[48px] sm:h-[48px]" />
        </button>
      </div>

      {/* Desktop Navigation Links & Action Icons */}
      <div className="flex items-center space-x-6 sm:space-x-8 md:space-x-10 lg:space-x-12">
        {/* Navigation Items (Desktop only) */}
        <nav
          id="desktop-nav"
          className={`hidden md:flex items-center space-x-8 lg:space-x-10 text-[14px] font-normal tracking-wide ${
            isLight ? 'text-neutral-600' : 'text-neutral-300'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                if (onNavigateHome) {
                  onNavigateHome();
                }
              }}
              id={`nav-link-${link.label.toLowerCase()}`}
              className={`transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:transition-all hover:after:w-full ${
                isLight
                  ? 'hover:text-neutral-900 after:bg-neutral-900'
                  : 'hover:text-white after:bg-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Icons (Search, Cart, and Mobile Menu) */}
        <div
          className={`flex items-center space-x-2 sm:space-x-3.5 ${
            isLight ? 'text-neutral-900' : 'text-white'
          }`}
        >
          {/* Search Button */}
          <button
            type="button"
            id="nav-search-button"
            onClick={onOpenSearch}
            className={`p-2 sm:p-2.5 transition-colors duration-200 focus:outline-none focus-visible:ring-2 rounded-full group cursor-pointer ${
              isLight
                ? 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus-visible:ring-neutral-400'
                : 'text-neutral-300 hover:text-white hover:bg-white/10 focus-visible:ring-white/30'
            }`}
            aria-label="Rechercher des PC portables"
          >
            <Search
              size={20}
              strokeWidth={2}
              className="transition-transform group-hover:scale-110"
            />
          </button>

          {/* Cart Button */}
          <button
            type="button"
            id="nav-cart-button"
            className={`relative p-2 sm:p-2.5 transition-colors duration-200 focus:outline-none focus-visible:ring-2 rounded-full group cursor-pointer ${
              isLight
                ? 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus-visible:ring-neutral-400'
                : 'text-neutral-300 hover:text-white hover:bg-white/10 focus-visible:ring-white/30'
            }`}
            aria-label="Voir le Panier"
          >
            <ShoppingCart
              size={20}
              strokeWidth={1.85}
              className="transition-transform group-hover:scale-110"
            />
            
          </button>

          {/* Hamburger Menu Button - ONLY visible on mobile/small screens (hidden on md & up) */}
          <button
            id="mobile-menu-toggle-button"
            onClick={onOpenMobileMenu}
            className={`md:hidden p-2 transition-colors duration-200 focus:outline-none focus-visible:ring-2 rounded-lg group ${
              isLight
                ? 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus-visible:ring-neutral-400'
                : 'text-neutral-200 hover:text-white hover:bg-white/10 focus-visible:ring-white/30'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            <Menu
              size={23}
              strokeWidth={2}
              className="transition-transform group-hover:scale-105"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

