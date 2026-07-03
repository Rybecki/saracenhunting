import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface AboutTeaserProps {
  translations: Record<string, string>;
}

export default function AboutTeaser({ translations }: AboutTeaserProps) {
  return (
    <section className="py-20 bg-brand-cream relative overflow-hidden">
      <div className="absolute z-0 text-brand-forest/[0.06] font-serif select-none pointer-events-none leading-none whitespace-nowrap top-6 right-4 text-5xl sm:text-6xl lg:text-7xl">
        EST. 1998
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-lg overflow-hidden shadow-xl border border-brand-gold/20"
          >
            <img
              src="/about-bg.png"
              alt={translations.about_subtitle}
              className="w-full h-72 sm:h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="text-xs font-mono tracking-[0.25em] text-brand-gold uppercase font-bold block mb-2">
              {translations.about_title}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-forest font-bold tracking-tight mb-4">
              {translations.about_subtitle}
            </h2>
            <div className="h-[2px] w-16 bg-brand-gold mb-6" />
            <p className="text-brand-dark/85 font-sans leading-relaxed text-sm sm:text-base font-light mb-8">
              {translations.about_teaser_text}
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link
                to="/o-nas"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-forest hover:bg-brand-forest/90 text-brand-cream font-sans text-xs font-bold tracking-widest uppercase rounded shadow-lg transition-all duration-300"
              >
                {translations.about_cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
