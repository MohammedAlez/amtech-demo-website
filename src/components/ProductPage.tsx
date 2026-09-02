import React, { useState } from 'react';
import {
  Truck,
  ShieldCheck,
  MapPin,
  Heart,
  Share2,
  ArrowLeft,
  ShoppingBag,
  ArrowUpRight,
} from 'lucide-react';
import { bestSellersData, LaptopProduct } from './BestSellers';

export interface ProductDetails {
  id: string;
  name: string;
  brand: string;
  badge?: string;
  category: string;
  price: string;
  originalPrice?: string;
  savings?: string;
  image: string;
  gallery?: string[];
  rating?: number;
  reviewsCount?: number;
  inStock: boolean;
  specs: {
    cpu: string;
    ram: string;
    storage: string;
    display: string;
    gpu: string;
    weight: string;
  };
  shortDescription: string;
  detailedSpecs?: {
    category: string;
    items: { label: string; value: string }[];
  }[];
}

interface ProductPageProps {
  product?: ProductDetails;
  onBackToCatalog: () => void;
  onAddToCart?: (product: any) => void;
  onSelectAnotherProduct?: (product: any) => void;
}

const defaultSampleProduct: ProductDetails = {
  id: 'macbook-pro-14-m2-pro',
  name: 'MacBook Pro 14" M2 Pro (16 Go RAM · 512 Go SSD) Gris Sidéral',
  brand: 'APPLE STORE',
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

export const ProductPage: React.FC<ProductPageProps> = ({
  product = defaultSampleProduct,
  onBackToCatalog,
  onAddToCart,
  onSelectAnotherProduct,
}) => {
  const [selectedImage, setSelectedImage] = useState<string>(product.image || defaultSampleProduct.image);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Sync selectedImage when product changes
  React.useEffect(() => {
    setSelectedImage(product.image || defaultSampleProduct.image);
  }, [product.image]);

  const galleryImages =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : [product.image, defaultSampleProduct.gallery![1], defaultSampleProduct.gallery![2]];

  // Related products from catalog (excluding current product)
  const relatedProducts: LaptopProduct[] = bestSellersData
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleBuyNow = () => {
    onAddToCart?.({
      id: product.id,
      name: product.name,
      specs: `${product.specs.cpu} · ${product.specs.ram}`,
      price: product.price,
    });
  };

  const handleAddToBasket = () => {
    onAddToCart?.({
      id: product.id,
      name: product.name,
      specs: `${product.specs.cpu} · ${product.specs.ram}`,
      price: product.price,
    });
  };

  return (
    <div id="product-page-root" className="w-full text-neutral-900 pb-12 sm:pb-16 select-none">
      {/* Top Breadcrumb Bar - Responsive with smaller font for phone mode */}
      <div className="flex items-center justify-between gap-2 py-2.5 px-1 sm:px-2 border-b border-neutral-200/80 mb-5 sm:mb-8 text-[11px] sm:text-xs text-neutral-500">
        <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 min-w-0">
          <button
            onClick={onBackToCatalog}
            className="flex items-center space-x-1 text-neutral-900 hover:text-neutral-600 font-semibold transition-colors flex-shrink-0 cursor-pointer"
          >
            <ArrowLeft size={13} />
            <span>Retour</span>
          </button>
          <span className="text-neutral-300">/</span>
          <button
            onClick={onBackToCatalog}
            className="hover:text-neutral-900 transition-colors flex-shrink-0 cursor-pointer"
          >
            Accueil
          </button>
          <span className="text-neutral-300">/</span>
          <button
            onClick={onBackToCatalog}
            className="hover:text-neutral-900 transition-colors flex-shrink-0 cursor-pointer"
          >
            PC Portables
          </button>
          <span className="text-neutral-300">/</span>
          <span className="text-neutral-900 font-medium truncate max-w-[120px] xs:max-w-[180px] sm:max-w-xs md:max-w-md">
            {product.name}
          </span>
        </div>

        <div className="flex items-center space-x-2 flex-shrink-0 text-neutral-600">
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`p-1.5 rounded-full border border-neutral-200 hover:bg-neutral-100 transition-colors cursor-pointer ${
              isWishlisted ? 'text-rose-600 border-rose-200 bg-rose-50' : ''
            }`}
            title="Ajouter aux favoris"
          >
            <Heart size={14} fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={handleShare}
            className="flex items-center space-x-1 px-2.5 py-1 rounded-full border border-neutral-200 hover:bg-neutral-100 text-[11px] sm:text-xs transition-colors cursor-pointer"
            title="Partager ce produit"
          >
            <Share2 size={12} />
            <span className="hidden xs:inline">{copiedLink ? 'Lien copié !' : 'Partager'}</span>
          </button>
        </div>
      </div>

      {/* Main Two-Column Product Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
        {/* Left Column: Showcase Image + Gallery Thumbnails + Specs Grid */}
        <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-6">
          {/* Main Product Image Frame - takes the whole width & height of cadre, NO badge */}
          <div className="relative aspect-[4/3] w-full rounded-2xl bg-white border border-neutral-200/80 overflow-hidden shadow-xs group">
            <img
              src={selectedImage}
              alt={product.name}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80';
              }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>

          {/* Thumbnails Row */}
          <div className="flex items-center space-x-2.5 sm:space-x-3 overflow-x-auto pb-1 no-scrollbar">
            {galleryImages.map((img, idx) => {
              const isSelected = selectedImage === img;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white border-2 overflow-hidden transition-all duration-200 p-1 cursor-pointer ${
                    isSelected
                      ? 'border-neutral-900 shadow-sm ring-2 ring-neutral-900/10'
                      : 'border-neutral-200/80 hover:border-neutral-400 opacity-80 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Aperçu ${idx + 1}`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80';
                    }}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </button>
              );
            })}
          </div>

          {/* Quick Specifications Matrix */}
          <div className="pt-3 sm:pt-4 border-t border-neutral-200/80">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-2.5 sm:mb-3">
              Caractéristiques principales
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
              <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-neutral-200/70 shadow-2xs">
                <span className="block text-[10px] uppercase font-bold text-neutral-400 tracking-wider mb-0.5">
                  Processeur
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-neutral-900 leading-snug line-clamp-2">
                  {product.specs.cpu}
                </span>
              </div>

              <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-neutral-200/70 shadow-2xs">
                <span className="block text-[10px] uppercase font-bold text-neutral-400 tracking-wider mb-0.5">
                  Mémoire RAM
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-neutral-900 leading-snug">
                  {product.specs.ram}
                </span>
              </div>

              <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-neutral-200/70 shadow-2xs">
                <span className="block text-[10px] uppercase font-bold text-neutral-400 tracking-wider mb-0.5">
                  Stockage SSD
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-neutral-900 leading-snug">
                  {product.specs.storage}
                </span>
              </div>

              <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-neutral-200/70 shadow-2xs">
                <span className="block text-[10px] uppercase font-bold text-neutral-400 tracking-wider mb-0.5">
                  Écran
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-neutral-900 leading-snug line-clamp-2">
                  {product.specs.display}
                </span>
              </div>

              <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-neutral-200/70 shadow-2xs">
                <span className="block text-[10px] uppercase font-bold text-neutral-400 tracking-wider mb-0.5">
                  Graphismes
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-neutral-900 leading-snug line-clamp-2">
                  {product.specs.gpu}
                </span>
              </div>

              <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-neutral-200/70 shadow-2xs">
                <span className="block text-[10px] uppercase font-bold text-neutral-400 tracking-wider mb-0.5">
                  Poids
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-neutral-900 leading-snug">
                  {product.specs.weight}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Brand, Title, Price, 2 Buttons, Trust Badges */}
        <div className="lg:col-span-5 flex flex-col justify-start space-y-5 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            {/* Brand Eyebrow */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#8e9aa5] uppercase">
                {product.brand || 'AMTECH SELECTION'}
              </span>
              <span className="inline-flex items-center space-x-1 text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>En stock</span>
              </span>
            </div>

            {/* Product Title */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-serif-hero text-neutral-900 font-normal leading-tight tracking-tight">
              {product.name}
            </h1>

            {/* Short description */}
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pt-1">
              {product.shortDescription}
            </p>

            {/* Price Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs space-y-1.5 mt-2">
              <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
                <span className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight font-serif-hero">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xs sm:text-sm text-neutral-400 line-through">
                    {product.originalPrice}
                  </span>
                )}
                {product.savings && (
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-md">
                    {product.savings}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-neutral-500 pt-0.5">
                Paiement à la livraison après vérification dans les 58 Wilayas d'Algérie.
              </p>
            </div>

            {/* THE TWO BUTTONS AS REQUESTED */}
            <div className="space-y-2.5 pt-2">
              {/* Button 1: Acheter maintenant */}
              <button
                id="btn-buy-now"
                type="button"
                onClick={handleBuyNow}
                className="w-full bg-neutral-900 hover:bg-black text-white font-medium py-3.5 px-6 rounded-xl transition-all duration-200 text-xs sm:text-sm tracking-wide shadow-sm flex items-center justify-center space-x-2 active:scale-[0.99] cursor-pointer"
              >
                <span>Acheter maintenant</span>
              </button>

              {/* Button 2: Ajouter au panier */}
              <button
                id="btn-add-to-basket"
                type="button"
                onClick={handleAddToBasket}
                className="w-full bg-white hover:bg-neutral-50 text-neutral-900 font-medium py-3.5 px-6 rounded-xl border border-neutral-300 transition-all duration-200 text-xs sm:text-sm tracking-wide shadow-2xs flex items-center justify-center space-x-2 active:scale-[0.99] cursor-pointer"
              >
                <ShoppingBag size={16} />
                <span>Ajouter au panier</span>
              </button>
            </div>

            {/* Algerian Delivery & Trust Badges */}
            <div className="pt-4 border-t border-neutral-200/80 space-y-3 text-xs text-neutral-700">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-neutral-100 text-neutral-800 flex-shrink-0">
                  <Truck size={16} />
                </div>
                <div>
                  <span className="font-semibold text-neutral-900 block">
                    Livraison Express 58 Wilayas
                  </span>
                  <p className="text-neutral-500 text-[11px] leading-tight">
                    Livraison à domicile sous 24h à 48h. Vérification du colis avant paiement.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-neutral-100 text-neutral-800 flex-shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <span className="font-semibold text-neutral-900 block">
                    Garantie Officielle 2 Ans avec SAV
                  </span>
                  <p className="text-neutral-500 text-[11px] leading-tight">
                    Produit neuf certifié avec facture légale et support technique local.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-neutral-100 text-neutral-800 flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="font-semibold text-neutral-900 block">
                    Disponible en Showroom
                  </span>
                  <p className="text-neutral-500 text-[11px] leading-tight">
                    Retrait direct possible à notre showroom à Dely Ibrahim, Alger.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section: exact same structure & design as BestSellers / NewArrivals */}
      <div className="my-10 sm:my-14 pt-8 border-t border-neutral-200/80">
        <div className="flex items-end justify-between mb-6 sm:mb-8">
          <div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#8e9aa5] uppercase block mb-1.5">
              SÉLECTION RECOMMANDÉE
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif-hero text-neutral-900">
              Produits similaires
            </h3>
          </div>

          <button
            onClick={onBackToCatalog}
            className="group flex items-center space-x-1 sm:space-x-1.5 pb-1 border-b border-[#14181c] text-[#14181c] font-medium text-xs sm:text-sm transition-opacity hover:opacity-75 focus:outline-none whitespace-nowrap cursor-pointer"
          >
            <span>Voir le catalogue</span>
            <ArrowUpRight
              size={14}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>

        {/* 2 columns on mobile, 4 columns on tablet/desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-7 gap-y-8 sm:gap-y-10">
          {relatedProducts.map((p) => (
            <div
              key={p.id}
              id={`related-product-${p.id}`}
              className="group flex flex-col cursor-pointer"
              onClick={() => onSelectAnotherProduct?.(p)}
            >
              {/* Product Image Frame */}
              <div className="relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden bg-white border border-neutral-200/70 shadow-2xs mb-3 sm:mb-4">
                <img
                  src={p.image}
                  alt={p.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Specs Subtitle */}
              <div className="text-[11px] sm:text-xs text-neutral-500 font-normal mb-1 line-clamp-1">
                {p.specs}
              </div>

              {/* Title */}
              <div className="mb-2 sm:mb-2.5">
                <h4 className="font-serif-hero text-xs sm:text-sm md:text-[15px] font-normal text-neutral-900 leading-snug line-clamp-1">
                  {p.name}
                </h4>
              </div>

              {/* Bottom Row: View Details & Product Price */}
              <div className="mt-auto pt-1 flex items-center justify-between gap-2 border-t border-neutral-100">
                <span className="inline-flex items-center space-x-1 text-xs text-neutral-600 group-hover:text-neutral-900 transition-colors font-medium">
                  <span>Voir détails</span>
                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
                <span className="font-sans text-xs sm:text-[13px] font-bold text-neutral-900 whitespace-nowrap">
                  {p.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Specifications Section (Only Fiche technique détaillée kept) */}
      <div className="mt-12 sm:mt-16 pt-8 border-t border-neutral-200/80">
        <div className="mb-6">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#8e9aa5] uppercase block mb-1.5">
            CARACTÉRISTIQUES COMPLÈTES
          </span>
          <h3 className="text-xl sm:text-2xl font-serif-hero text-neutral-900">
            Fiche technique détaillée
          </h3>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {(product.detailedSpecs || defaultSampleProduct.detailedSpecs)!.map((section, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-neutral-200/80 bg-white overflow-hidden shadow-2xs"
            >
              <div className="bg-neutral-50/90 px-4 sm:px-6 py-3 border-b border-neutral-200/80 font-semibold text-xs sm:text-sm text-neutral-800">
                {section.category}
              </div>
              <div className="divide-y divide-neutral-100">
                {section.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="grid grid-cols-1 sm:grid-cols-3 px-4 sm:px-6 py-3 text-xs sm:text-sm gap-1 sm:gap-4"
                  >
                    <span className="font-medium text-neutral-500">{item.label}</span>
                    <span className="sm:col-span-2 text-neutral-900 font-normal">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
