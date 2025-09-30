import { Link } from "react-router-dom";

const mockData = [
  {
    title: "CHEMICAL / COLOR",
    description:
      " Transform your look with expert color treatments, from 18vibrant hues to soft highlights and balayage. Whether you're looking for full coverage, gray blending, or bold artistic color, our professionals will ensure a flawless finish while protecting your hair's health",
    price: 300,
  },
  {
    title: "BARBER",
    description:
      "Precision cuts and grooming for all hair types and textures. Our barbering services include fades, trims, beard shaping, and personalized styling tailored to your preferences",
    price: 150,
  },
  {
    title: "BRAIDING AND LOCS",
    description:
      "Our skilled braiders and locticians are true artists, creating intricate styles that honor the beauty and individuality of every client. From various trends in box braids and cornrows to loc styling, starter locs, and maintenance, we specialize in protective styles that showcase your personality while 18promoting healthy hair.",
    price: 450,
  },
  {
    title: "HAIR CUTS",
    description:
      " From classic cuts to modern trends, we create styles that suit your face shape, personality, and lifestyle. Each haircut is customized to enhance your features and promote healthy hair growth.",
    price: 120,
  },
  {
    title: "HAIR EXTENSION",
    description:
      " Whether you want to add length, volume, or dimension, our specialists offer seamless hair extension services, including tapeins, wefts, and micro-links, to give you a natural, flawless look.",
    price: 200,
  },
  {
    title: "HAIR STYLING",
    description:
      "Perfect for special occasions or an everyday confidence boost, our expert stylists provide blowouts, curls, updos, and sleek styles that leave you polished and radiant",
    price: 180,
  },
  {
    title: "HAIR TREATMENTS",
    description:
      "Nourish and repair damaged strands with our deepconditioning treatments and bondbuilding solutions. We offer personalized options to restore moisture, strength, and shine to your hair",
    price: 250,
  },
  {
    title: "NATURAL HAIR SERVICES",
    description:
      "  Celebrate your curls, coils, and waves with services tailored specifically for textured hair. Our team specializes in protective styling, twist-outs, braid-outs, loc maintenance, and other techniques that preserve the integrity of your natural hair.",
    price: 350,
  },
  {
    title: "SCALP TREATMENTS",
    description:
      "Achieve a healthy scalp with our detoxifying and rejuvenating treatments. From Japanese head spa services to PRP (platelet-rich plasma) injections, we offer advanced solutions to cleanse, hydrate, and revitalize your scalp for optimal hair growth and balance.",
    price: 170,
  },
  {
    title: "THERMAL HAIR SERVICES",
    description:
      " Smooth and style your hair with precision thermal treatments, including silk presses, flat ironing, and thermal curling. Our stylists use safe heat-styling techniques to achieve sleek, long-lasting results without compromising your hair's health.",
    price: 210,
  },
];

const Divider = () => {
  return <div className="h-[1px] bg-white w-[100%] mt-[40px] mb-[40px]" />;
};

const Product_Hair = () => {
  return (
    <div className="bg-black pt-[80px] md:pt-[140px] px-5 md:pl-[90px] md:pr-[40px] text-white h-fit overflow-hidden">
      <div className="custom-product-scrollbar h-full pr-0 md:pr-[50px]">
        <div className="flex flex-col gap-[15px] items-center mb-8 md:mb-0">
          <div className="border-b border-solid border-black w-[80px]"></div>
          <Link to="/book-appointment" style={{ textDecoration: "none" }}>
            <button className="outline-none rounded-full bg-black bg-opacity-60 hover:bg-opacity-100 hover:text-white transition-all duration-300 ease-linear px-[70px] md:px-[91px] py-[14px] text-[11px] md:text-[14px] font-neue-regular tracking-[0.25em]">
              BOOK APPOINTMENT
            </button>
          </Link>
          <div className="border-b border-solid border-black w-[80px]"></div>
        </div>

        {mockData.map((item, i) => (
          <div key={i}>
            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8">
              <div className="flex-shrink-0 md:flex-[1.2]">
                <p className="font-ezra-medium text-[12px] md:text-[14px] tracking-[0.25em]">
                  {item.title}
                </p>
              </div>
              <div className="flex-1 md:w-[580px] md:flex-none overflow-hidden">
                <p className="font-neue-regular text-[12px] md:text-[14px] leading-[28px] md:leading-[32px] tracking-[0.1em] break-words">
                  {item.description}
                </p>
              </div>
              <div className="flex gap-[32px] items-center md:flex-[1.2] md:justify-end">
                <p className="font-neue-bold text-[14px] tracking-[0.25em]">
                  {/* ${item.price} */}
                </p>
                <button className="outline-none"></button>
              </div>
            </div>
            {i !== mockData.length - 1 ? (
              <Divider />
            ) : (
              <div className="pb-[40px]"></div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-[15px] items-center pb-8 md:pb-12">
        <div className="border-b border-solid border-black w-[80px]"></div>
        <Link to="/book-appointment" style={{ textDecoration: "none" }}>
          <button className="outline-none rounded-full bg-black bg-opacity-60 hover:bg-opacity-100 hover:text-white transition-all duration-300 ease-linear px-[70px] md:px-[91px] py-[14px] text-[11px] md:text-[14px] font-neue-regular tracking-[0.25em]">
            BOOK APPOINTMENT
          </button>
        </Link>
        <div className="border-b border-solid border-black w-[80px]"></div>
      </div>
    </div>
  );
};

export default Product_Hair;