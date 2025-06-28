import Footer from "../components/Footer";
import MainLayout from "../layout/MainLayout";
import "../assets/css/CustomProductScrollbar.css";
import Services from "../components/Services";
import hairImg from "../assets/img/hair/hair-bg.jpg";
import watercolorPaperImg from "../assets/img/hair/watercolor-paper.jpg";
import JapaneseSpa from "../svg/JapaneseSpa";
import Protein from "../svg/Protein";
import HotOil from "../svg/HotOil";
import Product_Hair from "../components/Product-Hair";
import { ServiceHeroType } from "../types/SericeHeroType";
import ServiceHeroes from "../components/ServiceHeroes/ServiceHeroes";

const heroData: ServiceHeroType = [
  {
    bgImg: watercolorPaperImg,
    Icon: JapaneseSpa,
    title: "JAPANESE HEAD SPA",
    description:
      "Japanese Head Spa Therapy is a relaxing scalp treatment that revitalizes your hair and scalp while relieving tension. This soothing experience promotes healthy hair growth, improves circulation, and deeply hydrates, leaving your scalp refreshed and your hair soft, shiny, and nourished. It’s perfect for stress relief and promoting scalp and hair health!",
    bgGradient: "linear-gradient(to top, #74564E95 100%, rgba(0, 0, 0, 0.1))",
  },
  {
    bgImg: watercolorPaperImg,
    Icon: Protein,
    title: "PROTEIN TREATMENT",
    description:
      "Protein Hair Treatment Therapy strengthens and revitalizes damaged hair by restoring essential proteins. This nourishing treatment repairs split ends, reduces breakage, and enhances hair’s texture and shine, leaving it stronger, smoother, and healthier. Perfect for reviving dry, brittle, or chemically treated hair!",
    bgGradient: "linear-gradient(to top, #BCADA395 100%, rgba(0, 0, 0, 0.1))",
  },
  {
    bgImg: watercolorPaperImg,
    Icon: HotOil,
    title: "HOT OIL TREATMENT",
    description:
      "Hot Oil Hair Treatment Therapy deeply nourishes and hydrates your hair with warm, nutrient-rich oils. This treatment helps repair dryness, adds shine, reduces frizz, and promotes a healthy scalp. Perfect for transforming dry, damaged hair into soft, silky, and revitalized locks!",
    bgGradient: "linear-gradient(to top, #4D313399 100%, rgba(0, 0, 0, 0.1))",
  },
];

const Hair = () => {
  return (
    <MainLayout>
      <div
        className="h-[803px] bg-cover bg-[80%] bg-no-repeat flex justify-between pt-[58px] pb-[69px] px-[70px] text-white"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1) 1%, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${hairImg})`,
        }}
      >
        <div className="h-full flex flex-col justify-between">
          <p
            className="rotate-180 font-ezra-medium text-[24px] leading-[27px] tracking-[0.25em]"
            style={{
              writingMode: "vertical-rl",
            }}
          >
            RENEW
          </p>
          <p className="font-ezra-medium text-[32px] tracking-[0.25em]">HAIR</p>
        </div>
        <div>
          <p className="font-brownish text-[100px] leading-[100px]">03</p>
        </div>
      </div>

      <Product_Hair />

      {/* <div className="h-[770px] flex text-white max-md:h-fit max-md:flex-col">
        <div
          className="flex-1 h-full bg-cover max-md:flex-none max-md:h-[500px]"
          style={{
            backgroundImage: `url(${watercolorPaperImg})`,
          }}
        >
          <div
            className="w-full h-full bg-cover mix-blend-multiply flex items-center justify-center relative"
            style={{
              backgroundImage: `linear-gradient(to top, #74564E95 100%, rgba(0, 0, 0, 0.1))`,
            }}
          >
            <JapaneseSpa />
            <div className="w-full absolute bottom-[70px] max-md:bottom-[20px] flex justify-center">
              <p className="font-ezra-medium text-[16px] tracking-[0.25em]">
                JAPANESE HEAD SPA
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex-1 h-full bg-cover max-md:flex-none max-md:h-[500px]"
          style={{
            backgroundImage: `url(${watercolorPaperImg})`,
          }}
        >
          <div
            className="w-full h-full bg-cover mix-blend-multiply flex items-center justify-center relative"
            style={{
              backgroundImage: `linear-gradient(to top, #BCADA395 100%, rgba(0, 0, 0, 0.1))`,
            }}
          >
            <Protein />
            <div className="w-full absolute bottom-[70px] max-md:bottom-[20px] flex justify-center">
              <p className="font-ezra-medium text-[16px] tracking-[0.25em]">
                PROTEIN TREATMENT
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex-1 h-full bg-cover max-md:flex-none max-md:h-[500px]"
          style={{
            backgroundImage: `url(${watercolorPaperImg})`,
          }}
        >
          <div
            className="w-full h-full bg-cover mix-blend-multiply flex items-center justify-center relative"
            style={{
              backgroundImage: `linear-gradient(to top, #4D313399 100%, rgba(0, 0, 0, 0.1))`,
            }}
          >
            <HotOil />
            <div className="w-full absolute bottom-[70px] max-md:bottom-[20px] flex justify-center">
              <p className="font-ezra-medium text-[16px] tracking-[0.25em]">
                HOT OIL TREATMENT
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <ServiceHeroes heroes={heroData} />

      <Services />
      <div className="z-10">
        <Footer />
      </div>
    </MainLayout>
  );
};

export default Hair;