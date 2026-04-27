import Image from "next/image";

const TESTIMONIALS = [
  {
    review:
      "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    logo: "/images/adp.svg",
    name: "ADP",
  },
  {
    review:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    logo: "/images/bayer.svg",
    name: "Bayer",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="pt-12 pb-16 bg-white">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[2.25rem] font-bold text-gray-900 mb-2">
            Testimonials from <span className="text-[#1a73e8]">Our Partners</span>
          </h2>
          <p className="text-gray-500 font-medium text-lg">
            What <span className="text-[#1a73e8]">Our Clients</span> Are Saying
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl p-10 shadow-sm border border-gray-200 flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-10 relative mb-8">
                <Image
                  src={t.logo}
                  alt={t.name}
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-gray-800 text-[16px] font-medium leading-relaxed italic">
                &quot;{t.review}&quot;
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1a73e8] shadow-sm"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </section>
  );
}
