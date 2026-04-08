'use client';

import * as React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = mounted && theme === 'dark' 
    ? "/images/logo-light-theme.png" 
    : "/images/logo-clearly-secure.png";

  return (
    <footer className="bg-brand-bg dark:bg-[#030712] py-12 px-4 md:px-8">
      <div className="container mx-auto bg-white dark:bg-slate-900/40 rounded-[2.5rem] p-8 lg:p-16 border border-slate-100 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="flex items-center gap-2">
            <img 
              src={logoSrc} 
              alt="Clearly Secure Logo" 
              className="h-10 w-auto object-contain transition-opacity duration-300"
            />
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-medium max-w-xs md:text-right italic">
            Locksmith, Window & Door Specialists in Hampshire.
          </p>
        </div>

        <div className="h-px w-full bg-slate-100 dark:bg-white/5 mb-12" />

        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h3 className="font-bold text-sm uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-6 font-heading">Testimonials</h3>
            <ul className="space-y-4">
              <li><a href="/about" className="text-slate-500 dark:text-slate-400 hover:text-brand-primary transition-colors">About Us</a></li>
              <li><a href="/testimonials" className="text-slate-500 dark:text-slate-400 hover:text-brand-primary transition-colors">Testimonials</a></li>
              <li><a href="/contact" className="text-slate-500 dark:text-slate-400 hover:text-brand-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-bold text-sm uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-6 font-heading">Navigation</h3>
            <ul className="space-y-4">
              <li><a href="/windows" className="text-slate-500 dark:text-slate-400 hover:text-brand-primary transition-colors">Window Repair & Replacement</a></li>
              <li><a href="/doors" className="text-slate-500 dark:text-slate-400 hover:text-brand-primary transition-colors">Door Repair & Replacement</a></li>
              <li><a href="/locksmith" className="text-slate-500 dark:text-slate-400 hover:text-brand-primary transition-colors">Locksmith Services</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="font-bold text-sm uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-6 font-heading">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-center gap-4 group">
                <div className="size-10 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <Mail className="size-5" />
                </div>
                <a href="mailto:clearlysecure@hotmail.com" className="text-slate-500 dark:text-slate-400 hover:text-brand-primary transition-colors font-medium">clearlysecure@hotmail.com</a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="size-10 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <Phone className="size-5" />
                </div>
                <div className="flex flex-col">
                  <a href="tel:02393552773" className="text-slate-500 dark:text-slate-400 hover:text-brand-primary transition-colors font-medium">02393 552773</a>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="size-10 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <MapPin className="size-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">79 Greenfield Crescent, Waterlooville,</span>
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Hampshire, PO8 9EL</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-6 lg:justify-between">

            
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/clearly_secure/" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all text-slate-400">
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.facebook.com/clearlysecurelocksandglazing" target="_blank" rel="noopener noreferrer" className="size-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all text-slate-400">
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.74h-2.94v-3.403h2.94v-2.511c0-2.91 1.777-4.493 4.371-4.493 1.242 0 2.311.092 2.622.134v3.04l-1.799.001c-1.412 0-1.685.671-1.685 1.655v2.174h3.364l-.438 3.403h-2.926v8.742h6.062c.73 0 1.325-.593 1.325-1.325v-21.351c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-100 dark:border-white/5 text-sm text-slate-400 font-medium tracking-tight">
          <p>&copy; {new Date().getFullYear()} Clearly Secure Locksmiths. All rights reserved. Design by <a href="https://pixelweb.co.nz" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">Pixelweb</a></p>
          <div className="flex items-center gap-8">
            <a href="/terms-conditions" className="hover:text-brand-primary transition-colors">Terms & Conditions</a>
            <a href="/privacy-policy" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
