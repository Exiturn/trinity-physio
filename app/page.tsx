import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="relative h-[200vh] px-5 md:px-7 lg:px-5">
      <Navbar />
      <Hero />
    </main>
  );
}
