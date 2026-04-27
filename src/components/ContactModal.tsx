"use client";

import { useState } from "react";
import { X, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  courseDomain: string;
  candidates: string;
  deliveryMode: string;
  location: string;
  message: string;
};

const DOMAINS = [
  "Product Management",
  "Artificial Intelligence",
  "Strategy & Leadership",
  "General Management",
  "Digital Transformation",
  "Business Management",
  "Project Management",
  "Senior Management",
  "Finance",
  "Data Science",
];

const DELIVERY_MODES = ["Online", "Offline", "Hybrid", "On-Demand"];

export default function ContactModal({
  isOpen,
  onClose,
  title = "Speak with our Advisor",
}: ContactModalProps) {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    courseDomain: "",
    candidates: "",
    deliveryMode: "",
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.company.trim()) newErrors.company = "Company name is required";
    if (!form.courseDomain) newErrors.courseDomain = "Course domain is required";
    if (!form.candidates.trim())
      newErrors.candidates = "Number of candidates is required";
    else if (isNaN(Number(form.candidates)) || Number(form.candidates) <= 0)
      newErrors.candidates = "Enter a valid number";
    if (!form.deliveryMode) newErrors.deliveryMode = "Mode of delivery is required";
    if (!form.location.trim()) newErrors.location = "Location is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          courseDomain: "",
          candidates: "",
          deliveryMode: "",
          location: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto z-10">
        {/* Header */}
        <div className="sticky top-0 bg-white rounded-t-2xl px-6 pt-6 pb-4 border-b border-gray-100 flex items-center justify-between z-10">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            <p className="text-sm text-gray-500 mt-0.5">
              Cultivate high-performance teams through expert learning.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition text-gray-500"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-6 py-5">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
              <CheckCircle size={56} className="text-green-500" />
              <h3 className="text-xl font-bold text-gray-900">
                Thank you for reaching out!
              </h3>
              <p className="text-gray-500 text-sm">
                Our advisor will contact you within 24 business hours.
              </p>
              <button
                onClick={() => {
                  setStatus("idle");
                  onClose();
                }}
                className="btn-primary mt-2"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full border rounded-lg px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-blue-400 ${
                      errors.name ? "border-red-400" : "border-gray-200"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={`w-full border rounded-lg px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-blue-400 ${
                      errors.email ? "border-red-400" : "border-gray-200"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone + Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={`w-full border rounded-lg px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-blue-400 ${
                      errors.phone ? "border-red-400" : "border-gray-200"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    className={`w-full border rounded-lg px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-blue-400 ${
                      errors.company ? "border-red-400" : "border-gray-200"
                    }`}
                  />
                  {errors.company && (
                    <p className="text-xs text-red-500 mt-1">{errors.company}</p>
                  )}
                </div>
              </div>

              {/* Course Domain */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Course Domain *
                </label>
                <select
                  name="courseDomain"
                  value={form.courseDomain}
                  onChange={handleChange}
                  className={`w-full border rounded-lg px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-blue-400 bg-white ${
                    errors.courseDomain ? "border-red-400" : "border-gray-200"
                  }`}
                >
                  <option value="">Select a domain</option>
                  {DOMAINS.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                {errors.courseDomain && (
                  <p className="text-xs text-red-500 mt-1">{errors.courseDomain}</p>
                )}
              </div>

              {/* Candidates + Delivery Mode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    No. of Candidates *
                  </label>
                  <input
                    type="number"
                    name="candidates"
                    value={form.candidates}
                    onChange={handleChange}
                    placeholder="Enter No. of candidates"
                    min={1}
                    className={`w-full border rounded-lg px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-blue-400 ${
                      errors.candidates ? "border-red-400" : "border-gray-200"
                    }`}
                  />
                  {errors.candidates && (
                    <p className="text-xs text-red-500 mt-1">{errors.candidates}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Mode of Delivery *
                  </label>
                  <select
                    name="deliveryMode"
                    value={form.deliveryMode}
                    onChange={handleChange}
                    className={`w-full border rounded-lg px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-blue-400 bg-white ${
                      errors.deliveryMode ? "border-red-400" : "border-gray-200"
                    }`}
                  >
                    <option value="">Select mode</option>
                    {DELIVERY_MODES.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  {errors.deliveryMode && (
                    <p className="text-xs text-red-500 mt-1">{errors.deliveryMode}</p>
                  )}
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="Eg: Gurgaon, Delhi, India"
                  className={`w-full border rounded-lg px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-blue-400 ${
                    errors.location ? "border-red-400" : "border-gray-200"
                  }`}
                />
                {errors.location && (
                  <p className="text-xs text-red-500 mt-1">{errors.location}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Additional Requirements (Optional)
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us more about your training needs..."
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-blue-400 resize-none"
                />
              </div>

              {/* Error message */}
              {status === "error" && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-600">
                  <AlertCircle size={16} />
                  <span>
                    We couldn&apos;t submit your request. Please try again shortly.
                  </span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full btn-primary flex items-center justify-center gap-2 py-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Get Expert Guidance for Your Team's Success!"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
