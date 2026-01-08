"use client";
import AnimatedColumn from "@/components/AnimatedColumn";
import Image from "next/image";
import Link from "next/link";

export default function EmblicaProject() {
  return (
    <main className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
      
      {/* 1. NAVIGATION */}
      <Link href="/ux-design" className="inline-block text-xs tracking-[0.3em] uppercase mb-12 hover:text-[#00FFDD] transition-colors">
        ← Back to UX Design
      </Link>

      {/* 2. HEADER & FULL BRAND STORY */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 border-t border-black pt-12">
        <AnimatedColumn direction="left">
          <h1 className="text-5xl lg:text-7xl font-bold text-[#00FFDD] uppercase tracking-tighter leading-[0.9] mb-8">
            Emblica <br/>Full Case
          </h1>
          <p className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4">
            Data Science & AI Consultancy (2020-2022)
          </p>
          <ul className="space-y-3 text-[11px] uppercase tracking-widest text-gray-500 border-l border-gray-300 pl-4">
            <li>Brand development</li>
            <li>Infographics and visualisations</li>
            <li>UX/UI design & Workshops</li>
            <li>User interviews & testing</li>
            <li>Sales & marketing materials</li>
          </ul>
        </AnimatedColumn>

        <AnimatedColumn direction="top" delay={0.2}>
          <div className="space-y-6 text-gray-700 text-sm lg:text-base leading-relaxed">
            <p>
              Emblica partners with **R&D departments** of Finland’s largest tech firms. I redesigned their brand identity to reflect **grounded expertise**, intentionally avoiding the blue-tinted "science fiction" tropes common in AI.
            </p>
            <p>
              We chose a palette of calming white, gray, and blue with a **red accent** and modern typography. Infographics were vital to the sales process; I developed a minimalistic visual language to translate complex technical solutions into clear assets.
            </p>
            <p>
              Working with the lead UX designer, we renewed the website to ensure typical client profiles found **meaningful user paths** to discover Emblica’s deep array of services.
            </p>
          </div>
        </AnimatedColumn>
      </div>

      {/* 3. ALL MOTION ASSETS (Vimeo Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <AnimatedColumn direction="top" delay={0.1}>
          <div className="aspect-video bg-black border-b-4 border-[#00FFDD]">
            <iframe src="https://player.vimeo.com/video/678654675?title=0&muted=1&autoplay=1&loop=1&controls=0" className="w-full h-full" />
          </div>
          <p className="text-[10px] uppercase tracking-widest mt-2 opacity-50 text-center">Screen Prototype</p>
        </AnimatedColumn>
        <AnimatedColumn direction="top" delay={0.2}>
          <div className="aspect-video bg-black border-b-4 border-red-600">
            <iframe src="https://player.vimeo.com/video/678656812?title=0&muted=1&autoplay=1&loop=1&controls=0" className="w-full h-full" />
          </div>
          <p className="text-[10px] uppercase tracking-widest mt-2 opacity-50 text-center">Keko Preview</p>
        </AnimatedColumn>
        <AnimatedColumn direction="top" delay={0.3}>
          <div className="aspect-video bg-black border-b-4 border-gray-400">
            <iframe src="https://player.vimeo.com/video/678657097?title=0&muted=1&autoplay=1&loop=1&controls=0" className="w-full h-full" />
          </div>
          <p className="text-[10px] uppercase tracking-widest mt-2 opacity-50 text-center">Corby Social</p>
        </AnimatedColumn>
      </div>

      {/* 4. TECHNICAL DEEP DIVE (Interactive Elements) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 py-16 border-t border-black/10">
        <AnimatedColumn direction="left">
          <h2 className="text-2xl font-bold uppercase tracking-tighter mb-6">Interactive Heroes</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            I conceptualized **interactive hero images** using **HTML Canvas, 3JS, and Lottie**. These were fine-tuned with developers to meet strict web performance criteria while adding an exclusive dimension to their digital presence.
          </p>
        </AnimatedColumn>
        <AnimatedColumn direction="top">
          <div className="bg-gray-100 p-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-4">Core UX Tasks:</h3>
            <ul className="text-xs space-y-3 uppercase tracking-widest text-gray-500">
              <li>• UX/UI for data-intensive web apps (NDA protected)</li>
              <li>• Infographic design based on scientist interviews</li>
              <li>• Maintaining brand & sales pitch materials</li>
            </ul>
          </div>
        </AnimatedColumn>
      </div>

      {/* 5. STATIC ASSETS (2 Images) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
        <AnimatedColumn direction="left">
          <Image 
            src="https://static.wixstatic.com/media/49fe5f_58d89328dbfb4845978cda7f74378c44~mv2.jpg" 
            alt="Asset 1" width={800} height={600} className="w-full grayscale hover:grayscale-0 transition-all"
          />
        </AnimatedColumn>
        <AnimatedColumn direction="right">
          <Image 
            src="https://static.wixstatic.com/media/49fe5f_3206414b57a146d4be91d901fc60e8d4~mv2.jpg" 
            alt="Asset 2" width={800} height={600} className="w-full grayscale hover:grayscale-0 transition-all"
          />
        </AnimatedColumn>
      </div>

      {/* 6. LIVE LINK */}
      <div className="border-t-4 border-[#00FFDD] pt-12 text-right">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Explore the result</p>
        <a href="https://emblica.com/" target="_blank" className="text-4xl lg:text-7xl font-bold hover:text-[#00FFDD] transition-all">
          EMBLICA.COM ↗
        </a>
      </div>

    </main>
  );
}