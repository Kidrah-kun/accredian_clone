"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_CATEGORIES = [
  {
    id: "course",
    category: "About the Course",
    faqs: [
      {
        q: "What types of corporate training programs does Accredian offer?",
        a: "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
      },
      {
        q: "What domain specializations are available?",
        a: "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI.",
      },
    ],
  },
  {
    id: "delivery",
    category: "About the Delivery",
    faqs: [
      {
        q: "Can the courses be customized for specific industries or teams?",
        a: "Absolutely! Our programs are fully customizable, including content, format, timing, and industry-specific focus, to align with your organization's goals.",
      },
      {
        q: "Who are the instructors for these programs?",
        a: "Our courses are delivered by industry leaders, experienced mentors, and domain experts with real-world insights.",
      },
      {
        q: "What formats are the programs delivered in?",
        a: "Programs can be delivered in various formats, including online, offline, hybrid, and on-demand, based on your team's preferences and requirements.",
      },
    ],
  },
  {
    id: "misc",
    category: "Miscellaneous",
    faqs: [
      {
        q: "How do we get started with Accredian?",
        a: "Get started with Accredian by contacting us or requesting a quote on our website. Our team will guide you through the process — from skill gap analysis to a custom program tailored to your needs.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left transition-colors"
        aria-expanded={open}
      >
        <span className={`font-bold text-[16.5px] transition-colors ${open ? 'text-[#1a73e8]' : 'text-gray-900'}`}>{q}</span>
        <ChevronDown
          size={22}
          className={`flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180 text-[#1a73e8]" : "text-gray-500"
          }`}
        />
      </button>
      {open && (
        <div className="pb-6 text-gray-600 text-[15px] leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState(FAQ_CATEGORIES[0].id);

  const activeCategory = FAQ_CATEGORIES.find((c) => c.id === activeTab);

  return (
    <section id="faqs" className="py-12 md:py-24 bg-white">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-[2.25rem] font-bold text-gray-900">
            Frequently Asked <span className="text-[#1a73e8]">Questions</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
          {/* Left Column: Tabs */}
          <div className="md:w-[280px] shrink-0 flex flex-col gap-5">
            {FAQ_CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`py-4 px-6 rounded-lg text-center font-bold text-[16px] transition-all border-2 ${
                    isActive
                      ? "bg-white border-transparent text-[#1a73e8] shadow-[0_12px_30px_-10px_rgba(0,0,0,0.15)] ring-0"
                      : "bg-white border-gray-300 text-gray-500 hover:border-gray-400 shadow-none"
                  }`}
                >
                  {cat.category}
                </button>
              );
            })}
          </div>

          {/* Right Column: Accordions */}
          <div className="flex-1">
            {activeCategory?.faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <button className="bg-[#1a73e8] hover:bg-blue-700 text-white font-bold py-3.5 px-10 rounded-lg transition-colors shadow-md">
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}
