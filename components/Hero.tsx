// "use client";
// import { Suspense } from 'react';
// import Spline from '@splinetool/react-spline';

// export default function Hero() {
//   return (
//     <div className="relative isolate px-6 pt-14 lg:px-8 bg-white text-center">
//       <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
//         <h1 className="text-5xl font-semibold tracking-tight text-balance text-[#00ffdd] sm:text-7xl">
//           Hi.I'm Julia Sand.
//         </h1>
//         <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
//           A DESIGNER WORKING FROM HELSINKI / REMOTE
//         </p>
//       </div>
      
//       {/* 3D Scene */}
//       <div className="absolute inset-0 -z-10 h-full w-full">
//         <Suspense fallback={<div className="h-[100px] w-[100px] bg-white" />}>
//           <Spline scene="https://prod.spline.design/kXWJzYlgxRRaZ0n8/scene.splinecode" />
//         </Suspense>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { Suspense } from 'react';
// import Spline from '@splinetool/react-spline';

// export default function Hero() {
//   return (
//     <section className="relative isolate min-h-screen w-full flex items-center bg-transparent overflow-hidden">
      
//       {/* 1. THE POLYGON BACKGROUND BLOBS (Stays behind everything) */}
//       <div className="absolute inset-0 -z-10 pointer-events-none">
//         <div className="background absolute top-0 left-0 w-[50vw] aspect-square blur-3xl opacity-20 bg-gradient-to-br from-[#00ffdd] to-transparent" />
//         <div className="second_background absolute bottom-0 right-0 w-[50vw] aspect-square blur-3xl opacity-20 bg-gradient-to-tl from-[#ff80b5] to-transparent" />
//       </div>

//       {/* 2. THE MAIN GRID CONTAINER */}
//       <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
//           {/* LEFT COLUMN: TEXT */}
//           <div className="z-20 text-left">
//             <h1 className="text-5xl font-sans font-bold tracking-tighter text-[#00ffdd] sm:text-8xl uppercase leading-none">
//               Hi. I'm <br /> Julia Sand.
//             </h1>
//             <p className="mt-8 text-lg font-bold tracking-[0.1em] text-gray-500 sm:text-xl uppercase max-w-md">
//               A DESIGNER WORKING FROM HELSINKI / REMOTE
//             </p>
//             <div className="mt-10 flex items-center justify-start gap-x-6">
//               <a href="#" className="rounded-full bg-black px-8 py-4 text-sm font-bold text-white shadow-lg hover:bg-[#00ffdd] hover:text-black transition-all">
//                 CONTACT ME
//               </a>
//             </div>
//           </div>

//           {/* RIGHT COLUMN: SPLINE CONTAINER */}
//           <div className="relative h-[400px] lg:h-[600px] w-full z-10">
//             <Suspense fallback={null}>
//   <div className="w-full h-full bg-transparent"> {/* Force container transparency */}
//     <Spline 
//       scene="https://prod.spline.design/kXWJzYlgxRRaZ0n8/scene.splinecode" 
//       // Do not use background="transparent" here
//       className="w-full h-full pointer-events-auto" 
//       onLoad={(spline) => {
//         // High-leverage: This forces the canvas background to alpha 0 if the editor didn't
//         spline.setBackgroundColor('transparent'); 
//       }}
//     />
//   </div>
// </Suspense>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import type { Application } from '@splinetool/runtime'; // 1. Import the Type

export default function Hero() {
  // 2. Define the loading function with the correct Type
  function onLoad(splineApp: Application) {
    // This forces the background to be transparent via the API
    splineApp.setBackgroundColor('transparent');
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
               <a href="#" className="border-2 border-solid px-6 py-3 text-sm font-bold text-black hover:bg-[#00ffdd] rounded-full transition-colors">
                 CONTACT ME
               </a>
             </div>
        </div>

        {/* SPLINE COLUMN */}
        <div className="absolute h-[200px] lg:h-[500px] w-full z-10">
          <Suspense fallback={null}>
            <Spline 
              scene="https://prod.spline.design/kXWJzYlgxRRaZ0n8/scene.splinecode" 
              onLoad={onLoad} // 3. Use the typed function here
              className="w-full h-full"
            />
          </Suspense>
        </div>

      </div>
    </section>
  );
}