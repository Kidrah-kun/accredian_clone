import Image from "next/image";

const CLIENTS = [
  { id: "rel", src: "/images/rel.png", alt: "Reliance", width: 140 },
  { id: "hcl", src: "/images/hcl.png", alt: "HCL", width: 100 },
  { id: "ibm", src: "/images/ibm.png", alt: "IBM", width: 100 },
  { id: "crif", src: "/images/crif.png", alt: "CRIF", width: 120 },
  { id: "adp", src: "/images/adp.svg", alt: "ADP", width: 90 },
  { id: "bayer", src: "/images/bayer.svg", alt: "Bayer", width: 90 },
];

export default function ClientsSection() {
  return (
    <section id="clients" className="py-10 md:py-20 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[2.5rem] font-bold text-gray-900 mb-2">
            Our Proven <span className="text-[#1a73e8]">Partnerships</span>
          </h2>
          <p className="text-gray-600 font-medium text-lg">
            Successful Collaborations With the <span className="text-[#1a73e8]">Industry&apos;s Best</span>
          </p>
        </div>

        <div className="relative overflow-hidden w-full max-w-[1320px] mx-auto before:absolute before:left-0 before:w-12 md:before:w-24 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 after:absolute after:right-0 after:w-12 md:after:w-24 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:z-10 mt-8">
          <div className="flex items-center w-max animate-marquee hover:[animation-play-state:paused]">
            {[...CLIENTS, ...CLIENTS].map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex items-center justify-center flex-shrink-0 mx-8 md:mx-16 transition-transform hover:scale-105"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={client.width}
                  height={60}
                  className="object-contain w-auto h-[25px] sm:h-[35px] md:h-[45px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
