import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLink?: (link: string) => void;
}

export const MobileDrawer: React.FC<MenuProps> = ({
  isOpen,
  onClose,
  onSelectLink,
}) => {
  const menuItems = [
    { label: 'Catégories', href: '#categories' },
    { label: 'PC Portables', href: '#best-sellers' },
    { label: 'Marques', href: '#brands' },
    { label: 'Contact', href: '#store-location' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="menu-overlay"
          className="fixed inset-0 z-50 flex items-stretch sm:items-center justify-end sm:justify-center p-0 sm:p-4 md:p-6"
        >
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Menu Card matching exact user design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.96, x: 20 }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="relative w-full max-w-sm sm:max-w-md h-full sm:h-auto sm:min-h-[520px] bg-[#121619] text-white flex flex-col justify-between p-6 sm:p-10 z-10 shadow-2xl rounded-none sm:rounded-[32px] border border-white/10 overflow-hidden"
          >
            {/* Top Close Bar */}
            <div className="flex items-center justify-end">
              <button
                id="menu-close-button"
                onClick={onClose}
                className="p-2.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={1.8} />
              </button>
            </div>

            {/* Menu Links Stack matching exact image */}
            <div className="my-auto py-6 flex flex-col">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  id={`menu-item-${item.label.toLowerCase()}`}
                  onClick={(e) => {
                    if (onSelectLink) onSelectLink(item.label);
                    onClose();
                  }}
                  className="group block py-5 sm:py-6 border-b border-white/10 transition-all duration-200 hover:pl-2"
                >
                  <span className="font-serif-hero text-3xl sm:text-4xl md:text-[42px] font-normal text-white group-hover:text-neutral-200 tracking-tight transition-colors">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>

            {/* Subtle bottom detail */}
            <div className="pt-4 text-xs text-neutral-500 tracking-wider uppercase font-medium">
              M TECH • Algeria
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

