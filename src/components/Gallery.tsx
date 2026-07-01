import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize2, X, ChevronDown } from "lucide-react";
import { GALLERY_ITEMS } from "../data";
import { Language } from "../types";

interface GalleryProps {
  currentLang: Language;
  translations: Record<string, any>;
}

export default function Gallery({ currentLang, translations }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  const MOBILE_PREVIEW_COUNT = 2;

  const filters = [
    { id: "all", label: translations.gallery_filter_all },
    { id: "traditions", label: translations.gallery_filter_traditions },
    { id: "group_hunts", label: translations.gallery_filter_group_hunts },
    { id: "red_deer", label: translations.gallery_filter_red_deer },
    { id: "wild_boar", label: translations.gallery_filter_wild_boar },
    { id: "mouflon", label: translations.gallery_filter_mouflon },
  ];

  const categoryLabels: Record<string, string> = {
    traditions: translations.gallery_filter_traditions,
    group_hunts: translations.gallery_filter_group_hunts,
    red_deer: translations.gallery_filter_red_deer,
    wild_boar: translations.gallery_filter_wild_boar,
    mouflon: translations.gallery_filter_mouflon,
  };

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  useEffect(() => {
    setIsMobileExpanded(false);
  }, [activeFilter]);

  const mobileItems = isMobileExpanded
    ? filteredItems
    : filteredItems.slice(0, MOBILE_PREVIEW_COUNT);

  const showMobileExpandButton =
    !isMobileExpanded && filteredItems.length > MOBILE_PREVIEW_COUNT;

  const renderGalleryItem = (item: (typeof GALLERY_ITEMS)[number]) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      key={item.id}
      id={`gallery-item-${item.id}`}
      className="relative overflow-hidden rounded-lg border border-brand-forest/30 group cursor-pointer break-inside-avoid mb-4"
      onClick={() => openLightbox(item.id)}
    >
      <img
        src={item.url}
        alt={item.title[currentLang]}
        className="w-full h-auto object-cover rounded-lg filter brightness-90 group-hover:brightness-100 group-hover:scale-[1.03] transition-all duration-500"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[9px] font-mono tracking-widest text-brand-gold uppercase">
              {categoryLabels[item.category]}
            </span>
            <h4 className="font-serif text-sm text-brand-ivory font-medium mt-0.5">
              {item.title[currentLang]}
            </h4>
          </div>
          <div className="w-8 h-8 rounded-full bg-brand-gold/15 flex items-center justify-center text-brand-gold border border-brand-gold/20">
            <Maximize2 className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );

  const openLightbox = (id: string) => {
    const globalIndex = GALLERY_ITEMS.findIndex((item) => item.id === id);
    if (globalIndex !== -1) {
      setLightboxIndex(globalIndex);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev! - 1));
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev! + 1));
    }
  };
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-brand-gold uppercase font-bold block mb-2">
            {translations.gallery_title}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-ivory font-bold tracking-tight mb-4">
            {translations.gallery_subtitle}
          </h2>
          <div className="h-[1px] w-24 bg-brand-gold mx-auto my-4" />
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {filters.map((filt) => (
              <button
                key={filt.id}
                onClick={() => setActiveFilter(filt.id)}
                className={`px-4 py-1.5 text-xs font-mono uppercase tracking-widest rounded-md border transition-all duration-300 cursor-pointer ${
                  activeFilter === filt.id
                    ? "bg-brand-gold text-brand-dark border-brand-gold font-bold"
                    : "bg-transparent text-brand-cream/60 border-brand-cream/10 hover:border-brand-gold/30 hover:text-brand-gold"
                }`}
              >
                {filt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="sm:hidden">
          <motion.div layout className="space-y-0">
            <AnimatePresence mode="popLayout">
              {mobileItems.map((item) => renderGalleryItem(item))}
            </AnimatePresence>
          </motion.div>

          {showMobileExpandButton && (
            <div className="mt-2 flex justify-center">
              <button
                id="gallery-expand-mobile"
                onClick={() => setIsMobileExpanded(true)}
                className="flex items-center space-x-2 px-6 py-3 bg-brand-gold/10 hover:bg-brand-gold text-brand-gold hover:text-brand-dark border border-brand-gold/40 hover:border-brand-gold text-xs font-mono uppercase tracking-widest rounded transition-all cursor-pointer"
              >
                <span>{translations.gallery_expand}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        <motion.div
          layout
          className="hidden sm:block columns-2 md:columns-3 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => renderGalleryItem(item))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {lightboxIndex !== null && (
            <div
              id="gallery-lightbox"
              className="fixed inset-0 z-50 bg-brand-dark/98 flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out"
              onClick={closeLightbox}
            >
              <button
                id="close-lightbox"
                onClick={closeLightbox}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-brand-dark/60 border border-brand-cream/15 flex items-center justify-center text-brand-cream hover:text-brand-gold hover:border-brand-gold transition-all z-50 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <button
                id="lightbox-prev"
                onClick={handlePrev}
                className="absolute left-4 sm:left-8 w-12 h-12 rounded-full bg-brand-dark/60 border border-brand-cream/10 hover:border-brand-gold flex items-center justify-center text-brand-cream hover:text-brand-gold transition-all z-40 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                id="lightbox-next"
                onClick={handleNext}
                className="absolute right-4 sm:right-8 w-12 h-12 rounded-full bg-brand-dark/60 border border-brand-cream/10 hover:border-brand-gold flex items-center justify-center text-brand-cream hover:text-brand-gold transition-all z-40 cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-5xl max-h-[80vh] flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={GALLERY_ITEMS[lightboxIndex].url}
                  alt={GALLERY_ITEMS[lightboxIndex].title[currentLang]}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg border border-brand-gold/30 shadow-2xl"
                />
                
                <div className="mt-4 text-center">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-brand-gold uppercase">
                    {categoryLabels[GALLERY_ITEMS[lightboxIndex].category]}
                  </span>
                  <h3 className="font-serif text-lg text-brand-ivory font-semibold mt-1">
                    {GALLERY_ITEMS[lightboxIndex].title[currentLang]}
                  </h3>
                  <p className="text-xs text-brand-cream/40 mt-1">
                    Image {lightboxIndex + 1} of {GALLERY_ITEMS.length}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
