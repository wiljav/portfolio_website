import Hero from "@/components/Hero";
import { projects } from "@/data/projects";
import AnimatedColumn from "@/components/AnimatedColumn";

export default function Home() {
  return (
    <main style={{ fontFamily: 'var(--font-sans), sans-serif' }}>
      {/* 1. The 3D Hero Section */}
      <Hero />

      {/* 2. The Projects Section */}
      <section id="work" className="relative z-20 bg-transparent pt-10 pb-32">
        <div className="max-w-7xl mx-auto px-6 mb-30">
          <div className="flex flex-col gap-20"> 
            {projects.map((project, i) => {
              // Logic: Even numbers (0, 2) = Standard, Odd numbers (1, 3) = Reversed
              const isEven = i % 2 === 0;

              return (
                <div key={project.id} className="py-12 lg:mb-14  last:border-0">
                  {/* FLEX WRAPPER: Alternates row direction on desktop */}
                  <div className={`flex flex-col-reverse items-center gap-12 lg:gap-10 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}>
                    
                    {/* Column 1: The Images */}
                    <div className="w-full md:w-1/2">
                      <AnimatedColumn direction={isEven ? "left" : "right"}>
                        <div className="relative w-full aspect-[3/3] flex items-center justify-center">
                          {/* PHOTO 2 (Background) */}
                          <div className={`absolute top-10 lg:top-75 w-full z-0 overflow-hidden scale-70 ${
                    isEven ? "lg:left-90" : "lg:right-90"
                  }` }>
                            <img src={project.image2} alt="Layer" className="w-full h-full object-cover" />
                          </div>
                          {/* PHOTO 1 (Foreground) */}
                          <div className="relative z-10 w-[90%] lg:w-[90%] lg:w-full  lg:scale-80 overflow-hidden">
                            <img src={project.image1} alt={project.title} className="w-full h-full object-cover" />
                          </div>
                        </div>
                      </AnimatedColumn>
                    </div>

                    {/* Column 2: Text Details */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                      <AnimatedColumn direction={isEven ? "right" : "left"}>
                        <div className="space-y-6">
                          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter uppercase antialiased">
                            {project.title}
                          </h2>
                          <div className="pt-4">
                            <a 
                              href={project.url} 
                              className="inline-block border-[1.5px] border-black px-8 py-3 text-[10px] font-bold tracking-widest hover:bg-[#00ffdd] rounded-full transition-all antialiased uppercase"
                            >
                              See More
                            </a>
                          </div>
                        </div>
                      </AnimatedColumn>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}