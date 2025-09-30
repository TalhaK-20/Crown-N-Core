import { Link } from "react-router-dom";

const mockData = [
  {
    title: "CHROMOTHERAPY",
    description:
      "Unlock your body's natural recovery potential with the power of color light therapy. This dynamic treatment uses specific wavelengths to restore balance, enhance mood, and support physical performance. Whether you're seeking relief from muscle tension, reduced swelling, or faster recovery, chromotherapy helps elevate your athletic performance by improving circulation, detoxifying your body, and aiding in deeper sleep",
    price: 120,
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
      " Take your recovery to the next level with the therapeutic power of infrared light. Our 3-in-1 precision wavelength sauna penetrates deeply into your muscles, improving circulation and detoxification while helping your body recover faster and feel more relaxed. Perfect for athletes, this sauna helps ease muscle soreness, reduce joint pain, and enhance flexibilit ",
    price: 350,
  },
  {
    title: "IV WELLNESS",
    description:
      "Fuel your body with the nutrients it craves to perform at its best. Our IV hydration therapy delivers a powerful dose of vitamins, minerals, and electrolytes directly to your system for rapid hydration and recovery. Whether you're replenishing after an intense workout or fighting off fatigue, our IV sessions are designed to support energy, recovery, and overall wellnes",
    price: 300,
  },
  {
    title: "LYMPHATIC DRAINAGE",
    description:
      " A game-changing recovery technique that encourages lymph flow, detoxifies your body, and reduces swelling. Using Endermologie® or Boa Max 2® technology, this treatment promotes recovery, reduces muscle soreness, and enhances flexibility, so you can recover faster and stay injury-free",
    price: 210,
  },
  {
    title: "PROTEIN RECOVERY",
    description:
      "Maximize your recovery and performance with NanoVi®, a cuttingedge protein folding therapy. This treatment helps accelerate healing, reduce oxidative stress, and enhance cellular repair. Perfect for athletes looking to recover quickly and maintain peak performance, NanoVi® ensures your body's recovery is as efficient as your training",
    price: 150,
  },
  {
    title: "SHOCK WAVE THERAPY",
    description:
      " Heal faster, train harder using high energy sound waves. StemWave® stimulates your body's natural healing processes, reducing pain and accelerating tissue repair by creating micro-traumas that trigger the release of growth factors and other signaling molecules. This process helps repair damaged tissues, reduce pain, and improve mobility. This non-invasive treatment is ideal for targeting musculoskeletal injuries, improving flexibility, and enhancing recovery, helping athletes return to their training stronger than ever",
    price: 450,
  },
];

const Divider = () => {
  return <div className="h-[1px] bg-white w-[100%] mt-[40px] mb-[40px]" />;
};

const Product_Performance = () => {
  return (
    <div className="w-full bg-black pt-[80px] md:pt-[140px] px-5 md:pl-[90px] md:pr-[40px] text-white h-fit overflow-hidden">
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

export default Product_Performance;