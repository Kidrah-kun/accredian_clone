"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import Image from "next/image";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadCaptureModal({ isOpen, onClose }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => {
      onClose();
      setIsSuccess(false);
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-[800px] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]"
          >
            {/* Left Column: Image (Desktop Only) */}
            <div className="hidden md:block md:w-[45%] relative">
              <Image
                src="/images/business-v2.webp"
                alt="Enquire Now"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-blue-900/5" />
            </div>

            {/* Right Column: Form */}
            <div className="flex-1 p-6 md:p-10 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>

              {!isSuccess ? (
                <>
                  <h2 className="text-[22px] font-bold text-gray-900 mb-8">Enquire Now</h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1">
                      <input
                        required
                        type="text"
                        placeholder="Enter Name"
                        className="w-full text-sm border-b border-gray-300 py-2.5 focus:border-[#1a73e8] outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>

                    <div className="space-y-1">
                      <input
                        required
                        type="email"
                        placeholder="Enter Email"
                        className="w-full text-sm border-b border-gray-300 py-2.5 focus:border-[#1a73e8] outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>

                    <div className="flex items-center gap-3 border-b border-gray-300 py-2.5">
                      <div className="flex items-center gap-1 cursor-pointer">
                        <span className="text-xl">🇮🇳</span>
                        <span className="text-sm font-medium text-gray-600">+91</span>
                        <ChevronDown size={14} className="text-gray-400" />
                      </div>
                      <input
                        required
                        type="tel"
                        placeholder="Phone Number"
                        className="flex-1 text-sm focus:border-[#1a73e8] outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>

                    <div className="space-y-1">
                      <input
                        type="text"
                        placeholder="Enter company name"
                        className="w-full text-sm border-b border-gray-300 py-2.5 focus:border-[#1a73e8] outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <select className="w-full text-sm border-b border-gray-300 py-2.5 appearance-none bg-transparent focus:border-[#1a73e8] outline-none text-gray-500">
                          <option>Select Domain</option>
                          <option>Data Science</option>
                          <option>Product Management</option>
                          <option>Full Stack Dev</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>

                      <div className="space-y-1">
                        <input
                          type="number"
                          placeholder="Enter No. of candidates"
                          className="w-full text-sm border-b border-gray-300 py-2.5 focus:border-[#1a73e8] outline-none transition-all placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <select className="w-full text-sm border-b border-gray-300 py-2.5 appearance-none bg-transparent focus:border-[#1a73e8] outline-none text-gray-500">
                        <option>Select Mode of Delivery *</option>
                        <option>Online</option>
                        <option>Classroom</option>
                        <option>Blended</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>

                    <div className="space-y-1">
                      <input
                        type="text"
                        placeholder="Eg: Gurgoan, Delhi, India"
                        className="w-full text-sm border-b border-gray-300 py-2.5 focus:border-[#1a73e8] outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>

                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full bg-[#1a73e8] text-white font-bold py-3.5 rounded-lg shadow-lg shadow-[#1a73e8]/20 hover:bg-blue-600 transition-all disabled:opacity-70 mt-4 text-[16px]"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4"
                  >
                    <X size={32} className="rotate-45" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-500">Our advisor will reach out to you shortly.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
