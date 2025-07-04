import { NavLink } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import { useEffect } from "react";

interface IProps {
  isActive: boolean;
}

const Menu = ({ isActive }: IProps) => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
     className={`fixed top-0 left-0 bg-white w-full h-full overflow-y-auto z-50 transition-all duration-[600ms] ${
       isActive ? "" : "delay-100"
     }`}
     style={{
       maxWidth: isActive ? "100vw" : "0",
     }}
    >
      <div className="w-full px-[65px] py-[100px] tracking-[0.25em] flex flex-col items-center">
        <img
          className="w-[420px] mb-[110px] max-md:mb-[55px]"
          src={Logo}
          alt=""
        />
        <div className="flex flex-col gap-[30px] items-center font-ezra-medium text-[20px] max-md:text-[15px]">
          <NavLink
            to="/"
            className={`${
              isActive ? "" : "-translate-x-56"
            } transition-all duration-300 delay-[100ms]`}
          >
            <p>HOME</p>
          </NavLink>
          <NavLink
            to="/wellness"
            className={`${
              isActive ? "" : "-translate-x-56"
            } transition-all duration-300 delay-[150ms]`}
          >
            WELLNESS
          </NavLink>
          <NavLink
            to="/spa"
            className={`${
              isActive ? "" : "-translate-x-56"
            } transition-all duration-300 delay-[200ms]`}
          >
            SPA
          </NavLink>
          <NavLink
            to="/hair"
            className={`${
              isActive ? "" : "-translate-x-56"
            } transition-all duration-300 delay-[250ms]`}
          >
            HAIR
          </NavLink>
          <NavLink
            to="/performance-therapy"
            className={`${
              isActive ? "" : "-translate-x-56"
            } transition-all duration-300 delay-[300ms]`}
          >
            PERFORMANCE THERAPY
          </NavLink>
          {/* <NavLink
            to="/#"
            className={`${
              isActive ? "" : "-translate-x-56"
            } transition-all duration-300 delay-[350ms]`}
          >
            CONTACT
          </NavLink> */}
          <NavLink
            to="/about-us"
            className={`${
              isActive ? "" : "-translate-x-56"
            } transition-all duration-300 delay-[400ms]`}
          >
            ABOUT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Menu;
