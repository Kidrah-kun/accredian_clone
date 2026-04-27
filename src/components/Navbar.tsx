"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import LeadCaptureModal from "./LeadCaptureModal";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "stats", label: "Stats" },
  { id: "clients", label: "Clients" },
  { id: "specializations", label: "Accredian Edge" },
  { id: "cat", label: "CAT" },
  { id: "how-it-works", label: "How It Works" },
  { id: "faqs", label: "FAQs" },
  { id: "testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);

    const sections = NAV_ITEMS.map((item) => item.id);
    for (const id of sections.reverse()) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (window.scrollY >= top - 150) {
          setActiveSection(id);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-sm ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200"
            : "bg-white border-b border-gray-200"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:pl-0 lg:pr-8">
          <div className="flex items-stretch justify-between h-[72px]">
            {/* Logo */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => scrollTo("home")}
            >
              <Image
                src="/images/logo.webp"
                alt="Accredian Logo"
                width={115}
                height={32}
                className="object-contain"
                priority
              />
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-7 h-full">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-[15.5px] h-full flex items-center transition-all mb-[-1px] font-[600] ${
                    activeSection === item.id
                      ? "border-b-[4px] border-[#1a73e8] text-[#1a73e8]"
                      : "border-b-[4px] border-transparent text-gray-900 hover:text-[#1a73e8]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu (Floating Dropdown) */}
        <AnimatePresence>
          {isMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-[60]">
              {/* Backdrop for closing */}
              <div 
                className="absolute inset-0 bg-black/5" 
                onClick={() => setIsMenuOpen(false)}
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                className="absolute top-[72px] right-4 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-4 overflow-hidden"
              >
                <div className="flex flex-col">
                  {NAV_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`px-6 py-3.5 text-left text-[16px] font-medium transition-colors ${
                        activeSection === item.id
                          ? "text-[#1a73e8]"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <button 
                    onClick={() => {
                      setIsModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="mx-6 mt-2 bg-[#1a73e8] text-white py-3 rounded-lg font-bold transition-all"
                  >
                    Contact Us
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </nav>
    </>
  );
}
