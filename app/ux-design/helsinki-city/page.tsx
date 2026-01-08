"use client";
import AnimatedColumn from "@/components/AnimatedColumn";
import Image from "next/image";
import Link from "next/link";

export default function HelsinkiCityProject() {
  return (
    <main className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
      
      {/* 1. NAVIGATION */}
      <Link href="/ux-design" className="inline-block text-xs tracking-[0.3em] uppercase mb-12 hover:text-[#00FFDD] transition-colors">
        ← Back to UX Design
      </Link>

      {/* 2. HEADER & CIVIC UX STORY */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 border-t border-black pt-12">
        <AnimatedColumn direction="left">
          <h1 className="text-5xl lg:text-7xl font-bold text-[#00FFDD] uppercase tracking-tighter leading-[0.9] mb-8">
            Helsinki <br/>City UI
          </h1>
          <ul className="space-y-3 text-[11px] uppercase tracking-widest text-gray-500 border-l border-gray-300 pl-4">
            <li>Visual Identity Facelift</li>
            <li>WCAG 2.0 AAA Accessibility</li>
            <li>Wave Motif Integration</li>
            <li>Public Sector UI Design</li>
            <li>Civic Branding Refresh</li>
          </ul>
        </AnimatedColumn>

        <AnimatedColumn direction="top" delay={0.2}>
          <div className="space-y-6 text-gray-700 text-sm lg:text-base leading-relaxed">
            <p>
              During my tenure at Agenda Helsinki, I led the UI facelift for Helsinki’s official city website. The core mission was to harmonize the digital presence with the city’s updated visual identity while preserving the established information architecture.
            </p>
            <p>
              We introduced new typographic systems and design elements inspired by the city's signature <strong>wave motif</strong>. This wasn't just a visual upgrade; every interactive component was meticulously designed to meet the strict accessibility standards required by the capital.
            </p>
            <p>
              As a result of this commitment, the website achieved the <strong>WCAG 2.0 AAA rating</strong>—the highest possible standard for digital accessibility, ensuring the site is usable for all residents regardless of ability.
            </p>
            <div className="pt-4">
              <a href="https://www.hel.fi" target="_blank" className="text-sm font-bold uppercase tracking-widest border-b-2 border-black hover:text-[#00FFDD] hover:border-[#00FFDD] transition-all">
                Visit hel.fi ↗
              </a>
            </div>
          </div>
        </AnimatedColumn>
      </div>

      {/* 3. VISUAL GALLERY (Next.js Image - No Scroll) */}
      <AnimatedColumn direction="top" className="mb-24">
        <h3 className="text-[10px] tracking-[0.4em] uppercase mb-8 text-center opacity-40">UI Facelift & Accessibility Showcase</h3>
        
        <div className="relative w-full overflow-hidden bg-gray-50" style={{ height: '600px' }}>
          <Image 
            src="https://static.wixstatic.com/media/49fe5f_e956a37aca564337b193c84c7e8e580a~mv2_d_1600_1600_s_2.jpg" 
            alt="Helsinki City Desktop UI"
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="relative w-full bg-gray-50" style={{ height: '400px' }}>
            <Image 
              src="https://static.wixstatic.com/media/49fe5f_4901f463c2244517904037565c404870~mv2.png" 
              alt="Helsinki City Component Design"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-full bg-gray-50" style={{ height: '400px' }}>
            <Image 
              src="https://static.wixstatic.com/media/49fe5f_0744923e3e2c4391a6d5c643936615b1~mv2.png" 
              alt="Helsinki City Mobile UX"
              fill
              className="object-contain"
            />
          </div>
        </div> */}
      </AnimatedColumn>

      {/* 4. FOOTER */}
      <div className="border-t-4 border-[#00FFDD] pt-12 flex flex-col items-end">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2">Governmental UX Design</p>
        <h3 className="text-4xl lg:text-6xl font-bold tracking-tighter">CIVIC DESIGN</h3>
      </div>

    </main>
  );
}