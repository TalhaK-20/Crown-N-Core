interface IProps {
  className?: string;
}

const LymphaticDraining = ({ className }: IProps) => {
  return (
    <svg
      className={`${
        className ? className : "w-[215px] h-[203px]"
      } transition-all duration-300`}
      viewBox="0 0 215 203"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2112_749)">
        <path
          d="M1 96.5C1 71.1718 11.0616 46.881 28.9713 28.9713C46.881 11.0616 71.1718 0.999998 96.5 1C121.828 1 146.119 11.0616 164.029 28.9713C181.938 46.881 192 71.1718 192 96.5"
          stroke="white"
          strokeWidth="2"
        />
      </g>
      <g filter="url(#filter1_d_2112_749)">
        <path
          d="M71 78.5L79.636 87.136C83.1508 90.6508 83.1508 96.3492 79.636 99.864L77.364 102.136C73.8492 105.651 73.8492 111.349 77.364 114.864L79.636 117.136C83.1508 120.651 83.1508 126.349 79.636 129.864L77.364 132.136C73.8492 135.651 73.8492 141.349 77.364 144.864L79.636 147.136C83.1508 150.651 83.1508 156.349 79.636 159.864L77.364 162.136C73.8492 165.651 73.8492 171.349 77.364 174.864L86 183.5"
          stroke="white"
          strokeWidth="2"
        />
      </g>
      <g filter="url(#filter2_d_2112_749)">
        <path
          d="M108 78.5L116.636 87.136C120.151 90.6508 120.151 96.3492 116.636 99.864L114.364 102.136C110.849 105.651 110.849 111.349 114.364 114.864L116.636 117.136C120.151 120.651 120.151 126.349 116.636 129.864L114.364 132.136C110.849 135.651 110.849 141.349 114.364 144.864L116.636 147.136C120.151 150.651 120.151 156.349 116.636 159.864L114.364 162.136C110.849 165.651 110.849 171.349 114.364 174.864L123 183.5"
          stroke="white"
          strokeWidth="2"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2112_749"
          x="0"
          y="0"
          width="215"
          height="115.5"
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
            result="effect1_dropShadow_2112_749"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2112_749"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_2112_749"
          x="70.2928"
          y="77.793"
          width="38.4143"
          height="124.414"
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
            result="effect1_dropShadow_2112_749"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2112_749"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_2112_749"
          x="107.293"
          y="77.793"
          width="38.4143"
          height="124.414"
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
            result="effect1_dropShadow_2112_749"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2112_749"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default LymphaticDraining;
