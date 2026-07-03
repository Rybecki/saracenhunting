import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface HomeCtaProps {
  translations: Record<string, string>;
}

export default function HomeCta({ translations }: HomeCtaProps) {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <img
        src="/hero/slide-3.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/80 to-brand-dark/70" />
      <div className="absolute inset-0 bg-brand-forest/20 mix-blend-multiply" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-mono tracking-[0.25em] text-brand-gold uppercase font-bold block mb-3">
            Saracen Hunting
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-ivory font-bold tracking-tight mb-5">
            {translations.cta_title}
          </h2>
          <div className="h-[1px] w-20 bg-brand-gold mx-auto mb-6" />
          <p className="text-brand-cream/80 font-sans text-sm sm:text-base font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            {translations.cta_subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/oferta"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-brand-gold text-brand-dark font-sans text-xs font-bold tracking-widest uppercase rounded shadow-2xl hover:bg-brand-ivory hover:text-brand-forest transition-colors duration-300"
            >
              <span>{translations.hero_cta_offers}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-transparent border border-brand-gold/50 text-brand-ivory hover:bg-brand-forest/40 hover:border-brand-gold font-sans text-xs font-bold tracking-widest uppercase rounded transition-colors duration-300"
            >
              {translations.hero_cta_contact}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
