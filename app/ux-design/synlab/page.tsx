"use client";
import AnimatedColumn from "@/components/AnimatedColumn";
import Image from "next/image";
import Link from "next/link";

export default function SynlabProject() {
  return (
    <main className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
      
      {/* 1. NAVIGATION */}
      <Link href="/ux-design" className="inline-block text-xs tracking-[0.3em] uppercase mb-12 hover:text-[#00FFDD] transition-colors">
        ← Back to UX Design
      </Link>

      {/* 2. HEADER & MEDICAL UX STORY */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 border-t border-black pt-12">
        <AnimatedColumn direction="left">
          <h1 className="text-5xl lg:text-7xl font-bold text-[#00FFDD] uppercase tracking-tighter leading-[0.9] mb-8">
            Synlab.fi
          </h1>
          <ul className="space-y-3 text-[11px] uppercase tracking-widest text-gray-500 border-l border-gray-300 pl-4">
            <li>Workshop Facilitation</li>
            <li>Booking System Wireframing</li>
            <li>User Testing & Facilitation</li>
            <li>UX/UI Design (Outsystems)</li>
            <li>Medical Service Prototyping</li>
          </ul>
        </AnimatedColumn>

        <AnimatedColumn direction="top" delay={0.2}>
          <div className="space-y-6 text-gray-700 text-sm lg:text-base leading-relaxed">
            <p>
              Synlab offers laboratory and medical services directly to consumers. I served as the senior designer for the redesign of their web service and webshop, allowing users to buy tests and book appointments online.
            </p>
            <p>
              In cooperation with the team at Agenda Helsinki, I designed and facilitated workshops to align the digital strategy with Synlab’s medical requirements. The core of my work involved creating the interface for the laboratory test booking system, ensuring a seamless path from service selection to time-slot reservation.
            </p>
            <p>
              To validate the design, I setup and facilitated user testing sessions using high-fidelity prototypes. This data-driven approach ensured the booking system was intuitive for a wide range of consumer demographics.
            </p>
            <div className="pt-4">
              <a href="https://www.synlab.fi" target="_blank" className="text-sm font-bold uppercase tracking-widest border-b-2 border-black hover:text-[#00FFDD] hover:border-[#00FFDD] transition-all">
                Visit Synlab.fi ↗
              </a>
            </div>
          </div>
        </AnimatedColumn>
      </div>

      {/* 3. VISUAL GALLERY (Replacing Masonry Iframe) */}
      <AnimatedColumn direction="top" className="mb-24">
        <h3 className="text-[10px] tracking-[0.4em] uppercase mb-8 text-center opacity-40">System Architecture & UI</h3>
        <div className="relative w-full overflow-hidden bg-gray-50" style={{ height: '500px' }}>
          <Image 
            src="https://static.wixstatic.com/media/49fe5f_963b899754514f89a618fbc6e08d9873~mv2.jpg" 
            alt="Synlab UI Showcase"
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
           <div className="relative w-full bg-gray-50" style={{ height: '300px' }}>
              <Image 
                src="https://static.wixstatic.com/media/49fe5f_c59d9c6e3b5e408581e185c635d79152~mv2.png" 
                alt="Synlab Booking Flow"
                fill
                className="object-contain"
              />
           </div>
           <div className="relative w-full bg-gray-50" style={{ height: '300px' }}>
              <Image 
                src="https://static.wixstatic.com/media/49fe5f_7f088365922e4348a049909241940984~mv2.png" 
                alt="Synlab Mobile UI"
                fill
                className="object-contain"
              />
           </div>
        </div> */}
      </AnimatedColumn>

      {/* 4. FOOTER */}
      <div className="border-t-4 border-[#00FFDD] pt-12 flex flex-col items-end">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2">HealthTech UX Case Study</p>
        <h3 className="text-4xl lg:text-6xl font-bold tracking-tighter">MEDICAL UI</h3>
      </div>

    </main>
  );
}