"use client";
import AnimatedColumn from "@/components/AnimatedColumn";
import Image from "next/image";
import Link from "next/link";

const uxServices = [
  "UX design process - user paths, stakeholder mapping, user profiles, and user stories",
  "Service architecture design & visual layout design (UI), design systems, UI motion",
  "User research, user testing design & facilitation, accessibility evaluation (WCAG)",
  "Client relation management, codesign techniques, workshops & design sprints",
  "Agile/Scrum project cycles, reviews, developer hand-offs, design Q&A",
  "Prototyping, wireframes, mockups (Figma, Sketch, ShapesXR, UE, Unity)",
  "Visual design, branding & graphical assets (icons, images, illustrations)"
];

const galleryItems = [
  { title: "KIDZ Concept", desc: "MOTION UX/UI | BRANDING", url: "/ux-design/kidz", img: "https://static.wixstatic.com/media/49fe5f_9747296403cb4949bff9b8b1ca4b8ff2~mv2.jpg" },
  { title: "XR Design", desc: "XR DESIGN | UX | UI | VR", url: "/ux-design/realworld-one", img: "https://static.wixstatic.com/media/49fe5f_71823cca9a9e4be8a0dd55c820be5d47~mv2.jpg" },
  { title: "In-house @ Emblica", desc: "GRAPHIC IDENTITY | BRANDING | UX/UI", url: "/ux-design/emblica", img: "https://static.wixstatic.com/media/49fe5f_bc7205ecaa3c4a01aa001ed87aa2d93a~mv2.jpg" },
  { title: "Waltti Redesign", desc: "UX/UI | UX RESEARCH | DESIGN SYSTEM", url: "/ux-design/waltti", img: "https://static.wixstatic.com/media/49fe5f_53fe688759ff4ad3b94eab01a408d4e7~mv2.jpg" },
  { title: "Ahkku Vision", desc: "UX/UI | BRANDING | IDENTITY", url: "/ux-design/ahkku-vision", img: "https://static.wixstatic.com/media/49fe5f_7f08fd6331ff42d491b6b8e121c45191~mv2.jpg" },
  { title: "Synlab Finland", desc: "UX RESEARCH | USER TESTING | UX/UI", url: "/ux-design/synlab", img: "https://static.wixstatic.com/media/49fe5f_963b899754514f89a618fbc6e08d9873~mv2.jpg" },
  { title: "Helsinki City UI Renewal", desc: "UX RESEARCH | USER TESTING | UX/UI", url: "/ux-design/helsinki-city", img: "https://static.wixstatic.com/media/49fe5f_a3135e0fa9af4d1c9e80e8775b99ec46~mv2_d_1600_1600_s_2.jpg" },
  { title: "UX/UI for Curious AI company", desc: "UX RESEARCH | USER TESTING | UX/UI", url: "/ux-design/curious-ai", img: "https://static.wixstatic.com/media/49fe5f_31321a23c139403daa361313ecd240cf~mv2_d_1500_1247_s_2.jpg" },
//   { title: "OEP UX/UI", desc: "UX RESEARCH | USER TESTING | UX/UI", url: "/ux-design/oep", img: "https://static.wixstatic.com/media/49fe5f_dab2b7dad11f49239df12d2e1132aecc~mv2_d_2500_2500_s_4_2.jpg" },
];

export default function UxUiPage() {
  return (
    <main className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
      
      {/* 1. HEADER SECTION */}
      <AnimatedColumn direction="top">
        <div className="border-t border-black pt-8 mb-12">
          <h1 className="text-5xl lg:text-[80px] font-bold text-[#00FFDD] uppercase tracking-tighter leading-[0.9]">
            UX/UI Design
          </h1>
        </div>
      </AnimatedColumn>

      {/* 2. SERVICES LIST (GRID) */}
      <AnimatedColumn direction="left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4 mb-24">
          {uxServices.map((service, i) => (
            <p style={{ fontFamily: 'var(--font-karla), sans-serif' }} key={i} className="text-sm lg:text-base leading-relaxed border-l-2 border-[#00FFDD] pl-4">
              {service}
            </p>
          ))}
        </div>
      </AnimatedColumn>

      {/* 3. PROJECT GALLERY */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, i) => (
  <AnimatedColumn key={i} direction="top" delay={i * 0.1}>
    <Link href={item.url} className="group block relative overflow-hidden bg-gray-100 aspect-square">
      
      {/* NEXT.JS OPTIMIZED IMAGE */}
      <Image 
        src={item.img} 
        alt={item.title}
        fill // Makes image fill the aspect-square container
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={i < 2} // CRITICAL: Loads first two images instantly for LCP
        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
      />
      
      {/* HOVER OVERLAY */}
      <div className="absolute inset-0 z-10 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
        <h3 className="text-[#00FFDD] text-xl font-bold uppercase tracking-tighter">
          {item.title}
        </h3>
        <p className="text-white text-[10px] tracking-[0.2em] font-medium mt-2">
          {item.desc}
        </p>
      </div>
    </Link>
  </AnimatedColumn>
))}
      </section>

    </main>
  );
}