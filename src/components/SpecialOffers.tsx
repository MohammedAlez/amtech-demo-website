import React from 'react';

interface SpecialOffersProps {
  onAddToCart?: (item: { id: string; name: string; specs: string; price: string }) => void;
  onExploreDeals?: () => void;
}

interface PromoProduct {
  id: string;
  name: string;
  badge: string;
  specs: string;
  originalPrice: string;
  discountPrice: string;
  image: string;
}

const promoProducts: PromoProduct[] = [
  {
    id: 'promo-macbook-pro-14',
    name: 'MacBook Pro 14" M2 Pro',
    badge: '-30 000 DA',
    specs: 'M2 Pro · 16GB RAM · 512GB SSD · Liquid Retina XDR',
    originalPrice: '258,999 DA',
    discountPrice: '228,999 DA',
    image: '/images/macbook-pro-14-m2-pro.png',
  },
  {
    id: 'promo-hp-elitebook-830',
    name: 'HP EliteBook 830 G10',
    badge: '-20 000 DA',
    specs: 'i7-1365U · 32GB RAM DDR5 · 512GB SSD · Tactile',
    originalPrice: '154,999 DA',
    discountPrice: '134,999 DA',
    image: '/images/hp-elitebook-830-g10.png',
  },
  {
    id: 'promo-surface-pro-9',
    name: 'Microsoft Surface Pro 9',
    badge: '-25 000 DA',
    specs: 'i7-1265U · 16GB RAM · 256GB SSD · 13" 120Hz 2K Tactile',
    originalPrice: '174,999 DA',
    discountPrice: '149,999 DA',
    image: '/images/surface-pro-9-i7.png',
  },
  {
    id: 'promo-thinkpad-t14s',
    name: 'Lenovo ThinkPad T14s Gen 3',
    badge: '-20 000 DA',
    specs: 'i7-1185G7 · 32GB RAM · 512GB SSD · 14" FHD Tactile',
    originalPrice: '119,999 DA',
    discountPrice: '99,999 DA',
    image: '/images/lenovo-thinkpad-t14s-gen3.png',
  },
];

export const SpecialOffers: React.FC<SpecialOffersProps> = ({ onAddToCart }) => {
  return (
    <section
      id="special-offers"
      className="w-full bg-transparent py-4 sm:py-6 md:py-8 px-2 sm:px-6 md:px-8 select-none"
    >
      {/* Black Card Container */}
      <div className="max-w-7xl mx-auto rounded-[22px] sm:rounded-[28px] bg-[#0c1013] text-white p-4 sm:p-6 md:p-8 border border-neutral-800 shadow-xl">
        {/* Section Header */}
        <div className="mb-4 sm:mb-6">
          <h2
            id="special-offers-title"
            className="font-serif-hero text-xl sm:text-2xl md:text-4xl lg:text-[44px] font-normal tracking-tight text-white leading-tight"
          >
            Offres spéciales de la semaine.
          </h2>
        </div>

        {/* Products Grid (2 cols mobile, 4 cols desktop) */}
        <div
          id="special-offers-grid"
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
        >
          {promoProducts.map((product) => (
            <div
              key={product.id}
              id={`promo-card-${product.id}`}
              // onClick={() =>
              //   onAddToCart?.({
              //     id: product.id,
              //     name: product.name,
              //     specs: product.specs,
              //     price: product.discountPrice,
              //   })
              // }
              className="group flex flex-col justify-between rounded-xl sm:rounded-2xl bg-white p-2 sm:p-2.5 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div>
                {/* Product Image */}
                <div className="relative aspect-[4/3] rounded-md sm:rounded-lg overflow-hidden bg-neutral-100 mb-2 sm:mb-2.5">
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Clean Discount Badge */}
                  <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 bg-neutral-900/90 text-white font-semibold text-[8px] sm:text-[9.5px] px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded tracking-wider">
                    {product.badge}
                  </div>
                </div>

                {/* Specs */}
                <div className="text-[10px] sm:text-[11px] text-neutral-500 font-normal line-clamp-1 mb-0.5 px-0.5">
                  {product.specs}
                </div>

                {/* Product Name */}
                <h3 className="font-serif-hero text-xs sm:text-sm md:text-[15px] font-normal text-neutral-900 leading-snug mb-1.5 px-0.5 truncate">
                  {product.name}
                </h3>
              </div>

              {/* Price Row */}
              <div className="pt-1.5 sm:pt-2 px-0.5 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
                <span className="font-sans text-xs sm:text-[13px] font-semibold text-neutral-900">
                  {product.discountPrice}
                </span>
                <span className="font-sans text-[10px] sm:text-[11px] text-neutral-400 line-through">
                  {product.originalPrice}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
