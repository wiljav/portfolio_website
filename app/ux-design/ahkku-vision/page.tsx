"use client";
import AnimatedColumn from "@/components/AnimatedColumn";
import Image from "next/image";
import Link from "next/link";

export default function AhkkuVisionProject() {
  return (
    <main className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
      
      {/* 1. NAVIGATION */}
      <Link href="/ux-design" className="inline-block text-xs tracking-[0.3em] uppercase mb-12 hover:text-[#00FFDD] transition-colors">
        ← Back to UX Design
      </Link>

      {/* 2. HEADER & NARRATIVE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 border-t border-black pt-12">
        <AnimatedColumn direction="left">
          <h1 className="text-5xl lg:text-7xl font-bold text-[#00FFDD] uppercase tracking-tighter leading-[0.9] mb-8">
            Ahkku <br/>Vision
          </h1>
          <ul className="space-y-3 text-[11px] uppercase tracking-widest text-gray-500 border-l border-gray-300 pl-4">
            <li>Freelance Branding & Identity</li>
            <li>UX/UI Design</li>
            <li>Client Relation Management</li>
            <li>Design Project Management</li>
          </ul>
        </AnimatedColumn>

        <AnimatedColumn direction="top" delay={0.2}>
          <div className="space-y-6 text-gray-700 text-sm lg:text-base leading-relaxed">
            <p>
              I led the branding and digital identity for Ahkku Vision, a production company spearheaded by award-winning documentary filmmaker and former war reporter Bob Coen.
            </p>
            <p>
              The project involved translating Coen’s extensive career in journalism and film into a cohesive visual language. I acted as both the primary designer and project manager, ensuring the final UX/UI resonated with international media stakeholders.
            </p>
            <div className="pt-4">
              <a 
                href="https://www.ahkkuvision.com/" 
                target="_blank" 
                className="text-sm font-bold uppercase tracking-widest border-b-2 border-[#00FFDD] hover:text-[#00FFDD] transition-all"
              >
                Visit ahkkuvision.com ↗
              </a>
            </div>
          </div>
        </AnimatedColumn>
      </div>

      {/* 3. VISUAL GALLERY (Replacing Iframe with Next.js Image) */}
      <AnimatedColumn direction="top" className="mb-24">
        <h3 className="text-[10px] tracking-[0.4em] uppercase mb-8 text-center opacity-40">Identity & Web Showcase</h3>
        <div className="relative w-full overflow-hidden bg-gray-50" style={{ height: '938px' }}>
          <Image 
            src="https://static.wixstatic.com/media/49fe5f_045358cfa74d4b82877dcdf5d749b635~mv2.jpg" 
            alt="Ahkku Vision Brand Showcase"
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
        <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-center opacity-50 text-gray-800">Visual language for cinematic storytelling</p>
      </AnimatedColumn>

      {/* 4. FOOTER */}
      <div className="border-t-4 border-[#00FFDD] pt-12 flex flex-col items-end">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2">Production Company Branding</p>
        <h3 className="text-4xl lg:text-6xl font-bold tracking-tighter">MEDIA IDENTITY</h3>
      </div>

    </main>
  );
}