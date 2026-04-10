"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Layout, DoorOpen, Star, CheckCircle, Map as MapIcon } from "lucide-react";

export default function ContactClient() {
  // Service Areas list for easy reference
  const areas = [
    "Portsmouth", "Havant", "Waterlooville", 
    "Petersfield", "Fareham", "Southampton", "Emsworth"
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FDFDFF] dark:bg-[#030712] transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        
        {/* HERO SECTION */}
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24 mb-32">
          <div className="lg:w-1/2 space-y-10 lg:pt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0281d7]/10 text-[#0281d7] text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                <Layout className="w-3.5 h-3.5" />
                Window & Door Specialists
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-950 dark:text-white leading-[1.1] tracking-tight mb-8">
                Specialist Window and <span className="text-[#0281d7]">Door Replacement</span>
              </h1>
              <p className="text-base text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed font-medium">
                Specialising in Window & Door Replacement across Hampshire, we also offer window & door repairs and locksmith services. Local experts with 30+ years of quality craftsmanship.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4"
            >
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-[#0281d7] border border-slate-100 dark:border-white/5 transition-all group-hover:scale-110">
                  <Layout className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Windows</h3>
                  <p className="text-xs text-slate-500">Expert Window replacement service</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-[#0281d7] border border-slate-100 dark:border-white/5 transition-all group-hover:scale-110">
                  <DoorOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Doors</h3>
                  <p className="text-xs text-slate-500">Expert Door replacement service</p>
                </div>
              </div>
            </motion.div>

            <div className="pt-8 flex flex-col sm:flex-row items-center gap-6">
               <a href="tel:02393552773" className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-slate-950 dark:bg-slate-800 text-white font-bold rounded-2xl hover:bg-slate-900 transition-all shadow-lg hover:-translate-y-0.5">
                 <Phone className="w-5 h-5" />
                 02393 552773
               </a>
               <a href="mailto:clearlysecure@hotmail.com" className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold rounded-2xl border border-slate-200 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/10 transition-all shadow-sm hover:-translate-y-0.5">
                 <Mail className="w-5 h-5 text-[#0281d7]" />
                 clearlysecure@hotmail.com
               </a>
            </div>
            <div className="mt-8 flex items-center gap-4 pl-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />))}
              </div>
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">5-Star Reviews</span>
            </div>
          </div>

          {/* FORM CARD */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-14 shadow-[0_48px_80px_-16px_rgba(0,0,0,0.06)] border border-slate-50 dark:border-white/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-full h-[150px] bg-gradient-to-l from-orange-400/20 via-orange-100/5 to-transparent skew-y-12 translate-x-20 -translate-y-20 pointer-events-none"></div>
               
               <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-slate-950 dark:text-white mb-2">Get a Free Quote</h2>
                  <p className="text-slate-500 mb-10 font-medium">Send us a message and we'll reply today.</p>
                  
                  <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                    <input type="hidden" name="access_key" value="cbaa364a-4c49-4da3-a9c8-fe015dc10d07" />
                    <input type="hidden" name="subject" value="New Website Message - Clearly Secure" />
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                      <input type="text" name="full_name" required placeholder="Jane Smith" className="w-full px-5 py-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/50 focus:ring-4 focus:ring-slate-100 outline-none transition-all dark:text-white" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Email</label>
                        <input type="email" name="email" required placeholder="jane@example.com" className="w-full px-5 py-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/50 focus:ring-4 focus:ring-slate-100 outline-none transition-all dark:text-white" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone</label>
                        <input type="tel" name="phone" required placeholder="07XXX XXXXXX" className="w-full px-5 py-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/50 focus:ring-4 focus:ring-slate-100 outline-none transition-all dark:text-white" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Service Needed</label>
                      <select name="service" required className="w-full px-5 py-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/50 focus:ring-4 focus:ring-slate-100 outline-none transition-all dark:text-white appearance-none">
                        <option value="">Please select...</option>
                        <option value="Misted Window Repair">Misted Window Repair</option>
                        <option value="New Windows">New Windows</option>
                        <option value="Composite Doors">Composite Doors</option>
                        <option value="Door Repairs">Door Repairs</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Message</label>
                      <textarea name="message" required rows={4} placeholder="Tell us about the issue..." className="w-full px-5 py-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/50 focus:ring-4 focus:ring-slate-100 outline-none transition-all dark:text-white resize-none"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-[#0281d7] hover:bg-[#0271bc] text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-[#0281d7]/20">Submit Request</button>
                  </form>
               </div>
            </div>
          </motion.div>
        </div>

        {/* MAP SECTION - CUSTOM COVERAGE ZONE */}
        <section className="mt-40">
           <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
              <div className="lg:col-span-1 space-y-8">
                 <div>
                    <h2 className="text-4xl font-bold text-slate-950 dark:text-white mb-6">Service Coverage</h2>
                    <p className="text-slate-500 font-medium leading-relaxed text-base">
                       We are a fully mobile unit providing rapid response window and door services across the Hampshire coastline.
                    </p>
                 </div>
                 
                 <div className="flex flex-wrap gap-2">
                    {areas.map((area) => (
                       <span key={area} className="px-3 py-1 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded-full border border-slate-200 dark:border-white/5">
                          {area}
                       </span>
                    ))}
                 </div>

                 <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold">
                       <CheckCircle className="w-5 h-5 text-[#0281d7]" />
                       <span>60 Minute Response</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold">
                       <CheckCircle className="w-5 h-5 text-[#0281d7]" />
                       <span>No charge to quote</span>
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-3">
                 <div className="group relative w-full h-[600px] rounded-[3.5rem] overflow-hidden border border-slate-100 dark:border-white/5 shadow-2xl">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d350000.12046424355!2d-1.2263004500000001!3d50.85420045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1712282000000!5m2!1sen!2suk" 
                      className="w-full h-full grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000 dark:invert-[0.1]" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                    {/* CUSTOM SERVICE ZONE OVERLAY - VISUALLY SHOWS THE COVERED AREA */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 dark:opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
                       {/* This circle roughly marks the coverage diameter over the zoomed map */}
                       <circle cx="50" cy="50" r="35" fill="#0281d7" stroke="#0281d7" strokeWidth="1" strokeDasharray="2,2" />
                       <circle cx="50" cy="50" r="1" fill="#FF5733" />
                    </svg>

                    {/* Zone Info Overlay */}
                    <div className="absolute bottom-8 right-8 px-6 py-3 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 flex items-center gap-3">
                       <div className="w-2 h-2 rounded-full bg-[#0281d7] animate-pulse"></div>
                       <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-950 dark:text-white">Active Service Zone</span>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* BOTTOM SIGNALS */}
        <section className="mt-40 mb-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
               <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-6 text-[#0281d7]">
                  <Layout className="w-8 h-8" />
               </div>
               <h3 className="font-bold text-slate-900 dark:text-white mb-2">Double Glazing</h3>
               <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">Replacing misted units and fixing seals to restore efficiency.</p>
            </div>
            <div className="flex flex-col items-center text-center">
               <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-6 text-[#0281d7]">
                  <DoorOpen className="w-8 h-8" />
               </div>
               <h3 className="font-bold text-slate-900 dark:text-white mb-2">Composite Doors</h3>
               <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">Premium installations that provide warmth and security.</p>
            </div>
            <div className="flex flex-col items-center text-center">
               <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-6 text-[#0281d7]">
                  <CheckCircle className="w-8 h-8" />
               </div>
               <h3 className="font-bold text-slate-900 dark:text-white mb-2">30+ Years Exp</h3>
               <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">Family run business with legacy levels of craftsmanship.</p>
            </div>
            <div className="flex flex-col items-center text-center">
               <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-6 text-[#0281d7]">
                  <Star className="w-8 h-8" />
               </div>
               <h3 className="font-bold text-slate-900 dark:text-white mb-2">Top Rated</h3>
               <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">Hundreds of 5-star reviews from Hampshire homeowners.</p>
            </div>
        </section>
      </div>
    </div>
  );
}
