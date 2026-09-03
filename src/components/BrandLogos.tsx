import React, { useState } from 'react';
import { motion } from 'motion/react';

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
    className: 'h-10 sm:h-12 md:h-14',
  },
  {
    id: 'lenovo',
    name: 'Lenovo',
    logoUrl: 'https://cdn.simpleicons.org/lenovo/14181c',
    alt: 'Lenovo official logo',
    className: 'h-9 sm:h-11 md:h-13',
  },
  {
    id: 'dell',
    name: 'Dell',
    logoUrl: 'https://cdn.simpleicons.org/dell/14181c',
    alt: 'Dell official logo',
    className: 'h-10 sm:h-12 md:h-14',
  },
  {
    id: 'hp',
    name: 'HP',
    logoUrl: 'https://cdn.simpleicons.org/hp/14181c',
    alt: 'HP official logo',
    className: 'h-11 sm:h-13 md:h-15',
  },
  {
    id: 'asus',
    name: 'ASUS',
    logoUrl: 'https://cdn.simpleicons.org/asus/14181c',
    alt: 'ASUS official logo',
    className: 'h-8 sm:h-10 md:h-12',
  },
  {
    id: 'acer',
    name: 'Acer',
    logoUrl: 'https://cdn.simpleicons.org/acer/14181c',
    alt: 'Acer official logo',
    className: 'h-8 sm:h-10 md:h-12',
  },
  {
    id: 'msi',
    name: 'MSI',
    logoUrl: 'https://cdn.simpleicons.org/msi/14181c',
    alt: 'MSI Gaming official logo',
    className: 'h-9 sm:h-11 md:h-13',
  },
  {
    id: 'razer',
    name: 'Razer',
    logoUrl: 'https://cdn.simpleicons.org/razer/14181c',
    alt: 'Razer official logo',
    className: 'h-10 sm:h-12 md:h-14',
  },
];

export const BrandLogos: React.FC = () => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (brandId: string) => {
    setFailedImages((prev) => ({ ...prev, [brandId]: true }));
  };

  // Duplicating brands array ensures a seamless end-to-end loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section
      id="brands"
      className="w-full bg-transparent py-6 sm:py-8 md:py-10 px-2 sm:px-6 md:px-8 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="shop-by-brand-title"
          className="text-[#8e9aa5] text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase mb-6 sm:mb-8 text-center md:text-left"
        >
          REVENDEUR AGRÉÉ ET GRANDES MARQUES
        </h2>

        {/* Outer track container with horizontal edge fade */}
        <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <motion.div
            className="flex w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              ease: 'linear',
              duration: 25,
              repeat: Infinity,
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <motion.div
                key={`${brand.id}-${index}`}
                className="flex items-center justify-center mx-6 sm:mx-10 opacity-85 cursor-pointer h-16 sm:h-20 shrink-0"
                whileHover={{ scale: 1.1, opacity: 1 }}
                transition={{ duration: 0.2 }}
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
                  <span className="font-bold tracking-wider text-sm sm:text-base text-neutral-800 uppercase">
                    {brand.name}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};