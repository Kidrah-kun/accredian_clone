const STATS = [
  {
    id: 1,
    text: "10K+",
    title: "Professionals Trained For Exceptional\nCareer Success",
  },
  {
    id: 2,
    text: "200+",
    title: "Sessions Delivered With Unmatched\nLearning Excellence",
  },
  {
    id: 3,
    text: "5K+",
    title: "Active Learners Engaged In Dynamic\nCourses",
  },
];

export default function StatsSection() {
  return (
    <section id="stats" className="py-10 md:py-16 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] font-bold text-gray-900 mb-2">
            Our <span className="text-[#1a73e8]">Track Record</span>
          </h2>
          <p className="text-gray-600 font-medium text-lg">
            The Numbers Behind <span className="text-[#1a73e8]">Our Success</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:gap-12 lg:gap-24 text-center divide-y divide-gray-200 md:divide-none w-full max-w-[340px] md:max-w-none mx-auto">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-row md:flex-col items-center md:items-center w-full py-6 md:py-0 gap-5 md:gap-0"
            >
              <div className="bg-[#e8f0fe] text-[#1a73e8] text-[15px] md:text-3xl font-bold py-1.5 md:py-2 w-[80px] md:w-auto md:px-8 rounded-full mb-0 md:mb-6 flex-shrink-0 text-center">
                {stat.text}
              </div>
              <p className="text-gray-800 font-semibold text-[14px] md:text-[15px] leading-relaxed text-left md:text-center whitespace-pre-line flex-1">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
