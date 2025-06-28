import Facebook from "../svg/Facebook";
import Instagram from "../svg/Instagram";
import Tiktok from "../svg/Tiktok";
import logo from "../assets/img/logo.png";
import MobileLogo from "../assets/img/MobileLogo.png";
import Reveal from "./Reveal";
import CrownLogoIcon from "../svg/CrownLogoIcon";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="bg-black text-white px-[60px] pt-[70px] pb-[15px] flex flex-col gap-[120px] max-md:gap-[40px] max-md:px-[20px] max-md:items-center max-md:text-center">
      <div className="flex justify-between font-ezra-medium tracking-[0.25em] max-md:hidden">
        <p>
          <Reveal bgColor="transparent">WELLNESS SPA + SALON</Reveal>
        </p>
        <p>
          <Reveal bgColor="transparent">WELLNESS@CROWNANDCORE.COM</Reveal>
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-[48px] items-center">
          <div>
            <Reveal bgColor="transparent">
              <CrownLogoIcon />
            </Reveal>
          </div>
          <div className="w-[62.5vw] items-center max-md:hidden">
            <Reveal bgColor="transparent">
              <img
                className="invert-[1] h-full w-full object-contain"
                src={logo}
                alt=""
              />
            </Reveal>
          </div>
          <div className="w-[62.5vw] items-center md:hidden">
            <Reveal bgColor="transparent">
              <img
                className="h-full w-full object-contain"
                src={MobileLogo}
                alt=""
              />
            </Reveal>
          </div>
          <p>
          <Reveal bgColor="transparent">WELLNESS SPA + SALON</Reveal>
           </p>
          <div className="flex flex-col gap-[15px] items-center">
            <div className="border-b border-solid border-white w-[40px]"></div>
            <button className="outline-none rounded-full bg-white bg-opacity-60 hover:bg-opacity-100 hover:text-black transition-all duration-300 ease-linear px-[91px] py-[14px] max-md:px-[70px] max-md:text-[11px] font-neue-regular tracking-[0.25em]">
              <Link to="/book-appointment" style={{ textDecoration: "none" }}>
                <Reveal bgColor="transparent">BOOK APPOINTMENT</Reveal>
              </Link>
            </button>
            <div className="border-b border-solid border-white w-[40px]"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between font-ezra-medium tracking-[0.25em] max-md:flex-col max-md:gap-[30px] relative">
        <p className="max-w-[600px] max-lg:text-[5px]">
          <Reveal bgColor="transparent">
          1105 Bellevue Way NE #A7, Bellevue WA 98004
          </Reveal>
        </p>
        <div className="flex gap-[45px] max-md:hidden absolute top-[-90px] left-0 w-full justify-center">
          <Reveal bgColor="transparent">
            <Facebook />
          </Reveal>
          <Reveal bgColor="transparent">
            <Instagram />
          </Reveal>
          <Reveal bgColor="transparent">
            <Tiktok />
          </Reveal>
        </div>
        <p>
          <Reveal bgColor="transparent">425.XXX.XXX</Reveal>
        </p>
      </div>
    </div>
  );
};

export default Footer;