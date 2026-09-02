import React, { useState } from 'react';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import amtechStorefrontImage from '../assets/images/amtech_storefront_1788350528974.jpg';

interface HeroProps {
  onShopClick?: () => void;
}

const slides = [
  {
    id: '01',
    eyebrow: 'DESTINATION PC PORTABLES EN ALGÉRIE',
    titleLine1: 'Trouvez le PC portable',
    titleLine2: 'qui vous correspond.',
    tagline: 'Livraison gratuite dans toute l’Algérie',
    cta: 'Découvrir les PC',
    image: amtechStorefrontImage,
  },
  {
    id: '02',
    eyebrow: 'MATÉRIEL CERTIFIÉ & OFFICIEL',
    titleLine1: 'Conçu pour des',
    titleLine2: 'performances optimales.',
    tagline: 'Garantie officielle de 2 ans',
    cta: 'Explorer les modèles',
    image: amtechStorefrontImage,
  },
  {
    id: '03',
    eyebrow: 'SÉLECTION HAUT DE GAMME',
    titleLine1: 'Adapté à votre',
    titleLine2: 'rythme de travail.',
    tagline: 'Livraison express 48h dans 58 Wilayas',
    cta: 'Consulter le catalogue',
    image: amtechStorefrontImage,
  },
];

export const Hero: React.FC<HeroProps> = ({ onShopClick }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = slides[currentSlideIndex];

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="hero-section"
      className="relative w-full flex-1 min-h-0 flex flex-col justify-between px-6 sm:px-10 md:px-14 lg:px-16 pb-5 sm:pb-8 md:pb-10 pt-2 sm:pt-4 z-10"
    >
      {/* Background Image Container with Gradient Overlays */}
      <div className="absolute inset-0 -z-10 overflow-hidden select-none pointer-events-none">
        {/* AMTECH Storefront / Desk Laptop Photography */}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide.image}
            src={currentSlide.image}
            alt="AMTECH Storefront"
            initial={{ opacity: 0.4, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.4 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover object-[70%_center] sm:object-[60%_center] md:object-[55%_center] lg:object-center brightness-105 contrast-100"
          />
        </AnimatePresence>

        {/* Softer Dark Fade Gradient on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c0e]/85 via-[#0a0c0e]/60 sm:via-[#0a0c0e]/40 to-transparent w-full md:w-[68%] lg:w-[58%]" />
        
        {/* Soft Top Header Shadow Gradient */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#0a0c0e]/60 via-[#0a0c0e]/20 to-transparent" />
        
        {/* Soft Mobile Bottom Gradient */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#0a0c0e]/60 via-transparent to-transparent md:hidden" />
      </div>

      {/* Main Hero Content */}
      <div className="my-auto py-2 sm:py-4 md:py-6 max-w-2xl lg:max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="flex flex-col items-start"
          >
            {/* Eyebrow / Subtitle */}
            <span
              id="hero-eyebrow"
              className="text-[#8ea5b6] text-[10px] sm:text-xs md:text-[13px] font-semibold tracking-[0.22em] uppercase mb-2 sm:mb-4 md:mb-5 select-none"
            >
              {currentSlide.eyebrow}
            </span>

            {/* Main Headline */}
            <h1
              id="hero-heading"
              className="text-white font-serif-hero text-[34px] sm:text-[50px] md:text-[64px] lg:text-[74px] xl:text-[82px] leading-[1.08] tracking-[-0.015em] mb-5 sm:mb-7 md:mb-8 drop-shadow-sm"
            >
              <span className="block font-normal">{currentSlide.titleLine1}</span>
              <span className="block italic font-normal text-[#f8fafc]">
                {currentSlide.titleLine2}
              </span>
            </h1>

            {/* Primary CTA Button */}
            <button
              id="hero-cta-button"
              onClick={onShopClick}
              className="group inline-flex items-center justify-center space-x-2.5 bg-[#f4f3ee] hover:bg-white text-[#11161b] px-5 sm:px-7 py-3 sm:py-3.5 md:py-4 rounded-full font-medium text-xs sm:text-sm md:text-[15px] shadow-lg shadow-black/25 transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span className="font-semibold tracking-tight">{currentSlide.cta}</span>
              <ArrowUpRight
                size={17}
                strokeWidth={2.2}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Footer / Carousel Indicator */}
      <div
        id="hero-footer-indicators"
        className="w-full flex flex-col sm:flex-row sm:items-center justify-between pt-4 sm:pt-5 border-t border-white/10 text-xs sm:text-[13px] text-[#90a2b0] select-none"
      >
        {/* Left Side: Number & Progress Bar & Free Delivery Label */}
        <div className="flex items-center space-x-4 sm:space-x-5">
          {/* Slide counter */}
          <span
            id="slide-number-display"
            className="font-medium tracking-wider text-neutral-300 min-w-[48px]"
          >
            {currentSlide.id} / 03
          </span>

          {/* Progress divider bar with indicator */}
          <div
            id="slide-progress-bar-track"
            className="w-12 sm:w-16 h-[1.5px] bg-white/20 rounded-full overflow-hidden cursor-pointer"
            onClick={handleNextSlide}
            title="Next Slide"
          >
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: '33%' }}
              animate={{
                width:
                  currentSlideIndex === 0
                    ? '33%'
                    : currentSlideIndex === 1
                    ? '66%'
                    : '100%',
              }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Tagline / Value Proposition */}
          <span
            id="hero-tagline-text"
            className="text-[#9cb0be] font-normal tracking-wide text-xs sm:text-[13px] truncate"
          >
            {currentSlide.tagline}
          </span>
        </div>

        {/* Interactive slide switch controls for smooth switching */}
        <div className="hidden sm:flex items-center space-x-2 text-white/50 hover:text-white mt-2 sm:mt-0">
          <button
            onClick={handlePrevSlide}
            className="p-1.5 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Previous slide"
          >
            <ArrowLeft size={14} />
          </button>
          <button
            onClick={handleNextSlide}
            className="p-1.5 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Next slide"
          >
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};