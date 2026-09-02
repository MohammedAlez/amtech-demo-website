import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const StoreLocation: React.FC = () => {
  const mapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12792.835787123493!2d2.9774676!3d36.7533816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb208b08ff1e3%3A0xb35a840e6c64117a!2sD%C3%A9ly%20Ibrahim%2C%20Algiers!5e0!3m2!1sen!2sdz!4v1709380000000!5m2!1sen!2sdz`;

  return (
    <section
      id="store-location"
      className="w-full bg-transparent py-6 sm:py-10 md:py-14 px-2 sm:px-6 md:px-8 select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-6 sm:mb-10">
          <span
            id="location-eyebrow"
            className="block text-[#8e9aa5] text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.22em] uppercase mb-1.5 sm:mb-2.5"
          >
            LOCALISATION ET CONTACT
          </span>
          <h2
            id="location-title"
            className="text-[#14181c] font-serif-hero text-2xl sm:text-3xl md:text-5xl lg:text-[54px] font-normal tracking-tight leading-[1.15]"
          >
            Notre magasin et contact.
          </h2>
        </div>

        {/* 2-Column Side-by-Side Layout for Laptop & Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Clean Interactive Google Map */}
          <div
            id="map-container"
            className="md:col-span-6 lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] md:min-h-[420px] rounded-[20px] sm:rounded-[26px] overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-xs"
          >
            <iframe
              title="AMTECH Store Location Map"
              src={mapsEmbedUrl}
              className="w-full h-full min-h-[300px] sm:min-h-[380px] md:min-h-[420px] border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Right Column: Simple Flat Contact Details */}
          <div
            id="contact-info"
            className="md:col-span-6 lg:col-span-5 flex flex-col justify-center space-y-5 py-2"
          >
            {/* Simple Contact Details List */}
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3.5">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[11px] text-neutral-400 uppercase tracking-wider font-semibold mb-0.5">
                    Adresse
                  </span>
                  <p className="text-neutral-900 text-xs sm:text-sm font-medium leading-snug">
                    15 rue bois des cars 1, Dely Ibrahim, Alger (16302)
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3.5">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[11px] text-neutral-400 uppercase tracking-wider font-semibold mb-0.5">
                    Téléphone et WhatsApp
                  </span>
                  <a
                    href="tel:+213792294989"
                    className="text-neutral-900 hover:text-neutral-600 text-xs sm:text-sm font-semibold transition-colors block"
                  >
                    +213 792 29 49 89
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3.5">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[11px] text-neutral-400 uppercase tracking-wider font-semibold mb-0.5">
                    Email
                  </span>
                  <a
                    href="mailto:amtech.alg@gmail.com"
                    className="text-neutral-900 hover:text-neutral-600 text-xs sm:text-sm font-semibold transition-colors block truncate"
                  >
                    amtech.alg@gmail.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3.5">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[11px] text-neutral-400 uppercase tracking-wider font-semibold mb-0.5">
                    Horaires d'ouverture
                  </span>
                  <div className="text-xs sm:text-[13px] text-neutral-800 space-y-0.5">
                    <p className="flex justify-between">
                      <span className="font-normal text-neutral-600">Sam – Jeu :</span>
                      <span className="font-medium text-neutral-900">09:00 – 19:30</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-normal text-neutral-600">Vendredi :</span>
                      <span className="font-medium text-neutral-900">14:30 – 19:30</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
