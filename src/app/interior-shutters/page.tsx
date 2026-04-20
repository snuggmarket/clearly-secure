"use client";

import React, { useState } from 'react';
import { 
  CheckCircle, Shield, Phone, AlertCircle, 
  Sun, Eye, Zap, Volume2, Sparkles, X, 
  ArrowRight, Palette, Wrench, BarChart, 
  Layout, Home
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/structured-data";

export default function ShuttersPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <>
      <StructuredData />
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 lg:px-8 max-w-[1600px] mx-auto overflow-hidden">
        <div className="relative w-full h-[70vh] min-h-[600px] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center px-4 py-20 pb-32">
          <Image 
            src="/images/shutters/hero-shutters.png" 
            alt="Bespoke Internal Shutters Installation" 
            fill
            className="object-cover transition-transform duration-1000 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-brand-text/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-text/80 via-transparent to-brand-text/40"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-white/90 text-sm font-medium shadow-xl border border-white/10"
            >
              <Sparkles className="w-4 h-4 text-brand-cta" />
              <span>Premium Internal Shutters Hampshire</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]"
            >
              Transform Your Home with <br className="hidden md:block"/> Bespoke Internal Shutters
            </motion.h1>
            
            <motion.p 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            >
              Looking to elevate your interiors while adding practical benefits to your home? Internal shutters are one of the most stylish and functional upgrades you can make.
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

      {/* INTRODUCTION */}
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
              Stylish & Functional Upgrades
            </h2>
            <div className="space-y-6">
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                Internal shutters are one of the most stylish and functional upgrades you can make—bringing timeless elegance, improved privacy, and superior light control to any room.
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                We specialise in the supply and installation of made-to-measure internal shutters, crafted to perfectly fit your windows and complement your home’s unique style.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                  <CheckCircle className="text-brand-cta w-5 h-5 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">Expert Installation</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                  <CheckCircle className="text-brand-cta w-5 h-5 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">Bespoke Design</span>
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
            className="group relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/shutters/tier_on_tier.png" 
              alt="Tier-on-Tier Shutter Detail" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-secondary/20 to-transparent"></div>
          </motion.div>
        </div>

        {/* WHY CHOOSE SECTION */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-text dark:text-white mb-6 tracking-tight">
              🪟 Why Choose Internal Shutters?
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Internal shutters aren’t just a window covering—they’re a long-term investment in your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Exceptional Light Control",
                desc: "Adjust the louvres to let in as much or as little light as you want. Enjoy soft natural light during the day while maintaining privacy from outside.",
                icon: <Sun className="w-6 h-6" />
              },
              {
                title: "Enhanced Privacy",
                desc: "Perfect for street-facing properties or overlooked homes. Tilt the slats to block unwanted views without sacrificing brightness.",
                icon: <Eye className="w-6 h-6" />
              },
              {
                title: "Energy Efficiency",
                desc: "Shutters act as an extra layer of insulation—helping to keep your home warm in winter and cool in summer, potentially reducing energy bills.",
                icon: <Zap className="w-6 h-6" />
              },
              {
                title: "Noise Reduction",
                desc: "Create a quieter, more peaceful indoor environment by reducing outside noise—ideal for busy roads or built-up areas.",
                icon: <Volume2 className="w-6 h-6" />
              },
              {
                title: "Low Maintenance",
                desc: "Unlike curtains or blinds, shutters are easy to clean and maintain. A quick wipe keeps them looking as good as new.",
                icon: <CheckCircle className="w-6 h-6" />
              },
              {
                title: "Timeless Style",
                desc: "From modern homes to traditional properties, shutters add a clean, premium finish that never goes out of fashion.",
                icon: <Sparkles className="w-6 h-6" />
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-cta/10 flex items-center justify-center text-brand-cta mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-text dark:text-white mb-4">{feature.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* OUR RANGE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="order-2 lg:order-1 group relative h-[700px] rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/shutters/cafe_style.png" 
              alt="Elegant Shutter Styles" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-brand-text dark:text-white mb-8 tracking-tight">
              🏡 Our Range Includes:
            </h2>
            <div className="space-y-6">
              {[
                { title: "Full Height Shutters", desc: "Sleek and elegant, covering the entire window" },
                { title: "Tier-on-Tier Shutters", desc: "Flexible top and bottom panels for ultimate control" },
                { title: "Café Style Shutters", desc: "Covering the lower portion for privacy with light above" },
                { title: "Bay Window Shutters", desc: "Custom-made to fit angled or curved windows perfectly" },
                { title: "Solid Panel Shutters", desc: "Ideal for a classic look and maximum blackout" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-cta shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-text dark:text-white">{item.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-3xl bg-brand-cta/5 border border-brand-cta/10">
              <h3 className="text-xl font-bold text-brand-text dark:text-white mb-4 flex items-center gap-2">
                <Palette className="text-brand-cta" />
                🎨 Customisation Options:
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Choose from a wide range of colours, finishes, and materials to perfectly match your décor. Whether you prefer a crisp white finish, natural wood tones, or a bold statement colour—we’ve got you covered.
              </p>
            </div>
          </motion.div>
        </div>

        {/* SERVICE PROCESS */}
        <div className="mb-32">
          <div className="glass-panel p-12 md:p-20 rounded-[4rem] text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden border border-slate-100 dark:border-white/5">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text dark:text-white mb-12 tracking-tight">
              🛠️ Professional Service from Start to Finish:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left">
              {[
                "Free home consultation and expert advice",
                "Precise measuring for a flawless fit",
                "High-quality, made-to-measure products",
                "Skilled installation with minimal disruption",
                "Built to last with durable, premium materials"
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium text-slate-700 dark:text-slate-300">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PERFECT FOR SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center">
            <div>
                <h3 className="text-3xl font-bold text-brand-text dark:text-white mb-8">💡 Perfect For:</h3>
                <ul className="space-y-4">
                    {["Living rooms", "Bedrooms", "Kitchens", "Bathrooms (moisture-resistant options available)", "Bay windows and unique shapes"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-brand-cta" />
                            <span className="text-lg text-slate-600 dark:text-slate-400">{item}</span>
                        </li>
                    ))}
                </ul>
                
                <div className="mt-12 flex items-start gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                        <BarChart className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-brand-text dark:text-white mb-2">📈 Add Value to Your Home</h4>
                        <p className="text-slate-500 dark:text-slate-400 lowercase">
                            Internal shutters are seen as a premium feature and can increase the appeal and value of your property—making them a smart long-term investment.
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
                <Image 
                    src="/images/shutters/Shutters.jpg" 
                    alt="Interior Shutter Styles" 
                    fill
                    className="object-cover"
                />
            </div>
        </div>

        {/* FINAL CTA SECTION */}
        <section className="py-24 pt-8 max-w-7xl mx-auto px-4 mb-24">
          <div className="bg-brand-text dark:bg-slate-950 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl border border-white/5">
            <Image 
              src="/images/shutters/hero-shutters.png" 
              alt="Contact us for Shutters" 
              fill
              className="object-cover opacity-20"
            />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                📞 Get Started Today
              </h2>
              <p className="text-xl text-white/70 mb-12 leading-relaxed">
                If you’re ready to upgrade your home with stylish, practical, and long-lasting window shutters, get in touch today for your FREE, no-obligation quote.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="tel:02393552773" className="w-full sm:w-auto bg-brand-cta hover:bg-brand-cta-hover text-white px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3 shadow-2xl transition-all hover:scale-105 active:scale-95">
                  <Phone className="w-6 h-6"/>
                  02393 552773
                </Link>
                <Link href="/contact" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95">
                  Book A Visit
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
              <p className="text-white/40 mt-12 font-medium tracking-wide">
                Bring style, comfort, and control into your home—with beautifully crafted internal shutters designed just for you.
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* Lightbox Pop-up */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} strokeWidth={1.5} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full h-[90vh] max-w-7xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged Shutter View"
                fill
                className="object-contain rounded-xl"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent flex justify-center">
                 <p className="text-white/80 text-sm font-light tracking-wide uppercase">Clearly Secure - Bespoke Internal Shutters Portfolio</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
