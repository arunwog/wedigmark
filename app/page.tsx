import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";

export default function Home() {
     return (
          <>
               <Navbar />
               <Hero />
               <Services />
               <Process />
          </>
     );
}