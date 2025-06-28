import Footer from "../components/Footer";
import MainLayout from "../layout/MainLayout";
import "../assets/css/CustomProductScrollbar.css";
import Services from "../components/Services";
import watercolorPaperImg from "../assets/img/hair/watercolor-paper.jpg";
import spaImg from "../assets/img/spa/spa-bg.jpg";
import LymphaticDraining from "../svg/LymphaticDraining";
import Massage from "../svg/Massage";
import BodyScrub from "../svg/BodyScrub";
import Product_SPA from "../components/Product-SPA";
import { ServiceHeroType } from "../types/SericeHeroType";
import ServiceHeroes from "../components/ServiceHeroes/ServiceHeroes";

const heroData: ServiceHeroType = [
  {
    bgImg: watercolorPaperImg,
    Icon: LymphaticDraining,
    title: "LYMPHATIC DRAINING",
    description:
      "Lymphatic Drainage Therapy is a gentle, therapeutic massage that promotes the natural drainage of the lymph, which carries waste products away from the tissues. This treatment helps to reduce swelling, detoxify the body, improve circulation, and boost the immune system. It’s perfect for those looking to enhance their overall well-being, improve skin tone, or recover from surgery or injury. By encouraging the flow of lymph fluid, the body is better able to fight infections and heal faster, leaving you feeling lighter, refreshed, and revitalized. Perfect for stress relief and health maintenance!",
    bgGradient: "linear-gradient(to top, #BCADA395 100%, rgba(0, 0, 0, 0.1))",
  },
  {
    bgImg: watercolorPaperImg,
    Icon: Massage,
    title: "MASSAGE",
    description:
      "Massage Therapy is a relaxing treatment that eases muscle tension, reduces stress, and improves circulation. It helps relieve pain, promote relaxation, and boost overall well-being, leaving you feeling rejuvenated and refreshed. Perfect for stress relief, muscle recovery, and total body relaxation!",
    bgGradient: "linear-gradient(to top, #729DA895 100%, rgba(0, 0, 0, 0.1))",
  },
  {
    bgImg: watercolorPaperImg,
    Icon: BodyScrub,
    title: "BODY SCRUB + WRAP",
    description:
      "Body Scrub and Wrap Therapy is a luxurious treatment that exfoliates and nourishes your skin. The scrub removes dead skin cells, leaving your skin soft and smooth, while the wrap hydrates, detoxifies, and boosts circulation. It’s perfect for achieving glowing, rejuvenated skin and total body relaxation!",
    bgGradient: "linear-gradient(to top, #A57E6F95 100%, rgba(0, 0, 0, 0.1))",
  },
];

const Spa = () => {
  return (
    <MainLayout>
      <div
        className="h-[803px] bg-cover bg-[80%] bg-no-repeat flex justify-between pt-[58px] pb-[69px] px-[70px] text-white max-md:px-[20px]"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1) 1%, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${spaImg})`,
        }}
      >
        <div className="h-full flex flex-col justify-between">
          <p
            className="rotate-180 font-ezra-medium text-[24px] leading-[27px] tracking-[0.25em]"
            style={{
              writingMode: "vertical-rl",
            }}
          >
            REVITALIZE
          </p>
          <p className="font-ezra-medium text-[32px] tracking-[0.25em]">SPA</p>
        </div>
        <div>
          <p className="font-brownish text-[100px] leading-[100px]">02</p>
        </div>
      </div>

      <Product_SPA />

      {/* <div className="h-[770px] flex text-white max-md:flex-col max-md:h-fit">
        <div
          className="flex-1 h-full bg-cover max-md:h-[375px] max-md:flex-none"
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
            <LymphaticDraining />
            <div className="w-full absolute bottom-[70px] flex justify-center max-md:bottom-[20px]">
              <p className="font-ezra-medium text-[16px] tracking-[0.25em]">
                LYMPHATIC DRAINING
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex-1 h-full bg-cover max-md:flex-none max-md:h-[375px]"
          style={{
            backgroundImage: `url(${watercolorPaperImg})`,
          }}
        >
          <div
            className="w-full h-full bg-cover mix-blend-multiply flex items-center justify-center relative"
            style={{
              backgroundImage: `linear-gradient(to top, #729DA895 100%, rgba(0, 0, 0, 0.1))`,
            }}
          >
            <Massage />
            <div className="w-full absolute bottom-[70px] max-md:bottom-[20px] flex justify-center">
              <p className="font-ezra-medium text-[16px] tracking-[0.25em]">
                MASSAGE
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex-1 h-full bg-cover max-md:flex-none max-md:h-[375px]"
          style={{
            backgroundImage: `url(${watercolorPaperImg})`,
          }}
        >
          <div
            className="w-full h-full bg-cover mix-blend-multiply flex items-center justify-center relative"
            style={{
              backgroundImage: `linear-gradient(to top, #A57E6F95 100%, rgba(0, 0, 0, 0.1))`,
            }}
          >
            <BodyScrub />
            <div className="w-full absolute bottom-[70px] max-md:bottom-[20px] flex justify-center">
              <p className="font-ezra-medium text-[16px] tracking-[0.25em]">
                BODY SCRUB + WRAP
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

export default Spa;