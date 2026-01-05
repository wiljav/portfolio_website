"use client";
import React, { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js';
    document.head.appendChild(script);
  }, []);

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 bg-transparent overflow-hidden">

      <div className="mx-auto mt-100 max-w-7xl py-12 sm:py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          
          {/* LEFT: TEXT */}
          <div className="text-left z-20">
            <h1 className="text-5xl font-semibold tracking-tight text-[#00ffdd] sm:text-7xl">
              Hi. I'm<br />Julia Sand.
            </h1>
            <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl/8 uppercase">
              A DESIGNER WORKING FROM HELSINKI / REMOTE
            </p>
            <div className="mt-10 flex items-center justify-left">
              <a href="#" className="rounded-md bg-fuchsia-100 px-6 py-3 text-sm font-semibold text-black hover:bg-[#00ffdd] transition-all">
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT: LEFT-SHIFTED CROPPER */}
          {/* We use overflow-hidden to hide the 'shifted' part of the spline */}
          <div className="absolute w-full h-[400px] lg:h-[600px] overflow-hidden z-10">
             {/* @ts-ignore */}
            <spline-viewer 
              url="https://prod.spline.design/kXWJzYlgxRRaZ0n8/scene.splinecode" 
              background="transparent"
              // THE FIX: 'absolute', increased scale, and negative left margin/position
              className="absolute top-0 -left-10 lg:-left-40 w-[120%] h-full scale-125 lg:scale-150 origin-left" 
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}