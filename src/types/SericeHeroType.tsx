import { ComponentType, SVGProps } from "react";

export type ServiceHeroType = {
  Icon: ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;
  title: string;
  description: string;
  bgImg: string;
  bgGradient?: string;
}[];
