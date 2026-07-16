import { Hero } from "@/components/sections/Hero";
import { Capabilities } from "@/components/sections/Capabilities";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Process } from "@/components/sections/Process";
import { Founder } from "@/components/sections/Founder";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <SelectedWork />
      <Process />
      <Founder />
      <CTA />
    </>
  );
}
