import { Link } from "react-router-dom";

const mockData = [
  {
    title: "ANTI-AGING TREATMENT",
    description:
      "Turn back the clock with our anti-aging treatment that includes a combination of serums and techniques to reduce wrinkles and rejuvenate your skin",
    price: 110,
  },
  {
    title: "BODY WRAPS",
    description:
      "a rejuvenating treatment that involves applying a nourishing mask or gel to the body, which is then wrapped in a warm, tight cloth or plastic. This treatment helps to hydrate, detoxify, and firm the skin, leaving it soft and smooth. Body wraps can target specific concerns such as improving skin tone, reducing the appearance of cellulite, or promoting relaxation.",
    price: 300,
  },
  {
    title: "BODY SCRUBS",
    description:
      "A non-invasive, regenerative therapy using sound waves to stimulate healing, reduce pain, and repair tissues naturally. We offer StemWave® which uses Cellular Response Technology (CRT+) to stimulate the body's natural healing processes, primarily targeting injured or inflamed tissues, aiming to reduce pain and promote tissue regeneration by enhancing blood flow and decreasing inflammation. This therapy can generate an average of 80-95%+ improvement for complex ",
    price: 150,
  },
  
  {
    title: "FACIAL REJUVENATION",
    description:
      "Experience a deep-cleansing facial that enhances your skin's glow and elasticity. Perfect for reducing wrinkles and fine lines.",
    price: 150,
  },
  {
    title: "BRIDAL SERVICES",
    description:
      " Our bridal services are designed to provide a complete and relaxing experience for the bride and her party. From pre-wedding pampering to the big day, we offer a range of spa and salon treatments tailored to your needs, including facials, massages, hair styling, and makeup application. For those looking to host a bridal shower or small gathering, our optional venue space is available to complement your celebration. Whether you're preparing for the ceremony or enjoying a special event, we ensure every detail is taken care of, creating a memorable experience for you and your loved ones",
    price: 450,
  },
  {
    title: "CHEMICAL PEEL",
    description:
      "A deep exfoliation treatment that removes dead skin cells, revealing smoother, more radiant skin underneath.",
    price: 200,
  },
  {
    title: "HEAD SPA",
    description:
      "- A therapeutic treatment that focuses on the scalp, neck, and shoulders to promote relaxation and overall well-being. The treatment combines gentle scalp massage techniques to improve circulation, reduce tension, detox the scalp, and support healthy hair growth (Include Japanese head spa service)",
    price: 80,
  },
  {
    title: "LASER HAIR REMOVAL",
    description:
      "Acheive long-lasting smoothness with our cutting-edge laser hair removal services. 15 Designed for precision, our advanced technology effectively targets unwanted hair while being gentle on all skin types. We prioritize safety and results, ensuring minimal risk of hyperpigmentation, especially for darker skin tones. Enjoy the confidence of silky-smooth skin tailored to your needs",
    price: 250,
  },
  {
    title: "MICRODERM ABRASION",
    description:
      "Gently resurface your skin with microdermabrasion, reducing the appearance of scars, sun damage, and age spots Refresh and renew your skin with our microdermabrasion treatment, a gentle yet effective way to resurface your complexion. This non-invasive procedure minimizes the appearance of scars, sun damage, fine lines, and age spots, leaving your skin smoother, brighter, and more youthful. Perfect for restoring a radiant glow with no downtime",
    price: 170,
  },
  {
    title: "RF MICRONEEDLING",
    description:
      " Transform your skin with our advanced microneedling treatment using SkinPen®, designed to improve texture and tone by reducing the appearance of scars, fine lines, sun damage, and age spots. For enhanced benefits, combine microneedling with PRP (Platelet-Rich Plasma) therapy to stimulate collagen production, accelerate healing, and achieve a naturally radiant, youthful glow",
    price: 210,
  },
  {
    title: "MANICURE & PEDICURE",
    description:
      "Pamper your hands and feet with our luxurious manicure and pedicure services. From classic nail care to acrylics, gel polish, and restorative treatments, we offer a range of options to suit your needs. Whether you're looking for a flawless finish, a long-lasting gel application, or a trendy acrylic set, our services are designed to leave you feeling refreshed and polished. We also prioritize your health with non-toxic nail care products that ensure beauty 15without compromise. Relax, hydrate, and let us take care of the details for perfectly manicured hands and feet",
    price: 80,
  },
  {
    title: "WAXING",
    description:
      "Achieve silky, smooth skin with our professional waxing services, designed for long-lasting hair removal that leaves your skin soft and flawless. Whether it's your legs, arms, face, or bikini line, waxing removes hair from the root for weeks of smoothness. Beyond hair removal, waxing also exfoliates the skin, removing dead cells and revealing a fresh, rejuvenated layer. Treat your skin to a gentle, effective solution that combines beauty and care for a polished, refreshed feel",
    price: 180,
  },
  {
    title: "PRP Facial",
    description:
      "Revitalize your skin with our PRP Facial, a cutting-edge rejuvenation treatment that harnesses the power of your body’s platelet-rich plasma to stimulate collagen production, smooth 15texture, and diminish fine lines. Administered by a licensed and certified nurse practitioner or master aesthetician, this procedure not only enhances your natural radiance but also promotes a youthful, glowing complexion. Experience the power of 15regenerative beauty with a treatment that works in harmony with your body for visibly refreshed skin",
    price: 250,
  },
  ];
  
  const Divider = () => {
    return <div className="h-[1px] bg-white w-[100%] mt-[40px] mb-[40px]" />;
  };
  
  const Product_SPA = () => {
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
                <div id="width-issue" className="w-[580px]" >
                  <p className="font-neue-regular text-[14px] leading-[32px] tracking-[0.1em]">
                    {item.description}
                  </p>
                </div>
                <div className="flex gap-[32px] items-center flex-[1.2] md:justify-end">
                  <p className="font-neue-bold text-[14px] tracking-[0.25em]">
                    ${item.price}
                  </p>{" "}
                  <div className="h-[35px] border-l-2 border-white border-solid"></div>{" "}
                  <button className="outline-none">
                  </button>
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
  
  export default Product_SPA;