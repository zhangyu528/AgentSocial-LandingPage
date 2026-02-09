import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { Installation } from "@/components/Installation";
import { Workflow } from "@/components/Workflow";
import { TechnicalSpecs } from "@/components/TechnicalSpecs";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <Features />
        <InteractiveDemo />
        <Installation />
        <Workflow />
        <TechnicalSpecs />
      </main>
      <Footer />
    </div>
  );
}