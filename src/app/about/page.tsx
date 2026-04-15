"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Shield, Award, Clock, UsersRound, MessageCircle, Phone } from "lucide-react";
import StructuredData from "@/components/structured-data";

const team = [
  {
    name: "Lee",
    role: "Locksmith & Window / Door Specialist",
    image: "/images/staff/lee.jpg",
    bio: [
      "Having progressed from a Trainee Window Fitter back in the 1990’s, to an experienced Fitter, Service Engineer and Surveyor Lee can confidently Fit and Service all aspects of uPVC Doors, Windows, Conservatories, Facias, Soffits & Guttering. Lee has a number of years experience working within the Emergency Sector of both Glazing & Locks. This means he is able to attend emergency situations such as break ins, gain entrys, temporary board ups and generally securing properties until further work is completed."
    ]
  },
  {
    name: "Claire",
    role: "Head of Finance & Administration",
    image: "/images/staff/claire.jpg",
    bio: [
      "Throughout Claire’s career organisation and attention to detail has been paramount. Claire takes a thorough approach to her work and ensures the business runs smoothly from answering initial enquiries, booking in work, procurement of stock and monitoring the financial aspects of the business to ensure Clearly Secure can offer the best value for money service at all times."
    ]
  },
  {
    name: "Pete",
    role: "Window/Door Fitter",
    image: "/images/staff/pete.jpg",
    bio: [
      "Working as our primary Window & Door Fitter Pete joined the team early in 2023 and has been a fantastic addition assisting with all Window and Door Installations. Pete has a whole host of fitting experience and uses his skills to ensure a speedy, professional approach in both residential and commercial projects that we work on. No job is too big or too small for Pete, his flexibility and approach to work ensures minimum disruption to our customers homes whilst delivering a positive and reassuring experience."
    ]
  },
  {
    name: "Scott",
    role: "Service Engineer",
    image: "/images/staff/scott.jpg",
    bio: [
      "Scott joined the Clearly Secure team in 2024 and is our Service Engineer assisting our customers with various window and door repairs. Windows and doors don’t always need replacing when they have a fault and can often be repaired instead, Scott’s previous experience in the glazing industry means he is able to advise and assist with any repairs to lengthen the life of customers windows and doors where possible. Scott is also a great help with surveying and measuring for other works too!"
    ]
  },
  {
    name: "Bethany & Callum",
    role: "Marketing & Social Media Assistants",
    image: null,
    bio: [
      "Bethany & Callum have proved essential to the social media campaign behind Clearly Secure on both Facebook & Instagram, offering creative ideas assisting with social media promotions they have ensured our Social Media prescence has grown and continues to expand.",
      "Callum has also been critical to the business, taking full ownership of the distribution of marketing material in the local area."
    ]
  },
];

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  const stagger = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <StructuredData />
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 lg:px-8 max-w-[1600px] mx-auto overflow-hidden">
        <div className="relative w-full h-[40vh] min-h-[400px] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center px-4">
          <Image 
            src="/images/clearly-secure-van.jpg" 
            alt="Clearly Secure Van" 
            fill
            className="object-cover transition-transform duration-1000 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-text/60 via-transparent to-transparent"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-white/90 text-sm font-medium shadow-xl border border-white/10"
            >
              <Shield className="w-4 h-4 text-brand-cta" />
              <span>Dedicated To Your Security</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]"
            >
              About Clearly Secure
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            >
              Professional, Friendly Emergency Locksmith and Window & Door Repair Service in Hampshire.
            </motion.p>
          </div>
        </div>
      </section>

      {/* FOUNDATION SECTION */}
      <section className="py-24 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-brand-primary dark:text-brand-cta text-sm font-bold tracking-widest uppercase mb-6">
              Our Story
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-text dark:text-white mb-8 tracking-tight">
              Protecting Hampshire Since 2020
            </h2>
            <div className="space-y-8 text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
              <p>
                Clearly Secure Glazing and Locks was founded in 2020 and is a Professional, Friendly service specialising in Window & Door Replacements, as well as Window & Door Repairs and Emergency Locksmith Services.
              </p>
              <p>
                Covering all areas of Hampshire, ensuring the safety and security of your property at all times.
              </p>
              <div className="p-8 md:p-12 rounded-[3rem] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl relative overflow-hidden group text-left">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Shield size={120} className="text-brand-primary" />
                </div>
                <h4 className="font-bold text-brand-text dark:text-white mb-4 text-2xl">Our Commitment</h4>
                <p className="relative z-10 text-slate-600 dark:text-slate-300 text-xl italic">
                  "No job is too small, we are happy to assist at all levels. We pride ourselves on offering a personal approach and ensures that we treat people how we would want to be treated ourselves."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* MEET THE TEAM HEADER */}
        <div className="text-center mb-20 pt-16">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cta/10 border border-brand-cta/20 text-brand-cta text-sm font-bold tracking-widest uppercase mb-6"
          >
            The Faces Behind Clearly Secure
          </motion.div>
          <motion.h2 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-brand-text dark:text-white mb-6"
          >
            Meet the Team
          </motion.h2>
          <motion.p 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Our team may be small however it is our local, personal and thorough approach that has secured repeat business and many recommendations.
          </motion.p>
        </div>

        {/* TEAM GRID */}
        <motion.div 
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {team.map((member, idx) => (
            member.name !== "Bethany & Callum" ? (
              <motion.div
                key={idx}
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="flex flex-col h-full rounded-[2.5rem] bg-[#f8fafc] dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-8 lg:p-10 transition-all hover:shadow-2xl hover:-translate-y-2 group"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                  <div className="relative w-32 h-32 lg:w-40 lg:h-40 shrink-0">
                    <div className="absolute inset-0 rounded-full border-4 border-brand-cta/20 scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl border-2 border-white dark:border-slate-800">
                      <Image 
                        src={member.image!} 
                        alt={member.name} 
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center md:text-left pt-2">
                    <h3 className="text-2xl lg:text-3xl font-bold text-brand-text dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-brand-cta font-semibold tracking-wide uppercase text-sm">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="mt-auto space-y-4 p-6 lg:p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm group-hover:shadow-md transition-shadow relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-brand-cta opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                    <MessageCircle size={14} className="text-brand-cta" />
                    <span>Bio</span>
                  </div>
                  {member.bio.map((para, pIdx) => (
                    <p key={pIdx} className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm md:text-base text-balance">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={idx}
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="md:col-span-2 text-center py-12 px-8"
              >
                <h3 className="text-3xl font-bold text-brand-text dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-brand-cta font-semibold tracking-wide uppercase text-sm mb-8">
                  {member.role}
                </p>
                <div className="max-w-3xl mx-auto space-y-4">
                  {member.bio.map((para, pIdx) => (
                    <p key={pIdx} className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            )
          ))}
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 max-w-7xl mx-auto px-4 mb-24">
        <div className="rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl border border-white/10">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/site/van-at-work.jpg" 
              alt="Clearly Secure Van at Work" 
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40 transition-colors duration-500"></div>
          </div>
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1e293b_0%,transparent_70%)] opacity-30 z-[1]"></div>
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">Need Professional <br className="hidden md:block" /> Glazing or Lock Help?</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Our small, dedicated team is here to provide you with the professional, friendly service that has earned us recommendations across Hampshire.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Link href="tel:02393552773" className="w-full sm:w-auto bg-brand-cta hover:bg-brand-cta-hover text-white px-12 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-xl">
                <Phone className="w-6 h-6" />
                Call Directly
              </Link>
              <Link href="/contact" className="w-full sm:w-auto bg-[#00a1cd] hover:bg-[#00a1cd]/90 text-white px-12 py-5 rounded-full font-bold text-xl backdrop-blur-md transition-all hover:scale-105 shadow-xl">
                Get a Fast Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
