interface IProps {
  color?: string;
}

const Vector = ({ color }: IProps) => {
  return (
    <svg
      width="40"
      height="2"
      viewBox="0 0 40 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M40 1L0 1" stroke={color ? color : "black"} strokeWidth="2" />
    </svg>
  );
};

export default Vector;
