import Footer from "../components/Footer";
import MainLayout from "../layout/MainLayout";
import "../assets/css/CustomProductScrollbar.css";
import Services from "../components/Services";
import performanceTherapy from "../assets/img/home/performance-therapy.jpg";
import Product_Performance from "../components/Product-Performance";

const PerformanceTherapy = () => {
  return (
    <MainLayout>
      <div
        className="h-[803px] bg-cover bg-[80%] bg-no-repeat flex justify-between pt-[58px] pb-[69px] px-[70px] text-white max-md:bg-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1) 1%, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${performanceTherapy})`,
        }}
      >
        <div className="h-full flex flex-col justify-between">
          <p
            className="rotate-180 font-ezra-medium text-[24px] leading-[27px] tracking-[0.25em]"
            style={{
              writingMode: "vertical-rl",
            }}
          >
            GROW
          </p>
          <div>
            <p className="font-ezra-medium text-[32px] tracking-[0.25em]">
              SPORTS
            </p>
            <p className="font-ezra-medium text-[32px] tracking-[0.25em]">
              THERAPY
            </p>
          </div>
        </div>
        <div>
          <p className="font-brownish text-[100px] leading-[100px]">04</p>
        </div>
      </div>

      <Product_Performance />
      <Services />
      <div className="z-10">
        <Footer />
      </div>
    </MainLayout>
  );
};

export default PerformanceTherapy;
