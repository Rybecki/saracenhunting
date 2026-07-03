import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Shield, Medal, Star } from "lucide-react";

interface AboutProps {
  translations: Record<string, string>;
}

const GROUP_PHOTOS = [
  { src: "/gallery/02-polowanie-zbiorowe.png", altKey: "about_group_photo_1_alt" },
  { src: "/gallery/05-polowanie-zbiorowe-linia.png", altKey: "about_group_photo_2_alt" },
  { src: "/gallery/08-polowanie-zbiorowe-pokot.png", altKey: "about_group_photo_3_alt" },
];

export default function About({ translations }: AboutProps) {
  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="absolute z-0 text-brand-forest/[0.08] font-serif select-none pointer-events-none leading-none whitespace-nowrap top-6 right-4 text-5xl sm:top-8 sm:right-8 sm:text-6xl lg:top-auto lg:bottom-20 lg:right-12 lg:text-8xl">
        EST. 1998
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative rounded-lg overflow-hidden shadow-2xl border border-brand-gold/20"
            >
              <img
                src="/about-bg.png"
                alt={translations.about_subtitle}
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
            </motion.div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-mono tracking-[0.25em] text-brand-gold uppercase font-bold block mb-2">
                {translations.about_title}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-forest font-bold tracking-tight mb-6">
                {translations.about_subtitle}
              </h1>
              <div className="h-[2px] w-20 bg-brand-gold mb-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-brand-dark/85 font-sans leading-relaxed text-sm sm:text-base font-light"
            >
              <p className="font-medium text-brand-forest text-base sm:text-lg">
                {translations.about_text_1}
              </p>
              <p>{translations.about_since_1998}</p>
              <p>{translations.about_text_2}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Link
                to="/oferta"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-brand-dark font-sans text-xs font-bold tracking-widest uppercase rounded shadow-lg hover:bg-brand-ivory hover:text-brand-forest transition-colors duration-300"
              >
                <span>{translations.hero_cta_offers}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-brand-forest/30 text-brand-forest hover:border-brand-gold hover:text-brand-gold font-sans text-xs font-bold tracking-widest uppercase rounded transition-colors duration-300"
              >
                {translations.hero_cta_contact}
              </Link>
            </motion.div>

            <div className="grid grid-cols-3 gap-4 mt-12 pt-10 border-t border-brand-forest/15">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="flex justify-center mb-2">
                  <Medal className="w-6 h-6 text-brand-gold" />
                </div>
                <div className="font-mono text-2xl sm:text-3xl font-bold text-brand-forest tracking-tight">
                  28+
                </div>
                <div className="text-[10px] sm:text-xs font-sans text-brand-dark/60 mt-1">
                  {translations.about_stat_years}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="flex justify-center mb-2">
                  <Shield className="w-6 h-6 text-brand-gold" />
                </div>
                <div className="font-mono text-2xl sm:text-3xl font-bold text-brand-forest tracking-tight">
                  1,400+
                </div>
                <div className="text-[10px] sm:text-xs font-sans text-brand-dark/60 mt-1">
                  {translations.about_stat_clients}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center mb-2">
                  <Star className="w-6 h-6 text-brand-gold fill-brand-gold/10" />
                </div>
                <div className="font-mono text-2xl sm:text-3xl font-bold text-brand-forest tracking-tight">
                  98%
                </div>
                <div className="text-[10px] sm:text-xs font-sans text-brand-dark/60 mt-1">
                  {translations.about_stat_hunts}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="text-center mb-10">
            <span className="text-xs font-mono tracking-[0.25em] text-brand-gold uppercase font-bold block mb-2">
              {translations.about_group_title}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-brand-forest font-bold">
              {translations.about_group_subtitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {GROUP_PHOTOS.map((photo, index) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-lg overflow-hidden shadow-lg border border-brand-gold/15 aspect-[4/3]"
              >
                <img
                  src={photo.src}
                  alt={translations[photo.altKey]}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              to="/oferta"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-forest hover:bg-brand-forest/90 text-brand-cream font-sans text-xs font-bold tracking-widest uppercase rounded shadow-lg transition-colors duration-300"
            >
              <span>{translations.offers_cta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
