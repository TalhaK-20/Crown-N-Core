interface IProps {
  circleStrokeColor?: string;
  circleStrokeWidth?: number;
}

const Plus = ({ circleStrokeColor, circleStrokeWidth }: IProps) => {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 10V28.5"
        stroke="white"
        strokeWidth={circleStrokeWidth ? circleStrokeWidth : 1}
      />
      <path
        d="M28.25 19.25L9.75 19.25"
        stroke="white"
        strokeWidth={circleStrokeWidth ? circleStrokeWidth : 1}
      />
      <circle
        cx="19"
        cy="19"
        r="18.5"
        stroke={circleStrokeColor ? circleStrokeColor : "#D9D9D9"}
        strokeWidth={circleStrokeWidth ? circleStrokeWidth : 1}
      />
    </svg>
  );
};

export default Plus;
