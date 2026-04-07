'use client';

import React from 'react';
import { Star, MessageSquarePlus, ChevronRight, Layout, Info, Key, ShieldCheck, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import ReviewCard from "@/components/review-card";

// Real Google Reviews extracted from browser subagent
const reviews = [
  {
    author: "Gemma Paine",
    rating: 5,
    date: "3 months ago",
    text: "From first point of contact Claire & Lee were so friendly & super helpful. We are so pleased with our lovely front door, such good quality. We were on holiday when it was fitted, & came back to no mess at all. It’s instantly modernised the front of the house. We will definitely be using Clearly Secure for any future jobs we need.",
    photos: ["https://lh3.googleusercontent.com/geougc-cs/ABOP9psNkiarDNuhQCGQXwNYDiWqQwpQuBg1bPyQ5sQi0SzI4JHzXMXmzOXcGmO3ZrS_5FXgJ6NjNF6KSm5ed0kUh4csT61GNHHURkfmeeMj5UErc8vsnxTRTLXwEQBEChwZr7BY1v3h29SDRTNR=s157-p-k-rw", "https://lh3.googleusercontent.com/geougc-cs/ABOP9pukpzUWs6eU9ERRt0kfNjRi-mM_d2TNCRcAbjtl8KhdM24smSZvqbk6wmASSG81TnL5p80rFNBh7OPMz0Upf2HBxTgcLMv2t5XKF32ktYcZScHyK5ocMa-cbTdXG12GFsc5SyX55Kvpsdci=s157-p-k-rw"]
  },
  {
    author: "Robert Derry",
    rating: 5,
    date: "4 months ago",
    text: "I'm very pleased with the professional service Clearly Secure Windows gave me from start to finish. They responded very quickly to any concerns I had and Pete done a fantastic job installing my windows. Highly recommended",
    photos: ["https://lh3.googleusercontent.com/geougc-cs/ABOP9puRmbQe1ZaIvUtOZl3lcfFf9IX0EwFJXYWF1nxUC-71D9fk6_aKVZFNSgeLz4VipozQyPTVOrikYQCCzrZasLmDyn-EtZdjH0WtYYUSYphQumsZOokjO3JhkoGVuxlbx3Y6jx9btIIBo5ia=s157-p-k-rw", "https://lh3.googleusercontent.com/geougc-cs/ABOP9pvOIj6zmajc3ek_XFsOK5Xy--PKgMBBrlfggSE85DRUOpkypIJaOjBW3m1fojWWcWt8RIeJhnLifIjbNi7mqG-zALRIKhEjRkvmdLixajaxaZhfB6HwhIRcfnwmXsXHBCFPlCVbCmwc53AH=s157-p-k-rw"]
  },
  {
    author: "Laura Melsome",
    rating: 5,
    date: "7 months ago",
    text: "So pleased with our new front door! Whole process from start to finish was seamless, and we were very impressed with the price too! Pete, the fitter, arrived right on time, did a brilliant job and cleaned everything up when he’d finished. Please have a look at my photos, I absolutely love the glass panel and very pleased we chose the sky blue.",
    photos: ["https://lh3.googleusercontent.com/geougc-cs/ABOP9pu5VplfeN8d79PK0kIS1HESP7efymgedjC1MGBK2MHAqEY1jWq_zcckM51cR4lWBFHOuPhQGzDKTCGUksBzQ5PX3Qzrc7kKGHd7qPcCb3wtazf0zo1zGSFFhnUERud95sFvpDs2VzMTdl6w=s157-p-k-rw", "https://lh3.googleusercontent.com/geougc-cs/ABOP9psfmn-b7iGXvU-vrypY0bb_lFnq4PAxAyjLymfUse96ThudNO9v7A1UaRgTHuScVfAMUNvZCM3uHkqwKDHNsjKrJPDR--y5cNwsN_3tFVfgl6QP8LbUUx0PG514DZQwYXdQQN-MCcu07gjb=s157-p-k-rw"]
  },
  {
    author: "Helen Lockhart",
    rating: 5,
    date: "2 months ago",
    text: "Had a fantastic experience with this company from start to finish. Claire and Lee are super easy to deal with and the process for replacing a really large window was hassle free. We prefer supporting small businesses and in this case we’re super glad we did - not only that but their pricing was super competitive.",
    photos: []
  },
  {
    author: "Alan Reid",
    rating: 5,
    date: "8 months ago",
    text: "Excellent service from Lee, Scott and Claire. Replaced our cladding and added cladding to the side apex. Left everything clean and tidy and finished earlier than expected. Cannot recommend enough and would certainly use again.",
    photos: []
  },
  {
    author: "Lou Formby",
    rating: 5,
    date: "1 month ago",
    text: "We recently had new windows and doors from Clearly Secure. A professional job from initial enquiry through to fitting and after-sales! I had lots of questions, but Clare was extremely helpful. No pressure sales and honest advice. I 100% recommend using this fantastic local company!",
    photos: []
  },
  {
    author: "Claire Urry",
    rating: 5,
    date: "11 months ago",
    text: "What a great job all completed while I was working, came home to find sparkily new white fascias soffit with the new higher level and new black guttering. have already recommended to family member. Lovely family run business thanks Lee & claire.",
    photos: []
  },
  {
    author: "laurie montague",
    rating: 5,
    date: "9 months ago",
    text: "Competitive price, turned up when they said they would when quoting and completing work. Communication was great. Really happy with the installation of our French doors. Can’t fault any part of the process.",
    photos: []
  },
  {
    author: "Lilly",
    rating: 5,
    date: "3 months ago",
    text: "Highly recommend Clearly Secure. Bought my first house and had a few issues with the windows, Lee came round and let me know they didn't need replacing and could be fixed easily. Only took a couple weeks to get the replacement pane, Scott got it all fixed and fitted in no time.",
    photos: []
  },
  {
    author: "Lucy Thomas",
    rating: 5,
    date: "a year ago",
    text: "I'm absolutely thrilled with the work Clearly Secure did on my bungalow. The new front door and four windows have completely revitalized the place. Lee was so friendly and honest when he gave me the quote, no sales pitch unlike other companies I enquired with.",
    photos: []
  },
  {
    author: "Toni Boyes",
    rating: 5,
    date: "2 months ago",
    text: "They were amazing, gave me a quote with no pressure to have the work done. Claire kept me informed all the way through and Pete the fitter did a great job, tidied up after himelf and cleaned the door and window. Already recommended them to friends.",
    photos: []
  },
  {
    author: "Ian Saynor",
    rating: 5,
    date: "5 months ago",
    text: "I recently had a window installed by Clearly Secure Locks & Glazing Ltd, and I couldn’t be happier with the service. From start to finish, their communication was excellent — clear, timely, and professional. The pricing was very competitive.",
    photos: []
  },
  {
    author: "Luke Smith",
    rating: 5,
    date: "4 months ago",
    text: "From Start to Finish Clearly Secure have been great....came to the house measured up and quoted all windows to be replaced in a programme of works. Great prices and everyone i have dealt with has been great.",
    photos: []
  },
  {
    author: "Amy Thornhill",
    rating: 5,
    date: "2 months ago",
    text: "Amazing service at such short notice, Lee is lovely and so is his wife Claire. Very satisfied customer. Thank you so much, will contact you in the future when everything else needs replacing. Even gave Hank a dog treat.",
    photos: []
  },
  {
    author: "Clare Scobie",
    rating: 5,
    date: "4 months ago",
    text: "We have used Clearly Secure several times and they have always been great. Windows and doors look amazing and always professional. It is also always a pleasure to speak to Claire to make the arrangements.",
    photos: []
  },
  {
    author: "John Armstrong",
    rating: 5,
    date: "5 months ago",
    text: "We recently had cause to contact Clearly Secure due to a problem with a UPVC door locking mechanism. We were extremely grateful to Lee for his prompt attendance, excellent workmanship and understanding.",
    photos: []
  }
];

export default function TestimonialsPage() {
  const [visibleCount, setVisibleCount] = React.useState(12);
  const totalReviews = 156; // Based on Google count

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, reviews.length));
  };

  return (
    <div className="bg-[#f8f9fa] dark:bg-slate-900 min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Google Style Header */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-3 mb-2">
                        <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        <h1 className="text-2xl md:text-3xl font-extrabold text-[#444] dark:text-white tracking-tight">Rating</h1>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <span className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white tracking-tighter">5.0</span>
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <span className="text-slate-400 dark:text-slate-500 font-medium text-sm mt-1">{totalReviews} reviews</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-end gap-4">
                    <a 
                      href="https://www.google.com/search?q=Clearly+Secure+Locks+%26+Glazing+Ltd+Reviews#lrd=0x487467e2bdb34c5d:0x1402a9e787a959d9,3" 
                      target="_blank" 
                      rel="noreferrer"
                      className="bg-[#A50021] hover:bg-[#8D001C] text-white px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-lg hover:shadow-xl active:scale-95"
                    >
                      Write a review
                    </a>
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-medium uppercase tracking-tighter">
                        <ShieldCheck className="w-4 h-4 text-brand-cta" />
                        Verified Google Business Profile
                    </div>
                </div>
            </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {reviews.slice(0, visibleCount).map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index % 12) * 0.05 }}
            >
              <ReviewCard {...review} />
            </motion.div>
          ))}
        </div>

        {/* Pagination / Load More */}
        {visibleCount < reviews.length && (
          <div className="mt-16 flex flex-col items-center gap-6">
            <button
              onClick={loadMore}
              className="group flex flex-col items-center gap-3 bg-white dark:bg-slate-800 px-12 py-5 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 active:scale-95"
            >
              <span className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-xs">Load More Reviews</span>
              <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                <ChevronRight className="w-6 h-6 rotate-90" />
              </div>
            </button>
            <p className="text-slate-400 text-xs font-medium italic">
              Showing {visibleCount} of {reviews.length} locally stored reviews
            </p>
          </div>
        )}

        {/* View on Google Link */}
        {visibleCount >= reviews.length && (
          <div className="mt-16 text-center">
            <p className="text-slate-500 dark:text-slate-400 font-medium mb-6 text-base leading-relaxed">
              To read the remaining {totalReviews - reviews.length} verified reviews, please visit our Google Profile.
            </p>
            <a 
              href="https://www.google.com/search?q=Clearly+Secure+Locks+%26+Glazing+Ltd+Reviews#lrd=0x487467e2bdb34c5d:0x1402a9e787a959d9,3" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-brand-primary font-bold hover:underline"
            >
              <ExternalLink className="w-5 h-5" />
              View all 156 reviews on Google
            </a>
          </div>
        )}

        {/* Call to Action Footer */}
        <div className="mt-20 text-center bg-white dark:bg-slate-800 rounded-[3rem] p-12 md:p-16 border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-brand-primary">
                <Star className="w-32 h-32" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-cta mb-6 leading-tight">
                Want to see the quality <br/> of our work in person?
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                Our 5-star reputation is built on 30+ years of local expertise and commitment to Hampshire homeowners.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#contact" className="w-full sm:w-auto bg-brand-primary hover:bg-[#0271bc] text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl transition-all hover:-translate-y-1">
                    Book a Free Consultation
                </a>
                <a href="tel:02393552773" className="w-full sm:w-auto bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-white px-10 py-5 rounded-full font-bold text-lg border border-slate-200 dark:border-slate-600 transition-all">
                    Call 02393 552773
                </a>
            </div>
        </div>
      </div>
    </div>
  );
}
