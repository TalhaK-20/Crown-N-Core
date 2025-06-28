interface IProps {
  className?: string;
}

const JapaneseSpa = ({ className }: IProps) => {
  return (
    <svg
      className={`${
        className ? className : "w-[215px] h-[212px]"
      } transition-all duration-300`}
      viewBox="0 0 215 212"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2112_737)">
        <circle
          cx="96.5"
          cy="96.5"
          r="95.5"
          stroke="white"
          strokeWidth="2"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#filter1_d_2112_737)">
        <path d="M98.5 21V80.5" stroke="white" strokeWidth="2" />
      </g>
      <defs>
        <filter
          id="filter0_d_2112_737"
          x="0"
          y="0"
          width="215"
          height="212"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="18" dy="15" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2112_737"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2112_737"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_2112_737"
          x="97.5"
          y="21"
          width="24"
          height="77.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="18" dy="14" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2112_737"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2112_737"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default JapaneseSpa;
