interface IProps {
  className?: string;
}

const Stemwave = ({ className }: IProps) => {
  return (
    <svg
      className={`${
        className ? className : "w-[215px] h-[212px]"
      } transition-all duration-300`}
      viewBox="0 0 215 212"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2109_734)">
        <circle
          cx="96.5"
          cy="96.5"
          r="95.5"
          stroke="white"
          strokeWidth="2"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#filter1_d_2109_734)">
        <path
          d="M70 137L89.6716 117.328C92.1914 114.809 90.4068 110.5 86.8431 110.5L79.6569 110.5C76.0932 110.5 74.3086 106.191 76.8284 103.672L89.6716 90.8284C92.1914 88.3086 90.4068 84 86.8431 84L79.6569 84C76.0932 84 74.3086 79.6914 76.8284 77.1716L96.5 57.5"
          stroke="white"
          strokeWidth="2"
        />
      </g>
      <g filter="url(#filter2_d_2109_734)">
        <path
          d="M96.5 137L116.172 117.328C118.691 114.809 116.907 110.5 113.343 110.5L106.157 110.5C102.593 110.5 100.809 106.191 103.328 103.672L116.172 90.8284C118.691 88.3086 116.907 84 113.343 84L106.157 84C102.593 84 100.809 79.6914 103.328 77.1716L123 57.5"
          stroke="white"
          strokeWidth="2"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2109_734"
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
            result="effect1_dropShadow_2109_734"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2109_734"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_2109_734"
          x="69.2928"
          y="56.793"
          width="49.9143"
          height="99.9141"
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
            result="effect1_dropShadow_2109_734"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2109_734"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_2109_734"
          x="95.7928"
          y="56.793"
          width="49.9143"
          height="99.9141"
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
            result="effect1_dropShadow_2109_734"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2109_734"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Stemwave;
