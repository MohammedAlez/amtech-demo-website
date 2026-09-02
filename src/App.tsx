/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandLogos } from './components/BrandLogos';
import { Categories } from './components/Categories';
import { SpecialOffers } from './components/SpecialOffers';
import { BestSellers, LaptopProduct } from './components/BestSellers';
import { Testimonials } from './components/Testimonials';
import { NewArrivals } from './components/NewArrivals';
import { StoreLocation } from './components/StoreLocation';
import { Footer } from './components/Footer';
import { MobileDrawer } from './components/MobileDrawer';
import { CartDrawer } from './components/CartDrawer';
import { ShopModal } from './components/ShopModal';
import { SearchModal } from './components/SearchModal';
import { ProductPage, ProductDetails } from './components/ProductPage';
import { Laptop, Smartphone, Monitor, Home, LayoutList } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  specs: string;
  price: string;
  qty: number;
}

const defaultProductDetails: ProductDetails = {
  id: 'macbook-pro-14-m2-pro',
  name: 'MacBook Pro 14" M2 Pro (16 Go RAM · 512 Go SSD) Gris Sidéral',
  brand: 'APPLE STORE ALGÉRIE',
  badge: 'SÉLECTION OFFICIELLE',
  category: 'Ultrabooks & Stations Pro',
  price: '228,999 DA',
  originalPrice: '258,999 DA',
  savings: 'Économisez 30 000 DA',
  image: '/images/macbook-pro-14-m2-pro.png',
  gallery: [
    '/images/macbook-pro-14-m2-pro.png',
    '/images/hp-elitebook-830-g10.png',
    '/images/surface-pro-9-i7.png',
    '/images/dell-latitude-7440-2in1.png',
  ],
  rating: 4.9,
  reviewsCount: 128,
  inStock: true,
  specs: {
    cpu: 'Apple M2 Pro (10 cœurs CPU / 16 cœurs GPU)',
    ram: '16 Go Mémoire Unifiée',
    storage: '512 Go SSD NVMe Ultra-rapide',
    display: '14.2" Liquid Retina XDR 120Hz ProMotion',
    gpu: 'GPU 16 cœurs intégré avec Neural Engine',
    weight: '1.60 kg',
  },
  shortDescription:
    'Le MacBook Pro 14 pouces avec puce M2 Pro offre une puissance et une autonomie exceptionnelles pour les professionnels, développeurs et créateurs en Algérie. Écran Liquid Retina XDR époustouflant, connectivité complète avec HDMI, lecteur de carte SDXC et ports Thunderbolt 4.',
  detailedSpecs: [
    {
      category: 'Performances et Processeur',
      items: [
        { label: 'Processeur', value: 'Puce Apple M2 Pro (CPU 10 cœurs, 6 de performance et 4 d’efficience)' },
        { label: 'Carte graphique (GPU)', value: 'GPU 16 cœurs avec accélération matérielle ProRes' },
        { label: 'Neural Engine', value: '16 cœurs pour un apprentissage automatique ultra-rapide' },
        { label: 'Bande passante mémoire', value: '200 Go/s de bande passante mémoire unifiée' },
      ],
    },
    {
      category: 'Mémoire et Stockage',
      items: [
        { label: 'Mémoire RAM', value: '16 Go de mémoire unifiée haute vitesse' },
        { label: 'Capacité de stockage', value: '512 Go SSD PCIe haute performance (jusqu’à 5.5 Go/s)' },
        { label: 'Extension possible', value: 'Lecteur de carte SDXC haute vitesse intégré' },
      ],
    },
    {
      category: 'Écran et Affichage',
      items: [
        { label: 'Diagonale', value: '14.2 pouces (3024 x 1964 pixels à 254 ppp)' },
        { label: 'Technologie', value: 'Liquid Retina XDR, mini-LED avec 1 000 000:1 de contraste' },
        { label: 'Luminosité', value: '1000 nits en plein écran, 1600 nits de pointe en HDR' },
        { label: 'Taux de rafraîchissement', value: 'Technologie ProMotion adaptative jusqu’à 120 Hz' },
      ],
    },
    {
      category: 'Connectivité et Ports',
      items: [
        { label: 'Ports Thunderbolt', value: '3x ports Thunderbolt 4 (USB-C) compatibles charge et DisplayPort' },
        { label: 'Port vidéo', value: '1x port HDMI compatible écrans 4K et 8K' },
        { label: 'Connecteur de charge', value: 'Port MagSafe 3 avec indicateur LED' },
        { label: 'Prise casque', value: 'Prise mini-jack 3,5 mm avec prise en charge des casques haute impédance' },
        { label: 'Sans-fil', value: 'Wi-Fi 6E (802.11ax) et Bluetooth 5.3' },
      ],
    },
    {
      category: 'Autonomie et Boîtier',
      items: [
        { label: 'Autonomie batterie', value: 'Jusqu’à 18 heures de lecture vidéo ou 12 heures de navigation web' },
        { label: 'Chargeur inclus', value: 'Adaptateur secteur USB-C 67W / 96W avec câble MagSafe tressé' },
        { label: 'Dimensions', value: '31,26 cm x 22,12 cm x 1,55 cm' },
        { label: 'Poids', value: '1.60 kg (châssis aluminium unibody)' },
      ],
    },
  ],
};

function mapLaptopToProductDetails(laptop: any): ProductDetails {
  const brandName = laptop.name?.toLowerCase().includes('macbook')
    ? 'APPLE STORE'
    : laptop.name?.toLowerCase().includes('thinkpad')
    ? 'LENOVO THINKPAD'
    : laptop.name?.toLowerCase().includes('dell')
    ? 'DELL PROFESSIONAL'
    : laptop.name?.toLowerCase().includes('surface')
    ? 'MICROSOFT SURFACE'
    : laptop.name?.toLowerCase().includes('hp') || laptop.name?.toLowerCase().includes('elitebook')
    ? 'HP ELITE'
    : 'AMTECH CERTIFIED';

  const parts = (laptop.specs || '').split('·').map((s: string) => s.trim());

  return {
    id: laptop.id || 'laptop-model',
    name: laptop.name,
    brand: brandName,
    badge: laptop.badge || 'PROMO EXCLUSIVE',
    category: 'PC Portables Professionnels',
    price: laptop.price || '134,999 DA',
    originalPrice:
      laptop.originalPrice ||
      (parseInt((laptop.price || '134999').replace(/[^0-9]/g, ''), 10) * 1.15)
        .toFixed(0)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' DA',
    savings: laptop.badge || 'Économisez 20 000 DA',
    image: laptop.image || '/images/macbook-pro-14-m2-pro.png',
    gallery: [
      laptop.image || '/images/macbook-pro-14-m2-pro.png',
      '/images/hp-elitebook-830-g10.png',
      '/images/macbook-pro-14-m2-pro.png',
      '/images/surface-pro-9-i7.png',
    ],
    rating: 4.9,
    reviewsCount: 96,
    inStock: true,
    specs: {
      cpu: parts[0] || 'Intel Core i7 / Apple Silicon',
      ram: parts[1] || '16 Go Mémoire Haute Vitesse',
      storage: parts[2] || '512 Go SSD NVMe M.2',
      display: parts[3] || '14" Écran Haute Définition IPS',
      gpu: 'Carte graphique intégrée / dédiée',
      weight: '1.45 kg',
    },
    shortDescription: `Découvrez le ${laptop.name}, un ordinateur portable haute performance conçu pour les professionnels, créateurs et étudiants en Algérie. Matériel neuf sous scellé avec garantie légale de 2 ans et livraison express dans 58 wilayas.`,
    detailedSpecs: [
      {
        category: 'Performances et Processeur',
        items: [
          { label: 'Processeur', value: parts[0] || 'Processeur multi-cœurs haute performance' },
          { label: 'Mémoire RAM', value: parts[1] || '16 Go DDR5 / Mémoire unifiée' },
          { label: 'Stockage', value: parts[2] || '512 Go SSD PCIe NVMe Ultra-rapide' },
          { label: 'Système d’exploitation', value: 'Windows 11 Pro / macOS sous licence officielle' },
        ],
      },
      {
        category: 'Écran et Graphismes',
        items: [
          { label: 'Écran', value: parts[3] || '14 pouces IPS antireflet' },
          { label: 'Résolution', value: 'FHD+ / 2K / Liquid Retina avec grand confort visuel' },
          { label: 'Couleurs', value: '100% sRGB / DCI-P3 pour graphistes et monteurs' },
        ],
      },
      {
        category: 'Connectivité et Équipements',
        items: [
          { label: 'Ports', value: 'Thunderbolt 4 / USB-C, USB 3.2, HDMI 2.1, Jack 3.5mm' },
          { label: 'Réseau sans fil', value: 'Wi-Fi 6E et Bluetooth 5.3' },
          { label: 'Clavier', value: 'Clavier rétroéclairé AZERTY / QWERTY résistant' },
        ],
      },
      {
        category: 'Garantie et Livraison Algérie',
        items: [
          { label: 'Garantie', value: '24 mois avec Service Après-Vente (SAV) en Algérie' },
          { label: 'Livraison', value: 'Livraison 58 wilayas avec vérification avant paiement' },
          { label: 'Facture', value: 'Facture proforma et facture légale fournies sur demande' },
        ],
      },
    ],
  };
}

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'product'>('home');
  const [selectedProduct, setSelectedProduct] = useState<ProductDetails>(defaultProductDetails);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isShopModalOpen, setIsShopModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'responsive' | 'desktop' | 'mobile'>('responsive');

  // Sample initial cart item
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'lap-1',
      name: 'MacBook Pro 16" M3 Max',
      specs: '36GB RAM, 1TB SSD',
      price: '485,000 DA',
      qty: 1,
    },
  ]);

  const handleAddToCart = (laptop: any) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === laptop.id);
      if (existing) {
        return prev.map((item) =>
          item.id === laptop.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: laptop.id,
          name: laptop.name,
          specs: laptop.specs,
          price: laptop.price,
          qty: 1,
        },
      ];
    });
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleOpenProductPage = (product: any) => {
    const formatted = mapLaptopToProductDetails(product);
    setSelectedProduct(formatted);
    setCurrentView('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div
      id="app-root"
      className="min-h-screen bg-[#f7f7f8] text-neutral-900 flex flex-col items-center justify-start p-2 sm:p-4 md:p-6 lg:p-8 font-sans"
    >
      {/* Top Preview Mode Selector & Page View Switcher */}
      

      {/* Main Container Wrapper */}
      <div
        id="main-page-wrapper"
        className={`w-full transition-all duration-300 mx-auto flex flex-col space-y-10 sm:space-y-14 md:space-y-16 ${
          viewMode === 'mobile'
            ? 'max-w-[400px]'
            : viewMode === 'desktop'
            ? 'max-w-7xl'
            : 'max-w-7xl'
        }`}
      >
        {currentView === 'home' ? (
          <>
            {/* Hero Section Container Card */}
            <div
              id="hero-card-container"
              className="relative w-full min-h-[580px] sm:min-h-[640px] md:min-h-[680px] lg:min-h-[720px] flex flex-col justify-between rounded-[22px] sm:rounded-[30px] md:rounded-[36px] overflow-hidden bg-[#0d0f12] text-white shadow-2xl border border-white/10"
            >
              {/* Header / Navbar */}
              <Navbar
                onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
                onOpenSearch={() => setIsSearchOpen(true)}
                onOpenCart={() => setIsCartOpen(true)}
                onNavigateHome={() => setCurrentView('home')}
                cartCount={totalCartCount}
              />

              {/* Hero Section */}
              <Hero
                onShopClick={() => {
                  const el = document.getElementById('best-sellers') || document.getElementById('special-offers');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              />
            </div>

            {/* Section 2: Shop by Brand (Flat layout without card box) */}
            <BrandLogos />

            {/* Section 3: Shop by Category (Flat layout without card box) */}
            <Categories
              onViewAll={() => setIsShopModalOpen(true)}
              onSelectCategory={(cat) => setIsShopModalOpen(true)}
            />

            {/* Section 4: Urgent Special Offers & Bundles */}
            <SpecialOffers
              onAddToCart={(product) => {
                handleOpenProductPage({
                  id: product.id,
                  name: product.name,
                  specs: product.specs,
                  price: product.price,
                  image: product.image,
                  badge: product.badge,
                });
              }}
              onExploreDeals={() => setIsShopModalOpen(true)}
            />

            {/* Section 5: Best Seller Laptops */}
            <BestSellers
              onViewAllProducts={() => setIsShopModalOpen(true)}
              onViewDetails={(product) => {
                handleOpenProductPage(product);
              }}
            />

            {/* Section 6: Testimonials (Horizontal Marquee) */}
            <Testimonials />

            {/* Section 7: New Arrivals */}
            <NewArrivals
              onViewAllProducts={() => setIsShopModalOpen(true)}
              onViewDetails={(product) => {
                handleOpenProductPage(product);
              }}
            />

            {/* Section 8: Store Location & Contact Showroom */}
            <StoreLocation />
          </>
        ) : (
          /* PRODUCT PAGE VIEW */
          <div className="space-y-8">
            {/* Header bar on dark card for consistent luxury brand header */}
            <div className="w-full rounded-[22px] sm:rounded-[30px] overflow-hidden bg-[#0d0f12] text-white shadow-lg border border-white/10 pb-4">
              <Navbar
                onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
                onOpenSearch={() => setIsSearchOpen(true)}
                onOpenCart={() => setIsCartOpen(true)}
                onNavigateHome={() => setCurrentView('home')}
                cartCount={totalCartCount}
              />
            </div>

            {/* Product Page Main Component */}
            <ProductPage
              product={selectedProduct}
              onBackToCatalog={() => {
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onAddToCart={handleAddToCart}
            />
          </div>
        )}

        {/* Footer */}
        <Footer
          onShopClick={() => setIsShopModalOpen(true)}
          onCategoryClick={() => setIsShopModalOpen(true)}
        />
      </div>

      {/* Slide-out Mobile Navigation Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
      />

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(product) => {
          handleOpenProductPage(product);
          setIsSearchOpen(false);
        }}
      />

      {/* Quick Catalog / Shop Modal */}
      <ShopModal
        isOpen={isShopModalOpen}
        onClose={() => setIsShopModalOpen(false)}
        onAddToCart={(item) => {
          handleAddToCart(item);
        }}
      />
    </div>
  );
}
