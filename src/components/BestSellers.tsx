import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface LaptopProduct {
  id: string;
  name: string;
  badge?: string;
  specs: string;
  price: string;
  image: string;
  category: 'ultrabook' | 'gaming' | 'workstation' | 'all';
}

export const bestSellersData: LaptopProduct[] = [
  {
    id: 'hp-elitebook-830-g10',
    name: 'HP EliteBook 830 G10 2-in-1',
    badge: 'HOT DEAL',
    specs: 'i7-1365U · 32GB RAM DDR5 · 512GB SSD · 13.3" FHD+ Touch',
    price: '134,999 DA',
    image: '/images/hp-elitebook-830-g10.png',
    category: 'ultrabook',
  },
  {
    id: 'macbook-pro-14-m2-pro',
    name: 'MacBook Pro 14" M2 Pro',
    badge: 'PRO PICK',
    specs: 'Apple M2 Pro · 16GB RAM · 512GB SSD · Liquid Retina XDR',
    price: '228,999 DA',
    image: '/images/macbook-pro-14-m2-pro.png',
    category: 'workstation',
  },
  {
    id: 'lenovo-thinkpad-t14s-amd',
    name: 'Lenovo ThinkPad T14s Gen 2',
    badge: 'POPULAR',
    specs: 'Ryzen 7 PRO 5850U · 16GB RAM · 256GB SSD · 14" FHD Touch',
    price: '85,999 DA',
    image: '/images/lenovo-thinkpad-t14s-amd.png',
    category: 'ultrabook',
  },
  {
    id: 'dell-latitude-7440-2in1',
    name: 'Dell Latitude 7440 2-in-1',
    badge: 'TOP SELLER',
    specs: 'i5-1345U · 16GB DDR5 · 512GB SSD · 14" FHD+ Touch',
    price: '101,999 DA',
    image: '/images/dell-latitude-7440-2in1.png',
    category: 'ultrabook',
  },
  {
    id: 'dell-latitude-7420-i7',
    name: 'Dell Latitude 7420 Intel Evo',
    badge: 'BEST VALUE',
    specs: 'i7-1185G7 · 16GB RAM · 512GB SSD · 14" FHD Touch · Iris Xe',
    price: '84,999 DA',
    image: '/images/dell-latitude-7420-i7.png',
    category: 'ultrabook',
  },
  {
    id: 'hp-elitebook-840-g10',
    name: 'HP EliteBook 840 G10',
    badge: 'EXCELLENT',
    specs: 'i7-1355U · 16GB RAM DDR5 · 512GB SSD · 14" FHD+',
    price: '110,999 DA',
    image: '/images/hp-elitebook-840-g10.png',
    category: 'workstation',
  },
  {
    id: 'macbook-air-13-m1',
    name: 'MacBook Air 13" M1',
    badge: 'ESSENTIAL',
    specs: 'Apple M1 · 8GB RAM · 256GB SSD · Retina Display',
    price: '106,500 DA',
    image: '/images/macbook-air-13-m1.png',
    category: 'ultrabook',
  },
  {
    id: 'hp-elitebook-845-g8',
    name: 'HP EliteBook 845 G8',
    badge: 'SPECIAL OFFER',
    specs: 'Ryzen 5 PRO 5650U · 16GB RAM · 256GB SSD · 14" FHD',
    price: '69,999 DA',
    image: '/images/hp-elitebook-845-g8.png',
    category: 'ultrabook',
  },
];

interface BestSellersProps {
  onViewDetails?: (product: LaptopProduct) => void;
  onViewAllProducts?: () => void;
}

export const BestSellers: React.FC<BestSellersProps> = ({
  onViewDetails,
  onViewAllProducts,
}) => {
  return (
    <section
      id="best-sellers"
      className="w-full bg-transparent py-6 sm:py-10 md:py-12 px-2 sm:px-6 md:px-8 select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Row: Eyebrow + Title & View All */}
        <div className="flex items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="flex-1 min-w-0 pr-2">
            {/* Eyebrow */}
            <span
              id="best-sellers-eyebrow"
              className="block text-[#8e9aa5] text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.22em] uppercase mb-1.5 sm:mb-2.5"
            >
              SÉLECTION DU MOMENT
            </span>

            {/* Main Headline */}
            <h2
              id="best-sellers-title"
              className="text-[#14181c] font-serif-hero text-2xl sm:text-3xl md:text-5xl lg:text-[54px] font-normal tracking-tight leading-[1.15]"
            >
              Meilleures ventes.
            </h2>
          </div>

          {/* View all products link */}
          <button
            id="view-all-products-button"
            onClick={onViewAllProducts}
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
          id="products-grid"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-7 gap-y-8 sm:gap-y-10"
        >
          {bestSellersData.map((product) => (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className="group flex flex-col cursor-pointer"
              // onClick={() => onViewDetails?.(product)}
            >
              {/* Product Image Frame */}
              <div className="relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden bg-neutral-100 shadow-xs mb-3 sm:mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  onError={(e) => {
                    // Graceful fallback if image is being uploaded
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80';
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
