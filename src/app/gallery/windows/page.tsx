'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';

const images = Array.from({ length: 27 }, (_, i) => `/images/gallery/windows/window${i + 1}.jpg`);

// Split images into 4 columns for masonry layout
const columns = [
  images.slice(0, 7),
  images.slice(7, 14),
  images.slice(14, 21),
  images.slice(21, 27),
];

export default function WindowsGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 pt-24 pb-20 overflow-hidden">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center pt-[75px]">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-white"
        >
          Our Windows Gallery
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
        >
          Explore our portfolio of window installations across Hampshire. From replacement misted units to full premium window upgrades.
        </motion.p>
      </div>

      {/* Animated Masonry Grid */}
      <div className="relative h-[120vh] w-full mt-4 overflow-hidden mask-vertical-fade gallery-container">
        <div className="flex gap-4 px-4 h-max max-w-[1500px] mx-auto overflow-hidden">
          {columns.map((columnImages, colIndex) => (
            <div
              key={colIndex}
              className={`flex flex-col gap-4 flex-1 ${colIndex > 1 ? 'hidden md:flex' : 'flex'} ${
                colIndex % 2 === 0 ? 'animate-scroll-up' : 'animate-scroll-down'
              }`}
              style={{
                animationDuration: `${80 + colIndex * 20}s`,
              }}
            >
              {/* Double the images for seamless loop at -50% */}
              {[...columnImages, ...columnImages].map((src, imgIndex) => (
                <div
                  key={`${colIndex}-${imgIndex}`}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  onClick={() => setSelectedImage(src)}
                >
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={src}
                      alt={`Window ${imgIndex + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 md:group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                       <span className="text-white text-xs font-medium tracking-wider uppercase bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md">View Project</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        
        {/* Glow and Shadow Overlays for smooth entry/exit */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-white dark:from-zinc-950 via-white/40 dark:via-zinc-950/40 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white dark:from-zinc-950 via-white/40 dark:via-zinc-950/40 to-transparent pointer-events-none z-10" />
      </div>

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
                alt="Enlarged Window View"
                fill
                className="object-contain rounded-xl"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent flex justify-center">
                 <p className="text-white/80 text-sm font-light tracking-wide uppercase">Clearly Secure Windows - Hampshire's Finest</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .mask-vertical-fade {
          mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
        }

        @keyframes scrollUp {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }

        @keyframes scrollDown {
          from { transform: translateY(-50%); }
          to { transform: translateY(0); }
        }

        .animate-scroll-up {
          animation: scrollUp linear infinite;
        }

        .animate-scroll-down {
          animation: scrollDown linear infinite;
        }

        .animate-scroll-up:hover,
        .animate-scroll-down:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
