import React from "react";
import { motion } from "motion/react";
import { Compass, Trees, ClipboardCheck, Home, Globe, UserCheck } from "lucide-react";

interface WhyUsProps {
  translations: Record<string, any>;
}

export default function WhyUs({ translations }: WhyUsProps) {
  const features = [
    {
      icon: Compass,
      title: translations.why_guide_title,
      desc: translations.why_guide_desc,
    },
    {
      icon: Trees,
      title: translations.why_areas_title,
      desc: translations.why_areas_desc,
    },
    {
      icon: ClipboardCheck,
      title: translations.why_org_title,
      desc: translations.why_org_desc,
    },
    {
      icon: Home,
      title: translations.why_accom_title,
      desc: translations.why_accom_desc,
    },
    {
      icon: Globe,
      title: translations.why_inter_title,
      desc: translations.why_inter_desc,
    },
    {
      icon: UserCheck,
      title: translations.why_approach_title,
      desc: translations.why_approach_desc,
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brand-forest/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono tracking-[0.25em] text-brand-gold uppercase font-bold block mb-2">
            Saracen Quality
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-forest font-bold tracking-tight">
            {translations.why_title}
          </h2>
          <p className="text-brand-dark/70 text-xs sm:text-sm font-mono uppercase tracking-wider mt-3">
            {translations.why_subtitle}
          </p>
          <div className="h-[2px] w-20 bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, index) => {
            const IconComponent = feat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-brand-ivory p-8 rounded-lg border border-brand-forest/10 hover:border-brand-gold/45 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-forest/5"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-lg" />
                
                <div className="w-12 h-12 rounded-full bg-brand-forest/5 group-hover:bg-brand-forest text-brand-forest group-hover:text-brand-gold flex items-center justify-center transition-all duration-300 mb-6 border border-brand-forest/15">
                  <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-forest group-hover:text-brand-gold transition-colors duration-300 mb-3">
                  {feat.title}
                </h3>
                <p className="text-brand-dark/75 text-xs sm:text-sm leading-relaxed font-light">
                  {feat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
