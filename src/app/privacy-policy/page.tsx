'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-brand-bg dark:bg-[#030712] transition-colors duration-500">
      <Header />
      
      <main className="pt-32 pb-20 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-slate-900/40 rounded-[2.5rem] p-8 md:p-16 border border-slate-100 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.02)] backdrop-blur-sm"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 font-heading">
              Privacy Policy
            </h1>
            
            <div className="max-w-none space-y-8 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              <p className="leading-relaxed">
                This is the privacy notice of Clearly Secure. In this document, "we", "our", or "us" refer to Clearly Secure.<br />
                Our registered office is: 43 Roman Grove Portchester Fareham Hampshire PO16 9LL
              </p>

              <div className="h-px w-full bg-slate-100 dark:bg-white/5 my-8" />

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">Introduction</h2>
                <p className="leading-relaxed">
                  This privacy notice aims to inform you about how we collect and process any information that we collect from you, or that you provide to us. It covers information that could identify you (“personal information”) and information that could not. In the context of the law and this notice, “process” means collect, store, transfer, use or otherwise act on information. It tells you about your privacy rights and how the law protects you.
                </p>
                <p className="leading-relaxed">
                  We are committed to protecting your privacy and the confidentiality of your personal information. Our policy is not just an exercise in complying with the law, but a continuation of our respect for you and your personal information.
                </p>
                <p className="leading-relaxed">
                  We undertake to preserve the confidentiality of all information you provide to us, and hope that you reciprocate.
                </p>
                <p className="leading-relaxed">
                  Our policy complies with the Data Protection Act 2018 (Act) accordingly incorporating the EU General Data Protection Regulation (GDPR).
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">Data we process</h2>
                <p className="leading-relaxed">
                  We may collect, use, store and transfer different kinds of personal data about you. We have collated these into groups as follows:
                </p>
                <ul className="list-none space-y-4">
                  <li className="flex gap-4">
                    <span className="text-brand-primary font-bold">01</span>
                    <div>
                      <strong className="text-slate-900 dark:text-white block">Identity</strong>
                      <span>Includes first name, last name, title, date of birth, and other identifiers.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-brand-primary font-bold">02</span>
                    <div>
                      <strong className="text-slate-900 dark:text-white block">Contact Information</strong>
                      <span>Includes billing address, delivery address, email address, telephone numbers.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-brand-primary font-bold">03</span>
                    <div>
                      <strong className="text-slate-900 dark:text-white block">Financial Data</strong>
                      <span>Includes bank account and payment card details.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-brand-primary font-bold">04</span>
                    <div>
                      <strong className="text-slate-900 dark:text-white block">Transaction Data</strong>
                      <span>Details about payments or communications to and from you and information about products.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">Legal bases for processing</h2>
                <p className="leading-relaxed">
                  The law requires us to determine under which of six defined bases we process different categories of your personal information:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <h3 className="font-bold text-slate-950 dark:text-white mb-2">Contractual Obligation</h3>
                    <p className="text-sm">When you buy a product or service from us, a contract is formed. We process your information to carry out our obligations under that contract.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <h3 className="font-bold text-slate-950 dark:text-white mb-2">Consent</h3>
                    <p className="text-sm">When you browse our website or ask us for more information, you provide consent for us to process information that may be personal.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <h3 className="font-bold text-slate-950 dark:text-white mb-2">Legitimate Interests</h3>
                    <p className="text-sm">We may process information when there is a legitimate interest, such as record-keeping and responding to communication.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                    <h3 className="font-bold text-slate-950 dark:text-white mb-2">Legal Obligation</h3>
                    <p className="text-sm">We may process your information to comply with a statutory obligation, such as requests from legal authorities.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">Cookies</h2>
                <p className="leading-relaxed">
                  Our website uses cookies to track how you use our website, record message views, and keep you signed in. You can choose to accept or decline cookies through your browser settings, though this may limit website functionality.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-heading">Retention and Control</h2>
                <p className="leading-relaxed">
                  We keep your personal information only for as long as required to provide services, comply with law, or support legal claims. You have the right to access, review, update, or request removal of your personal information by contacting us.
                </p>
              </div>

              <div className="h-px w-full bg-slate-100 dark:bg-white/5 my-8" />

              <div className="text-sm text-slate-500 dark:text-slate-500 pt-4 border-t border-slate-100 dark:border-white/5">
                <p>Last updated: {new Date().toLocaleDateString('en-GB')}</p>
                <p>If you have any questions, please contact us at <a href="mailto:clearlysecure@hotmail.com" className="text-brand-primary font-bold">clearlysecure@hotmail.com</a></p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
