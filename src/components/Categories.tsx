import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import catUltrabooks from '../assets/images/cat_ultrabooks_1788351744535.jpg';
import catGaming from '../assets/images/cat_gaming_1788351762576.jpg';
import catBusiness from '../assets/images/cat_business_1788351777696.jpg';
import catStudent from '../assets/images/cat_student_1788351793011.jpg';

interface Category {
  id: string;
  name: string;
  modelsCount: string;
  image: string;
}

const categories: Category[] = [
  {
    id: 'ultrabooks',
    name: 'Ultrabooks',
    modelsCount: '12 modèles',
    image: catUltrabooks,
  },
  {
    id: 'gaming',
    name: 'PC Portables Gaming',
    modelsCount: '18 modèles',
    image: catGaming,
  },
  {
    id: 'business',
    name: 'Professionnel et Pro',
    modelsCount: '24 modèles',
    image: catBusiness,
  },
  {
    id: 'student',
    name: 'Étudiants et Polyvalents',
    modelsCount: '16 modèles',
    image: catStudent,
  },
];

interface CategoriesProps {
  onSelectCategory?: (category: Category) => void;
  onViewAll?: () => void;
}

export const Categories: React.FC<CategoriesProps> = ({
  onSelectCategory,
  onViewAll,
}) => {
  return (
    <section
      id="categories"
      className="w-full bg-transparent py-4 sm:py-6 md:py-8 px-2 sm:px-6 md:px-8 select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Row: Eyebrow + Title & View all link */}
        <div className="flex items-end justify-between mb-6 sm:mb-10 md:mb-12 gap-4">
          <div className="flex-1 min-w-0 pr-2">
            {/* Eyebrow */}
            <span
              id="categories-eyebrow"
              className="block text-[#8e9aa5] text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.22em] uppercase mb-1.5 sm:mb-3"
            >
              EXPLORER LA BOUTIQUE
            </span>

            {/* Main Headline (scaled down on mobile to prevent overflow) */}
            <h2
              id="categories-title"
              className="text-[#14181c] font-serif-hero text-2xl sm:text-3xl md:text-5xl lg:text-[54px] font-normal tracking-tight leading-[1.15]"
            >
              Acheter par catégorie.
            </h2>
          </div>

          {/* View All Link */}
          <button
            id="categories-view-all"
            onClick={onViewAll}
            className="group flex-shrink-0 flex items-center space-x-1 sm:space-x-1.5 pb-1 border-b border-[#14181c] text-[#14181c] font-medium text-xs sm:text-sm transition-opacity hover:opacity-75 focus:outline-none mb-0.5"
          >
            <span>Voir tout</span>
            <ArrowUpRight
              size={14}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>

        {/* Categories Grid (2 columns on mobile/phone mode, 4 in a row on laptop and wider screens) */}
        <div
          id="categories-grid"
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 md:gap-6 lg:gap-7"
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              id={`category-card-${cat.id}`}
              onClick={() => onSelectCategory?.(cat)}
              className="group relative aspect-[3/4] sm:aspect-[4/5] rounded-[16px] sm:rounded-[22px] md:rounded-[24px] overflow-hidden bg-neutral-900 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Category Background Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Bottom Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

              {/* Text Information at Bottom */}
              <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5 md:p-6 text-white z-10 flex flex-col justify-end">
                <h3 className="font-serif-hero text-lg sm:text-2xl md:text-[25px] font-normal text-white leading-snug mb-0.5 sm:mb-1 drop-shadow-sm">
                  {cat.name}
                </h3>
                <p className="text-neutral-300 text-[11px] sm:text-[13px] font-normal tracking-wide">
                  {cat.modelsCount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
