'use client';

import React from 'react';
import { motion } from "framer-motion";

// --- Types ---
interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    text: "Arrived within 30 minutes. Fixed our composite door quickly and efficiently. Brilliant service, wouldn't use anyone else in Portsmouth.",
    image: "/images/testimonials/user-1.png",
    name: "John T.",
    role: "Portsmouth Resident",
  },
  {
    text: "Very professional team. Replaced all our misty window panels at a fraction of the cost of new windows. Highly recommend!",
    image: "/images/testimonials/user-2.png",
    name: "Sarah W.",
    role: "Havant Homeowner",
  },
  {
    text: "Upgraded our locks to anti-snap after a burglary in the area. Gave us huge peace of mind. True experts in home security.",
    image: "/images/testimonials/user-3.png",
    name: "Mark P.",
    role: "Waterlooville Local",
  },
  {
    text: "Excellent locksmith service. Fast response time and very reasonable prices. Will definitely be using Clearly Secure again.",
    image: "/images/testimonials/user-4.png",
    name: "David L.",
    role: "Fareham Business Owner",
  },
  {
    text: "The double glazing repair was top notch. My windows no longer rattle and the draft is completely gone. 5 stars!",
    image: "/images/testimonials/user-5.png",
    name: "Emma R.",
    role: "Southampton Resident",
  },
  {
    text: "Lost my keys and was stuck outside. They were with me in 20 minutes and got me back in without any damage. Lifesavers!",
    image: "/images/testimonials/user-6.png",
    name: "Michael B.",
    role: "Gosport Resident",
  },
];

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(4, 6);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role }, i) => (
                <motion.li 
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md max-w-xs w-full bg-white/5 transition-all duration-300 cursor-default select-none group" 
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-slate-300 leading-relaxed font-normal m-0 italic">
                      "{text}"
                    </p>
                    <footer className="flex items-center gap-3 mt-6 border-t border-white/10 pt-4">
                      <div className="h-10 w-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-bold border border-brand-primary/30">
                        {name.charAt(0)}
                      </div>
                      <div className="flex flex-col text-left">
                        <cite className="font-bold not-italic tracking-tight leading-5 text-white">
                          {name}
                        </cite>
                        <span className="text-sm leading-5 tracking-tight text-slate-500 mt-0.5">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export default function TestimonialV2() {
  return (
    <div 
      className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[600px] overflow-hidden"
      role="region"
      aria-label="Scrolling Testimonials"
    >
      <TestimonialsColumn testimonials={firstColumn} duration={25} />
      <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={30} />
      <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={28} />
    </div>
  );
}
