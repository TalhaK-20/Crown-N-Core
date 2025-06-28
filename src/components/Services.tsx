import hair from "../assets/img/hair/hair-bg.jpg";
import wellness from "../assets/img/home/wellness.jpg";
import spa from "../assets/img/home/spa.jpg";
import performanceTherapy from "../assets/img/home/performance-therapy.jpg";
import Reveal from "./Reveal";
import { useNavigate } from "react-router-dom";
import "../assets/css/PerformanceTherapyScrollbar.css";

const Services = () => {
  const naviagte = useNavigate();

  // useEffect(() => {
  // Scroll to the top when the component mounts
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div>
      <div className="flex h-[778px] max-md:flex-col max-md:h-fit">
        <div
          className="flex-1 relative cursor-pointer bg-cover flex flex-col justify-between px-[34px] py-[26px] bg-no-repeat transitionFromLeft bg-center max-md:flex-none max-md:min-h-[780px] max-md:px-[10px]"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${wellness}`,
          }}
          onClick={() => naviagte("/wellness")}
        >
          <div className="flex justify-between text-white w-full">
            <div className="pt-[51px]">
              <p
                className="text-[18px] leading-[27px] tracking-[0.25em] font-normal rotate-180 font-ezra-medium"
                style={{
                  writingMode: "vertical-rl",
                }}
              >
                <Reveal bgColor="transparent">REPLENISH</Reveal>
              </p>
            </div>
            <div className="absolute top-[60px] right-[10px]">
              <p
                className="rotate-180 text-[80px] font-brownish leading-[80px]"
                style={{
                  writingMode: "vertical-rl",
                }}
              >
                <Reveal bgColor="transparent">01</Reveal>
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center text-white">
            <p className="text-[16px] font-ezra-medium tracking-[0.25em] font-normal">
              <Reveal bgColor="transparent">WELLNESS</Reveal>
            </p>
          </div>
        </div>
        <div
          className="flex-1 relative cursor-pointer bg-cover flex flex-col justify-between px-[34px] py-[26px] bg-no-repeat bg-center max-md:min-h-[780px] max-md:flex-none max-md:px-[10px]"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${spa}`,
            // backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0)), url(${spa})`,
          }}
          onClick={() => naviagte("/spa")}
        >
          <div className="flex justify-between text-white w-full">
            <div className="pt-[51px]">
              <p
                className="text-[18px] leading-[27px] tracking-[0.25em] font-normal rotate-180 font-ezra-medium"
                style={{
                  writingMode: "vertical-rl",
                }}
              >
                <Reveal bgColor="transparent">REVITALIZE</Reveal>
              </p>
            </div>
            <div className="absolute top-[60px] right-[10px]">
              <p
                className="rotate-180 text-[80px] font-brownish leading-[80px]"
                style={{
                  writingMode: "vertical-rl",
                }}
              >
                <Reveal bgColor="transparent">02</Reveal>
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center text-white">
            <p className="text-[16px] font-ezra-medium tracking-[0.25em] font-normal">
              <Reveal bgColor="transparent">SPA</Reveal>
            </p>
          </div>
        </div>
        <div
          className="flex-1 relative cursor-pointer bg-cover flex flex-col justify-between px-[34px] py-[26px] bg-no-repeat transitionFromRight bg-center max-md:min-h-[780px] max-md:flex-none max-md:px-[10px]"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${hair}`,
          }}
          onClick={() => naviagte("/hair")}
        >
          <div className="flex justify-between text-white w-full">
            <div className="pt-[51px]">
              <p
                className="text-[18px] leading-[27px] tracking-[0.25em] font-normal rotate-180 font-ezra-medium"
                style={{
                  writingMode: "vertical-rl",
                }}
              >
                <Reveal bgColor="transparent">RENEW</Reveal>
              </p>
            </div>
            <div className="absolute top-[60px] right-[10px]">
              <p
                className="rotate-180 text-[80px] font-brownish leading-[80px]"
                style={{
                  writingMode: "vertical-rl",
                }}
              >
                <Reveal bgColor="transparent">03</Reveal>
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center text-white">
            <p className="text-[16px] font-ezra-medium tracking-[0.25em] font-normal">
              <Reveal bgColor="transparent">HAIR</Reveal>
            </p>
          </div>
        </div>
      </div>
      {/* Performance Therapy */}
      <div className="flex h-[750px]">
        <div
          className={`bg-cover bg-no-repeat bg-center h-full pt-[60px] pb-[86px] cursor-pointer transition-all duration-300 w-full px-[72px] max-md:px-[10px]`}
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${performanceTherapy}`,
          }}
          onClick={() => naviagte("/performance-therapy")}
        >
          <div className="flex flex-col justify-between h-full">
            <div className="flex justify-between">
              <Reveal bgColor="transparent">
                <p
                  className={`font-ezra-medium font-[18px] rotate-180 tracking-[0.25em] leading-[27px] text-white`}
                  style={{
                    writingMode: "vertical-rl",
                  }}
                >
                  GROW
                </p>
              </Reveal>
              <Reveal bgColor="transparent">
                <p
                  className={`font-brownish text-[80px] rotate-180 leading-[80px] text-white`}
                  style={{
                    writingMode: "vertical-rl",
                  }}
                >
                  04
                </p>
              </Reveal>
            </div>
            <div className={`w-full flex justify-center`}>
              <Reveal bgColor="transparent">
                <p
                  className={`font-ezra-medium tracking-[0.25em] text-white transition-all duration-500 text-[16px] max-md:text-center`}
                >
                  PERFORMANCE THERAPY
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
