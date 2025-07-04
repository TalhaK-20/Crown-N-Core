import { Link } from "react-router-dom";

const mockData = [
  {
    title: "BODY CONTOURING",
    description:
      "A non-invasive body sculpting procedure using Endermologie® which is a skin treatment that uses suction and massage to reduce the appearance of cellulite and hard-shell tighten and rejuvenate the skin. This service aims to reshape specified areas of the body and face, achieving a more defined silhouette without surgery",
    price: 450,
  },
  {
    title: "CHROMOTHERAPY",
    description:
      "A healing therapy, also known as color light therapy, that uses color specific light wavelengths to restore balance, improve mood, and support physical and emotional well-being. Potential benefits include skin health, pain relief, decreased swelling and inflammation, accelerated healing, decreased muscle tension, improved circulation, regulated mood, detoxification, and improved sleep",
    price: 120,
  },

  {
    title: "WELLNESS CONSULTATION",
    description:
      "A personalized consultation with our licensed and certified nurse practitioner, focused on overall wellness or managing and preventing chronic conditions through tailored lifestyle and health strategies",
    price: 200,
  },

  {
    title: "CRYOTHERAPY",
    description:
      "A cold therapy that exposes the body to low temperatures; reducing inflammation, relieving pain, and boosting recovery. Step into MECOTEC, our electronically powered cold chamber, and chill your way to wellness – experience reduced inflammation, faster muscle recovery, relief from chronic pain, enhanced blood flow, boosted metabolism, radiant skin, and even a refreshing mood boost, all in just a few invigorating minutes",
    price: 180,
  },
  {
    title: "HYPERBARIC OXYGEN THERAPY",
    description:
      "HBOT involves breathing pure oxygen in a pressurized chamber to promote healing, reduce inflammation, and improve overall cellular health. Experience HpoTech®, our hard-shell hyperbaric oxygen chamber, equipped with Built-In Breathing (BIB) technology, a cutting-edge system that enhances the precision and efficiency of oxygen delivery. This advanced setup allows us to achieve ideal therapeutic pressure for various medical needs, including longevity goals, health optimization, and sports recovery. HBOT can benefit conditions such as stroke recovery, autism management, non-healing wounds, post-surgical healing, traumatic brain injuries, and more",
    price: 250,
  },
  {
    title: "INFRARED SAUNA",
    description:
      " A therapy using infrared light to penetrate deep into tissues, enhancing detoxification, circulation, and relaxation. ",
    price: 350,
  },
  {
    title: "IV WELLNESS",
    description:
      "IV hydration therapy is a direct delivery of fluids, vitamins, and minerals for quick and effective hydration. It includes key nutrients like Vitamin C, B-vitamins, Magnesium, Calcium, and NAD+, which support energy, immune function, skin health, and faster recovery. This treatment helps you feel rejuvenated, fight fatigue, and improve mental clarity—all in a quick and relaxing session. It's the perfect way to boost your wellness from the inside out. We offer a variety of IV hydration, comfortably administered by our experienced registered nurse or nurse practitioner, this treatment offers options tailored to meet your unique needs, from energy boosts to immune support and more.",
    price: 300,
  },
  {
    title: "LYMPHATIC DRAINAGE",
    description:
      " A gentle massage technique that encourages lymph flow, detoxifies the body, and reduces swelling. We utilize your choice of Endermologie® or the Boa Max 2® to deliver an anti-aging massage that invigorates and relaxes, featuring specialized algorithms for lymphatic drainage, sports massage, slimming, and cellulite. ",
    price: 150,
  },

  {
    title: "PROTIEN RECOVERY",
    description:
      "A cellular repair therapy that enhances oxidative stress defense and boosts recovery for improved vitality and wellness. Start reversing cellular damage with NanoVi® which is a unique, scientifically backed protein folding therapy that uses water vapor to boost performance.",
    price: 170,
  },
  {
    title: "SHOCKWAVE THERAPY",
    description:
      " A non-invasive, regenerative therapy using sound waves to stimulate healing, reduce pain, and repair tissues naturally. We offer StemWave® which uses Cellular Response Technology (CRT+) to stimulate the body's natural healing processes, primarily targeting injured or inflamed tissues, aiming to reduce pain and promote tissue regeneration by enhancing blood flow and decreasing inflammation.",
    price: 210,
  },
  {
    title: "VITMAINS INJECTIONS",
    description:
      "Targeted treatments delivered into the muscle or subcutaneous tissue to optimize absorption. These injections are administered by our licensed professionals and provide a concentrated dose of essential vitamins to boost energy, support immunity, enhance metabolism, and improve overall well-being, offering quick and effective results",
    price: 450,
  },
];

const Divider = () => {
  return <div className="h-[1px] bg-white w-[100%] mt-[40px] mb-[40px]" />;
};

const Product_Wellness = () => {
  return (
    
    <div className="bg-black pt-[140px] pl-[90px] pr-[40px] max-md:px-[20px] text-white h-fit">
      <div className="custom-product-scrollbar h-full pr-[50px] max-md:pr-[0]">

      <div className="flex flex-col gap-[15px] items-center">
        <div className="border-b border-solid border-black w-[80px]"></div>
        <Link to="/book-appointment" style={{ textDecoration: "none" }}>
        <button className="outline-none rounded-full bg-black bg-opacity-60 hover:bg-opacity-100 hover:text-white transition-all duration-300 ease-linear px-[91px] py-[14px] max-md:px-[70px] max-md:text-[11px] font-neue-regular tracking-[0.25em]">
        BOOK APPOINTMENT
        </button>
        </Link>
        <div className="border-b border-solid border-black w-[80px]"></div>
      </div>

        {mockData.map((item, i) => (
          <>
            <div
              key={i}
              className="flex justify-between max-md:flex-col max-md:gap-[20px]"
            >
              <div className="flex-[1.2]">
                <p className="font-ezra-medium text-[14px] tracking-[0.25em]">
                  {item.title}
                </p>
              </div>
              <div id="width-issue" className="w-[580px]">
                <p className="font-neue-regular text-[14px] leading-[32px] tracking-[0.1em]">
                  {item.description}
                </p>
              </div>
              <div className="flex gap-[32px] items-center flex-[1.2] md:justify-end">
                <p className="font-neue-bold text-[14px] tracking-[0.25em]">
                  ${item.price}
                </p>{" "}
                <div className="h-[35px] border-l-2 border-white border-solid"></div>{" "}
                <button className="outline-none"></button>
              </div>
            </div>
            {i !== mockData.length - 1 ? (
              <Divider />
            ) : (
              <div className="pb-[40px]"></div>
            )}
          </>
        ))}
      </div>
      <div className="flex flex-col gap-[15px] items-center">
        <div className="border-b border-solid border-black w-[80px]"></div>
        <Link to="/book-appointment" style={{ textDecoration: "none" }}>
        <button className="outline-none rounded-full bg-black bg-opacity-60 hover:bg-opacity-100 hover:text-white transition-all duration-300 ease-linear px-[91px] py-[14px] max-md:px-[70px] max-md:text-[11px] font-neue-regular tracking-[0.25em]">
        BOOK APPOINTMENT
        </button>
        </Link>
        <div className="border-b border-solid border-black w-[80px]"></div>
      </div>
    </div>
  );
  
};

export default Product_Wellness;
