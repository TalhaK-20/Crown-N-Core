import elemis from "../assets/img/home/partner/elemis.png";
import clarins from "../assets/img/home/partner/clarins.png";
import lamer from "../assets/img/home/partner/la-mer.png";
import hauschka from "../assets/img/home/partner/dr-hauschka.png";
import sothys from "../assets/img/home/partner/sothys.png";

const partners = [elemis, clarins, lamer, hauschka, sothys];

const Partners = () => {
  return (
    <>
      <div className="flex justify-between max-md:justify-center px-[100px] max-md:px-[10px] gap-[100px] max-md:gap-[20px] items-center py-[40px] appear max-md:flex-wrap">
        {partners.map((item, i) => (
          <div key={i} className="flex-1 max-md:flex-none">
            <img
              className={`h-[100px] max-md:h-[50px] max-md:w-[100px] w-full object-contain ${
                i === 3 || i === 4 ? "max-md:object-cover" : ""
              }`}
              src={item}
              alt=""
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Partners;
