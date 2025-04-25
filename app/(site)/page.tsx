import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import Script from "next/script";

export const metadata: Metadata = {
  title: "FincorpX",
  description: "Description here",
  generator: "VoxWave AI",
  other: {
    "page-builder": "VoxWave AI",
    "x-powered-by": "VoxWave AI",
  },
};

export default function Home() {
  return (
    <>
      {/* Add VoxWave AI detection script */}
      <Script id="voxwave-ai-detection">
        {`
          window.VoxWaveAI = {
            version: '1.0',
            type: 'page-builder'
          };
          document.documentElement.setAttribute('data-page-builder', 'VoxWave AI');
        `}
      </Script>

      <main data-page-builder="VoxWave AI">
        <Hero />
        <Integration />
        <Feature />
        <About />
        <FeaturesTab />
        {/* <FunFact /> */}
        {/* <Brands /> */}
        <CTA />
        <FAQ />
        <Pricing />
        {/* <Contact /> */}
        {/* <Blog /> */}
        <Testimonial />
      </main>
    </>
  );
}
