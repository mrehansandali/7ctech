import GetStarted from "@/containers/GetStarted/GetStarted";
import Hero from "@/containers/HeroContainer/Hero";
import IconsSlider from "@/containers/IconsSlider/IconsSlider";
import OurJourney from "@/containers/OurJourney/OurJourney";
import ServingIndustries from "@/containers/ServingIndustries/ServingIndustries";
import Technologies from "@/containers/Technologies/Technologies";
import Testimonials from "@/containers/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <IconsSlider />
      <OurJourney />
      <Technologies />
      <Testimonials />
      <ServingIndustries />
      <GetStarted />
    </>
  );
}
