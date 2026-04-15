"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceSelectorProps {
  name?: string;
  required?: boolean;
}

const services = [
  "Window Repair",
  "Window Replacement",
  "Door Repair",
  "Door Replacement",
  "UPVC Doors (including French & Patio doors)",
  "Bi-Fold Doors",
  "Shutters",
  "Fascias / Soffits / Guttering",
  "Cladding"
];

export default function ServiceSelector({ name = "service", required = false }: ServiceSelectorProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service) 
        : [...prev, service]
    );
  };

  const selectedValue = selectedServices.join(", ");

  return (
    <div className="space-y-4">
      {/* Hidden input for browser validation */}
      <input 
        type="text" 
        className="sr-only h-0 w-0 absolute"
        tabIndex={-1}
        readOnly
        name={name} 
        value={selectedValue} 
        required={required}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
        {services.map((service) => {
          const isSelected = selectedServices.includes(service);
          return (
            <label
              key={service}
              className="group flex items-center gap-3 cursor-pointer select-none py-1"
            >
              <div className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isSelected}
                  onChange={() => toggleService(service)}
                />
                <div className={`w-5 h-5 rounded-md border-2 transition-all duration-200 flex items-center justify-center ${
                  isSelected 
                    ? "bg-[#0281d7] border-[#0281d7] shadow-sm" 
                    : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 group-hover:border-[#0281d7]/50"
                }`}>
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                      >
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <span className={`text-[13px] font-semibold transition-colors duration-200 ${
                isSelected 
                  ? "text-slate-900 dark:text-white" 
                  : "text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300"
              }`}>
                {service}
              </span>
            </label>
          );
        })}
      </div>
      {required && selectedServices.length === 0 && (
        <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider ml-1 mt-1">Please select at least one service</p>
      )}
    </div>
  );
}
