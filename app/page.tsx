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
  <div key={project.id} className="py-12 md:py-24 border-b border-gray-100 last:border-0">
    {/* FLEX WRAPPER: column-reverse on mobile, row on desktop */}
    <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
      
      {/* Column 1: The Images */}
      <div className="w-full md:w-1/2">
        <AnimatedColumn direction="left">
          <div className="relative w-full aspect-[4/3] flex items-center justify-center">
            {/* PHOTO 2 */}
            <div className="absolute top-10 left-5 md:top-20 md:left-10 w-full h-[200px] md:h-[250px] z-0 overflow-hidden shadow-lg opacity-40 scale-95">
              <img src={project.image2} alt="Layer" className="w-full h-full object-cover" />
            </div>
            {/* PHOTO 1 */}
            <div className="relative z-10 w-[90%] md:w-full overflow-hidden shadow-2xl rounded-sm">
              <img src={project.image1} alt={project.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </AnimatedColumn>
      </div>

      {/* Column 2: Text Details */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <AnimatedColumn direction="right">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter uppercase">
              {project.title}
            </h2>
            <div className="pt-4">
              <a href="#" className="inline-block border-2 border-black px-8 py-3 text-xs font-bold hover:bg-[#00ffdd] rounded-full transition-all">
                SEE MORE
              </a>
            </div>
          </div>
        </AnimatedColumn>
      </div>

    </div>
  </div>
))}
          </div>
        </div>
      </section>
    </main>
  );
}