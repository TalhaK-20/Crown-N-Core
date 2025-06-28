interface IProps {
  className?: string;
}

const HotOil = ({ className }: IProps) => {
  return (
    <svg
      className={`${
        className ? className : "w-[215px] h-[211px]"
      } transition-all duration-300`}
      viewBox="0 0 215 211"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2112_748)">
        <circle
          cx="96.5"
          cy="96.5"
          r="95.5"
          stroke="white"
          strokeWidth="2"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#filter1_d_2112_748)">
        <path
          d="M73.9479 40.1501C74.2863 39.4037 75.2936 39.4019 75.6358 40.142C81.2407 52.2621 88.2905 70.5942 90.1966 85.8461C91.1519 93.49 90.7922 100.196 88.4639 104.949C87.3105 107.304 85.6772 109.174 83.4709 110.463C81.2591 111.755 78.4099 112.5 74.7742 112.5C71.1441 112.5 68.3063 111.751 66.1087 110.452C63.9165 109.156 62.2984 107.277 61.1607 104.909C58.864 100.13 58.5415 93.3918 59.5222 85.7262C61.479 70.4315 68.5292 52.1014 73.9479 40.1501Z"
          stroke="white"
          strokeWidth="2"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#filter2_d_2112_748)">
        <path
          d="M123.948 79.1501C124.286 78.4037 125.294 78.4019 125.636 79.142C131.241 91.2621 138.291 109.594 140.197 124.846C141.152 132.49 140.792 139.196 138.464 143.949C137.31 146.304 135.677 148.174 133.471 149.463C131.259 150.755 128.41 151.5 124.774 151.5C121.144 151.5 118.306 150.751 116.109 149.452C113.917 148.156 112.298 146.277 111.161 143.909C108.864 139.13 108.542 132.392 109.522 124.726C111.479 109.432 118.529 91.1014 123.948 79.1501Z"
          stroke="white"
          strokeWidth="2"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2112_748"
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
            result="effect1_dropShadow_2112_748"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2112_748"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_2112_748"
          x="58"
          y="38.5889"
          width="55.6895"
          height="92.9111"
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
            result="effect1_dropShadow_2112_748"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2112_748"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_2112_748"
          x="108"
          y="77.5889"
          width="55.6895"
          height="92.9111"
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
            result="effect1_dropShadow_2112_748"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2112_748"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default HotOil;
