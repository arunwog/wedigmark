import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Beliefs from "@/components/sections/Beliefs";
import AboutPreview from "@/components/sections/AboutPreview";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
     return (
          <>

               <Hero />
               <Services />
               <Process />
               <PortfolioPreview />
               <Beliefs />
               <AboutPreview />
               <CTA />

          </>
     );
}