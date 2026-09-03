import React, { useEffect, useState } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isLight = variant === 'light' || isScrolled;

  const navLinks = [
    { label: 'Catégories', href: '#categories' },
    { label: 'PC Portables', href: '#best-sellers' },
    { label: 'Marques', href: '#brands' },
    { label: 'Contact', href: '#store-location' },
  ];

  return (
    <header
      id="main-header"
      className={`
        z-50
        flex
        items-center
        justify-between
        transition-[background-color,color,box-shadow,padding,border-color]
duration-200
ease-out

        ${
          isScrolled
            ? `
              fixed
              top-0
              left-0
              w-full
              bg-white/95
              backdrop-blur-xl
              border-b
              border-neutral-200
              shadow-md
              py-3
              sm:py-4
              px-4
              sm:px-8
              md:px-12
              lg:px-16
            `
            : `
              relative
              w-full
              bg-transparent
              pt-4
              sm:pt-6
              md:pt-8
              pb-3
              sm:pb-4
              px-6
              sm:px-10
              md:px-14
              lg:px-16
            `
        }
      `}
    >
      {/* Logo */}
      <div className="flex items-center">
        <button
          onClick={onNavigateHome}
          id="brand-logo-link"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded-full"
          aria-label="AMTECH Accueil"
        >
          <Logo
            size={42}
            className="sm:w-[48px] sm:h-[48px]"
          />
        </button>
      </div>

      {/* Navigation + Icons */}
      <div className="flex items-center space-x-6 sm:space-x-8 md:space-x-10 lg:space-x-12">
        {/* Desktop Navigation */}
        <nav
          id="desktop-nav"
          className={`
            hidden
            md:flex
            items-center
            space-x-8
            lg:space-x-10
            text-[14px]
            font-normal
            tracking-wide
            transition-colors
            duration-200
            ${
              isLight
                ? 'text-neutral-600'
                : 'text-neutral-300'
            }
          `}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              id={`nav-link-${link.label.toLowerCase()}`}
              className={`
                relative
                py-1
                transition-colors
                duration-200
                after:content-['']
                after:absolute
                after:bottom-0
                after:left-0
                after:w-0
                after:h-[1px]
                after:transition-all
                hover:after:w-full
                ${
                  isLight
                    ? 'hover:text-neutral-900 after:bg-neutral-900'
                    : 'hover:text-white after:bg-white'
                }
              `}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div
          className={`
            flex
            items-center
            space-x-2
            sm:space-x-3.5
            ${
              isLight
                ? 'text-neutral-900'
                : 'text-white'
            }
          `}
        >
          {/* Search */}
          <button
            type="button"
            id="nav-search-button"
            onClick={onOpenSearch}
            className={`
              p-2
              sm:p-2.5
              rounded-full
              transition-colors
              duration-200
              group
              ${
                isLight
                  ? 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'
                  : 'text-neutral-300 hover:text-white hover:bg-white/10'
              }
            `}
            aria-label="Rechercher"
          >
            <Search
              size={20}
              strokeWidth={2}
              className="transition-transform group-hover:scale-110"
            />
          </button>

          {/* Cart */}
          <button
            type="button"
            id="nav-cart-button"
            onClick={onOpenCart}
            className={`
              relative
              p-2
              sm:p-2.5
              rounded-full
              transition-colors
              duration-200
              group
              ${
                isLight
                  ? 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'
                  : 'text-neutral-300 hover:text-white hover:bg-white/10'
              }
            `}
            aria-label="Voir le panier"
          >
            <ShoppingCart
              size={20}
              strokeWidth={1.85}
              className="transition-transform group-hover:scale-110"
            />

            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full bg-neutral-900 text-white text-[10px]">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu */}
          <button
            id="mobile-menu-toggle-button"
            onClick={onOpenMobileMenu}
            className={`
              md:hidden
              p-2
              rounded-lg
              transition-colors
              duration-200
              group
              ${
                isLight
                  ? 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'
                  : 'text-neutral-200 hover:text-white hover:bg-white/10'
              }
            `}
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