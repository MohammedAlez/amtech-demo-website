import React, { useState, useMemo } from 'react';
import { Search, X, ArrowUpRight, Laptop, Sparkles, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { bestSellersData } from './BestSellers';
import { newArrivalsData } from './NewArrivals';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct?: (product: any) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  // Combined product catalog
  const allProducts = useMemo(() => {
    const combined = [...bestSellersData, ...newArrivalsData];
    // deduplicate by ID
    const seen = new Set<string>();
    return combined.filter((p) => {
      if (seen.has(p.id)) return false;
      seen.add(p.id);
      return true;
    });
  }, []);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allProducts.slice(0, 8);
    return allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.specs.toLowerCase().includes(q) ||
        p.price.toLowerCase().includes(q) ||
        (p.badge && p.badge.toLowerCase().includes(q))
    );
  }, [query, allProducts]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden z-10 flex flex-col max-h-[80vh]"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 sm:px-6 py-4 border-b border-neutral-100 gap-3">
              <Search size={20} className="text-neutral-400 flex-shrink-0" strokeWidth={2} />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher MacBook, ThinkPad, i7, RTX, Ryzen..."
                className="w-full bg-transparent text-sm sm:text-base text-neutral-900 placeholder-neutral-400 focus:outline-none font-sans"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 rounded-full text-neutral-400 hover:text-neutral-700 transition-colors"
                >
                  <X size={16} />
                </button>
              )}
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-800 hover:bg-neutral-100 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Quick Filters / Tags */}
            <div className="px-4 sm:px-6 py-2.5 bg-neutral-50/70 border-b border-neutral-100 flex items-center space-x-2 overflow-x-auto no-scrollbar text-xs text-neutral-600">
              <span className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase mr-1 whitespace-nowrap">
                Rapide :
              </span>
              {['MacBook', 'ThinkPad', 'EliteBook', 'Dell', 'OLED', 'i7', 'Ryzen'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-colors whitespace-nowrap ${
                    query.toLowerCase() === tag.toLowerCase()
                      ? 'bg-neutral-900 text-white border-neutral-900'
                      : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Results List */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2">
                {query ? `${searchResults.length} résultat(s) trouvé(s)` : 'Modèles populaires en stock'}
              </div>

              {searchResults.length === 0 ? (
                <div className="py-12 text-center text-neutral-400">
                  <Laptop size={36} className="mx-auto mb-2 opacity-40" />
                  <p className="text-sm font-medium text-neutral-600">Aucun PC portable ne correspond à "{query}"</p>
                  <p className="text-xs text-neutral-400 mt-1">Essayez par marque (HP, Lenovo, Apple, Dell) ou processeur.</p>
                </div>
              ) : (
                searchResults.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      onSelectProduct?.(product);
                      onClose();
                    }}
                    className="group flex items-center justify-between p-3 rounded-xl border border-neutral-100 hover:border-neutral-300 hover:bg-neutral-50/80 transition-all cursor-pointer gap-3 sm:gap-4"
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
                      <div className="w-14 h-11 sm:w-16 sm:h-12 rounded-lg bg-neutral-100 overflow-hidden flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80';
                          }}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-serif-hero text-xs sm:text-sm font-semibold text-neutral-900 truncate">
                            {product.name}
                          </h4>
                          {product.badge && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-700 tracking-wider">
                              {product.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-neutral-500 truncate mt-0.5 font-sans">
                          {product.specs}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 flex-shrink-0 text-right">
                      <span className="text-xs sm:text-sm font-bold text-neutral-900 font-sans">
                        {product.price}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-neutral-100 group-hover:bg-neutral-900 group-hover:text-white flex items-center justify-center text-neutral-600 transition-colors">
                        <ArrowUpRight size={13} strokeWidth={2.2} />
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
