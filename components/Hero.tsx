"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";

// Import Spline dynamically and fallback to either default or named export
// @ts-ignore
const Spline = dynamic(
  // @ts-ignore
  () => import('@splinetool/react-spline').then((mod) => mod.default),
  {
    ssr: false,
  }
) as any;

export default function Hero() {
  // Forces the background to be transparent via the API
  function onLoad(splineApp: any) {
    splineApp?.setBackgroundColor?.("transparent");
  }

  return (
    <section className="relative h-screen w-full flex items-center bg-transparent overflow-hidden">
      <div className="mx-auto max-w-8xl px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* TEXT COLUMN */}
        <div className="z-20 text-left">
          <h1 className="text-5xl font-sans tracking-tighter text-[#00ffdd] sm:text-8xl uppercase leading-none">
            Hi. I'm <br /> Julia <br /> Sand.
          </h1>
          <p className="mt-8 text-lg font-bold tracking-[0.1em] text-gray-500 sm:text-xl uppercase max-w-md">
            A DESIGNER WORKING FROM HELSINKI / REMOTE
          </p>
          <div className="mt-10 flex items-center justify-start gap-x-6">
            <a
              href="#"
              className="border-2 border-solid px-6 py-3 text-sm font-bold text-black hover:bg-[#00ffdd] rounded-full transition-colors"
            >
              CONTACT ME
            </a>
          </div>
        </div>

        {/* SPLINE COLUMN */}
        <div className="absolute inset-0 h-full w-full z-10 pointer-events-none lg:pointer-events-auto">
          <Suspense fallback={<div className="w-full h-full bg-transparent" />}>
            <Spline
              scene="https://prod.spline.design/kXWJzYlgxRRaZ0n8/scene.splinecode"
              onLoad={onLoad}
              className="w-full h-full"
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
}