interface IProps {
  className?: string;
}

const Massage = ({ className }: IProps) => {
  return (
    <svg
      className={`${
        className ? className : "w-[178px] h-[166px]"
      } transition-all duration-300`}
      viewBox="0 0 178 166"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2112_750)">
        <circle
          cx="106.5"
          cy="98.5"
          r="48.5"
          transform="rotate(-90 106.5 98.5)"
          stroke="white"
          strokeWidth="2"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#filter1_d_2112_750)">
        <circle
          cx="49.5"
          cy="98.5"
          r="48.5"
          transform="rotate(-90 49.5 98.5)"
          stroke="white"
          strokeWidth="2"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#filter2_d_2112_750)">
        <circle
          cx="77.5"
          cy="49.5"
          r="48.5"
          transform="rotate(-90 77.5 49.5)"
          stroke="white"
          strokeWidth="2"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2112_750"
          x="57"
          y="49"
          width="121"
          height="117"
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
            result="effect1_dropShadow_2112_750"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2112_750"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_2112_750"
          x="0"
          y="49"
          width="121"
          height="117"
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
            result="effect1_dropShadow_2112_750"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2112_750"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_2112_750"
          x="28"
          y="0"
          width="121"
          height="117"
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
            result="effect1_dropShadow_2112_750"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2112_750"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Massage;
