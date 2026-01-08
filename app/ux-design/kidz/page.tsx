"use client";
import AnimatedColumn from "@/components/AnimatedColumn";
import Image from "next/image";
import Link from "next/link";

export default function KidzProject() {
  return (
    <main className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
      
      {/* 1. NAVIGATION */}
      <Link href="/ux-design" className="inline-block text-xs tracking-[0.3em] uppercase mb-12 hover:text-[#00FFDD] transition-colors">
        ← Back to UX Design
      </Link>

      {/* 2. HEADER & CONCEPT STORY */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 border-t border-black pt-12">
        <AnimatedColumn direction="left">
          <h1 className="text-5xl lg:text-7xl font-bold text-[#00FFDD] uppercase tracking-tighter leading-[0.9] mb-8">
            Kidz <br/>Concept
          </h1>
          <ul className="space-y-3 text-[11px] uppercase tracking-widest text-gray-500 border-l border-gray-300 pl-4">
            <li>• Brand Identity & Logo Design</li>
            <li>• Cross-Platform UI (TV, Web, Mobile)</li>
            <li>• Motion Style Guides & Micro-animations</li>
            <li>• After Effects Motion Mockups</li>
            <li>• Figma Design Tokens</li>
          </ul>
        </AnimatedColumn>

        <AnimatedColumn direction="top" delay={0.2}>
          <div className="space-y-6 text-gray-700 text-sm lg:text-base leading-relaxed">
            <p>
              The **KIDZ brand** was created as a high-level proposal, involving a full graphic identity—logo, color specs, and a unique **motion language**. 
            </p>
            <p>
              I utilized **After Effects** to create high-fidelity motion mockups, demonstrating how the brand lives across different hardware. To ensure technical feasibility, I built a system of **Motion Tokens** defining easings, durations, and triggers.
            </p>
            <div className="pt-4 space-y-2">
              <p className="font-bold text-xs uppercase tracking-widest">Live Prototypes:</p>
              <div className="flex gap-4">
                <a href="https://www.figma.com/proto/yraVrd7bS1DgRoGFN6DKVr/Kidz-concept?page-id=0%3A1&type=design&node-id=27-205&viewport=708%2C-1333%2C0.51&t=ESpVTkwrsGCMkiqk-1&scaling=min-zoom&mode=design" target="_blank" className="text-[#00FFDD] underline text-xs">Desktop Menu</a>
                <a href="https://www.figma.com/proto/yraVrd7bS1DgRoGFN6DKVr/Untitled?page-id=0%3A1&type=design&node-id=3-76&viewport=-1359%2C3220%2C0.63&t=GWbEhzMeeXjjSpoB-1&scaling=min-zoom&mode=design" target="_blank" className="text-[#00FFDD] underline text-xs">Gallery Card</a>
              </div>
            </div>
          </div>
        </AnimatedColumn>
      </div>

      {/* 3. PRIMARY MOTION PIECE */}
      <AnimatedColumn direction="top" className="mb-24">
        <div className="aspect-video bg-black overflow-hidden border-b-8 border-[#00FFDD]">
          <iframe 
            src="https://player.vimeo.com/video/921836381?title=0&muted=1&autoplay=1&loop=1&controls=0" 
            className="w-full h-full"
            allow="autoplay; fullscreen"
          />
        </div>
        <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-center opacity-50 text-gray-800">Kidz Concept: Motion Language Reel (After Effects)</p>
      </AnimatedColumn>

      {/* 4. DESIGN TOKENS & PATTERNS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <AnimatedColumn direction="left">
          <Image 
            src="https://static.wixstatic.com/media/49fe5f_4d4752b998c64fcf81721d6e929e2b45~mv2.png" 
            alt="Motion Tokens" width={600} height={600} className="w-full h-auto mb-8"
          />
          <h3 className="text-xl font-bold uppercase mb-4">The Token System</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Motion tokens define the standardized building blocks: **Easings, Durations, Effects, and Triggers**. Developers utilize these to mirror the design system accurately.
          </p>
          <a href="https://www.figma.com/proto/yraVrd7bS1DgRoGFN6DKVr/Kidz-concept?page-id=0%3A1&type=design&node-id=90-176&viewport=-243%2C1732%2C0.16&t=6JRxRrAybjs9h2CW-1&scaling=min-zoom&mode=design" target="_blank" className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-[#00FFDD] hover:border-[#00FFDD] transition-all">
            View Token Specs ↗
          </a>
        </AnimatedColumn>

        <AnimatedColumn direction="right">
          <div className="grid grid-cols-1 gap-4">
            <Image 
              src="https://static.wixstatic.com/media/49fe5f_7202aad44fb7402998f4ae7785252fe0~mv2.png" 
              alt="Patterns 1" width={400} height={500} className="w-full grayscale hover:grayscale-0 transition-all"
            />
            <Image 
              src="https://static.wixstatic.com/media/49fe5f_76da304d054f4e0480062267363268c9~mv2.png" 
              alt="Patterns 2" width={600} height={250} className="w-full border border-gray-100"
            />
          </div>
        </AnimatedColumn>
      </div>

      {/* 5. CONCEPT VISUALS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
        <AnimatedColumn direction="left">
          <Image 
            src="https://static.wixstatic.com/media/49fe5f_f8b48c0e01294c9295bed60c18b41ef1~mv2.png" 
            alt="UI Concept 1" width={800} height={800} className="w-full h-auto border-t-4 border-black pt-4"
          />
        </AnimatedColumn>
        <AnimatedColumn direction="right">
          <div className="space-y-8">
            <Image 
              src="https://static.wixstatic.com/media/49fe5f_fa6987fa5f4d41d7b45a31b3a3b0ecab~mv2.png" 
              alt="UI Concept 2" width={910} height={786} className="w-full h-auto"
            />
            <Image 
              src="https://static.wixstatic.com/media/49fe5f_ca3f935dd38540f9a1835d3a40daff92~mv2.png" 
              alt="UI Concept 3" width={943} height={738} className="w-full h-auto"
            />
          </div>
        </AnimatedColumn>
      </div>

    </main>
  );
}