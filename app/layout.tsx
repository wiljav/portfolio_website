// import type { Metadata } from "next";
// import { Karla } from "next/font/google"; // Import from Google Fonts
// import localFont from "next/font/local";
// import "./globals.css";
// import Header from "@/components/Header";
// import Services from "@/components/Services";
// import Brands from "@/components/Brands";
// import Footer from "@/components/Footer";
// import { SpeedInsights } from "@vercel/speed-insights/next";

// // Configure Karla
// const karla = Karla({
//   subsets: ["latin"],
//   weight: ["400", "700"], // Select weights you need
//   variable: "--font-karla", // Define the variable name
// });

// const neueMetana_bold = localFont({
//   src: "../public/fonts/NeueMetana-Bold.ttf",
//   variable: "--font-metana-bold",
// });
// const neueMetana = localFont({
//   src: "../public/fonts/NeueMetana-Regular.otf",
//   variable: "--font-metana-regular",
// });

// export const metadata: Metadata = {
//   title: "Julia Sand | Portfolio",
//   description: "Digital Designer & Developer based in Helsinki",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={`scroll-smooth ${neueMetana.variable} ${karla.variable}`}>
//       <body className="antialiased bg-transparent font-sans relative">
        
//         {/* GLOBAL BACKGROUND ELEMENTS */}
//         <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
//           {/* Top-Left Polygon */}
//           <div className="absolute inset-x-0 -top-40 transform-gpu blur-3xl sm:-top-80">
//             <div className="background relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#00ffdd] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
//           </div>
          
//           {/* Bottom-Right Polygon */}
//           <div className="absolute inset-x-0 top-[calc(100%-13rem)] transform-gpu blur-3xl sm:top-[calc(100%-30rem)]">
//             <div className="second_background relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#00ffdd] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
//           </div>
//         </div>

//         {/* MAIN CONTENT COLUMN */}
//         <div className="relative z-10 flex flex-col min-h-screen">
//           <Header />
//           <main className="flex-1 w-full max-w-auto mx-auto px-6 lg:px-12">
//             {children}
//             <SpeedInsights />
//           </main>
//           <Services />
//           <Brands />
//           <Footer />
//         </div>

//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Karla } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

// 1. SPEED: Use 'display: swap' to prevent invisible text during load
const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-karla",
  display: 'swap', 
});

// const neueMetana = localFont({
//   src: "../public/fonts/NeueMetana-Regular.otf",
//   variable: "--font-metana-regular",
//   display: 'swap',
// });
const neueMetana = localFont({
  src: "../public/fonts/NeueMetana-Regular.otf",
  variable: "--font-metana-regular",
  display: 'swap', // Shows system font immediately while downloading
  adjustFontFallback: 'Arial', // Prevents layout jump
});

// 2. SEO: Hyper-optimized metadata
export const metadata: Metadata = {
  title: {
    default: "Julia Sand | UX/UI & Motion Designer Helsinki",
    template: "%s | Julia Sand"
  },
  description: "Senior Digital Designer specializing in UX/UI, Motion Graphics, and Branding. Helping international brands create high-impact digital experiences.",
  keywords: ["UX Design Helsinki", "UI Designer", "Motion Graphics Portfolio", "Digital Design Finland"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "Julia Sand Design",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Julia Sand Portfolio" }]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${neueMetana.variable} ${karla.variable}`}>
      <body className="antialiased bg-white text-black font-sans relative selection:bg-[#00ffdd] selection:text-black">
        
        {/* GLOBAL BACKGROUND: Keep as is, it's efficient */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute inset-x-0 -top-40 transform-gpu blur-3xl sm:-top-80">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#00ffdd] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 w-full">
            {children}
            {/* NOTE: If Services/Brands are ONLY for the home page, 
                move them to page.tsx instead of here. */}
          </main>
          <Footer />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}