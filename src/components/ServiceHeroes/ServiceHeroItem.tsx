import { useState, ComponentType, SVGProps, useRef, useEffect } from "react";
import Plus from "../../svg/Plus";

interface IProps {
  Icon: ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;
  title: string;
  description: string;
  bgImg: string;
  bgGradient?: string;
}

const ServiceHeroItem = ({
  description,
  Icon,
  title,
  bgImg,
  bgGradient,
}: IProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [descriptionHeight, setDescriptionHeight] = useState(0);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (descriptionRef.current) {
      if (isHovered) {
        setDescriptionHeight(descriptionRef.current.scrollHeight);
      } else {
        setDescriptionHeight(0);
      }
    }
  }, [isHovered]);

  return (
    <div
      className="flex-1 h-full bg-cover max-md:min-h-[750px] cursor-pointer"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="w-full h-full max-md:min-h-[750px] bg-cover mix-blend-multiply relative"
        style={{
          backgroundImage: bgGradient,
        }}
      >
        <div
          className={`transition-all duration-300 absolute ${
            isHovered
              ? " top-[28px] left-[40px]"
              : "top-[50%] left-[50%] transform-gpu -translate-x-1/2 -translate-y-1/2"
          }`}
        >
          <Icon className={`${isHovered ? "w-[33%] h-auto" : ""}`} />
        </div>
        <div
          className={`transition-opacity duration-300 absolute right-[38px] top-[28px] font-ezra-medium text-[16px] tracking-[0.25em] ${
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <button className="outline-none flex gap-[11px] items-center text-white">
            <p>ADD</p>
            <Plus circleStrokeColor="#fff" circleStrokeWidth={2} />
          </button>
        </div>
        <div className="w-full absolute bottom-[30px] max-md:bottom-[20px] flex flex-col justify-center">
          <div className="w-full relative pb-[60px]">
            <p
              className={`font-ezra-medium text-[20px] tracking-[0.25em] absolute transition-all duration-300 w-[60%] ${
                isHovered
                  ? "left-[40px] text-left"
                  : "left-[50%] transform-gpu -translate-x-1/2 text-center"
              }`}
            >
              {title}
            </p>
          </div>
          <div className="px-[40px]">
            <p
              ref={descriptionRef}
              className={`font-neue-regular text-[16px] leading-[33px] transition-all duration-300 overflow-hidden`}
              style={{
                height: descriptionHeight,
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeroItem;
