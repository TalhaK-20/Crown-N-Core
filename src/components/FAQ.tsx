import { useEffect, useState } from "react";
import Plus from "../svg/Plus";
import Minus from "../svg/Minus";
import Reveal from "./Reveal";

interface IProps {
  question: string;
  answer: string;
}

const FAQ = ({ question, answer }: IProps) => {
  const [questionActive, setQuestionActive] = useState(false);
  const [screenW, setScreenW] = useState(window.innerWidth);

  const toggleQuestion = () => {
    setQuestionActive(!questionActive);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenW(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <div className="flex justify-between items-center px-[10px] max-md:flex-col max-md:items-start max-md:gap-[17px]">
        <div className="max-md:gap-[17px] gap-[20px]">
          <p
            className="font-ezra-medium tracking-[0.25em]"
            style={{
              fontSize: "clamp(12px, 2vw, 14px)",
            }}
          >
            <Reveal bgColor="transparent">{question}</Reveal>
          </p>
          <p
            className="text-[16px] font-neue-regular leading-[32px] tracking-[0.05em] transition-all duration-300 overflow-hidden"
            style={{
              maxHeight: questionActive || screenW < 768 ? "300px" : "0",
            }}
          >
            <Reveal bgColor="trasnparent">{answer}</Reveal>
          </p>
        </div>
        <button className="max-md:hidden outline-none" onClick={toggleQuestion}>
          {questionActive ? (
            <div className="h-[38px] w-[38px] flex justify-center items-center border border-solid border-white rounded-full">
              <Minus />
            </div>
          ) : (
            <Plus />
          )}
        </button>
      </div>
    </>
  );
};

export default FAQ;