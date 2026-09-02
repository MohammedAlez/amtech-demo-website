import React from 'react';
import { X, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CartItem {
  id: string;
  name: string;
  specs: string;
  price: string;
  qty: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative w-full max-w-md bg-[#0f1216] border-l border-white/10 text-white h-full flex flex-col p-6 sm:p-8 z-10 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <ShoppingBag size={20} className="text-white" />
                <h2 className="font-semibold text-lg">Votre Panier</h2>
                <span className="text-xs bg-white/10 text-white px-2 py-0.5 rounded-full font-medium">
                  {items.reduce((acc, it) => acc + it.qty, 0)} articles
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Fermer le panier"
              >
                <X size={20} />
              </button>
            </div>

            {/* Item list */}
            <div className="py-6 flex-1 overflow-y-auto space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 text-neutral-400">
                  <ShoppingBag size={48} className="text-neutral-600 mb-3" />
                  <p className="font-medium text-white mb-1">Votre panier est vide</p>
                  <p className="text-xs max-w-xs text-neutral-400">
                    Découvrez notre collection d'ordinateurs portables pour créateurs, professionnels et gamers.
                  </p>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start justify-between p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div>
                      <h3 className="font-medium text-sm text-white">{item.name}</h3>
                      <p className="text-xs text-neutral-400 mt-0.5">{item.specs}</p>
                      <div className="mt-2 text-sm font-semibold text-emerald-400">
                        {item.price}
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-neutral-500 hover:text-rose-400 p-1.5 transition-colors"
                      aria-label={`Supprimer ${item.name}`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Cart summary */}
            {items.length > 0 && (
              <div className="pt-5 border-t border-white/10 space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-neutral-400">Livraison 58 Wilayas</span>
                  <span className="text-emerald-400 font-medium">GRATUITE</span>
                </div>
                <button
                  onClick={() => alert('Validation de commande avec livraison dans votre wilaya !')}
                  className="w-full flex items-center justify-center space-x-2 bg-white text-black font-semibold py-3.5 px-6 rounded-full hover:bg-neutral-100 transition-colors"
                >
                  <span>Commander maintenant</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
