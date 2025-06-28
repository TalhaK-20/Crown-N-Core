import crown1 from "../assets/img/home/crown1.jpg";
import crown2 from "../assets/img/home/crown2.jpg";
import crown3 from "../assets/img/home/crown3.jpg";

const Crowns = () => {
  return (
    <div className="flex h-full appear overflow-hidden max-md:flex-col max-md:w-full">
      <div
        className="bg-cover min-h-[480px] w-[33.3%] max-md:w-full flex justify-between px-[24px] py-[71px] text-white transitionFromLeft"
        style={{
          backgroundImage: `url(${crown1})`,
        }}
      ></div>
      <div
        className="bg-cover min-h-[480px] w-[33.3%] max-md:w-full flex justify-center items-center gap-[0px]"
        style={{
          backgroundImage: `url(${crown2})`,
        }}
      ></div>
      <div
        className="bg-cover min-h-[480px] w-[33.3%] max-md:w-full max-md:h-[375px] flex justify-between items-center text-white px-[50px] py-[45px] font-ezra-medium"
        style={{
          backgroundImage: `url(${crown3})`,
        }}
      ></div>
    </div>
  );
};

export default Crowns;
