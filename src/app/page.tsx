import GetStarted from "@/containers/GetStarted/GetStarted";
import Hero from "@/containers/HeroContainer/Hero";
import IconsSlider from "@/containers/IconsSlider/IconsSlider";
import OurJourney from "@/containers/OurJourney/OurJourney";
import ServingIndustries from "@/containers/ServingIndustries/ServingIndustries";
import Technologies from "@/containers/Technologies/Technologies";
import Testimonials from "@/containers/Testimonials/Testimonials";

export default function Home() {

  const iconsImg = [
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2Famanda_uprichard_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FSabina_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FVarley_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FFor_Love_%26_Lemons_Logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FBeachRiot_logo.png%3Fprofile%3Db&w=1920&q=75',
    
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2Famanda_uprichard_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FSabina_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FVarley_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FFor_Love_%26_Lemons_Logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FBeachRiot_logo.png%3Fprofile%3Db&w=1920&q=75',
    
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2Famanda_uprichard_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FSabina_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FVarley_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FFor_Love_%26_Lemons_Logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FBeachRiot_logo.png%3Fprofile%3Db&w=1920&q=75',
    
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2Famanda_uprichard_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FSabina_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FVarley_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FFor_Love_%26_Lemons_Logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FBeachRiot_logo.png%3Fprofile%3Db&w=1920&q=75',
    
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2Famanda_uprichard_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FSabina_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FVarley_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FFor_Love_%26_Lemons_Logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FBeachRiot_logo.png%3Fprofile%3Db&w=1920&q=75',
    
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2Famanda_uprichard_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FSabina_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FVarley_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FFor_Love_%26_Lemons_Logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FBeachRiot_logo.png%3Fprofile%3Db&w=1920&q=75',
    
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2Famanda_uprichard_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FSabina_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FVarley_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FFor_Love_%26_Lemons_Logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FBeachRiot_logo.png%3Fprofile%3Db&w=1920&q=75',
    
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2Famanda_uprichard_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FSabina_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FVarley_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FFor_Love_%26_Lemons_Logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FBeachRiot_logo.png%3Fprofile%3Db&w=1920&q=75',
    
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2Famanda_uprichard_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FSabina_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FVarley_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FFor_Love_%26_Lemons_Logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FBeachRiot_logo.png%3Fprofile%3Db&w=1920&q=75',
    
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2Famanda_uprichard_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FSabina_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FVarley_logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FFor_Love_%26_Lemons_Logo.png%3Fprofile%3Db&w=1920&q=75',
    'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FBeachRiot_logo.png%3Fprofile%3Db&w=1920&q=75',
    
  ]

  return (
    <>
      <Hero />
      <IconsSlider data={iconsImg} type={'img'} />
      <OurJourney />
      <Technologies />
      <Testimonials />
      <ServingIndustries />
      <GetStarted />
    </>
  );
}
