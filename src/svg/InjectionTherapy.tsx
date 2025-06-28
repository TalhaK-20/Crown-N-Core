interface IProps {
  className?: string;
}

const InjectionTherapy = ({ className }: IProps) => {
  return (
    <svg
      className={`${
        className ? className : "w-[215px] h-[211px]"
      } transition-all duration-300`}
      viewBox="0 0 215 211"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2109_736)">
        <circle
          cx="96.5"
          cy="96.5"
          r="95.5"
          stroke="white"
          strokeWidth="2"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#filter1_d_2109_736)">
        <path
          d="M95.9479 62.1501C96.2863 61.4037 97.2936 61.4019 97.6358 62.142C103.241 74.2621 110.291 92.5942 112.197 107.846C113.152 115.49 112.792 122.196 110.464 126.949C109.31 129.304 107.677 131.174 105.471 132.463C103.259 133.755 100.41 134.5 96.7742 134.5C93.1441 134.5 90.3063 133.751 88.1087 132.452C85.9165 131.156 84.2984 129.277 83.1607 126.909C80.864 122.13 80.5415 115.392 81.5222 107.726C83.479 92.4315 90.5292 74.1014 95.9479 62.1501Z"
          stroke="white"
          strokeWidth="2"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2109_736"
          x="0"
          y="0"
          width="215"
          height="211"
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
            result="effect1_dropShadow_2109_736"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2109_736"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_2109_736"
          x="80"
          y="60.5886"
          width="55.6895"
          height="92.9114"
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
            result="effect1_dropShadow_2109_736"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2109_736"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default InjectionTherapy;
