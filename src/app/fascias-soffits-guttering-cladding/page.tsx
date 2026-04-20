"use client";

import React, { useState } from 'react';
import { CheckCircle, Shield, Phone, AlertCircle, Droplets, Home, Hammer, TrendingUp, Info, X, ExternalLink, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/structured-data";

export default function CladdingPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
        <div className="relative w-full h-[85vh] min-h-[750px] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center px-4 py-20 pb-32">
          <Image 
            src="/images/gallery/cladding/cladding5.webp" 
            alt="Modern Exterior Cladding and Roofline" 
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
              <span>Hampshire's Roofline Specialists</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]"
            >
              Upgrade & Protect Your Home with <br className="hidden md:block"/> High-Quality Roofline & Cladding Solutions
            </motion.h1>
            
            <motion.p 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            >
              Is your property starting to show signs of wear and tear? Cracked fascias, rotting soffits, leaking gutters, or tired-looking cladding can all lead to bigger (and more expensive) problems if left untreated.
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
              Premium Exterior Protection
            </h2>
            <div className="space-y-6">
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                We specialise in the supply and installation of premium, low-maintenance exterior products designed to protect your home while enhancing its appearance:
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-cta/10 flex items-center justify-center text-brand-cta shrink-0">
                    <Home className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-text dark:text-white mb-1">Full Replacement Fascias & Soffits</h4>
                    <p className="text-slate-500 dark:text-slate-400">Strong, weatherproof boards that support your guttering and protect your roofline</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                    <Droplets className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-text dark:text-white mb-1">uPVC Guttering Systems</h4>
                    <p className="text-slate-500 dark:text-slate-400">Efficient drainage to prevent leaks, damp patches, and structural damage</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                    <Hammer className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-text dark:text-white mb-1">External Cladding</h4>
                    <p className="text-slate-500 dark:text-slate-400">Modern, stylish finishes that transform the look of your home while adding an extra layer of insulation and protection</p>
                  </div>
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
              src="/images/gallery/cladding/cladding17.webp" 
              alt="Professional Roofline Installation" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-secondary/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 p-6 glass-dark rounded-2xl border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-cta flex items-center justify-center text-white">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-bold">Boost Kerb Appeal</div>
                  <div className="text-white/60 text-sm">Long-lasting modern finishes</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* WHY CHOOSE US SECTION */}
        <div className="mb-32">
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-5xl font-bold text-brand-text dark:text-white tracking-tight">Why Choose Us?</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "High-quality, durable materials that won’t warp, crack, or peel",
                "Maintenance-free solutions – no more painting or constant repairs",
                "Wide range of colours and styles to suit any property",
                "Expert craftsmanship with attention to detail",
                "Fully weather-resistant installations built to withstand the UK climate",
                "Free surveys and no-obligation quotes"
              ].map((benefit, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:border-brand-cta/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-cta/10 flex items-center justify-center text-brand-cta shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-base font-medium text-slate-700 dark:text-slate-300 leading-relaxed">{benefit}</span>
                </motion.div>
              ))}
            </div>
        </div>

        {/* PROJECT GALLERY */}
        <div className="mb-32">
            <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-brand-text dark:text-white tracking-tight">Recent Projects</h3>
                <p className="text-slate-500 dark:text-slate-400 mt-4">Actual photos of our roofline and cladding work in Hampshire.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    "/images/gallery/cladding/cladding10.webp",
                    "/images/gallery/cladding/cladding11.webp",
                    "/images/gallery/cladding/cladding12.webp",
                    "/images/gallery/cladding/cladding13.webp",
                    "/images/gallery/cladding/cladding14.webp",
                    "/images/gallery/cladding/cladding15.webp"
                ].map((img, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="relative h-64 rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
                        onClick={() => setSelectedImage(img)}
                    >
                        <Image 
                            src={img}
                            alt={`Roofline Project ${i + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                           <span className="text-white text-xs font-medium tracking-wider uppercase bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">View Project</span>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="mt-12 text-center">
                <Link 
                    href="/gallery/cladding" 
                    className="inline-flex items-center gap-2 text-brand-primary dark:text-brand-cta font-bold uppercase tracking-[0.2em] text-sm hover:gap-4 transition-all group"
                >
                    View All Cladding & Roofline Gallery
                    <ArrowRight className="w-5 h-5 transition-transform" />
                </Link>
            </div>
        </div>

        {/* WARNING SIGNS SECTION */}

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-start mb-32">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-brand-text dark:bg-slate-950 rounded-[3rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cta/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] -ml-32 -mb-32"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <AlertCircle className="w-10 h-10 text-brand-cta" />
                        <h3 className="text-3xl font-bold">Don't ignore the warning signs:</h3>
                    </div>
                    <ul className="space-y-6">
                        {[
                        "Peeling paint or discolouration",
                        "Leaking or overflowing gutters",
                        "Signs of rot or water damage",
                        "Poor ventilation in your roof space"
                        ].map((sign, i) => (
                        <li key={i} className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1 border border-white/20">
                            <div className="w-2.5 h-2.5 rounded-full bg-brand-cta"></div>
                            </div>
                            <span className="text-xl text-white/90">{sign}</span>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-8">
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <p className="text-xl text-white/80 leading-relaxed italic">
                        Replacing your fascias, soffits, and guttering not only protects your home from costly structural damage but also boosts kerb appeal and can increase property value.
                        </p>
                    </div>
                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-brand-cta/10 border border-brand-cta/20">
                        <Info className="w-6 h-6 text-brand-cta shrink-0 mt-1" />
                        <p className="text-lg text-white/90">
                            Whether you're renovating, upgrading, or fixing a problem, we’re here to help every step of the way—from advice to installation.
                        </p>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>

        {/* LOCAL AREA INFO */}
        <div className="glass-panel p-12 text-center relative overflow-hidden dark:bg-slate-900 border border-slate-100 dark:border-slate-800 mb-8 rounded-[3rem]">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-text dark:text-white mb-8 tracking-tight">
            Serving Your Specific Local Area
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {regions.map((region) => (
              <div 
                key={region}
                className="px-6 py-3 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-brand-text dark:text-slate-200 font-medium hover:border-brand-primary hover:text-brand-primary transition-all cursor-default"
              >
                {region}
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
             <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                Expert service across Hampshire including Portsmouth, Havant, Waterlooville and surrounding areas.
             </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 pt-8 max-w-7xl mx-auto px-4 mb-24">
        <div className="bg-brand-text dark:bg-slate-950 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl border border-white/5">
          <Image 
            src="/images/site/van-at-work.jpg" 
            alt="Clearly Secure Van at Work" 
            fill 
            className="object-cover opacity-40" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent"></div>
          
          <div className="relative z-10 space-y-10">
            <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Give your home the protection it deserves</h2>
                <p className="text-brand-cta text-2xl font-semibold tracking-wide">— with a clean, modern finish that lasts for years to come —</p>
            </div>
            
            <p className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed">
              Contact us today to arrange your FREE quote and expert consultation.
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
                alt="Enlarged Project View"
                fill
                className="object-contain rounded-xl"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent flex justify-center">
                 <p className="text-white/80 text-sm font-light tracking-wide uppercase">Clearly Secure - Fascias, Soffits & Cladding Gallery</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
