import { HeroSection } from "@/components/sections/hero-section";
import { getHeroContent } from "@/lib/hero";

export default async function HomePage() {
  const heroContent = await getHeroContent();
  return (
    <div className="flex flex-col gap-10">
      <HeroSection content={heroContent} />
    </div>
  );
}
