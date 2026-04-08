"use client";

import { ArrowRight, CheckCircle, Shield, Star, Clock, Phone, Mail, MapPin, PoundSterling, Layout, Settings, Wrench, ShieldCheck, Gauge, Hammer, Sparkles, XCircle, AlertCircle, VolumeX, DoorOpen, GripVertical, Layers, Info } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/structured-data";
import { BeamsBackground } from "@/components/ui/beams-background";

export default function DoorsPage() {
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
            src="/images/doors/glazed-door-1.jpg" 
            alt="Expert Door Repair & Installation" 
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-white/90 text-sm font-medium shadow-xl border border-white/10"
            >
              <Shield className="w-4 h-4 text-brand-cta" />
              <span>Hampshire's Door Specialists</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]"
            >
              Expert Door <br className="hidden md:block"/> Repair & Replacement
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            >
              Solving sticking doors, broken handles, and alignment issues. Providing a professional finish across Hampshire.
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
          <motion.div {...fadeIn}>

            <h2 className="text-3xl md:text-5xl font-bold text-brand-text dark:text-white mb-8 tracking-tight">
              Why Replace When You <br/> Can Repair?
            </h2>
            <div className="space-y-6">
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">
                Many companies will push for an expensive full-frame replacement when a simple repair is all you need. At Clearly Secure, we prioritize restoring your existing doors first. Our experience and knowledge means that we can assess each door on an individual basis to determine if it is an adjustment that is required or if it is due to a mechanism failure.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-brand-cta/10 flex items-center justify-center text-brand-cta mb-4">
                    <PoundSterling className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-brand-text dark:text-white mb-2">Save Money</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Fixing mechanisms or alignment can save you hundreds compared to buying a new door.</p>
                </div>
                <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
                    <Gauge className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-brand-text dark:text-white mb-2">Restores Efficiency</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Full alignment restoration instantly resolves draughts and heat loss in your home.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            {...fadeIn}
            className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/site/contact-door.jpg" 
              alt="Door Repair Specialist" 
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

        {/* DETAILED SERVICE: STICKING DOORS & ALIGNMENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 pt-16">
          <motion.div {...fadeIn} className="order-2 lg:order-1 relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image 
              src="/images/doors/door13.jpg" 
              alt="Door Alignment and Hinge Repair" 
              fill
              className="object-cover object-[center_80%]"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>
          
          <motion.div {...fadeIn} className="order-1 lg:order-2">

            <h3 className="text-3xl md:text-4xl font-bold text-brand-text dark:text-white mb-6 tracking-tight">
              Sticking Doors & Alignment
            </h3>
            <div className="space-y-4 text-slate-500 dark:text-slate-400 leading-relaxed text-base">
              <p>
                If you find your door is sticking and just generally not opening and closing as smoothly as it used to we can, in many circumstances, adjust the door which may have dropped or shifted in the frame over time.
              </p>
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800 dark:text-amber-400">
                  <span className="font-bold">Early Warning:</span> Over a period of time, due to movement, heat expansion and contraction or poor fitting, the door no longer sits square. If you can’t lock and unlock your door with one hand and using little effort then it needs looking at.
                </p>
              </div>
              <p>
                Re-aligning your door will leave it operating smoothly and freely without putting unnecessary pressure on the lock and mechanism:
              </p>
              <ul className="space-y-2 pb-4">
                {[
                  "Assessment to determine if adjustment or replacement is needed.",
                  "Professional re-alignment to ensure the door sits square.",
                  "Restoration of smooth locking & unlocking operation.",
                  "Prevention of future lock mechanism failure."
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

        {/* DETAILED SERVICE: HANDLES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 pt-16">
          <motion.div {...fadeIn}>

            <h3 className="text-3xl md:text-4xl font-bold text-brand-text dark:text-white mb-6 tracking-tight">
              Replacing Door Handles
            </h3>
            <div className="space-y-6 text-slate-500 dark:text-slate-400 leading-relaxed text-base">
              <p>
                Door handles can suffer quite a bit of wear and tear and sadly they eventually give in getting very loose or breaking altogether. 
              </p>
              <div className="p-6 rounded-2xl bg-brand-secondary/5 border border-brand-secondary/10">
                <p>
                  There are many handles past and present and in most cases we can find a replacement of the same type, size and colour to match your existing door setup.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                 <h4 className="font-bold text-brand-text dark:text-white">Professional Hardware Care</h4>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <li className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-white/5">
                        <CheckCircle className="w-4 h-4 text-brand-cta" />
                        <span className="text-sm">Wide range of styles</span>
                    </li>
                    <li className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-white/5">
                        <CheckCircle className="w-4 h-4 text-brand-cta" />
                        <span className="text-sm">All colors matched</span>
                    </li>
                 </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div {...fadeIn} className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image 
              src="/images/doors/door-fittings.jpg" 
              alt="Door Hardware Repairs" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-brand-text/10"></div>
          </motion.div>
        </div>

        {/* DETAILED SERVICE: GLAZING & PANELS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 pt-16">
          <motion.div {...fadeIn} className="order-2 lg:order-1 relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image 
              src="/images/site/contact-door.jpg" 
              alt="Door Gasket & Seals" 
              fill
              className="object-cover"
            />
          </motion.div>
          
          <motion.div {...fadeIn} className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">

              <h3 className="text-3xl font-bold text-brand-text dark:text-white tracking-tight leading-tight">
                Re-Glaze Replacement Door Panels
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-base">
                Like the glass in a window, the panel in a door can easily be replaced if it becomes damaged. There is a wide choice of replacement available to suit all needs including clear glass, toughened and various patterned glass options.
              </p>
            </div>

            <div className="space-y-4 pt-8 border-t border-slate-100 dark:border-slate-800">

              <h3 className="text-3xl font-bold text-brand-text dark:text-white tracking-tight leading-tight">
                Hinge Adjustment & Prevention
              </h3>
              <div className="text-slate-500 dark:text-slate-400 leading-relaxed text-base space-y-4">
                <p>
                  Similar to door alignment, your hinges can wear or move, causing the door to fly open in the wind or slam shut. This stops the door from locking properly and easily.
                </p>
                <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 dark:text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-800 dark:text-blue-400">
                    <span className="font-bold">Prevention is cure:</span> Adjusting your hinges early solves the problem and prevents costly mechanism damage.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* DETAILED SERVICE: REPLACEMENT DOORS */}
        <div className="pt-16 w-full px-4 lg:px-8">
            <BeamsBackground className="rounded-[2.5rem] bg-slate-950 p-8 md:p-12 hover:shadow-2xl hover:shadow-blue-950/20 transition-all duration-700">
                <motion.div 
                    {...fadeIn} 
                    className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12"
                >
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 max-w-3xl">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-brand-cta/20 flex items-center justify-center text-brand-cta shrink-0">
                                <Hammer className="w-7 h-7" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                                Looking for <br className="hidden md:block" /> Replacement Doors?
                            </h3>
                        </div>
                        <p className="text-white/70 text-base leading-relaxed">
                            When repair isn't enough, we offer a wide range of stylish, high-performance replacements. From precise measurement to professional fitting across Hampshire.
                        </p>
                    </div>
                    
                    <div className="w-full md:w-auto shrink-0">
                        <Link href="/contact" className="group w-full md:w-auto bg-brand-cta hover:bg-white hover:text-slate-950 text-white px-10 py-5 rounded-full font-bold transition-all shadow-xl flex items-center justify-center gap-2">
                            Get Options
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </BeamsBackground>
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
            Door Repair FAQ
          </motion.h2>
          <motion.p 
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-500 dark:text-slate-400"
          >
            Common questions about our Hampshire door maintenance services.
          </motion.p>
        </div>
        
        <div className="space-y-4">
          {[
            {
              q: "Does my front door need a new lock mechanism if it's sticking?",
              a: "In 90% of cases, no. Most sticking doors just need professional realignment because they have dropped over time. Our experts can adjust the hinges to fix the operation without the high cost of a new lock."
            },
            {
              q: "Can you replace broken or faded door handles?",
              a: "Yes, we carry a wide range of handle styles and finishes—including Chrome, Gold, White, and Black—for both uPVC and composite doors. Even for older, 'discontinued' models, we can usually find a perfect match."
            },
            {
              q: "Is it possible to replace the glass in my door without getting a new door?",
              a: "Absolutely. We can replace just the double-glazed unit or decorative panel, which is significantly more cost-effective than replacing the entire door structure."
            },
            {
              q: "How do I know if my door hinges are failing?",
              a: "If your door is sagging, rubbing on the frame, or letting in drafts even when closed, the hinges likely need expert adjustment or replacement. Our 'prevention-first' service can stop a small hinge issue from becoming a total mechanism failure."
            },
            {
              q: "Can you fix a door that won't lock properly?",
              a: "Yes. Difficult locking is usually a sign that the door and frame are no longer aligned. We specialize in precision adjustments that bring the locking points back into line, making your door easy and safe to use again."
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
        <div className="bg-brand-text dark:bg-slate-950 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl border border-white/5">
          <Image 
            src="/images/site/van-at-work.jpg" 
            alt="Clearly Secure Van at Work" 
            fill 
            className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent"></div>
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Need a Door Fix today?</h2>
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
