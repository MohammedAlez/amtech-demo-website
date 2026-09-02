import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface NewArrivalProduct {
  id: string;
  name: string;
  badge?: string;
  specs: string;
  price: string;
  image: string;
  category: 'ultrabook' | 'gaming' | 'workstation' | 'all';
}

export const newArrivalsData: NewArrivalProduct[] = [
  {
    id: 'macbook-air-m3-2024',
    name: 'MacBook Air 13.6" M3',
    badge: 'NEW ARRIVAL',
    specs: 'Apple M3 · 16GB RAM · 512GB SSD · Liquid Retina',
    price: '174,999 DA',
    image: '/images/macbook-air-m3-2024.png',
    category: 'ultrabook',
  },
  {
    id: 'hp-elitebook-840-g11',
    name: 'HP EliteBook 840 G11',
    badge: 'INTEL ULTRA',
    specs: 'Intel Core Ultra 5 135U · 16GB DDR5 · 512GB SSD · 14" FHD+',
    price: '110,999 DA',
    image: '/images/hp-elitebook-840-g11.png',
    category: 'workstation',
  },
  {
    id: 'surface-pro-9-i7',
    name: 'Microsoft Surface Pro 9',
    badge: '2-IN-1 TOUCH',
    specs: 'i7-1265U · 16GB RAM · 256GB SSD · 13" 2K 120Hz Touch',
    price: '149,999 DA',
    image: '/images/surface-pro-9-i7.png',
    category: 'ultrabook',
  },
  {
    id: 'lenovo-thinkpad-t14s-gen3',
    name: 'Lenovo ThinkPad T14s Gen 3',
    badge: '32GB RAM',
    specs: 'i7-1185G7 · 32GB RAM · 512GB SSD · 14" FHD Touch',
    price: '99,999 DA',
    image: '/images/lenovo-thinkpad-t14s-gen3.png',
    category: 'ultrabook',
  },
  {
    id: 'dell-latitude-5540-i5-p',
    name: 'Dell Latitude 5540 P-Series',
    badge: 'HIGH POWER',
    specs: 'i5-1350P (12 Cores) · 16GB DDR5 · 512GB SSD · 15.6" FHD',
    price: '100,999 DA',
    image: '/images/dell-latitude-5540-i5-p.png',
    category: 'workstation',
  },
  {
    id: 'asus-vivobook-17-core5',
    name: 'ASUS VivoBook 17',
    badge: '17.3 INCH',
    specs: 'Core 5 120U (14th Gen) · 16GB RAM · 512GB SSD · 17.3" FHD',
    price: '99,999 DA',
    image: '/images/asus-vivobook-17-core5.png',
    category: 'ultrabook',
  },
  {
    id: 'dell-latitude-3540-i5',
    name: 'Dell Latitude 3540',
    badge: 'VALUE DEAL',
    specs: 'i5-1345U · 16GB RAM · 512GB SSD · 15.6" FHD · Iris Xe',
    price: '93,999 DA',
    image: '/images/dell-latitude-3540-i5.png',
    category: 'ultrabook',
  },
  {
    id: 'hp-laptop-255-g9',
    name: 'HP Laptop 255 G9',
    badge: 'BUDGET FRIENDLY',
    specs: 'Ryzen 5 5625U · 8GB RAM · 256GB SSD · 15.6" FHD',
    price: '65,999 DA',
    image: '/images/hp-laptop-255-g9.png',
    category: 'ultrabook',
  },
  {
    id: 'lenovo-thinkbook-15-g2',
    name: 'Lenovo ThinkBook 15 G2',
    badge: 'BEST PRICE',
    specs: 'i7-1165G7 · 8GB RAM · 512GB SSD · 15.6" FHD',
    price: '74,999 DA',
    image: '/images/lenovo-thinkbook-15-g2.png',
    category: 'ultrabook',
  },
  {
    id: 'dell-latitude-5340-i5',
    name: 'Dell Latitude 5340 vPro',
    badge: 'FLASH SALE',
    specs: 'i5-1345U · 16GB RAM · 256GB SSD · 13.3" FHD · AZERTY',
    price: '74,999 DA',
    image: '/images/dell-latitude-5340-i5.png',
    category: 'ultrabook',
  },
  {
    id: 'macbook-air-m2-2022',
    name: 'MacBook Air 13.6" M2',
    badge: 'POPULAR',
    specs: 'Apple M2 · 16GB RAM · 256GB SSD · Liquid Retina',
    price: '107,999 DA',
    image: '/images/macbook-air-m2-2022.png',
    category: 'ultrabook',
  },
  {
    id: 'hp-elitebook-640-g9',
    name: 'HP EliteBook 640 G9',
    badge: 'SPECIAL DEAL',
    specs: 'i3-1215U · 8GB RAM · 256GB SSD · 14" FHD',
    price: '58,500 DA',
    image: '/images/hp-elitebook-640-g9.png',
    category: 'ultrabook',
  },
];

interface NewArrivalsProps {
  onViewDetails?: (product: NewArrivalProduct) => void;
  onViewAllProducts?: () => void;
}

export const NewArrivals: React.FC<NewArrivalsProps> = ({
  onViewDetails,
  onViewAllProducts,
}) => {
  return (
    <section
      id="new-arrivals"
      className="w-full bg-transparent py-6 sm:py-10 md:py-14 px-2 sm:px-6 md:px-8 select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Row: Eyebrow + Title & View All */}
        <div className="flex items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="flex-1 min-w-0 pr-2">
            {/* Eyebrow */}
            <span
              id="new-arrivals-eyebrow"
              className="block text-[#8e9aa5] text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.22em] uppercase mb-1.5 sm:mb-2.5"
            >
              NOUVEAUTÉS EN STOCK · DERNIÈRE GÉNÉRATION
            </span>

            {/* Main Headline */}
            <h2
              id="new-arrivals-title"
              className="text-[#14181c] font-serif-hero text-2xl sm:text-3xl md:text-5xl lg:text-[54px] font-normal tracking-tight leading-[1.15]"
            >
              Nouveautés.
            </h2>
          </div>

          {/* View all products link */}
          <button
            id="new-arrivals-view-all"
            // onClick={onViewAllProducts}
            className="group flex-shrink-0 flex items-center space-x-1 sm:space-x-1.5 pb-1 border-b border-[#14181c] text-[#14181c] font-medium text-xs sm:text-sm transition-opacity hover:opacity-75 focus:outline-none mb-0.5 whitespace-nowrap"
          >
            <span>Voir tous les produits</span>
            <ArrowUpRight
              size={14}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>

        {/* Products Grid: 2 cols on mobile, 4 cols on tablet/desktop */}
        <div
          id="new-arrivals-grid"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-7 gap-y-8 sm:gap-y-10"
        >
          {newArrivalsData.map((product) => (
            <div
              key={product.id}
              id={`new-product-card-${product.id}`}
              className="group flex flex-col cursor-pointer"
              // onClick={() => onViewDetails?.(product)}
            >
              {/* Product Image Frame */}
              <div className="relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden bg-neutral-100 shadow-xs mb-3 sm:mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  onError={(e) => {
                    // Graceful fallback if image file is not yet uploaded
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Specs Subtitle */}
              <div className="text-[11px] sm:text-xs text-neutral-500 font-normal mb-1 line-clamp-1">
                {product.specs}
              </div>

              {/* Title */}
              <div className="mb-2 sm:mb-2.5">
                <h3 className="font-serif-hero text-xs sm:text-sm md:text-[15px] font-normal text-neutral-900 leading-snug line-clamp-1">
                  {product.name}
                </h3>
              </div>

              {/* Bottom Row: View Details & Product Price */}
              <div className="mt-auto pt-1 flex items-center justify-between gap-2 border-t border-neutral-100/80">
                <span className="inline-flex items-center space-x-1 text-xs text-neutral-600 group-hover:text-neutral-900 transition-colors font-medium">
                  <span>Voir détails</span>
                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
                <span className="font-sans text-xs sm:text-[13px] font-bold text-neutral-900 whitespace-nowrap">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
