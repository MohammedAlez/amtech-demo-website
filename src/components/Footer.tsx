import React from 'react';
import { Logo } from './Logo';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onCategoryClick?: (category: string) => void;
  onShopClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onCategoryClick, onShopClick }) => {
  return (
    <footer
      id="main-footer"
      className="w-full bg-[#0c1013] text-neutral-400 pt-16 pb-10 px-6 sm:px-10 md:px-14 lg:px-16 mt-16 sm:mt-24 select-none rounded-t-[28px] sm:rounded-t-[36px]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 pb-12 sm:pb-16 border-b border-white/10">
          {/* Left Brand & Contact Column */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col space-y-5">
            {/* Logo */}
            <div className="flex items-center">
              <Logo size={48} className="border-white/20" />
            </div>

            {/* Tagline */}
            <div className="text-white text-lg sm:text-xl font-normal leading-snug">
              Ordinateurs portables haut de gamme <br />
              livrés partout en Algérie.
            </div>

            {/* Address & Contact Info */}
            <div className="text-xs sm:text-[13px] text-neutral-400 leading-relaxed space-y-1 pt-1 font-light">
              <p>15 rue bois des cars 1</p>
              <p>Dely Ibrahim, Alger, 16302</p>
              <p className="text-white font-medium hover:text-emerald-400 transition-colors cursor-pointer">
                +213 792 29 49 89
              </p>
              <p className="text-white font-medium hover:text-emerald-400 transition-colors cursor-pointer">
                amtech.alg@gmail.com
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="#facebook"
                id="social-facebook"
                aria-label="Facebook"
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-neutral-300 hover:text-white transition-all duration-200"
              >
                <Facebook size={14} />
              </a>
              <a
                href="#instagram"
                id="social-instagram"
                aria-label="Instagram"
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-neutral-300 hover:text-white transition-all duration-200"
              >
                <Instagram size={14} />
              </a>
              <a
                href="#linkedin"
                id="social-linkedin"
                aria-label="LinkedIn"
                className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-neutral-300 hover:text-white transition-all duration-200"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          {/* Right Navigation Links Columns */}
          <div className="md:col-span-7 lg:col-span-7 grid grid-cols-3 gap-6 sm:gap-8 pt-2">
            {/* Column 1: Categories */}
            <div className="flex flex-col space-y-3.5">
              <h4 className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                Catégories
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-[13px]">
                <li>
                  <button
                    onClick={() => onCategoryClick?.('ultrabooks')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Ultrabooks
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onCategoryClick?.('gaming')}
                    className="hover:text-white transition-colors text-left"
                  >
                    PC Portables Gaming
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onCategoryClick?.('business')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Professionnel
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onCategoryClick?.('student')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Étudiants
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 2: Shop */}
            <div className="flex flex-col space-y-3.5">
              <h4 className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                Boutique
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-[13px]">
                <li>
                  <button
                    onClick={onShopClick}
                    className="hover:text-white transition-colors text-left"
                  >
                    Tous les PC portables
                  </button>
                </li>
                <li>
                  <button
                    onClick={onShopClick}
                    className="hover:text-white transition-colors text-left"
                  >
                    Nouveautés
                  </button>
                </li>
                <li>
                  <button
                    onClick={onShopClick}
                    className="hover:text-white transition-colors text-left"
                  >
                    Meilleures ventes
                  </button>
                </li>
                <li>
                  <a href="#brands" className="hover:text-white transition-colors">
                    Marques
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="flex flex-col space-y-3.5">
              <h4 className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                AMTECH
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-[13px]">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    À propos de nous
                  </a>
                </li>
                <li>
                  <a href="#store-location" className="hover:text-white transition-colors">
                    Contact et Magasin
                  </a>
                </li>
                <li>
                  <a href="#delivery" className="hover:text-white transition-colors">
                    Livraison 58 Wilayas
                  </a>
                </li>
                <li>
                  <a href="#warranty" className="hover:text-white transition-colors">
                    Garantie et SAV
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-neutral-500 gap-3">
          <div>© 2026 AMTECH Algérie. Tous droits réservés.</div>
          <div>Paiements sécurisés · Service client dédié</div>
        </div>
      </div>
    </footer>
  );
};
