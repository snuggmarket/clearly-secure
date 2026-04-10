"use client";

import { ArrowRight, CheckCircle, Shield, Star, Clock, Phone, Mail, MapPin, PoundSterling, DoorOpen, Key, Layout, Settings, Calendar, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TestimonialV2 from "@/components/testimonial-v2";
import InstagramFeed from "@/components/instagram-feed";
import StructuredData from "@/components/structured-data";

export default function Home() {
  return (
    <>
      <StructuredData />

      <div className="pt-24 px-4 lg:px-8 max-w-[1600px] mx-auto mb-32">
        {/* HERO SECTION */}
        <section className="relative w-full h-[80vh] min-h-[600px] rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center px-4 relative group">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video/Workmen_fixing_house.mp4" type="video/mp4" />
          </video>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-brand-text/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-text/30 via-transparent to-brand-text/90"></div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-white/90 text-sm font-medium mb-4 shadow-xl">
              <Shield className="w-4 h-4 text-brand-cta" />
              <span>Hampshire's Most Trusted Glazing & Locksmith Experts</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-md">
              Secure Your Home <br className="hidden md:block"/> With Confidence
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light drop-shadow">
              Fast, professional, friendly & reliable Window and Door repair and replacement specialists with full Locksmith service. We get it right the first time
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <a href="tel:02393552773" className="w-full sm:w-auto bg-brand-cta hover:bg-brand-cta-hover text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 shadow-[0_8px_30px_rgb(34,197,94,0.3)] transition-all transform hover:-translate-y-1">
                <Phone className="w-5 h-5"/>
                Call 02393 552773
              </a>
              <a href="#services" className="w-full sm:w-auto bg-[#0281d7] hover:bg-[#0271bc] text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-[0_8px_30px_rgba(2,129,215,0.2)]">
                Our Services
                <ArrowRight className="w-5 h-5"/>
              </a>
            </div>
          </div>
        </section>

        {/* TRUST STATS BLOCK (Overlapping Hero with Animated Beam border) */}
        <section className="relative z-20 -mt-12 sm:-mt-20 max-w-5xl mx-auto px-4">
          <div className="glass-panel beam-border p-5 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y-0 lg:divide-x divide-black/5 dark:divide-white/5 dark:bg-slate-900">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl md:text-4xl font-bold text-brand-primary dark:text-brand-cta mb-1 tracking-tighter">30+</span>
              <span className="text-brand-text/70 dark:text-slate-400 font-medium text-xs md:text-sm flex items-center gap-2">
                <Clock className="w-4 h-4" /> Years Experience
              </span>
            </div>
            
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl md:text-4xl font-bold text-brand-primary dark:text-brand-cta mb-1 tracking-tighter flex items-center gap-1">
                200+
              </span>
              <span className="text-brand-text/70 dark:text-slate-400 font-medium text-xs md:text-sm flex items-center gap-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-500" /> 5-Star Reviews
              </span>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl md:text-4xl font-bold text-brand-primary dark:text-brand-cta mb-1 tracking-tighter">99.9%</span>
              <span className="text-brand-text/70 dark:text-slate-400 font-medium text-xs md:text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-cta" /> Satisfaction
              </span>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl md:text-4xl font-bold text-brand-primary dark:text-brand-cta mb-1 tracking-tighter">FREE</span>
              <span className="text-brand-text/70 dark:text-slate-400 font-medium text-xs md:text-sm flex items-center gap-2">
                <PoundSterling className="w-4 h-4 text-green-500" /> No charge to quote
              </span>
            </div>
          </div>
        </section>

        {/* WHO WE ARE STATEMENT (Inspired by reference) */}
        <section className="pt-16 pb-32 max-w-5xl mx-auto text-center px-4">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 text-sm font-medium shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
              Who we are?
            </div>
          </div>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl leading-[1.2] tracking-tight">
            <span className="text-[#0EA5E9] font-light">We’re a team of seasoned experts delivering end-to-end </span>
            <span className="text-brand-primary dark:text-[#38BDF8] font-bold">glazing, locksmith, </span>
            <span className="text-[#0EA5E9] font-light">and </span>
            <span className="text-brand-primary dark:text-[#38BDF8] font-bold">emergency repair </span>
            <span className="text-[#0EA5E9] font-light">solutions — executed with </span>
            <span className="text-brand-primary dark:text-[#38BDF8] font-bold">precision </span>
            <span className="text-[#0EA5E9] font-light">to keep your home </span>
            <span className="text-brand-primary dark:text-[#38BDF8] font-bold">secure </span>
            <span className="text-[#0EA5E9] font-light">and </span>
            <span className="text-brand-primary dark:text-[#38BDF8] font-bold">stress-free.</span>
          </h2>
        </section>

        {/* SERVICES SECTION - REDESIGNED */}
        <section id="services" className="py-24 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Row 1: Header + Windows */}
            <div className="lg:col-span-2 p-4 md:pr-12 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold text-brand-cta mb-6 tracking-tight">
                  Clearly Secure Services
                </h2>
                <p className="text-brand-text/70 dark:text-slate-400 text-base leading-relaxed">
                  When it comes to window and door installation, Clearly Secure Glazing and Locks makes it our number one priority. We're a family-run locksmith and mobile door/window repair service offering same-day appointments where possible — and there's never a call-out or quote charge between 9am and 5pm. We cover Portsmouth, Havant, Waterlooville, Petersfield, Fareham, Southampton, Emsworth and all surrounding areas.
                </p>
            </div>

            {/* Windows (Branded Blue - Top Right) */}
            <div className="group/card relative rounded-[2rem] overflow-hidden min-h-[300px] flex flex-col h-full border border-slate-100 dark:border-white/5 shadow-sm">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <Image 
                  src="/images/windows/glazed-window-1.jpg" 
                  alt="Window Glazing Service" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover/card:bg-black/30 transition-colors duration-500"></div>
              </div>

              <div className="relative z-10 p-8 flex flex-col h-full text-white">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-10 text-white border border-white/20">
                  <Layout className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Windows</h3>
                <p className="text-white/80 text-base leading-relaxed mb-6">
                  Misted glass replacements, broken hinges, handles, and lock mechanisms for all UPVC and composite windows.
                </p>
                <div className="mt-auto">
                  <Link href="/windows" className="text-white font-semibold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all group/link">
                    Learn more <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform"/>
                  </Link>
                </div>
              </div>
            </div>

            {/* Row 2: Doors, Locksmith, Other Services */}
            {/* Doors */}
            <div className="group/card relative rounded-[2rem] overflow-hidden min-h-[300px] flex flex-col h-full border border-slate-100 dark:border-white/5 shadow-sm">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <Image 
                  src="/images/doors/glazed-door-1.jpg" 
                  alt="Door Installation Service" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover/card:bg-black/30 transition-colors duration-500"></div>
              </div>

              <div className="relative z-10 p-8 flex flex-col h-full text-white">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-10 text-white border border-white/20">
                  <DoorOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Doors</h3>
                <p className="text-white/80 text-base leading-relaxed mb-6">
                  Installation of premium composite doors, French doors, and patio doors tailored to your property.
                </p>
                <div className="mt-auto">
                  <Link href="/doors" className="text-white font-semibold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all group/link">
                    Learn more <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform"/>
                  </Link>
                </div>
              </div>
            </div>

            {/* Locksmith */}
            <div className="bg-[#fcfcfc] dark:bg-slate-900/50 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex flex-col h-full shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center mb-10 text-brand-primary border border-slate-100 dark:border-slate-700 shadow-sm">
                <Key className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-text dark:text-white mb-2">Locksmith</h3>
              <p className="text-brand-text/70 dark:text-slate-400 text-base leading-relaxed mb-6">
                Emergency lockouts, lock changes, upgrades to anti-snap locks, and full security assessments.
              </p>
              <div className="mt-auto">
                <Link href="/locksmith" className="text-brand-primary font-semibold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all group">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"/>
                </Link>
              </div>
            </div>

            {/* Other Services */}
            <div className="bg-[#fcfcfc] dark:bg-slate-900/50 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex flex-col h-full shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center mb-10 text-brand-primary border border-slate-100 dark:border-slate-700 shadow-sm">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-text dark:text-white mb-2">Other Services</h3>
              <p className="text-brand-text/70 dark:text-slate-400 text-base leading-relaxed mb-6">
                Fascias, soffits, guttering, and cladding repairs to keep your home protected and looking its best.
              </p>
              <div className="mt-auto">
                <a href="#other" className="text-brand-primary font-semibold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all group">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"/>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* HOW WE WORK - REFINED MODERN DESIGN */}
        <section id="process" className="py-16 relative bg-transparent">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <span className="text-[#0281d7] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Process</span>
              <h2 className="text-4xl md:text-6xl font-bold text-brand-cta tracking-tight">How We Work</h2>
              <div className="w-20 h-1 bg-[#0281d7] mx-auto mt-6 rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {[
                {
                  id: "01",
                  title: "Visit & Quotation",
                  text: "When you call, we will arrange an appointment to visit and give you a free no obligation quotation. Our visit normally takes no more than 30 minutes and we confirm an arrival time that we aim to achieve. Should anything change, we'll keep you updated immediately.",
                  icon: <Calendar className="w-6 h-6" />,
                  delay: 0.1
                },
                {
                  id: "02",
                  title: "Immediate Repairs",
                  text: "If it is a mechanical repair we may be able to carry out the work straight away as we stock spares for all the popular door and window systems, ensuring minimal disruption to your daily routine.",
                  icon: <Wrench className="w-6 h-6" />,
                  delay: 0.2
                },
                {
                  id: "03",
                  title: "Quality Fitting",
                  text: "For custom glass or new units, we check every piece for quality before fitment. We then arrange a final appointment at your convenience, fitting your new units with the precision and care they deserve.",
                  icon: <CheckCircle className="w-6 h-6" />,
                  delay: 0.3
                }
              ].map((step) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: step.delay }}
                  className="relative group pt-12 h-full"
                >
                  <div className="absolute top-0 left-0 text-7xl font-light text-slate-200 dark:text-slate-800 select-none group-hover:text-[#0281d7]/20 transition-colors duration-500">
                    {step.id}
                  </div>
                  
                  <div className="bg-[#fcfcfc] dark:bg-slate-900/50 p-10 h-full flex flex-col relative z-10 rounded-[2rem] border border-slate-100 dark:border-slate-800 overflow-hidden group-hover:border-[#0281d7]/30 transition-all duration-500 shadow-sm hover:shadow-md">
                    {/* Corner accent */}
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#0281d7]/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                    
                    <div className="w-12 h-12 rounded-xl bg-[#0281d7] text-white flex items-center justify-center mb-8 shadow-lg shadow-[#0281d7]/20">
                      {step.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-brand-text dark:text-white mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-brand-text/70 dark:text-slate-400 leading-relaxed text-base mb-8">
                      {step.text}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800/50 self-start">
                      <span className="text-xs font-bold text-[#0281d7] tracking-widest uppercase">Stage Complete</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* TESTIMONIALS SECTION (Modern V2) */}
      <section id="testimonials" className="relative bg-[#030712] pt-24 pb-0 overflow-hidden w-full">
        {/* Subtle noise/gradient for the dark background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#1e293b_0%,transparent_70%)] opacity-20"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              Trusted Hampshire Experts
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What Our Customers Say</h2>
            <p className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
              We take pride in our 5-star reputation. Here is what our local clients have to say about our 30+ years of service.
            </p>
          </div>

          <TestimonialV2 />

          <div className="mt-12 text-center">
             <a 
               href="https://www.google.com/search?q=Clearly+Secure+Locks+%26+Glazing+Ltd+Reviews#lrd=0x487467e2bdb34c5d:0x1402a9e787a959d9,3" 
               target="_blank" 
               rel="noreferrer"
               className="inline-flex items-center gap-4 bg-slate-950 hover:bg-black text-white px-12 py-5 rounded-full font-medium transition-all hover:scale-105 border-2 border-slate-700 hover:border-slate-500 shadow-2xl group"
             >
               <svg className="w-6 h-6 transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                 <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                 <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                 <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                 <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
               </svg>
               <span className="uppercase tracking-widest text-sm">Leave a Google Review</span>
             </a>
             <div className="mt-10">
                <a 
                  href="/testimonials" 
                  className="text-slate-500 hover:text-white transition-colors text-xs font-bold inline-flex items-center gap-2 uppercase tracking-[0.2em] group"
                >
                  View All Testimonials
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
             </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM FEED SECTION */}
      <InstagramFeed />

      <div className="pt-24 px-4 lg:px-8 max-w-[1600px] mx-auto mb-32">
        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 max-w-7xl mx-auto">
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col lg:flex-row min-h-[800px]">
            {/* Form Side */}
            <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
              <div className="mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Direct Support</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-cta mb-4">
                  Contact Clearly Secure
                </h2>
                <div className="h-1 w-12 bg-blue-600 rounded-full mb-6"></div>
                <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-md">
                  Hampshire's trusted mobile specialist. Reach out directly for expert advice and free estimates.
                </p>
              </div>

              <form 
                action="https://api.web3forms.com/submit" 
                method="POST"
                className="space-y-5"
              >
                {/* Web3Forms Submission Key */}
                <input type="hidden" name="access_key" value="cbaa364a-4c49-4da3-a9c8-fe015dc10d07" />
                <input type="hidden" name="subject" value="New Contact Form Submission - Clearly Secure" />
                <input type="hidden" name="from_name" value="Clearly Secure Website" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">First name</label>
                    <input 
                      type="text" 
                      name="first_name"
                      required
                      placeholder="Jane"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all dark:text-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Last name</label>
                    <input 
                      type="text" 
                      name="last_name"
                      required
                      placeholder="Smith"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all dark:text-white"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Email address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all dark:text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Phone number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    placeholder="+44 0000 000000"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all dark:text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Service interested in:</label>
                  <select 
                    name="service"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all dark:text-white appearance-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="Window repair">Window repair</option>
                    <option value="Window replacement">Window replacement</option>
                    <option value="Door repair">Door repair</option>
                    <option value="Door replacement">Door replacement</option>
                    <option value="Shutters">Shutters</option>
                    <option value="Fascias">Fascias</option>
                    <option value="Soffits & Guttering">Soffits & Guttering</option>
                    <option value="Cladding">Cladding</option>
                    <option value="Locksmith services">Locksmith services</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Message / Issue Details</label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us a bit more about what you need..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 focus:bg-white dark:focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all resize-none dark:text-white"
                  ></textarea>
                </div>

                <button type="submit" className="w-full bg-slate-900 dark:bg-brand-primary hover:bg-slate-800 dark:hover:bg-brand-primary/90 text-white font-bold py-4 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0">
                  Send Message
                </button>

                <p className="text-center text-slate-500 dark:text-slate-400 text-sm">
                  Prefer email? <a href="mailto:clearlysecure@hotmail.com" className="text-brand-primary font-semibold hover:underline">clearlysecure@hotmail.com</a>
                </p>
              </form>
            </div>

            {/* Image Side */}
            <div className="lg:w-1/2 relative bg-slate-100 dark:bg-slate-800 overflow-hidden min-h-[500px]">
              <Image 
                src="/images/site/contact-door.jpg" 
                alt="Professional Door Installation" 
                fill
                className="object-cover"
                priority
              />
              
              {/* Bottom Badges */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center">
                <div className="flex items-center gap-2 bg-brand-cta/90 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/20 shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  <span className="text-white text-[11px] font-bold uppercase tracking-[0.15em] antialiased">No charge to quote</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
