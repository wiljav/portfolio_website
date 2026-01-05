import Hero from "@/components/Hero";
import { projects } from "@/data/projects";
import AnimatedColumn from "@/components/AnimatedColumn";

export default function Home() {
  return (
    <main>
      {/* 1. The 3D Hero Section */}
      <Hero />

      {/* 2. The Projects Section - REDUCED TOP PADDING */}
      <section id="work" className="relative z-20 bg-transparent pt-10 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* REDUCED GAP FROM 40 TO 20 */}
          <div className="flex flex-col gap-20"> 
            {projects.map((project) => (
              /* REDUCED PY-20 TO PY-10 */
              <div key={project.id} className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center py-10">
                
                {/* Column 1: The Stacked Photo Effect */}
                <AnimatedColumn direction="left">
                  <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                    {/* PHOTO 2 */}
                    <div className="absolute top-20 left-10 w-full h-[250px] z-0 overflow-hidden shadow-lg opacity-80 scale-95">
                      <img src={project.image2} alt="Layer" className="w-full h-full object-cover" />
                    </div>
                    {/* PHOTO 1 */}
                    <div className="relative z-10 overflow-hidden shadow-2xl">
                      <img src={project.image1} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </AnimatedColumn>

                {/* Column 2: Text Details */}
                <AnimatedColumn direction="right">
                  <div className="space-y-6">
                    <h2 className="text-5xl font-bold text-gray-900 tracking-tight">{project.title}</h2>
                    {/* <p className="text-lg text-gray-500 leading-relaxed">{project.description}</p> */}
                    <div className="mt-10">
                      <a href="#" className="border-2 border-solid px-6 py-3 text-sm font-bold text-black hover:bg-[#00ffdd] rounded-full transition-colors">
                        SEE MORE
                      </a>
                    </div>
                  </div>
                </AnimatedColumn>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}