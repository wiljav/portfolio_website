import React from 'react';

const services = [
  {
    title: "UX/UI DESIGN",
    icon: "/services/ux.png",
    items: ["User personas and paths", "User testing & evaluations", "Wireframes and prototypes", "Design systems"]
  },
  {
    title: "GRAPHIC DESIGN",
    icon: "/services/gd.png",
    items: ["Visual identities & branding", "Logo design", "Print and digital layouts"]
  },
  {
    title: "ILLUSTRATION",
    icon: "/services/illu.png",
    items: ["Editorial illustrations", "Campaign illustrations", "Infographics", "Animated assets"]
  },
  {
    title: "MOTION DESIGN",
    icon: "/services/md.png",
    items: ["2D animations", "Explainer videos", "Motion adverts", "Logo reveals"]
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-transparent antialiased" style={{ fontFamily: 'var(--font-sans), sans-serif' }}>
      <div className="max-w-[1400px] mx-auto px-6"> {/* Wider max-width to allow for side-by-side content */}
        
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-24 tracking-tighter uppercase">
          All Services
        </h2>

        {/* 4 COLUMNS x 2 ROWS (Mapping automatically wraps to row 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="flex flex-row items-start gap-4 group">
              
              {/* ICON: Placed to the LEFT */}
              <div className="flex-shrink-0 w-12 lg:w-16 pt-1 transition-transform duration-500 group-hover:scale-110">
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className="w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all" 
                />
              </div>

              {/* CONTENT: Placed to the RIGHT */}
              <div className="flex flex-col text-left">
                <h3 className="text-[13px] font-bold tracking-[0.2em] mb-4 text-black uppercase leading-tight">
                  {service.title}
                </h3>
                <ul className="space-y-1.5">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-[11px] text-gray-500 font-medium leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-24 flex justify-center">
          <a 
            href="/services" 
            className="inline-block border-[1.5px] border-black px-12 py-3 text-[10px] font-bold tracking-widest hover:bg-[#00ffdd] rounded-full transition-all uppercase"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}