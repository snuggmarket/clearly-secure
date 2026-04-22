"use client";

import { ArrowRight, CheckCircle, Shield, Star, Clock, Phone, Mail, MapPin, PoundSterling, Layout, Settings, Wrench, ShieldCheck, Gauge, Hammer, Sparkles, XCircle, AlertCircle, VolumeX, Key, Zap, UserCheck, TrendingUp, Cog, Heart, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/structured-data";

export default function LocksmithPage() {
  const regions = [
    "Portsmouth", "Havant", "Waterlooville", "Petersfield", 
    "Fareham", "Southampton", "Emsworth"
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <StructuredData />
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 lg:px-8 max-w-[1600px] mx-auto overflow-hidden">
        <div className="relative w-full h-[60vh] min-h-[500px] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center px-4">
          <Image 
            src="/images/locksmith-banner.jpg" 
            alt="Professional Locksmith Services" 
            fill
            className="object-cover transition-transform duration-1000 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-brand-text/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-text/40 via-transparent to-brand-text/10"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-white/90 text-sm font-medium shadow-xl border border-white/10"
            >
              <Shield className="w-4 h-4 text-brand-cta" />
              <span>Hampshire's Security Experts</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]"
            >
              Rapid & Professional <br className="hidden md:block"/> Locksmith Services
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            >
              Emergency entry, lock upgrades, and home security. Fast response across Hampshire with a focus on non-destructive entry.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Link href="tel:02393552773" className="w-full sm:w-auto bg-brand-cta hover:bg-brand-cta-hover text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 shadow-lg transition-all transform hover:-translate-y-1">
                <Zap className="w-5 h-5"/>
                Emergency Call
              </Link>
              <Link href="/contact" className="w-full sm:w-auto bg-[#00a1cd] hover:bg-[#00a1cd]/90 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 shadow-lg transition-all transform hover:-translate-y-1">
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EMERGENCY SECTION */}
      <section className="py-24 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-900/30 border border-red-100 dark:border-red-800 text-red-600 dark:text-red-400 text-sm font-bold tracking-widest uppercase mb-6">
              24/7 Response
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-text dark:text-white mb-8 tracking-tight">
              Locked Out? We'll Get <br/> You Back In.
            </h2>
            <div className="space-y-6">
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">
                It's inevitable that we sometimes misplace our keys, have them stolen, or lock ourselves out of the house. In these circumstances, we are able to gain access to the property without damage.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-brand-cta/10 flex items-center justify-center text-brand-cta mb-4">
                    <Key className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-brand-text dark:text-white mb-2">Non-Destructive</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">We prioritize entry methods that leave your door and frame completely undamaged.</p>
                </div>
                <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-brand-text dark:text-white mb-2">Emergency Service</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Rapid attendance when you need it most, ensuring you're never left outside for long.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            {...fadeIn}
            className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/locked-out.jpg" 
              alt="Locksmith working on door" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-secondary/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 p-6 glass-dark rounded-2xl border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-cta flex items-center justify-center text-white">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-bold">Fast & Secure</div>
                  <div className="text-white/60 text-sm">Most popular locks held in stock</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* LOCK REPLACEMENT & ALIGNMENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 pt-16">
          <motion.div {...fadeIn} className="order-2 lg:order-1 relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image 
              src="/images/clearly-secure-locks.jpg" 
              alt="Clearly Secure locks and hardware" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </motion.div>
          
          <motion.div {...fadeIn} className="order-1 lg:order-2">
            <h3 className="text-3xl md:text-4xl font-bold text-brand-text dark:text-white mb-6 tracking-tight">
              Lock Replacement & Maintenance
            </h3>
            <div className="space-y-4 text-slate-500 dark:text-slate-400 leading-relaxed text-base">
              <p>
                Far too many doors are out of alignment or badly adjusted. Eventually, the center-case (gearbox) breaks. It is far better and cheaper to align the door before the lock goes.
              </p>
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800 dark:text-amber-400">
                  <span className="font-bold">Important Advice:</span> If a lock is not operating correctly, DO NOT ENGAGE THE LOCKS OR LOCK THE DOOR until it has been repaired.
                </p>
              </div>
              <p>
                We stock replacements for all popular makes and many specialized ones to get you secured as soon as possible:
              </p>
              <ul className="space-y-2 pb-4">
                {[
                  "Expert door alignment to prevent mechanism failure.",
                  "Replacement gearboxes and center-cases.",
                  "Huge variety of locks stocked for immediate fitting.",
                  "Professional installation for long-term reliability."
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

        {/* CHANGING & UPGRADING LOCKS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 pt-16">
          <motion.div {...fadeIn}>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-text dark:text-white mb-6 tracking-tight">
              Changing & Upgrading Your Security
            </h3>
            <div className="space-y-6 text-slate-500 dark:text-slate-400 leading-relaxed text-base">
              <div>
                <h4 className="font-bold text-brand-text dark:text-white mb-2 font-heading tracking-wide uppercase text-xs">Security Upgrades</h4>
                <p>
                  In some circumstances, you may feel it necessary to change or upgrade the locks to your home or business. We'll attend the property, survey your requirements, and offer advice that gives you peace of mind.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-brand-secondary/5 border border-brand-secondary/10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
                        <UserCheck className="w-5 h-5 text-brand-primary" />
                    </div>
                    <h4 className="font-bold text-brand-text dark:text-white">Professional Survey</h4>
                </div>
                <p>Many locks are held in stock and can be replaced on the first day. Specialized items can be ordered for a convenient return visit.</p>
              </div>
              <div className="flex items-center gap-3 text-brand-primary font-semibold">
                <TrendingUp className="w-5 h-5" />
                <span>Improving security with modern standards</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div {...fadeIn} className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image 
              src="/images/lock-security.jpg" 
              alt="High security lock hardware" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-brand-text/10"></div>
          </motion.div>
        </div>

        {/* FAILED MECHANISMS & BURGLARY REPAIR */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-16">
          <motion.div {...fadeIn} className="order-2 lg:order-1 relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image 
              src="/images/smashed-door.jpg" 
              alt="Burglary damage repair" 
              fill
              className="object-cover"
            />
          </motion.div>
          
          <motion.div {...fadeIn} className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-brand-text dark:text-white tracking-tight leading-tight">
                Failed Locking Mechanisms
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-base">
                A small alloy casting behind the handle drives a gear cog to lock window mechanisms. These are prone to breaking if anything obstructs the locking pins. We hold stock of various mechanisms to quickly and effectively repair your windows and doors.
              </p>
            </div>

            <div className="space-y-4 pt-8 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-3xl font-bold text-brand-text dark:text-white tracking-tight leading-tight">
                Repairing Burglary Damage
              </h3>
              <div className="text-slate-500 dark:text-slate-400 leading-relaxed text-base space-y-4">
                <p>
                  In the event of a burglary, Clearly Secure can attend, assess any damage, make the property safe, and replace/repair any locks, hinges, or mechanisms.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-brand-cta flex items-center justify-center text-white shrink-0 shadow-lg">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-text dark:text-white mb-1 leading-tight">Empathetic Service</h5>
                    <p className="text-sm">We provide a caring, empathetic service to give you peace of mind and ensure your property is left secure.</p>
                  </div>
                </div>
              </div>
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
            {...fadeIn}
            className="text-3xl md:text-5xl font-bold text-brand-text dark:text-white mb-4 tracking-tight"
          >
            Locksmith Service FAQ
          </motion.h2>
          <motion.p 
            {...fadeIn}
            transition={{ delay: 0.1 }}
            className="text-slate-500 dark:text-slate-400"
          >
            Common questions about our Hampshire locksmith and security services.
          </motion.p>
        </div>
        
        <div className="space-y-4">
          {[
            {
              q: "Do you offer emergency 24/7 locksmith services?",
              a: "Yes, we provide 24/7 emergency response across Hampshire for lockouts, broken keys, and securing properties after break-ins. We aim to get you back in safely and quickly."
            },
            {
              q: "Do you use non-destructive entry methods?",
              a: "Absolutely. We prioritize non-destructive entry techniques to gain access to your property without damaging your door, frame, or locking mechanism whenever possible."
            },
            {
              q: "Can you replace locks on UPVC and composite doors?",
              a: "Yes, we are specialists in UPVC and composite door security. We can replace faulty gearboxes, center-cases, and upgrade your cylinders to anti-snap, high-security versions."
            },
            {
              q: "How quickly can you attend an emergency lockout?",
              a: "We understand the stress of being locked out. We aim to be on-site as quickly as possible, typically arriving within 30-60 minutes for emergency calls across Hampshire."
            },
            {
              q: "Do you charge a call-out fee for quotes?",
              a: "No, we offer free call-outs for quotes and security assessments. We believe in transparent, upfront pricing, so you'll know exactly what the job costs before we start."
            }
          ].map((faq, index) => (
            <motion.div 
              key={index}
              {...fadeIn}
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
        <div className="bg-brand-text dark:bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1e293b_0%,transparent_70%)] opacity-30"></div>
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Emergency Locksmith Help?</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Contact Lee and Claire directly for an honest, professional service. No sales pressure, just expert solutions and rapid response.
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
