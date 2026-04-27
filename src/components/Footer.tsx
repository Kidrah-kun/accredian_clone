"use client";

import Image from "next/image";
import { useState } from "react";
import { Headset } from "lucide-react";
import ContactModal from "./ContactModal";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* CTA Banner */}
      <section className="pt-8 pb-10 bg-white">
        <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a73e8] rounded-[2rem] relative overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:p-14 shadow-xl shadow-blue-200/50">
            {/* Sophisticated Background Curves (Radial Gradients) */}
            <div className="absolute top-0 right-0 w-[120%] h-[200%] bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.15)_0%,transparent_50%)] -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[100%] h-[150%] bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)] translate-y-1/3"></div>

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 relative z-10 text-center md:text-left mb-8 md:mb-0">
              {/* Icon */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl w-16 h-16 md:w-20 md:h-20 flex items-center justify-center flex-shrink-0 shadow-lg text-white">
                <div className="bg-white rounded-xl w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-[#1a73e8]">
                  <Headset size={28} className="md:w-8 md:h-8" strokeWidth={2} />
                </div>
              </div>
              
              {/* Text */}
              <div>
                <h2 className="text-[1.5rem] md:text-[2rem] font-bold text-white mb-2 leading-tight px-2 md:px-0">
                  Want to Learn More About Our Training Solutions?
                </h2>
                <p className="text-blue-100 text-base md:text-lg font-medium">
                  Get Expert Guidance for Your Team&apos;s Success!
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="relative z-10 flex-shrink-0">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-[#1a73e8] font-bold px-8 md:px-10 py-3 md:py-4 rounded-xl hover:bg-blue-50 transition-all shadow-lg flex items-center gap-3 text-base md:text-lg"
              >
                Contact Us 
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Section - Unified Grid Parity */}
      <footer className="bg-[#212529] text-white border-t border-gray-800">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
            {/* Column 1: Logo & Socials */}
            <div className="flex flex-col items-start gap-6">
              <div className="brightness-0 invert opacity-90">
                <Image
                  src="/images/logo.webp"
                  alt="Accredian Logo"
                  width={160}
                  height={45}
                  className="object-contain"
                />
              </div>
              <div className="flex items-center gap-5">
                <a href="https://facebook.com/accredianedu" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
                <a href="https://linkedin.com/company/accredianedu" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://twitter.com/accredian_edu" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="https://instagram.com/accredianlearn" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://youtube.com/accredian" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.498 5.814a3.016 3.016 0 0 0 2.122 2.136C4.495 20.5 12 20.5 12 20.5s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.498-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Accredian Links */}
            <div className="flex flex-col items-start gap-5">
              <h3 className="text-[18px] font-bold text-white mb-2">Accredian</h3>
              <ul className="space-y-3.5">
                {['About', 'Blog', 'Why Accredian'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-white font-medium transition-colors text-[16px]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Us */}
            <div className="flex flex-col items-start gap-5">
              <h3 className="text-[18px] font-bold text-white mb-2">Contact Us</h3>
              <div className="space-y-4">
                <p className="text-gray-300 font-medium text-[16px]">
                  Email us: <a href="mailto:enterprise@accredian.com" className="text-blue-400 hover:underline">enterprise@accredian.com</a>
                </p>
                <p className="text-gray-300 font-medium leading-relaxed text-[16px]">
                  Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
                </p>
              </div>
            </div>

            {/* Column 4: Enquire Now Button */}
            <div className="flex flex-col items-start lg:items-end gap-3 lg:mt-0">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#1a73e8] hover:bg-blue-700 text-white font-bold text-[15px] px-10 py-3.5 rounded-lg shadow-md transition-all active:scale-95 whitespace-nowrap"
              >
                Enquire Now
              </button>
              <p className="text-[14px] text-gray-400 font-medium lg:text-right">Speak with our Advisor</p>
            </div>
          </div>

          <hr className="border-gray-700 mt-12 mb-8" />

          {/* Bottom Copyright */}
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-[13px] text-gray-400 font-medium leading-relaxed">
              © {new Date().getFullYear()} Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
