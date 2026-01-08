"use client";
import AnimatedColumn from "@/components/AnimatedColumn";
import Image from "next/image";
import Link from "next/link";

export default function OEPProject() {
  return (
    <main className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
      
      {/* 1. NAVIGATION */}
      <Link href="/ux-design" className="inline-block text-xs tracking-[0.3em] uppercase mb-12 hover:text-[#00FFDD] transition-colors">
        ← Back to UX Design
      </Link>

      {/* 2. HEADER & COMMERCIAL NARRATIVE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 border-t border-black pt-12">
        <AnimatedColumn direction="left">
          <h1 className="text-5xl lg:text-7xl font-bold text-[#00FFDD] uppercase tracking-tighter leading-[0.9] mb-8">
            OEP <br/>Global
          </h1>
          <ul className="space-y-3 text-[11px] uppercase tracking-widest text-gray-500 border-l border-gray-300 pl-4">
            <li>UX/UI Design Lead</li>
            <li>Visual Identity & Layout</li>
            <li>Site Architecture</li>
            <li>Client Communication & Sales</li>
            <li>Dev QA & Implementation</li>
          </ul>
        </AnimatedColumn>

        <AnimatedColumn direction="top" delay={0.2}>
          <div className="space-y-6 text-gray-700 text-sm lg:text-base leading-relaxed">
            <p>
              OEP sells Finnish education expertise to global markets. I designed a website layout and visual identity that prioritized a "commercial edge," moving away from traditional academic aesthetics toward a lively, high-performance business feel.
            </p>
            <p>
              My role encompassed the full UX process: architecture planning, wireframing, and high-fidelity prototyping. I also managed client expectations directly and supported the development team during the build to ensure design integrity.
            </p>
            <p>
              The design specifically highlights OEP’s business and financial courses, using strategic image choices and a clean hierarchy to signal professionalism and scale to their primary Middle Eastern client base.
            </p>
            <div className="pt-4">
              <a href="http://oep.fi" target="_blank" className="text-sm font-bold uppercase tracking-widest border-b-2 border-[#00FFDD] hover:text-[#00FFDD] transition-all">
                Visit oep.fi ↗
              </a>
            </div>
          </div>
        </AnimatedColumn>
      </div>

      {/* 3. VISUAL GALLERY (Next.js Image - Replacing Iframe) */}
      <AnimatedColumn direction="top" className="mb-24">
        <h3 className="text-[10px] tracking-[0.4em] uppercase mb-8 text-center opacity-40">Commercial Web Identity</h3>
        
        {/* Main Hero Showcase */}
        <div className="relative w-full overflow-hidden bg-gray-50 mb-20" style={{ height: '600px' }}>
          <Image 
            src="https://static.wixstatic.com/media/49fe5f_6cd977b027b54499be7a6ba346aafef4~mv2.jpg" 
            alt="OEP Website Layout"
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        {/* Secondary Details */}
        <h3 className="text-[10px] tracking-[0.4em] uppercase mb-8 text-center opacity-40">Mobile UI</h3>
          <div className="relative w-full bg-gray-50" style={{ height: '400px' }}>
            <Image 
              src="https://static.wixstatic.com/media/49fe5f_dab2b7dad11f49239df12d2e1132aecc~mv2_d_2500_2500_s_4_2.jpg" 
              alt="OEP Mobile Interface"
              fill
              className="object-contain"
            />
          </div>
      </AnimatedColumn>

      {/* 4. FOOTER */}
      <div className="border-t-4 border-[#00FFDD] pt-12 flex flex-col items-end">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2">EdTech & Commercial Branding</p>
        <h3 className="text-4xl lg:text-6xl font-bold tracking-tighter">GLOBAL SALES UX</h3>
      </div>

    </main>
  );
}