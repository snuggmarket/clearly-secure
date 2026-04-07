'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function TermsAndConditions() {
  const terms = [
    {
      title: "Callout Charges (9:00am - 6:00pm)",
      content: "No call out charge for Emergency call outs between 9.00am and 6.00pm – you will be charged only for labour and parts."
    },
    {
      title: "Out of Hours (6:00pm - 10:00pm, 7:00am - 9:00am)",
      content: "£65.00 plus parts. This charge is for attendance even if you decide not to proceed and covers the first 30 minutes of labour. Further labour charges can be quoted and accepted before proceeding."
    },
    {
      title: "Out of Hours (10:00pm - 7:00am)",
      content: "£100.00 plus parts. This charge is for attendance even if you decide not to proceed and covers the first 30 minutes of labour. Further labour charges can be quoted and accepted before proceeding."
    },
    {
      title: "Sunday Callouts",
      content: "All emergency call outs on a Sunday are subject to a £100 call out charge plus parts. This covers the first 30 minutes of labour. Further labour charges can be quoted and accepted before proceeding."
    },
    {
      title: "Quotes and Services",
      content: "Quotes will always be given and must be accepted before any work commences. Quotes can be provided in writing if required."
    },
    {
      title: "Large Projects",
      content: "For larger jobs a 65% deposit will be required before any parts are ordered. Payment is to be made on the day of work completion unless previously agreed in writing."
    },
    {
      title: "Commercial Business",
      content: "For any work completed on behalf of a Commercial business, an invoice can be issued which must be paid within 7 calendar days."
    },
    {
      title: "Fittings and Parts",
      content: "Dates for fitting are subject to change should a supplier delay delivery of any parts."
    },
    {
      title: "Payment Methods",
      content: "Payment can be made by cash, bank transfer or debit / credit card. Please note that cheques are not accepted."
    }
  ];

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
              Terms & Conditions
            </h1>
            
            <p className="text-base text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
              Our business terms are designed to be fair, transparent, and provide clarity on costs and service expectations.
            </p>

            <div className="grid gap-6">
              {terms.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 group hover:bg-white dark:hover:bg-white/10 hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                    {item.content}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="h-px w-full bg-slate-100 dark:bg-white/5 my-12" />

            <div className="text-sm text-slate-500 dark:text-slate-500 text-center italic">
              <p>Clearly Secure. All rights reserved. Last updated: {new Date().toLocaleDateString('en-GB')}</p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
