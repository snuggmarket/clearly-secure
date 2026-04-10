"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";

interface GalleryImage {
  id: string;
  imageUrl: string;
  category: "Door" | "Window";
}

// Generate the list of images from the gallery folders
const DOOR_IMAGES: GalleryImage[] = Array.from({ length: 20 }, (_, i) => ({
  id: `door-${i + 1}`,
  imageUrl: `/images/gallery/doors/door${i + 1}.jpg`,
  category: "Door"
}));

const WINDOW_IMAGES: GalleryImage[] = Array.from({ length: 27 }, (_, i) => ({
  id: `window-${i + 1}`,
  imageUrl: `/images/gallery/windows/window${i + 1}.jpg`,
  category: "Window"
}));

// Combine and shuffle slightly or just alternate
const GALLERY_IMAGES: GalleryImage[] = [];
const maxLength = Math.max(DOOR_IMAGES.length, WINDOW_IMAGES.length);

for (let i = 0; i < maxLength; i++) {
  if (i < DOOR_IMAGES.length) GALLERY_IMAGES.push(DOOR_IMAGES[i]);
  if (i < WINDOW_IMAGES.length) GALLERY_IMAGES.push(WINDOW_IMAGES[i]);
}

export default function InstagramFeed() {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Duplicate images for seamless looping
  const imagesForScroll = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  return (
    <section className="relative pt-24 pb-0 bg-[#030712] overflow-hidden w-full">
      <div className="max-w-[1600px] mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Our Recent Work</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
          A showcase of our latest door and window installations across Hampshire. Click any photo to enlarge.
        </p>
      </div>

      <div 
        className="relative overflow-hidden group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className="flex gap-2 whitespace-nowrap animate-marquee"
          style={{ 
            animationPlayState: isPaused ? 'paused' : 'running',
            width: 'fit-content'
          }}
        >
          {imagesForScroll.map((image, idx) => (
            <div 
              key={`${image.id}-${idx}`}
              className="relative w-64 h-64 md:w-80 md:h-80 shrink-0 cursor-pointer overflow-hidden group/item shadow-2xl rounded-sm"
              onClick={() => setSelectedImage(image)}
            >
               <Image 
                src={image.imageUrl} 
                alt={`${image.category} installation`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover/item:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-300 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                    <Search size={20} />
                  </div>
                  <span className="text-white text-xs font-bold uppercase tracking-widest bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">View Work</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
              onClick={() => setSelectedImage(null)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl h-full flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-0 right-0 md:-top-12 md:-right-12 z-10 p-3 text-white/70 hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <X size={32} />
              </button>

              <div className="relative w-full h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image 
                  src={selectedImage.imageUrl} 
                  alt={`${selectedImage.category} installation`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
                
                {/* Caption bar */}
                <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center px-6">
                  <p className="text-white/80 font-medium tracking-wide">
                    {selectedImage.category} Installation by Clearly Secure Glazing and Locks
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 140s linear infinite;
        }
      `}</style>
    </section>
  );
}
