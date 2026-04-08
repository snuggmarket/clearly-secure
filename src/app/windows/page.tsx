"use client";

import { CheckCircle, Shield, Phone, Mail, PoundSterling, AlertCircle, Gauge } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/structured-data";

export default function WindowsPage() {
  const regions = [
    "Portsmouth", "Havant", "Waterlooville", "Petersfield", 
    "Fareham", "Southampton", "Emsworth"
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <>
      <StructuredData />
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 lg:px-8 max-w-[1600px] mx-auto overflow-hidden">
        <div className="relative w-full h-[60vh] min-h-[500px] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center px-4">
          <Image 
            src="/images/windows/glazed-window-1.jpg" 
            alt="Modern Window Installation" 
            fill
            className="object-cover transition-transform duration-1000 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-brand-text/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-text/80 via-transparent to-brand-text/40"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-white/90 text-sm font-medium shadow-xl border border-white/10"
            >
              <Shield className="w-4 h-4 text-brand-cta" />
              <span>Hampshire's Glazing Specialists</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]"
            >
              Expert Window <br className="hidden md:block"/> Repair & Replacement
            </motion.h1>
            
            <motion.p 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            >
              Expert solutions for misted glass, broken handles, and draughty windows. Providing a professional finish across Hampshire.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Link href="tel:02393552773" className="w-full sm:w-auto bg-brand-cta hover:bg-brand-cta-hover text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 shadow-lg transition-all transform hover:-translate-y-1">
                <Phone className="w-5 h-5"/>
                Free Quote
              </Link>
              <Link href="/contact" className="w-full sm:w-auto bg-[#00a1cd] hover:bg-[#00a1cd]/90 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 shadow-lg transition-all transform hover:-translate-y-1">
                Book Visit
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* REPAIR VS REPLACE INTRO */}
      <section className="py-24 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >

            <h2 className="text-3xl md:text-5xl font-bold text-brand-text dark:text-white mb-8 tracking-tight">
              Why Replace When You <br/> Can Repair?
            </h2>
            <div className="space-y-6">
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">
                Many companies will push for an expensive full-frame replacement when a simple repair is all you need. At Clearly Secure, we prioritize restoring your existing windows first.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-brand-cta/10 flex items-center justify-center text-brand-cta mb-4">
                    <PoundSterling className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-brand-text dark:text-white mb-2">Save Money</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Fixing glass or parts can save you up to 70% compared to a full replacement.</p>
                </div>
                <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
                    <Gauge className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-brand-text dark:text-white mb-2">Restores Efficiency</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Restoring seals instantly resolves draughts and heat loss in your home.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/windows/glazed-window-4.jpg" 
              alt="Window Repair Process" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-secondary/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 p-6 glass-dark rounded-2xl border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-cta flex items-center justify-center text-white">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-bold">Local Experts</div>
                  <div className="text-white/60 text-sm">30+ Years Hampshire Experience</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* DETAILED SERVICE: MISTED GLASS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 pt-16">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/windows/glazed-window-1.jpg" 
              alt="Mist Condensation Repair" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>
          
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2"
          >

            <h3 className="text-3xl md:text-4xl font-bold text-brand-text dark:text-white mb-6 tracking-tight">
              Replace Fogged / Misty Glass Units
            </h3>
            <div className="space-y-4 text-slate-500 dark:text-slate-400 leading-relaxed text-base">
              <p>
                When you get mist or condensation inside the double glazed unit it cannot be repaired as the unit is no longer 'sealed'. 
              </p>
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800 dark:text-amber-400">
                  <span className="font-bold">Avoid the Myth:</span> Some suggest drilling holes in the glass to let moisture out. This doesn't fix the problem; it just partly disguises the fact that the seal is broken.
                </p>
              </div>
              <p>
                The only real solution is to replace the unit. We provide a professional, seamless process:
              </p>
              <ul className="space-y-2 pb-4">
                {[
                  "Free, no-obligation home quote & measurement.",
                  "Units locally manufactured to your exact requirements.",
                  "Professional fitting into your existing window frame.",
                  "Significant cost savings over full window replacement."
                ].map((item, id) => (
                  <li key={id} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-cta shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* DETAILED SERVICE: HANDLES & HINGES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 pt-16">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >

            <h3 className="text-3xl md:text-4xl font-bold text-brand-text dark:text-white mb-6 tracking-tight">
              Repair Windows Handles & Hinges
            </h3>
            <div className="space-y-6 text-slate-500 dark:text-slate-400 leading-relaxed text-base">
              <div>
                <h4 className="font-bold text-brand-text dark:text-white mb-2">Replacing Window Handles</h4>
                <p>
                  As windows age, they can become difficult to close. Applying too much stress can cause the handle to fail or snap. We stock a wide range of handles in various styles and finishes to suit your needs, ensuring a longer life for your window opener.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-brand-secondary/5 border border-brand-secondary/10">
                <h4 className="font-bold text-brand-text dark:text-white mb-2">Broken Window Stays (Hinges)</h4>
                <p>
                  Failed hinges prevent the window from closing tightly, causing draughts and allowing heat to escape. This can also allow moisture into your property and compromise security. Our replacement stays ensure your home is secure, warm, and quiet.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/windows/glazed-window-3.jpg" 
              alt="Window Hardware Repairs" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-brand-text/10"></div>
          </motion.div>
        </div>

        {/* DETAILED SERVICE: GASKETS & REPLACEMENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-16">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/windows/glazed-window-2.jpg" 
              alt="Window Gasket & Seals" 
              fill
              className="object-cover"
            />
          </motion.div>
          
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div className="space-y-4">

              <h3 className="text-3xl font-bold text-brand-text dark:text-white tracking-tight leading-tight">
                Perished Gaskets & Draught Exclusion
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-base">
                Over time, the rubber gasket between the window sash and frame can go brittle. On most window systems, this gasket is changeable—significantly reducing draughts and outside noise.
              </p>
            </div>

            <div className="space-y-4 pt-8 border-t border-slate-100 dark:border-slate-800">

              <h3 className="text-3xl font-bold text-brand-text dark:text-white tracking-tight">
                Replacement Windows
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-base">
                There comes a time when replacement is the better option over repair. We offer a wide range of window styles and colors to suit your property. We'll visit your site to take precise measurements and provide an accurate quote with a selection of options to choose from.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LOCAL SEO SECTION */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="glass-panel p-12 text-center relative overflow-hidden dark:bg-slate-900 h-full border border-slate-100 dark:border-slate-800">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-brand-text dark:text-white mb-8 tracking-tight">
            Serving Your Specific Local Area
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto text-base leading-relaxed">
            We are proud to be Hampshire's local mobile glazing and locksmith specialists. Based locally, we offer rapid response times and expert knowledge to:
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {regions.map((region) => (
              <div 
                key={region}
                className="px-6 py-3 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-brand-text dark:text-slate-200 font-medium hover:border-brand-primary hover:text-brand-primary transition-all cursor-default"
              >
                {region}
              </div>
            ))}
          </div>
          
          <div className="mt-16 pt-12 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-1">
              <div className="text-2xl md:text-3xl font-bold text-brand-text dark:text-white">30+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Years Experience</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl md:text-3xl font-bold text-brand-text dark:text-white">200+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">5-Star Reviews</div>
            </div>
            <div className="space-y-1 text-green-500">
              <div className="text-2xl md:text-3xl font-bold">FREE</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Call-Out No Quote</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl md:text-3xl font-bold text-brand-text dark:text-white">99%</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-brand-text dark:text-white mb-4 tracking-tight"
          >
            Window Repair FAQ
          </motion.h2>
          <motion.p 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-500 dark:text-slate-400"
          >
            Common questions about our Hampshire glazing services.
          </motion.p>
        </div>
        
        <div className="space-y-4">
          {[
            {
              q: "Can misty or fogged double glazing be repaired?",
              a: "No, once a unit has failed and mist has entered, it cannot be 'repaired' by drilling holes. The only reliable solution is to replace the glass unit itself, which we can do while keeping your existing frames for a fraction of the cost of a full replacement."
            },
            {
              q: "How much does it cost to replace a window handle or hinge?",
              a: "Repairing a handle or hinge is significantly cheaper than a full window replacement. Prices vary based on the specific hardware required, but we always provide a free, no-obligation quote before starting any work so you know exactly what to expect."
            },
            {
              q: "Do you offer emergency window boarding services?",
              a: "Yes, we provide emergency boarding and securing services across Hampshire following break-ins or accidental damage, ensuring your property is safe and weather-tight until a permanent glass replacement is fitted."
            },
            {
              q: "Are your replacement glass units energy efficient?",
              a: "Absolutely. We use high-quality, energy-efficient glass units for all our replacements, which meet modern thermal standards and can help improve your home's insulation and reduce heating bills."
            },
            {
              q: "How long does a typical window repair take?",
              a: "Small repairs like handle or hinge replacements can often be done on the same day if parts are in stock. For glass unit replacements, we measure first and return to fit the custom-manufactured unit, usually within 7-10 working days."
            }
          ].map((faq, index) => (
            <motion.div 
              key={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"
            >
              <h4 className="text-lg font-bold text-brand-text dark:text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0 text-sm font-bold">?</span>
                {faq.q}
              </h4>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed pl-11">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 max-w-7xl mx-auto px-4 mb-24">
        <div className="bg-brand-text dark:bg-slate-950 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl border border-white/5">
          <Image 
            src="/images/site/van-at-work.jpg" 
            alt="Clearly Secure Van at Work" 
            fill 
            className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent"></div>
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Need a Window Fix Fast?</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Contact Lee and Claire directly for an honest, professional service. No sales pressure, just expert solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Link href="tel:02393552773" className="w-full sm:w-auto bg-brand-cta hover:bg-brand-cta-hover text-white px-12 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-xl">
                <Phone className="w-6 h-6" />
                02393 552773
              </Link>
              <Link href="/contact" className="w-full sm:w-auto bg-[#00a1cd] hover:bg-[#00a1cd]/90 text-white px-12 py-5 rounded-full font-bold text-xl backdrop-blur-md transition-all hover:scale-105 shadow-xl">
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
