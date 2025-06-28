import ServiceHeroItem from "./ServiceHeroItem";
import { ComponentType, SVGProps } from "react";

interface IProps {
  heroes: {
    Icon: ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;
    title: string;
    description: string;
    bgImg: string;
    bgGradient?: string;
  }[];
}

const ServiceHeroes = ({ heroes }: IProps) => {
  return (
    <div>
      <div className="h-[700px] flex text-white appear max-md:flex-col max-md:h-fit">
        {heroes.map((hero, index) => (
          <ServiceHeroItem
            key={index}
            Icon={hero.Icon}
            title={hero.title}
            description={hero.description}
            bgImg={hero.bgImg}
            bgGradient={hero.bgGradient}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceHeroes;
