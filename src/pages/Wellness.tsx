import Footer from "../components/Footer";
import MainLayout from "../layout/MainLayout";
import wellnessImg from "../assets/img/wellness/wellness.png";
import wellnessPackageImg from "../assets/img/wellness/wellness-package.jpg";
import lifePlanImg from "../assets/img/wellness/life-plan.jpg";
import "../assets/css/CustomProductScrollbar.css";
import Services from "../components/Services";
import Product_Wellness from "../components/Product-Wellness";
import ServiceHeroes from "../components/ServiceHeroes/ServiceHeroes";
import Stemwave from "../svg/Stemwave";
import OxygenTherapy from "../svg/OxygenTherapy";
import InjectionTherapy from "../svg/InjectionTherapy";
import steamwaveImg from "../assets/img/wellness/steamwave.jpg";
import oxygenTherapyImg from "../assets/img/wellness/oxygen-therapy.jpg";
import injectionTherapyImg from "../assets/img/wellness/injection-therapy.jpg";
import { ServiceHeroType } from "../types/SericeHeroType";

const heroData: ServiceHeroType = [
  {
    bgImg: steamwaveImg,
    Icon: Stemwave,
    title: "STEAMWAVE",
    description:
      "Stemwave Therapy is a cutting-edge treatment that combines advanced shockwave technology with regenerative medicine to promote natural healing. Ideal for chronic pain and soft tissue injuries, this non-invasive therapy stimulates the body's repair processes, improving blood flow and accelerating tissue regeneration. Experience the transformative power of Stemwave Therapy at our wellness salon for optimal health and vitality.",
    bgGradient: "linear-gradient(to top, #BCADA390 100%, rgba(0, 0, 0, 0.1))",
  },
  {
    bgImg: oxygenTherapyImg,
    Icon: OxygenTherapy,
    title: "HYPERBARIC OXYGEN THERAPY",
    description:
      "Hyperbaric Oxygen Therapy (HBOT) at our wellness spa offers a unique, rejuvenating experience by delivering pure oxygen in a pressurized chamber. This therapy enhances the body's natural healing processes, boosts immune function, and promotes overall wellness. Ideal for accelerating recovery, reducing inflammation, and improving mental clarity, HBOT helps you feel revitalized and refreshed. Discover the benefits of this innovative therapy and elevate your wellness journey with us.",
    bgGradient: "linear-gradient(to top, #96B8C190 100%, rgba(0, 0, 0, 0.1))",
  },
  {
    bgImg: injectionTherapyImg,
    Icon: InjectionTherapy,
    title: "IV INJECTION THERAPY",
    description:
      "IV Injection Therapy at our wellness spa provides a quick and efficient way to deliver essential vitamins, minerals, and hydration directly into your bloodstream. This therapy boosts energy levels, enhances immune function, and promotes overall well-being. Perfect for combating fatigue, recovering from illness, or simply maintaining optimal health, our tailored IV treatments leave you feeling revitalized and rejuvenated. Experience the benefits of IV Injection Therapy and elevate your wellness journey with us.",
    bgGradient: "linear-gradient(to top, #A57E6F80 100%, rgba(0, 0, 0, 0.1))",
  },
];

const Wellness = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <div
        className="h-[500px] md:h-[650px] lg:h-[803px] bg-cover bg-center md:bg-[80%] bg-no-repeat flex justify-between pt-8 md:pt-12 lg:pt-[58px] pb-10 md:pb-12 lg:pb-[69px] px-5 md:px-10 lg:px-[70px] text-white appear overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1) 1%, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${wellnessImg})`,
        }}
      >
        <div className="h-full flex flex-col justify-between">
          <p
            className="rotate-180 font-ezra-medium text-sm md:text-lg lg:text-[24px] leading-tight md:leading-[27px] tracking-[0.25em]"
            style={{
              writingMode: "vertical-rl",
            }}
          >
            REPLENISH
          </p>
          <p className="font-ezra-medium text-xl md:text-2xl lg:text-[32px] tracking-[0.25em]">
            WELLNESS
          </p>
        </div>
        <div>
          <p className="font-brownish text-5xl md:text-7xl lg:text-[100px] leading-tight md:leading-[100px]">
            01
          </p>
        </div>
      </div>

      <Product_Wellness />

      {/* Wellness Package & Life Plan Section */}
      <div className="flex flex-col lg:flex-row lg:h-[730px] text-white appear overflow-hidden">
        {/* Wellness Package */}
        <div
          className="min-h-[500px] md:min-h-[600px] lg:min-h-0 lg:h-full bg-center lg:bg-right flex bg-cover bg-no-repeat overflow-hidden transition-all duration-300 ease-in items-end flex-1"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${wellnessPackageImg})`,
          }}
        >
          <div className="h-full px-5 md:px-10 lg:px-[70px] pb-10 md:pb-12 lg:pb-[60px] flex flex-col justify-end">
            <p className="font-ezra-medium text-lg md:text-xl lg:text-[22px] w-fit leading-8 md:leading-10 lg:leading-[44px] transition-all duration-300 tracking-[0.25em]">
              WELLNESS PACKAGE
            </p>
            <p className="font-neue-regular text-sm md:text-base lg:text-[14px] leading-6 md:leading-7 lg:leading-[32px] mt-2 md:mt-3">
              Indulge in our exclusive wellness package, featuring seven amazing
              treatments to rejuvenate your body and mind. Perfect for personal
              pampering or as a thoughtful gift, this package ensures you leave
              feeling restored and revitalized. Treat yourself or someone
              special to ultimate relaxation at our premier health spa.
            </p>
          </div>
        </div>

        {/* Life Plan */}
        <div
          className="min-h-[500px] md:min-h-[600px] lg:min-h-0 lg:h-full flex items-end bg-cover bg-center bg-no-repeat transition-all duration-300 ease-in flex-1"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${lifePlanImg})`,
          }}
        >
          <div className="pb-10 md:pb-12 lg:pb-[60px] h-full flex flex-col justify-end px-5 md:px-10 lg:px-[70px]">
            <p className="font-ezra-medium text-lg md:text-xl lg:text-[22px] w-fit leading-8 md:leading-10 lg:leading-[44px] tracking-[0.25em] transition-all duration-300">
              LIFE PLAN
            </p>
            <p className="font-neue-regular text-sm md:text-base lg:text-[14px] leading-6 md:leading-7 lg:leading-[32px] mt-2 md:mt-3">
              Indulge in our exclusive wellness package, featuring seven amazing
              treatments to rejuvenate your body and mind. Perfect for personal
              pampering or as a thoughtful gift, this package ensures you leave
              feeling restored and revitalized. Treat yourself or someone
              special to ultimate relaxation at our premier health spa.
            </p>
          </div>
        </div>
      </div>

      <ServiceHeroes heroes={heroData} />

      <Services />
      
      <div className="z-10">
        <Footer />
      </div>
    </MainLayout>
  );
};
export default Wellness;