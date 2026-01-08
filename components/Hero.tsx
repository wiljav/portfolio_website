// "use client";
// import React, { useEffect } from 'react';

// export default function Hero() {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.type = 'module';
//     script.src = 'https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js';
//     document.head.appendChild(script);
//   }, []);

//   return (
//     <div className="relative isolate mt-50 px-6 pt-10 lg:px-8 bg-transparent overflow-hidden">
//       <div className="relative mx-auto max-w-7xl py-12 sm:py-20 lg:py-48 z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          
//           {/* LEFT: TEXT */}
//           <div className="text-left z-20">
//             <h1 className="text-[45px] lg:text-[100px] font-semibold tracking-tight text-[#00ffdd] leading-[0.9] uppercase">
//               Hi. I'm<br />Julia<br />Sand.
//             </h1>
//             <p className="mt-8 text-sm lg:text-lg font-medium text-gray-500 sm:text-xl/8 uppercase">
//               A DESIGNER WORKING FROM HELSINKI / REMOTE
//             </p>
//             <div className="mt-10 flex items-center justify-left">
//               <a href="#" className="border-2 border-solid rounded-full px-6 py-3 text-sm font-semibold text-black hover:bg-[#00ffdd] transition-all">
//                 Contact Me
//               </a>
//             </div>
//           </div>

//           {/* RIGHT: THE CROPPER */}
// {/* Increased mobile height to 350px and added mt-10 to separate it from text */}
// <div className="relative lg:absolute lg:right-0 mt-10 lg:mt-0 w-full lg:w-1/2 h-[350px] lg:h-[700px] overflow-hidden z-10 translate-y-10 lg:translate-y-20">
//   {/* @ts-ignore */}
//   <spline-viewer 
//     url="https://prod.spline.design/kXWJzYlgxRRaZ0n8/scene.splinecode" 
//     background="transparent"
//     /**
//      * THE CROP FIX:
//      * 1. Changed scale-50 to scale-150 on mobile to zoom in.
//      * 2. Added -left-20 on mobile to slice the empty space.
//      * 3. w-[150%] gives the model room to be shifted left.
//      */
//     className="relative lg:absolute top-0 right-50 lg:right-80 w-[50%] lg:w-[120%] h-full scale-50 lg:scale-125 lg:origin-right origin-left"
//   />
// </div>
          
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import AnimatedColumn from "@/components/AnimatedColumn";
import Spline from '@splinetool/react-spline';

export default function Hero() {
  // const i = 0;
  // const isEven = i % 2 === 0;
  return (
    <div className="relative isolate mt-20 px-6 pt-10 lg:px-8 bg-transparent overflow-hidden">
      <div className="relative mx-auto max-w-7xl py-12 lg:py-48 z-10">
        
        {/* START GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT COLUMN: TEXT */}
          <div className="text-left z-20">
            <AnimatedColumn direction="bottom">
            <h1 className="text-[45px] lg:text-[100px] font-semibold tracking-tight text-[#00ffdd] leading-[0.9]">
              Hi. I'm<br />Julia<br />Sand.
            </h1>
            </AnimatedColumn>
            <AnimatedColumn direction="right">
            <p className="mt-8 text-sm lg:text-lg font-medium text-gray-500 uppercase">
              A DESIGNER WORKING FROM HELSINKI / REMOTE
            </p>
            <div className="mt-10 flex items-center justify-left">
              <a href="#" className="relative z-30 inline-flex items-center justify-center border-[2.5px] border-black border-solid rounded-full px-8 py-3 text-sm font-bold uppercase tracking-tight text-black antialiased hover:bg-[#00ffdd] hover:border-[#00ffdd] transition-all duration-300 ease-in-out">
                Contact Me
              </a>
            </div>
            </AnimatedColumn>
          </div>

          {/* RIGHT COLUMN: THE CROPPER */}
          <div className="relative lg:absolute lg:right-0 w-full lg:w-1/2 h-[400px] lg:h-[550px] overflow-hidden z-10">
            {/* THE FIX: 
                - w-[180%] & -translate-x-[35%] slides the empty space out of view.
                - Spline style must be 100% to fill this 'zoomed' container.
            */}
            <div className="relative lg:absolute lg:top-0 scale-50 lg:scale-100 -left-50 lg:right-0 w-[400%] lg:w-[200%] h-full lg:h-full -translate-x-[50%] lg:-translate-x-[15%] origin-right">
              <Spline 
                scene="https://prod.spline.design/kXWJzYlgxRRaZ0n8/scene.splinecode"
                // style={{backgroundColor: 'transparent'}}
                onLoad={(spline) => {
      // Lock the camera view by setting a fixed zoom
      spline.setZoom(1);
      spline.setBackgroundColor('transparent');
    }}
              />
            </div>
          </div>

        </div> {/* END GRID */}
      </div>
    </div>
  );
}