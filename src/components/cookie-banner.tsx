"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Delay visibility slightly for a better entrance
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none"
        >
          <div className="mx-auto max-w-7xl pointer-events-auto">
            <div className="relative overflow-hidden rounded-2xl border border-[#0EA5E9]/30 bg-[#0369A1]/80 backdrop-blur-xl p-6 shadow-2xl md:p-8">
              <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="flex items-start gap-4 flex-1">
                  <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                    <Cookie className="h-5 w-5" />
                  </div>
                  <div className="space-y-1 text-center md:text-left">
                    <h3 className="text-lg font-semibold text-white">Privacy & Cookies</h3>
                    <p className="text-sm text-blue-50 leading-relaxed max-w-2xl">
                      This site uses cookies to ensure the best experience. By continuing to use this website, you agree to their use.{" "}
                      <Link href="/privacy-policy" className="text-white hover:underline font-medium underline underline-offset-4 decoration-white/30">
                        Learn more about our privacy policy
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 w-full sm:w-auto sm:flex-row sm:items-center">
                  <Button
                    variant="outline"
                    asChild
                    className="bg-[#22C55E] hover:bg-[#16A34A] border-none text-white w-full sm:w-auto font-semibold shadow-lg shadow-green-900/20"
                  >
                    <Link href="/privacy-policy">View Privacy Policy</Link>
                  </Button>
                  <Button
                    onClick={acceptCookies}
                    className="bg-white text-[#0369A1] hover:bg-blue-50 w-full sm:w-auto font-bold shadow-lg shadow-blue-900/20"
                  >
                    Accept
                  </Button>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-white/20 blur-3xl opacity-50" />
              <div className="absolute -top-12 -left-12 h-24 w-24 rounded-full bg-blue-400/20 blur-3xl opacity-50" />
              
              {/* Close button (alternative to Accept) */}
              <button 
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
