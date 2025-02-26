import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Services from "@/components/servicesSection/Services";
import Separator from "@/components/separator/Separator";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <main className="relative px-3 md:px-3 lg:px-5">
      <Navbar />
      <Hero />
      <Separator />
      <Services />
      <Separator />
      <Testimonials />
    </main>
  );
}
