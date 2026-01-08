"use client";
import AnimatedColumn from "@/components/AnimatedColumn";
import Image from "next/image";
import Link from "next/link";

export default function RealworldOneProject() {
  return (
    <main className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
      
      {/* 1. NAVIGATION */}
      <Link href="/ux-design" className="inline-block text-xs tracking-[0.3em] uppercase mb-12 hover:text-[#00FFDD] transition-colors">
        ← Back to UX Design
      </Link>

      {/* 2. HEADER & VR NARRATIVE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 border-t border-black pt-12">
        <AnimatedColumn direction="left">
          <h1 className="text-5xl lg:text-7xl font-bold text-[#00FFDD] uppercase tracking-tighter leading-[0.9] mb-8">
            VR <br/>Interaction
          </h1>
          <p className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4">
            realworld one — VR Training & Collaboration
          </p>
          <ul className="space-y-3 text-[11px] uppercase tracking-widest text-gray-500 border-l border-gray-300 pl-4">
            <li>2D & 3D Interface Design</li>
            <li>Spatial Ergonomics</li>
            <li>Gestural & Eye-Tracking UX</li>
            <li>VR Prototyping (ShapesXR, UE)</li>
            <li>Industrial Training Tools</li>
          </ul>
        </AnimatedColumn>

        <AnimatedColumn direction="top" delay={0.2}>
          <div className="space-y-6 text-gray-700 text-sm lg:text-base leading-relaxed">
            <p>
              I specialized in creating interfaces for tailor-made VR training tools. This involved 2D panels interacted with via laser pointers and 3D objects designed for embodied, physical interaction.
            </p>
            <p>
              I leveraged VR-specific technology—including gestures, head positioning, and eye tracking—to create novel interaction methods. Every environment combined UI screens, interactive objects, and cinematic techniques with a heavy focus on spatial ergonomics.
            </p>
            <p>
              My role also extended to traditional web and desktop interfaces. these systems supported the VR applications and required the same level of meticulous thought and aesthetic quality.
            </p>
          </div>
        </AnimatedColumn>
      </div>

      {/* 3. CORE PROCESS & TOOLS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 py-16 border-t border-black/10">
        <AnimatedColumn direction="left">
          <h2 className="text-2xl font-bold uppercase tracking-tighter mb-6">The VR Design Process</h2>
          <div className="bg-gray-50 p-8 border-l-4 border-black">
            <ul className="text-[11px] space-y-4 uppercase tracking-[0.15em] text-gray-600">
              <li>• User research, interviews, and workshops</li>
              <li>• Spatial mapping and user flow documentation</li>
              <li>• Agile Planning (SCRUM & LEAN)</li>
              <li>• Cross-discipline collaboration with VFX & 3D artists</li>
              <li>• Quality assurance & implementation oversight</li>
            </ul>
          </div>
        </AnimatedColumn>
        <AnimatedColumn direction="top">
          <h2 className="text-2xl font-bold uppercase tracking-tighter mb-6">Technical Stack</h2>
          <div className="flex flex-wrap gap-2">
            {["Figma", "Blender", "After Effects", "ShapesXR", "Photoshop", "Illustrator", "Unreal Engine"].map((tool) => (
              <span key={tool} className="px-4 py-2 border border-black text-[10px] uppercase tracking-widest">
                {tool}
              </span>
            ))}
          </div>
        </AnimatedColumn>
      </div>

      {/* 4. VISUAL GALLERY (All 4 Source Images) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
        <AnimatedColumn direction="top" delay={0.1}>
          <div className="relative aspect-video overflow-hidden">
            <Image 
              src="https://static.wixstatic.com/media/49fe5f_71823cca9a9e4be8a0dd55c820be5d47~mv2.jpg" 
              alt="VR Interface 1" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </AnimatedColumn>
        <AnimatedColumn direction="top" delay={0.2}>
          <div className="relative aspect-video overflow-hidden">
            <Image 
              src="https://static.wixstatic.com/media/49fe5f_89ec0c7150ea4e41b32e8b11d85156b9~mv2.jpg" 
              alt="VR Interface 2" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </AnimatedColumn>
        <AnimatedColumn direction="top" delay={0.3}>
          <div className="relative aspect-video overflow-hidden">
            <Image 
              src="https://static.wixstatic.com/media/49fe5f_f6e05fae06cb40948e83974558ad0018~mv2.jpg" 
              alt="VR Interface 3" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </AnimatedColumn>
        <AnimatedColumn direction="top" delay={0.4}>
          <div className="relative aspect-video overflow-hidden">
            <Image 
              src="https://static.wixstatic.com/media/49fe5f_3820030972544b5ea92ecbd0bc6bd1a2~mv2.jpg" 
              alt="VR Interface 4" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </AnimatedColumn>
      </div>

      {/* 5. FOOTER */}
      <div className="border-t-4 border-[#00FFDD] pt-12 flex flex-col items-end">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2">Portfolio Segment</p>
        <h3 className="text-4xl lg:text-6xl font-bold tracking-tighter">IMMERSIVE UX</h3>
      </div>

    </main>
  );
}