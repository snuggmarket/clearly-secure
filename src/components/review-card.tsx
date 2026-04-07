'use client';

import React from 'react';
import { Star, MoreVertical, ExternalLink } from "lucide-react";
import Image from "next/image";

interface ReviewCardProps {
  author: string;
  rating: number;
  date: string;
  text: string;
  photos?: string[];
  originalUrl?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ author, rating, date, text, photos, originalUrl }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const textThreshold = 150;

  const displayText = isExpanded ? text : text.slice(0, textThreshold);
  const showReadMore = text.length > textThreshold;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col h-full hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold border border-brand-primary/20 overflow-hidden">
            {author.charAt(0)}
          </div>
          <div>
            <a 
              href={originalUrl || "https://www.google.com/search?q=Clearly+Secure+Locks+%26+Glazing+Ltd+Reviews"} 
              target="_blank" 
              rel="noreferrer"
              className="font-bold text-slate-900 dark:text-white hover:underline flex items-center gap-1 group"
            >
              {author}
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <div className="flex items-center gap-2 mt-0.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-3.5 h-3.5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`} 
                  />
                ))}
              </div>
              <span className="text-[11px] text-slate-400 font-medium tracking-tight">
                {date}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow">
        <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed whitespace-pre-line">
          {displayText}
          {!isExpanded && showReadMore && "..."}
        </p>
        {showReadMore && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-slate-400 dark:text-slate-500 text-xs font-semibold mt-2 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>

      {/* Photos Grid */}
      {photos && photos.length > 0 && photos[0] !== "2 photos listed" && !photos[0].includes("listed") && (
        <div className={`grid gap-2 mt-4 ${photos.length > 2 ? "grid-cols-3" : "grid-cols-2"}`}>
          {photos.slice(0, 3).map((photo, idx) => (
            <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-slate-100 dark:border-slate-700">
              <img 
                src={photo} 
                alt={`Review photo ${idx + 1}`} 
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      )}

      {/* Badge Source */}
      <div className="mt-6 pt-4 border-t border-slate-50 dark:border-slate-700/50 flex items-center gap-2">
        <div className="w-5 h-5 flex items-center justify-center">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
        </div>
        <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 font-medium tracking-tight leading-none">Posted on</span>
            <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400 leading-tight">Google</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
