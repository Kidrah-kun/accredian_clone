"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import ContactModal from "./ContactModal";

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

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4 pt-2 space-y-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="btn-outline w-full"
              >
                Contact Us
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="btn-primary w-full"
              >
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </nav>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
