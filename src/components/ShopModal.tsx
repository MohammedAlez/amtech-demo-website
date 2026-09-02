import React from 'react';
import { X, Check, Laptop, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LaptopProduct {
  id: string;
  name: string;
  category: string;
  price: string;
  specs: string;
  image: string;
  tag?: string;
}

const sampleLaptops: LaptopProduct[] = [
  {
    id: 'lap-1',
    name: 'MacBook Pro 16" M3 Max',
    category: 'Créateurs et Pro',
    price: '485,000 DA',
    specs: '36GB RAM Unifiée, 1TB SSD, Liquid Retina XDR',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
    tag: 'Idéal Créateurs',
  },
  {
    id: 'lap-2',
    name: 'ROG Zephyrus G16 OLED',
    category: 'Gaming et Haute Puissance',
    price: '395,000 DA',
    specs: 'Intel Core Ultra 9, RTX 4080, 32GB RAM, 240Hz',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80',
    tag: 'Haute Performance',
  },
  {
    id: 'lap-3',
    name: 'Dell XPS 14 Core Ultra 7',
    category: 'Direction et Mobilité',
    price: '320,000 DA',
    specs: '3.2K OLED Tactile, 16GB RAM, 1TB SSD, 1.6kg',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80',
    tag: 'Ultra Portable',
  },
];

interface ShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (laptop: LaptopProduct) => void;
}

export const ShopModal: React.FC<ShopModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-[#111419] border border-white/15 rounded-3xl p-6 sm:p-8 text-white shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center space-x-2 text-[#8ea5b6] text-xs font-semibold tracking-wider uppercase mb-1">
                  <Sparkles size={14} />
                  <span>Collection Vedette</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif-hero text-white font-normal">
                  Trouvez le PC portable qui vous correspond
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Fermer"
              >
                <X size={22} />
              </button>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-6">
              {sampleLaptops.map((laptop) => (
                <div
                  key={laptop.id}
                  className="group rounded-2xl bg-white/5 border border-white/10 hover:border-white/25 overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="p-5">
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-black/40">
                      <img
                        src={laptop.image}
                        alt={laptop.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {laptop.tag && (
                        <span className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm text-[10px] uppercase font-semibold tracking-wider px-2 py-1 rounded-full text-neutral-200">
                          {laptop.tag}
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-[#8ea5b6] font-medium mb-1">
                      {laptop.category}
                    </div>
                    <h3 className="font-semibold text-base text-white line-clamp-1 mb-1">
                      {laptop.name}
                    </h3>
                    <p className="text-xs text-neutral-400 line-clamp-2">
                      {laptop.specs}
                    </p>
                  </div>

                  <div className="p-5 pt-0 mt-auto flex items-center justify-between border-t border-white/5">
                    <div className="font-semibold text-sm text-emerald-400">
                      {laptop.price}
                    </div>
                    <button
                      onClick={() => {
                        onAddToCart(laptop);
                        onClose();
                      }}
                      className="bg-white hover:bg-neutral-200 text-black text-xs font-semibold px-4 py-2 rounded-full transition-colors"
                    >
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-white/10 text-xs text-neutral-400 gap-3">
              <span>Tous les ordinateurs sont garantis avec livraison express gratuite dans 58 wilayas.</span>
              <button
                onClick={onClose}
                className="text-white hover:underline text-xs font-medium"
              >
                Fermer l'aperçu
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
