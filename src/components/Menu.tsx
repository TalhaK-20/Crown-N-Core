import { NavLink } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import { useEffect } from "react";

interface IProps {
  isActive: boolean;
}

const Menu = ({ isActive }: IProps) => {
  useEffect(() => {
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
        {/* Add flex centering to the nav container */}
        <div className="flex flex-col gap-[30px] items-center justify-center font-ezra-medium text-[20px] max-md:text-[15px] w-full">
          <NavLink
            to="/"
            className={`${
              isActive ? "" : "-translate-x-56"
            } transition-all duration-300 delay-[100ms] text-center w-full flex justify-center`}
          >
            <p>HOME</p>
          </NavLink>
          <NavLink
            to="/wellness"
            className={`${
              isActive ? "" : "-translate-x-56"
            } transition-all duration-300 delay-[150ms] text-center w-full flex justify-center`}
          >
            WELLNESS
          </NavLink>
          <NavLink
            to="/spa"
            className={`${
              isActive ? "" : "-translate-x-56"
            } transition-all duration-300 delay-[200ms] text-center w-full flex justify-center`}
          >
            SPA
          </NavLink>
          <NavLink
            to="/hair"
            className={`${
              isActive ? "" : "-translate-x-56"
            } transition-all duration-300 delay-[250ms] text-center w-full flex justify-center`}
          >
            HAIR
          </NavLink>
          <NavLink
            to="/performance-therapy"
            className={`${
              isActive ? "" : "-translate-x-56"
            } transition-all duration-300 delay-[300ms] text-center w-full flex justify-center`}
          >
            PERFORMANCE THERAPY
          </NavLink>
          <NavLink
            to="/about-us"
            className={`${
              isActive ? "" : "-translate-x-56"
            } transition-all duration-300 delay-[400ms] text-center w-full flex justify-center`}
          >
            ABOUT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Menu;
