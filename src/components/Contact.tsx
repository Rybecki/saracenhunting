import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, Check } from "lucide-react";
import Logo from "./Logo";
import { Language, Tenant } from "../types";

interface ContactProps {
  currentLang: Language;
  translations: Record<string, any>;
  selectedTenant: Tenant;
}

export default function Contact({ currentLang, translations, selectedTenant }: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }, 5000);
  };

  return (
    <section id="contact" className="pt-8 pb-24 bg-brand-ivory relative overflow-hidden border-t border-brand-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-brand-gold uppercase font-bold block mb-2">
            {translations.contact_title}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-forest font-bold tracking-tight">
            {translations.contact_subtitle}
          </h2>
          <div className="h-[2px] w-20 bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 bg-brand-ivory border border-brand-forest/10 p-8 rounded-xl shadow-xl">
            {isSent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-brand-gold/15 flex items-center justify-center text-brand-gold border border-brand-gold/30 mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-forest">
                  Inquiry Sent Successfully
                </h3>
                <p className="text-brand-dark/70 text-sm max-w-md mx-auto">
                  {translations.contact_form_success}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-brand-dark/60 mb-1.5">
                      {translations.contact_form_name} *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-brand-cream/30 border border-brand-forest/15 rounded px-4 py-3 text-brand-dark text-sm focus:border-brand-gold outline-none transition-colors"
                      placeholder="Alexander Vance"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-brand-dark/60 mb-1.5">
                      {translations.contact_form_email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-brand-cream/30 border border-brand-forest/15 rounded px-4 py-3 text-brand-dark text-sm focus:border-brand-gold outline-none transition-colors"
                      placeholder="alex@vance.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-brand-dark/60 mb-1.5">
                    {translations.contact_form_phone}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-brand-cream/30 border border-brand-forest/15 rounded px-4 py-3 text-brand-dark text-sm focus:border-brand-gold outline-none transition-colors"
                    placeholder="+47 900 12 443"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-brand-dark/60 mb-1.5">
                    {translations.contact_form_message} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-brand-cream/30 border border-brand-forest/15 rounded px-4 py-3 text-brand-dark text-sm focus:border-brand-gold outline-none transition-colors resize-none"
                    placeholder="Ask about trophy pricing, customization, weapons transfer permissions, or specific date requests..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-brand-forest hover:bg-brand-dark text-brand-gold hover:text-brand-ivory font-sans text-xs font-bold tracking-widest uppercase rounded shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{translations.contact_form_submit}</span>
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="bg-brand-forest text-brand-ivory p-8 rounded-xl border border-brand-gold/20 shadow-xl space-y-6">
              <div className="flex justify-center mb-8">
                <Logo size="md" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3.5 text-xs sm:text-sm font-light">
                  <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold uppercase font-mono text-[9px] text-brand-gold">Headquarters</span>
                    <span>{selectedTenant.address}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 text-xs sm:text-sm font-light">
                  <Phone className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold uppercase font-mono text-[9px] text-brand-gold">Phone Coordinate</span>
                    <span>{selectedTenant.phone}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 text-xs sm:text-sm font-light">
                  <Mail className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold uppercase font-mono text-[9px] text-brand-gold">Official Email</span>
                    <span>{selectedTenant.email}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-brand-gold/10 text-[10px] text-brand-cream/60 leading-relaxed">
                * Our offices are available Mon-Fri, 08:00 - 18:00 CET. Stalkers and emergency coordination support is active 24/7 during planned hunting expeditions.
              </div>
            </div>

            <div className="bg-brand-ivory border border-brand-forest/10 rounded-xl p-4 shadow-xl overflow-hidden">
              <div className="relative h-56 rounded overflow-hidden border border-brand-forest/15">
                <iframe
                  src="https://www.google.com/maps?q=50.6984541,19.4210256&hl=pl&z=17&output=embed"
                  className="map-hunting-map w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  title="Saracen Hunting — lokalizacja"
                />
                <div className="map-hunting-overlay absolute inset-0 pointer-events-none" aria-hidden="true" />
              </div>
              <p className="text-[10px] text-brand-dark/50 font-mono text-center mt-2 uppercase tracking-widest">
                Kościuszki 99, 42-253 Złoty Potok · 50.6985° N, 19.4210° E
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
