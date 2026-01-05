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
    <div className="relative isolate mt-50 px-6 pt-10 lg:px-8 bg-transparent overflow-hidden">
      <div className="relative mx-auto max-w-7xl py-12 sm:py-20 lg:py-48 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          
          {/* LEFT: TEXT */}
          <div className="text-left z-20">
            <h1 className="text-[60px] sm:text-[100px] font-semibold tracking-tight text-[#00ffdd] leading-[0.9] uppercase">
              Hi. I'm<br />Julia<br />Sand.
            </h1>
            <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl/8 uppercase">
              A DESIGNER WORKING FROM HELSINKI / REMOTE
            </p>
            <div className="mt-10 flex items-center justify-left">
              <a href="#" className="border-2 border-solid rounded-full px-6 py-3 text-sm font-semibold text-black hover:bg-[#00ffdd] transition-all">
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT: FITTED BOX WITH TOP OFFSET */}
          {/* 1. Changed to 'relative' so it's visible.
            2. Added 'translate-y-12' (or 20) to push the top down from the text level.
          */}
          <div className="absolute w-full h-[500px] lg:h-[700px] overflow-hidden z-10 translate-y-10 lg:translate-y-20">
             {/* @ts-ignore */}
            <spline-viewer 
              url="https://prod.spline.design/kXWJzYlgxRRaZ0n8/scene.splinecode" 
              background="transparent"
              // Removed the massive scale so it fits the box naturally
              className="absolute top-0 -left-10 lg:-left-20 w-[120%] h-full scale-110 lg:scale-125 origin-left"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}