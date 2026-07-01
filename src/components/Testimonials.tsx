import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data";
import { Language } from "../types";

interface TestimonialsProps {
  currentLang: Language;
  translations: Record<string, any>;
}

export default function Testimonials({ currentLang, translations }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="absolute top-10 right-10 text-brand-forest/5 font-serif text-9xl select-none pointer-events-none">
        WILD
      </div>
      <div className="absolute bottom-10 left-10 text-brand-forest/5 font-serif text-9xl select-none pointer-events-none">
        TRADITION
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-brand-gold uppercase font-bold block mb-2">
            {translations.testimonials_title}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-forest font-bold tracking-tight">
            {translations.testimonials_subtitle}
          </h2>
          <div className="h-[2px] w-16 bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-brand-ivory rounded-xl shadow-2xl border border-brand-forest/10 p-8 sm:p-12 relative flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-12"
            >
              <div className="absolute top-6 right-8 text-brand-gold/15 pointer-events-none">
                <Quote className="w-20 h-20 fill-brand-gold/5" />
              </div>

              <div className="flex flex-col items-center text-center md:text-left md:items-start flex-shrink-0">
                <div className="w-24 h-24 rounded-full border-2 border-brand-gold/40 p-1 mb-4 shadow-xl">
                  <img
                    src={activeTestimonial.image}
                    alt={activeTestimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-forest">
                  {activeTestimonial.name}
                </h3>
                <span className="text-xs text-brand-gold font-semibold uppercase tracking-wider font-mono">
                  {activeTestimonial.country}
                </span>
                <span className="text-[10px] text-brand-dark/50 mt-1 uppercase font-mono">
                  {activeTestimonial.huntType[currentLang]}
                </span>
              </div>

              <div className="flex-grow flex flex-col justify-between h-full pt-2">
                <div>
                  <div className="flex justify-center md:justify-start space-x-1 mb-5">
                    {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                    ))}
                  </div>
                  
                  <p className="text-brand-dark/85 text-sm sm:text-base leading-relaxed font-light italic font-serif">
                    "{activeTestimonial.content[currentLang]}"
                  </p>
                </div>

                <div className="mt-8 flex justify-center md:justify-start space-x-1.5">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeIndex === idx ? "w-8 bg-brand-gold" : "w-1.5 bg-brand-forest/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 -mx-4 sm:-mx-12 flex justify-between pointer-events-none">
            <button
              id="testimonial-prev"
              onClick={handlePrev}
              className="w-10 h-10 rounded-full glass-light border border-brand-forest/10 flex items-center justify-center text-brand-forest hover:text-brand-gold hover:border-brand-gold hover:bg-brand-dark hover:scale-105 transition-all shadow-lg pointer-events-auto cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="testimonial-next"
              onClick={handleNext}
              className="w-10 h-10 rounded-full glass-light border border-brand-forest/10 flex items-center justify-center text-brand-forest hover:text-brand-gold hover:border-brand-gold hover:bg-brand-dark hover:scale-105 transition-all shadow-lg pointer-events-auto cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
