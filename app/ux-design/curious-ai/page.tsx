"use client";
import AnimatedColumn from "@/components/AnimatedColumn";
import Image from "next/image";
import Link from "next/link";

export default function CuriousAIProject() {
  return (
    <main className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
      
      {/* 1. NAVIGATION */}
      <Link href="/ux-design" className="inline-block text-xs tracking-[0.3em] uppercase mb-12 hover:text-[#00FFDD] transition-colors">
        ← Back to UX Design
      </Link>

      {/* 2. HEADER & AI UX NARRATIVE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 border-t border-black pt-12">
        <AnimatedColumn direction="left">
          <h1 className="text-5xl lg:text-7xl font-bold text-[#00FFDD] uppercase tracking-tighter leading-[0.9] mb-8">
            Curious AI
          </h1>
          <ul className="space-y-3 text-[11px] uppercase tracking-widest text-gray-500 border-l border-gray-300 pl-4">
            <li>UX/UI Design</li>
            <li>Wireframing</li>
            <li>Interactive Visual Mockups</li>
            <li>Brand Implementation</li>
          </ul>
        </AnimatedColumn>

        <AnimatedColumn direction="top" delay={0.2}>
          <div className="space-y-6 text-gray-700 text-sm lg:text-base leading-relaxed">
            <p>
              The Curious AI required a comprehensive website redesign to better reflect their position in the artificial intelligence industry. Working within the framework of Agenda (now Sohova), I was responsible for the end-to-end UX/UI design.
            </p>
            <p>
              The primary challenge was taking the company’s existing, sophisticated graphic identity and translating it into a functional, user-centric web interface. This involved creating detailed wireframes to map out content hierarchy and developing interactive mockups to test the flow of information.
            </p>
            <p>
              The final design focused on clarity and modern aesthetics, ensuring that the high-tech nature of the company was balanced with an accessible and professional user experience.
            </p>
          </div>
        </AnimatedColumn>
      </div>

      {/* 3. VISUAL GALLERY (Replacing Iframe with Next.js Image) */}
      <AnimatedColumn direction="top" className="mb-24">
        <h3 className="text-[10px] tracking-[0.4em] uppercase mb-8 text-center opacity-40">Web Redesign & UI Showcase</h3>
        
        {/* Main Brand/Web Mockup */}
        <div className="relative w-full overflow-hidden bg-gray-50 mb-20" style={{ height: '600px' }}>
          <Image 
            src="https://static.wixstatic.com/media/49fe5f_4baff13443e44c9e95cb71f4dee72d83~mv2_d_1500_1247_s_2.jpg" 
            alt="Curious AI Website Mockup"
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        {/* Secondary Details Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"> */}
        <h3 className="text-[10px] tracking-[0.4em] uppercase mb-8 text-center opacity-40">Mobile UI Showcase</h3>
          <div className="relative w-full bg-gray-50" style={{ height: '600px' }}>
            <Image 
              src="https://static.wixstatic.com/media/49fe5f_7ea76aebfa604f418fbb17b8b88872f0~mv2.jpg" 
              alt="Curious AI Mobile UI"
              fill
            className="object-contain"
            sizes="100vw"
            priority
            />
          </div>
          {/* <div className="relative w-full bg-gray-50" style={{ height: '450px' }}>
            <Image 
              src="https://static.wixstatic.com/media/49fe5f_7303e83b48324483a967f86646876798~mv2.jpg" 
              alt="Curious AI Component Design"
              fill
              className="object-contain"
            />
          </div> */}
        {/* </div> */}
      </AnimatedColumn>

      {/* 4. FOOTER */}
      <div className="border-t-4 border-[#00FFDD] pt-12 flex flex-col items-end">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2">AI Sector Web Design</p>
        <h3 className="text-4xl lg:text-6xl font-bold tracking-tighter">INTELLIGENT UI</h3>
      </div>

    </main>
  );
}