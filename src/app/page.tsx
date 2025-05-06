import Hero from "@/containers/HeroContainer/Hero";
import IconsSlider from "@/containers/IconsSlider/IconsSlider";
import OurJourney from "@/containers/OurJourney/OurJourney";
import Technologies from "@/containers/Technologies/Technologies";

export default function Home() {
  return (
    <>
      <Hero />
      <IconsSlider />
      <OurJourney />
      <Technologies />
    </>
  );
}
