interface IProps {
  className?: string;
}

const BodyScrub = ({ className }: IProps) => {
  return (
    <svg
      className={`${
        className ? className : "w-[120px] h-[200px]"
      } transition-all duration-300`}
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2048_715)">
        <path
          d="M39.1243 157.91C37.9938 160.404 34.5641 160.417 33.4168 157.936C21.3719 131.889 6.18014 92.4127 2.06668 59.4979C0.00770884 43.0226 0.747365 28.3557 5.89367 17.8494C8.45618 12.618 12.108 8.42343 17.0618 5.52868C22.021 2.63073 28.3466 0.999859 36.3067 0.99986C44.2562 0.99986 50.5591 2.64139 55.4894 5.55539C60.4143 8.46622 64.0325 12.6837 66.5597 17.9426C71.6354 28.5046 72.2939 43.2389 70.1803 59.7587C65.9579 92.7618 50.7668 132.232 39.1243 157.91Z"
          stroke="white"
          strokeWidth="2"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2048_715"
          x="0"
          y="0"
          width="119.531"
          height="199.424"
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
          <feOffset dx="38.6349" dy="30.0494" />
          <feGaussianBlur stdDeviation="4.29277" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2048_715"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2048_715"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default BodyScrub;
