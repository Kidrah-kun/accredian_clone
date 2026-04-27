import Image from "next/image";
import { BarChart2, Presentation, MonitorPlay } from "lucide-react";

const STEPS = [
  {
    step: "1",
    title: "Skill Gap Analysis",
    desc: "Assess team skill gaps and developmental needs to build a clear picture of where your organization stands.",
    icon: BarChart2,
  },
  {
    step: "2",
    title: "Customized Training Plan",
    desc: "Create a tailored roadmap addressing organizational goals, built around your specific industry and team needs.",
    icon: Presentation,
  },
  {
    step: "3",
    title: "Flexible Program Delivery",
    desc: "Deliver adaptable programs aligned with industry and organizational needs — online, offline, hybrid, or on-demand.",
    icon: MonitorPlay,
  },
];

export default function HowItWorksSection() {
  return (
    <>
      {/* The CAT Framework */}
      <section id="cat" className="pt-20 pb-16 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2.5rem] font-bold text-gray-900 mb-2">
              The <span className="text-[#1a73e8]">CAT Framework</span>
            </h2>
            <p className="text-gray-500 font-medium text-lg">
              Our Proven Approach to <span className="text-[#1a73e8]">Learning Excellence</span>
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/catV2.svg"
              alt="The CAT Framework: Concept, Application, Tools"
              width={1000}
              height={400}
              className="w-full max-w-[1000px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* How We Deliver Results */}
      <section id="how-it-works" className="py-12 md:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[2.5rem] font-bold text-gray-900 mb-2">
              How We <span className="text-[#1a73e8]">Deliver Results</span> That Matter?
            </h2>
            <p className="text-gray-500 font-medium text-lg">
              A Structured Three-Step Approach to <span className="text-[#1a73e8]">Skill Development</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-12">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="bg-[#f3f8ff] rounded-xl p-10 border border-blue-100 text-center relative transition-all hover:shadow-md group"
                >
                  {/* Decorative Side Bars (Partial Height) */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3.5px] h-[60%] bg-[#1a73e8] rounded-r-full"></div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[3.5px] h-[60%] bg-[#1a73e8] rounded-l-full"></div>

                  {/* Step Badge */}
                  <div className="absolute top-3 left-3">
                    <div className="w-7 h-7 rounded-full border border-blue-200 bg-white flex items-center justify-center text-[#1a73e8] text-[13px] font-bold shadow-sm">
                      {step.step}
                    </div>
                  </div>

                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#1a73e8] rounded-full mb-6 mt-2 shadow-md shadow-blue-200/50">
                    <Icon size={26} className="text-white" strokeWidth={2} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-[15px] leading-relaxed max-w-[240px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
