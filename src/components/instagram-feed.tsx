"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, MessageCircle, ExternalLink, Camera } from "lucide-react";

const InstagramIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
}

const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "1",
    imageUrl: "/images/instagram/post_1.png",
    caption: "🏠🚪🪟🔑 More WINDOWS... More DOORS!!! Another busy week continues at Clearly Secure... More beautiful installs finished, a variety of repairs completed, double glazed units being changed like they are going out of fashion and more quotes issued for even more upcoming work! We aren't complaining though, we LOVE improving our customers homes and helping with all things windows and doors!",
    likes: 42
  },
  {
    id: "2",
    imageUrl: "/images/instagram/post_2.png",
    caption: "🏠🚪🪟🔑 The traditional look of Georgian Bar detail on Double Glazed windows really does suit some properties and this house is absolutely one of them... Geogian Bars can be added to both clear and obscure glass and also to both windows and doors!",
    likes: 38
  },
  {
    id: "3",
    imageUrl: "/images/instagram/post_3.png",
    caption: "🏠🚪🪟🔑 MEET THE TEAM 🏠🚪🪟🔑 Meet Clearly Secure's Service Engineer, Scott! If you contact us with a repair for your windows or doors it is likely to be Scott who will attend. Scott assists with: Blown Double Glazed Units, jammed windows, handle replacements, door furniture, resealing, hinges, servicing, and mechanisms.",
    likes: 29
  },
  {
    id: "4",
    imageUrl: "/images/instagram/post_4.png",
    caption: "🏠🚪🔑✅ MEET THE TEAM! 👋 Hi, I'm Claire and I am your first point of call at Clearly Secure Glazing and Locks! I can help with all your window and door repairs and replacement enquiries from booking a suitable time for one of our engineers to visit to providing you with a personal accurate, easy to understand quote.",
    likes: 56
  },
  {
    id: "5",
    imageUrl: "/images/instagram/post_5.png",
    caption: "🏠🚪🪟🔑 Today has been another day of both beautiful door installations, surveys completed and various repairs to existing windows and doors. These two doors were both installed... Both composite and the owner of the blue door chose also to have their door number bespokely added to the glass!",
    likes: 31
  },
  {
    id: "6",
    imageUrl: "/images/instagram/post_6.png",
    caption: "🏠🚪🪟🔑 MEET THE TEAM 🏠🚪🪟🔑 This is Lee, original founder of Clearly Secure Glazing and Locks! With over 30 years in the industry, Lee is our company Surveyor and Locksmith. Lee is friendly and approachable, offering professional and fair advice on all window, door and lock requirements. 🏠🚪🪟🔑",
    likes: 64
  }
];

export default function InstagramFeed() {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  // Duplicate posts for seamless looping
  const postsForScroll = [...INSTAGRAM_POSTS, ...INSTAGRAM_POSTS];

  return (
    <section className="relative pt-24 pb-0 bg-[#030712] overflow-hidden w-full">
      <div 
        className="relative overflow-hidden group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className="flex gap-1 whitespace-nowrap animate-marquee"
          style={{ 
            animationPlayState: isPaused ? 'paused' : 'running',
            width: 'fit-content'
          }}
        >
          {postsForScroll.map((post, idx) => (
            <div 
              key={`${post.id}-${idx}`}
              className="relative w-72 h-72 md:w-80 md:h-80 shrink-0 cursor-pointer overflow-hidden group/item shadow-2xl"
              onClick={() => setSelectedPost(post)}
            >
               <Image 
                src={post.imageUrl} 
                alt={post.caption}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover/item:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white font-bold">
                <div className="flex items-center gap-2">
                  <Heart fill="currentColor" size={20} />
                  {post.likes}
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle fill="currentColor" size={20} />
                  {Math.floor(post.likes / 5)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedPost(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-w-5xl w-full max-h-[90vh]"
            >
              <button 
                className="absolute top-4 right-4 z-10 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors"
                onClick={() => setSelectedPost(null)}
              >
                <X size={24} />
              </button>

              <div className="md:w-3/5 relative min-h-[300px] md:min-h-full bg-slate-50 dark:bg-slate-950">
                <Image 
                  src={selectedPost.imageUrl} 
                  alt={selectedPost.caption}
                  fill
                  sizes="(max-width: 1200px) 100vw, 80vw"
                  className="object-contain"
                />
              </div>

              <div className="md:w-2/5 p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-10 rounded-full bg-slate-100 flex items-center justify-center text-brand-primary">
                    <InstagramIcon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">clearly_secure</h3>
                    <p className="text-xs text-slate-500">Waterlooville, Hampshire</p>
                  </div>
                </div>

                <div className="flex-grow overflow-y-auto pr-2 mb-6">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                    {selectedPost.caption}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 dark:border-white/5 space-y-4">
                  <div className="flex items-center gap-6 text-slate-900 dark:text-white">
                    <button className="hover:text-red-500 transition-colors">
                      <Heart size={24} />
                    </button>
                    <button className="hover:text-brand-primary transition-colors">
                      <MessageCircle size={24} />
                    </button>
                    <InstagramIcon size={24} className="ml-auto text-slate-300" />
                  </div>
                  <p className="font-bold text-slate-900 dark:text-white">{selectedPost.likes} likes</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                    {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
