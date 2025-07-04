import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";
import Vector from "../svg/Vector";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import CrownLogoIcon from "../svg/CrownLogoIcon";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isBorder, setIsBorder] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const setBorderActive = () => {
    setIsBorder(true);
  };

  const setBorderInactive = () => {
    setIsBorder(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-[100]">
      <div
        className={`bg-white flex ${isScrolled ? "py-[18px]" : "py-[80px]"} ${
          isMenuActive
            ? "max-md:justify-end md:justify-between"
            : "justify-between"
        } items-center px-[48px] max-md:py-[20px] max-md:flex-row-reverse transition-all duration-300`}
      >
        <button
          className={`outline-none h-[50px] w-fit pl-[5px] z-[70] ${
            isMenuActive
              ? "md:translate-x-[85vw] max-md:fixed top-[20px] right-[50px]"
              : ""
          } transition-all duration-500 ${
            isMenuActive ? "delay-100" : "delay-0"
          }`}
          onClick={toggleMenu}
        >
          <div className="relative">
            <div
              className={`${
                isMenuActive
                  ? "rotate-45 absolute left-0 top-0"
                  : "relative left-[7px]"
              } transition-all duration-200`}
            >
              <Reveal bgColor="transparent">
                <Vector />
              </Reveal>
            </div>
            <div
              className={`${
                isMenuActive ? "-rotate-45 absolute left-0 top-0" : "mt-[8px]"
              } transition-all duration-200`}
            >
              <Reveal bgColor="transparent">
                <Vector />
              </Reveal>
            </div>
          </div>
        </button>
        {isScrolled ? (
          <div className="py-[20px] w-full flex justify-center absolute top-0 left-0">
            <Reveal bgColor="transparent">
              <CrownLogoIcon color="#000" width={46} height={49} />
            </Reveal>
          </div>
        ) : (
          <div className="flex flex-col gap-[21px] w-full absolute top-[70px] max-md:top-[15px] max-md:left-[10px] left-0 items-center">
            <div className="w-[53%] max-md:w-full max-md:h-[60px] flex items-center">
              <Reveal bgColor="transparent" className="w-full">
                <NavLink to="/">
                  <img
                    className={`w-full object-contain ${
                      isScrolled
                        ? "max-h-[80px]"
                        : "max-h-[100px] max-md:w-[70%]"
                    } transition-all duration-300`}
                    src={logo}
                    alt=""
                  />
                </NavLink>
              </Reveal>
            </div>
            <div
              className={`flex justify-center w-[53%] font-normal leading-[13px] tracking-[0.25em] text-[12px] font-ezra-medium max-md:hidden ${
                isScrolled ? "max-h-0 overflow-hidden" : "max-h-[100px]"
              } transition-all duration-300`}
            >
              <NavLink to="#" className="">
                <Reveal bgColor="transparent">WELLNESS SPA + SALON</Reveal>
              </NavLink>
            </div>
          </div>
        )}
        <div className={`max-md:hidden z-10`}>
          <NavLink
            to="#"
            className={`font-neue-regular text-[14px] leading-[14px] tracking-[0.25em] ${
              isBorder ? "font-bold" : ""
            }`}
            onMouseEnter={setBorderActive}
            onMouseLeave={setBorderInactive}
          >
            <Link to="/host-event" style={{ textDecoration: "none" }}>
                <Reveal bgColor="transparent">HOST EVENT</Reveal>
            </Link>
          </NavLink>
          <div
            className={`w-full h-[2px] ${
              isBorder ? "border" : ""
            } border-solid border-black transition-all duration-500`}
            style={{
              maxWidth: isBorder ? "100%" : "0",
            }}
          ></div>
        </div>
      </div>
      <Menu isActive={isMenuActive} />
    </div>
  );
};
export default Header;