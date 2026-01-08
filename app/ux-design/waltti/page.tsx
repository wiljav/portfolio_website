"use client";
import AnimatedColumn from "@/components/AnimatedColumn";
import Link from "next/link";
import Image from "next/image";
export default function WalttiProject() {
  return (
    <main className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
      
      {/* 1. NAVIGATION */}
      <Link href="/ux-design" className="inline-block text-xs tracking-[0.3em] uppercase mb-12 hover:text-[#00FFDD] transition-colors">
        ← Back to UX Design
      </Link>

      {/* 2. HEADER & PROJECT SCOPE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 border-t border-black pt-12">
        <AnimatedColumn direction="left">
          <h1 className="text-5xl lg:text-7xl font-bold text-[#00FFDD] uppercase tracking-tighter leading-[0.9] mb-8">
            Waltti <br/>Webstore
          </h1>
          <p className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4">
            Lead UX/UI Designer — Public Transport Redesign
          </p>
          <ul className="space-y-3 text-[11px] uppercase tracking-widest text-gray-500 border-l border-gray-300 pl-4">
            <li>UX Research Lead</li>
            <li>Accessibility (WCAG 2.1) Audit</li>
            <li>Stakeholder Workshops</li>
            <li>Design System Documentation</li>
            <li>User Path Mapping</li>
          </ul>
        </AnimatedColumn>

        <AnimatedColumn direction="top" delay={0.2}>
          <div className="space-y-6 text-gray-700 text-sm lg:text-base leading-relaxed">
            <p>
              Waltti serves major Finnish cities, providing a webstore for travel card reloads and city bike passes. I led a team of three designers to improve the service’s usability and align its visuals with a refreshed brand identity.
            </p>
            <p>
              The process began with stakeholder interviews involving Oulu City representatives, customer care staff, and technical experts. We analyzed existing user paths screen-by-screen to identify pain points and propose high-efficiency solutions.
            </p>
            <p>
              We facilitated co-design workshops to unify the vision for new user flows. The final delivery included a full service redesign—from sitemaps and wireframes to clickable prototypes—and a compact design system to ensure long-term coherence.
            </p>
          </div>
        </AnimatedColumn>
      </div>

      {/* 3. RESEARCH & SYSTEM ARCHITECTURE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 py-16 border-t border-black/10">
        <AnimatedColumn direction="left">
          <h2 className="text-2xl font-bold uppercase tracking-tighter mb-6">UX Research & Audit</h2>
          <div className="space-y-6 text-sm text-gray-600">
            <div className="bg-gray-50 p-6 border-l-4 border-black">
              <h4 className="font-bold uppercase text-[10px] mb-2 tracking-widest">Accessibility Focus</h4>
              <p>Conducted a comprehensive accessibility evaluation based on WCAG 2.1 guidelines to ensure the service is inclusive for all Finnish citizens.</p>
            </div>
            <p>The user paths of the old service were analyzed screen by screen, and pain points were identified. New user paths were then formed with detailed improvement suggestions.</p>
          </div>
        </AnimatedColumn>
        <AnimatedColumn direction="top">
  <h2 className="text-2xl font-bold uppercase tracking-tighter mb-6">Design System</h2>
  
  {/* IMAGE 1: NO SCROLL */}
  <div className="relative w-full mb-4 bg-gray-50 overflow-hidden" style={{ height: '500px' }}>
    <Image 
      src="https://static.wixstatic.com/media/49fe5f_53fe688759ff4ad3b94eab01a408d4e7~mv2.jpg"
      alt="Waltti Design 1"
      fill
      className="object-contain" // Ensures image fits without scrolling or cropping
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  </div>

  {/* IMAGE 2: NO SCROLL */}
  <div className="relative w-full mb-8 bg-gray-50 overflow-hidden" style={{ height: '500px' }}>
    <Image 
      src="https://static.wixstatic.com/media/49fe5f_ca96266e376047128120dfea7dacad09~mv2.jpg"
      alt="Waltti Design 2"
      fill
      className="object-contain"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  </div>

  <p className="text-sm text-gray-600 mb-6">
    We created a concise design system for Waltti, enabling them to keep their product look and feel coherent through all digital mediums.
  </p>

  <div className="grid grid-cols-2 gap-4">
    <div className="p-4 border border-gray-200">
      <span className="block text-[10px] uppercase tracking-widest opacity-50 mb-1">Phase 1</span>
      <span className="text-xs font-bold uppercase">User Path Mapping</span>
    </div>
    <div className="p-4 border border-gray-200">
      <span className="block text-[10px] uppercase tracking-widest opacity-50 mb-1">Phase 2</span>
      <span className="text-xs font-bold uppercase">Co-Design Workshops</span>
    </div>
    <div className="p-4 border border-gray-200">
      <span className="block text-[10px] uppercase tracking-widest opacity-50 mb-1">Phase 3</span>
      <span className="text-xs font-bold uppercase">Wireframe & UI</span>
    </div>
    <div className="p-4 border border-gray-200">
      <span className="block text-[10px] uppercase tracking-widest opacity-50 mb-1">Phase 4</span>
      <span className="text-xs font-bold uppercase">Prototyping</span>
    </div>
  </div>
</AnimatedColumn>
      </div>

      {/* 4. MASONRY GALLERIES (Standardized Image Integration) */}
<AnimatedColumn direction="top" className="space-y-12 mb-24">
  
  {/* GALLERY BLOCK 1: USER RESEARCH */}
  <div className="w-full">
    <h3 className="text-[10px] tracking-[0.4em] uppercase mb-8 text-center opacity-40">User Research & Paths</h3>
    <div className="relative w-full overflow-hidden bg-gray-50" style={{ height: '764px' }}>
      <Image 
        src="https://static.wixstatic.com/media/49fe5f_4f011b8c558e475491d825058114a3cc~mv2.png" 
        alt="Waltti Research Gallery"
        fill
        className="object-contain"
        sizes="100vw"
        priority
      />
    </div>
  </div>

  {/* GALLERY BLOCK 2: DESIGN SYSTEM */}
  <div className="w-full pt-12 border-t border-gray-100">
    <h3 className="text-[10px] tracking-[0.4em] uppercase mb-8 text-center opacity-40">Design System & Layouts</h3>
    <div className="relative w-full overflow-hidden bg-gray-50" style={{ height: '764px' }}>
      <Image 
        src="https://static.wixstatic.com/media/49fe5f_c7b2e3e58f484cc196145568770f4007~mv2.png" 
        alt="Waltti Design Gallery"
        fill
        className="object-contain"
        sizes="100vw"
      />
    </div>
  </div>

</AnimatedColumn>

      {/* 5. FOOTER */}
      <div className="border-t-4 border-[#00FFDD] pt-12 flex flex-col items-end">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2">Live Service Impact</p>
        <h3 className="text-4xl lg:text-6xl font-bold tracking-tighter">PUBLIC UX</h3>
      </div>

    </main>
  );
}