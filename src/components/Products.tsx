const mockData = [
  {
    title: "IV WELLNESS",
    description:
      "IV hydration therapy is a direct delivery of fluids, vitamins, and minerals for quick and effective hydration. It includes key nutrients like Vitamin C, B-vitamins, Magnesium, Calcium, and NAD+, which support energy, immune function, skin health, and faster recovery. This treatment helps you feel rejuvenated, fight fatigue, and improve mental clarity—all in a quick and relaxing session. It's the perfect way to boost your wellness from the inside out. We offer a variety of IV hydration, comfortably administered by our experienced registered nurse or nurse practitioner, this treatment offers options tailored to meet your unique needs, from energy boosts to immune support and more.",
    // price: 300,
  },
  {
    title: "FACIAL REJUVENATION",
    description:
      "Experience a deep-cleansing facial that enhances your skin's glow and elasticity. Perfect for reducing wrinkles and fine lines.",
    // price: 150,
  },
  {
    title: "BODY CONTOURING",
    description:
      "A non-invasive body sculpting procedure using Endermologie® which is a skin treatment that uses suction and massage to reduce the appearance of cellulite and hard-shell tighten and rejuvenate the skin. This service aims to reshape specified areas of the body and face, achieving a more defined silhouette without surgery",
    // price: 450,
  },
  {
    title: "CHROMOTHERAPY",
    description:
      "A healing therapy, also known as color light therapy, that uses color specific light wavelengths to restore balance, improve mood, and support physical and emotional well-being. Potential benefits include skin health, pain relief, decreased swelling and inflammation, accelerated healing, decreased muscle tension, improved circulation, regulated mood, detoxification, and improved sleep",
    // price: 120,
  },
  {
    title: "WELLNESS CONSULTATION",
    description:
      "A personalized consultation with our licensed and certified nurse practitioner, focused on overall wellness or managing and preventing chronic conditions through tailored lifestyle and health strategies",
    // price: 200,
  },
  {
    title: "CRYOTHERAPY",
    description:
      "A cold therapy that exposes the body to low temperatures; reducing inflammation, relieving pain, and boosting recovery. Step into MECOTEC, our electronically powered cold chamber, and chill your way to wellness – experience reduced inflammation, faster muscle recovery, relief from chronic pain, enhanced blood flow, boosted metabolism, radiant skin, and even a refreshing mood boost, all in just a few invigorating minutes",
    // price: 180,
  },
  {
    title: "HYPERBARIC OXYGEN THERAPY",
    description:
      "HBOT involves breathing pure oxygen in a pressurized chamber to promote healing, reduce inflammation, and improve overall cellular health. Experience HpoTech®, our hard-shell hyperbaric oxygen chamber, equipped with Built-In Breathing (BIB) technology, a cutting-edge system that enhances the precision and efficiency of oxygen delivery. This advanced setup allows us to achieve ideal therapeutic pressure for various medical needs, including longevity goals, health optimization, and sports recovery. HBOT can benefit conditions such as stroke recovery, autism management, non-healing wounds, post-surgical healing, traumatic brain injuries, and more",
    // price: 250,
  },
  {
    title: "INFRARED SAUNA",
    description:
      " A therapy using infrared light to penetrate deep into tissues, enhancing detoxification, circulation, and relaxation. ",
    // price: 350,
  },
  {
    title: "DETOX BODY WRAP",
    description:
      "A purifying body wrap that eliminates toxins, improves skin texture, and promotes relaxation. Perfect for a quick wellness boost.",
    // price: 170,
  },
  {
    title: "OXYGEN INFUSION FACIAL",
    description:
      "Enhance your skin’s health with an oxygen infusion facial that revitalizes and hydrates, leaving you with a radiant complexion.",
    // price: 210,
  },
  {
    title: "MANICURE & PEDICURE",
    description:
      "Pamper your hands and feet with our luxurious manicure and pedicure services. From classic nail care to acrylics, gel polish, and restorative treatments, we offer a range of options to suit your needs. Whether you're looking for a flawless finish, a long-lasting gel application, or a trendy acrylic set, our services are designed to leave you feeling refreshed and polished. We also prioritize your health with non-toxic nail care products that ensure beauty 15without compromise. Relax, hydrate, and let us take care of the details for perfectly manicured hands and feet",
    // price: 80,
  },
  {
    title: "ANTI-AGING TREATMENT",
    description:
      "Turn back the clock with our anti-aging treatment that includes a combination of serums and techniques to reduce wrinkles and rejuvenate your skin",
    // price: 110,
  },
  {
    title: "BODY WRAPS",
    description:
      "a rejuvenating treatment that involves applying a nourishing mask or gel to the body, which is then wrapped in a warm, tight cloth or plastic. This treatment helps to hydrate, detoxify, and firm the skin, leaving it soft and smooth. Body wraps can target specific concerns such as improving skin tone, reducing the appearance of cellulite, or promoting relaxation.",
    // price: 300,
  },
  {
    title: "BODY SCRUBS",
    description:
      "A non-invasive, regenerative therapy using sound waves to stimulate healing, reduce pain, and repair tissues naturally. We offer StemWave® which uses Cellular Response Technology (CRT+) to stimulate the body's natural healing processes, primarily targeting injured or inflamed tissues, aiming to reduce pain and promote tissue regeneration by enhancing blood flow and decreasing inflammation. This therapy can generate an average of 80-95%+ improvement for complex ",
    // price: 150,
  },
  {
    title: "VITMAINS INJECTIONS",
    description:
      "Targeted treatments delivered into the muscle or subcutaneous tissue to optimize absorption. These injections are administered by our licensed professionals and provide a concentrated dose of essential vitamins to boost energy, support immunity, enhance metabolism, and improve overall well-being, offering quick and effective results",
    // price: 450,
  },
  {
    title: "MASSAGE THERAPY",
    description:
      "Relax and unwind with our therapeutic massage, thoughtfully designed to relieve stress and tension while restoring harmony to your body and mind. Each session is customized to meet your unique needs. Choose from Swedish, deep tissue, or hot stone techniques to promote relaxation, ease muscle tightness, enhance circulation, and enhance overall wellbeing. Allow yourself to let go, rejuvenate, and experience the ultimate in relaxation in a serene, nurturing environment",
    // price: 120,
  },
  {
    title: "CHEMICAL PEEL",
    description:
      "A deep exfoliation treatment that removes dead skin cells, revealing smoother, more radiant skin underneath.",
    // price: 200,
  },
  {
    title: "WAXING",
    description:
      "Achieve silky, smooth skin with our professional waxing services, designed for long-lasting hair removal that leaves your skin soft and flawless. Whether it's your legs, arms, face, or bikini line, waxing removes hair from the root for weeks of smoothness. Beyond hair removal, waxing also exfoliates the skin, removing dead cells and revealing a fresh, rejuvenated layer. Treat your skin to a gentle, effective solution that combines beauty and care for a polished, refreshed feel",
    // price: 180,
  },
  {
    title: "PRP Facial",
    description:
      "Revitalize your skin with our PRP Facial, a cutting-edge rejuvenation treatment that harnesses the power of your body’s platelet-rich plasma to stimulate collagen production, smooth 15texture, and diminish fine lines. Administered by a licensed and certified nurse practitioner or master aesthetician, this procedure not only enhances your natural radiance but also promotes a youthful, glowing complexion. Experience the power of 15regenerative beauty with a treatment that works in harmony with your body for visibly refreshed skin",
    // price: 250,
  },
  {
    title: "ANTI-AGING TREATMENT",
    description:
      "Turn back the clock with our anti-aging treatment that includes a combination of serums and techniques to reduce wrinkles and rejuvenate your skin.",
    // price: 350,
  },
  {
    title: "MICRODERM ABRASION",
    description:
      "Gently resurface your skin with microdermabrasion, reducing the appearance of scars, sun damage, and age spots Refresh and renew your skin with our microdermabrasion treatment, a gentle yet effective way to resurface your complexion. This non-invasive procedure minimizes the appearance of scars, sun damage, fine lines, and age spots, leaving your skin smoother, brighter, and more youthful. Perfect for restoring a radiant glow with no downtime",
    // price: 170,
  },
  {
    title: "RF MICRONEEDLING",
    description:
      " Transform your skin with our advanced microneedling treatment using SkinPen®, designed to improve texture and tone by reducing the appearance of scars, fine lines, sun damage, and age spots. For enhanced benefits, combine microneedling with PRP (Platelet-Rich Plasma) therapy to stimulate collagen production, accelerate healing, and achieve a naturally radiant, youthful glow",
    // price: 210,
  },
  {
    title: "HEAD SAP",
    description:
      "- A therapeutic treatment that focuses on the scalp, neck, and shoulders to promote relaxation and overall well-being. The treatment combines gentle scalp massage techniques to improve circulation, reduce tension, detox the scalp, and support healthy hair growth (Include Japanese head spa service)",
    // price: 80,
  },
  {
    title: "AROMATHERAPY SESSION",
    description:
      "Indulge in a soothing aromatherapy session that uses essential oils to calm the mind and body, reducing stress and enhancing mood.",
    // price: 110,
  },
  {
    title: "IV HYDRATION THERAPY",
    description:
      "Hydration therapy revitalizes your body with a custom infusion of essential nutrients. Combat fatigue and dehydration, leaving you refreshed and energized.",
    // price: 300,
  },
  {
    title: "FACIAL REJUVENATION",
    description:
      "Experience a deep-cleansing facial that enhances your skin's glow and elasticity. Perfect for reducing wrinkles and fine lines.",
    // price: 150,
  },
  {
    title: "BRIDAL SERVICES",
    description:
      " Our bridal services are designed to provide a complete and relaxing experience for the bride and her party. From pre-wedding pampering to the big day, we offer a range of spa and salon treatments tailored to your needs, including facials, massages, hair styling, and makeup application. For those looking to host a bridal shower or small gathering, our optional venue space is available to complement your celebration. Whether you're preparing for the ceremony or enjoying a special event, we ensure every detail is taken care of, creating a memorable experience for you and your loved ones",
    // price: 450,
  },
  {
    title: "MASSAGE THERAPY",
    description:
      "Relax and unwind with our therapeutic massage tailored to relieve stress and tension. Ideal for promoting overall well-being.",
    // price: 120,
  },
  {
    title: "CHEMICAL PEEL",
    description:
      "A deep exfoliation treatment that removes dead skin cells, revealing smoother, more radiant skin underneath.",
    // price: 200,
  },
  
  {
    title: "LASER HAIR REMOVAL",
    description:
      "Acheive long-lasting smoothness with our cutting-edge laser hair removal services. 15 Designed for precision, our advanced technology effectively targets unwanted hair while being gentle on all skin types. We prioritize safety and results, ensuring minimal risk of hyperpigmentation, especially for darker skin tones. Enjoy the confidence of silky-smooth skin tailored to your needs",
    // price: 250,
  },
  {
    title: "ANTI-AGING TREATMENT",
    description:
      "Turn back the clock with our anti-aging treatment that includes a combination of serums and techniques to reduce wrinkles and rejuvenate your skin.",
    // price: 350,
  },
  {
    title: "DETOX BODY WRAP",
    description:
      "A purifying body wrap that eliminates toxins, improves skin texture, and promotes relaxation. Perfect for a quick wellness boost.",
    // price: 170,
  },
  {
    title: "OXYGEN INFUSION FACIAL",
    description:
      "Enhance your skin’s health with an oxygen infusion facial that revitalizes and hydrates, leaving you with a radiant complexion.",
    // price: 210,
  },
  {
    title: "MANICURE & PEDICURE",
    description:
      "Treat yourself to a luxurious manicure and pedicure that not only beautifies but also promotes healthy nails.",
    // price: 80,
  },
  {
    title: "AROMATHERAPY SESSION",
    description:
      "Indulge in a soothing aromatherapy session that uses essential oils to calm the mind and body, reducing stress and enhancing mood.",
    // price: 110,
  },
];

const Divider = () => {
  return <div className="h-[1px] bg-white w-[100%] mt-[40px] mb-[40px]" />;
};

const Products = () => {
  return (
    <div className="bg-black pt-[140px] pl-[90px] pr-[40px] max-md:px-[20px] text-white h-fit">
      <div className="custom-product-scrollbar h-full pr-[50px] max-md:pr-[0]">
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
              <div id="width-issue" className="flex-1 width-[500px]" >
                <p className="font-neue-regular text-[14px] leading-[32px] tracking-[0.1em]">
                  {item.description}
                </p>
              </div>
              <div className="flex gap-[32px] items-center flex-[1.2] md:justify-end">
                <p className="font-neue-bold text-[14px] tracking-[0.25em]">
                  {/* ${item.price} */}
                </p>{" "}
                {/* <div className="h-[35px] border-l-2 border-white border-solid"></div>{" "} */}
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
    </div>
  );
};

export default Products;