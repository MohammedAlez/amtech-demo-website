import React, { useState } from 'react';

interface BrandItem {
  id: string;
  name: string;
  logoUrl: string;
  alt: string;
  className?: string;
  svgFallback?: React.ReactNode;
}

const brands: BrandItem[] = [
  {
    id: 'apple',
    name: 'Apple',
    logoUrl: 'https://cdn.simpleicons.org/apple/14181c',
    alt: 'Apple official logo',
    className: 'h-8 sm:h-9 md:h-10',
  },
  {
    id: 'lenovo',
    name: 'Lenovo',
    logoUrl: 'https://cdn.simpleicons.org/lenovo/14181c',
    alt: 'Lenovo official logo',
    className: 'h-7 sm:h-8 md:h-9',
  },
  {
    id: 'dell',
    name: 'Dell',
    logoUrl: 'https://cdn.simpleicons.org/dell/14181c',
    alt: 'Dell official logo',
    className: 'h-8 sm:h-9 md:h-10',
  },
  {
    id: 'hp',
    name: 'HP',
    logoUrl: 'https://cdn.simpleicons.org/hp/14181c',
    alt: 'HP official logo',
    className: 'h-9 sm:h-10 md:h-11',
  },
  {
    id: 'asus',
    name: 'ASUS',
    logoUrl: 'https://cdn.simpleicons.org/asus/14181c',
    alt: 'ASUS official logo',
    className: 'h-6 sm:h-7 md:h-8',
  },
  {
    id: 'acer',
    name: 'Acer',
    logoUrl: 'https://cdn.simpleicons.org/acer/14181c',
    alt: 'Acer official logo',
    className: 'h-6 sm:h-7 md:h-8',
  },
  {
    id: 'msi',
    name: 'MSI',
    logoUrl: 'https://cdn.simpleicons.org/msi/14181c',
    alt: 'MSI Gaming official logo',
    className: 'h-7 sm:h-8 md:h-9',
  },
  {
    id: 'razer',
    name: 'Razer',
    logoUrl: 'https://cdn.simpleicons.org/razer/14181c',
    alt: 'Razer official logo',
    className: 'h-8 sm:h-9 md:h-10',
  },
];

export const BrandLogos: React.FC = () => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (brandId: string) => {
    setFailedImages((prev) => ({ ...prev, [brandId]: true }));
  };

  return (
    <section
      id="brands"
      className="w-full bg-transparent py-4 sm:py-6 md:py-8 px-2 sm:px-6 md:px-8 select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow / Section Title */}
        <h2
          id="shop-by-brand-title"
          className="text-[#8e9aa5] text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase mb-6 sm:mb-8 text-center md:text-left"
        >
          REVENDEUR AGRÉÉ ET GRANDES MARQUES
        </h2>

        {/* Brand Logos Row */}
        <div
          id="brands-container"
          className="grid grid-cols-4 md:grid-cols-8 gap-6 sm:gap-8 items-center justify-items-center"
        >
          {brands.map((brand) => (
            <div
              key={brand.id}
              id={`brand-${brand.id}`}
              className="flex items-center justify-center p-2 sm:p-3 opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer h-12 sm:h-14"
              title={brand.name}
            >
              {!failedImages[brand.id] ? (
                <img
                  src={brand.logoUrl}
                  alt={brand.alt}
                  onError={() => handleImageError(brand.id)}
                  loading="eager"
                  className={`${brand.className} w-auto object-contain transition-all duration-200`}
                />
              ) : (
                <span className="font-bold tracking-wider text-xs sm:text-sm text-neutral-800 uppercase">
                  {brand.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
