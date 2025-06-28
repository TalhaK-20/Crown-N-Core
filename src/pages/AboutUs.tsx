import Footer from "../components/Footer";
import MainLayout from "../layout/MainLayout";
import fullbodySerenity from "../assets/img/about-us/fullbody-serenity.jpg";
import femaleOcean from "../assets/img/about-us/female-ocean.jpg";
import Crowns from "../components/Crowns";
import FAQ from "../components/FAQ";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "Crown and Core Wellness Spa and Salon offers a wide range of services including Hyperbaric Therapy, Infrared and Chromotherapy, IV Therapy, Cryotherapy, Shockwave Therapy, Massage, Facials, Body Wraps, Body Moisturizing, Endermology, Japanese Head Spa, Ethnic Hair Design, Hair Extensions, and we also retail Virgin Raw Human Hair.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book an appointment online through our website, by calling us directly at [insert phone number], or by visiting our spa in person.",
  },
  {
    question: "What are your hours of operation?",
    answer:
      "We are open from [insert hours] Monday through Sunday. Please note that hours may vary on holidays.",
  },
  {
    question: "Do you offer packages or memberships?",
    answer:
      "Yes, we offer a variety of packages and memberships tailored to meet your wellness needs. Please contact us for more details or visit our website for more information.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We require at least 24 hours’ notice for cancellations or rescheduling of appointments. Cancellations made within 24 hours will incur a [insert fee] cancellation fee.",
  },
  {
    question: "What is Hyperbaric Therapy, and what are its benefits?",
    answer:
      "Hyperbaric Therapy involves breathing pure oxygen in a pressurized environment, which promotes healing by increasing oxygen levels in the blood. Benefits include improved recovery from injuries, reduced inflammation, and enhanced overall wellness.",
  },
  {
    question: "How does Infrared and Chromotherapy work?",
    answer:
      "Infrared therapy uses infrared light to penetrate the skin and promote healing, while Chromotherapy involves the use of colors to balance energy in the body. Together, they can help with pain relief, relaxation, and improved circulation.",
  },
  {
    question: "What should I expect during an IV Therapy session?",
    answer:
      "During an IV Therapy session, a customized blend of vitamins, minerals, and other nutrients is delivered directly into your bloodstream for immediate absorption. The session typically lasts between 30-60 minutes, and you can expect to feel refreshed and revitalized afterward.",
  },
  {
    question: "Can you explain the benefits of Cryotherapy?",
    answer:
      "Cryotherapy involves exposing the body to extremely cold temperatures for a short period. This therapy can help with pain relief, muscle recovery, reducing inflammation, and boosting metabolism.",
  },
  {
    question: "What is the Japanese Head Spa?",
    answer:
      "The Japanese Head Spa is a luxurious scalp treatment that involves deep cleansing, exfoliation, and a relaxing massage. It helps promote healthy hair growth, reduces scalp issues, and provides a deeply relaxing experience.",
  },
  {
    question: "Do you cater to all hair types, including ethnic hair?",
    answer:
      "Yes, our salon specializes in ethnic hair design and extensions. Our stylists are experienced in working with all hair types and textures to create beautiful, customized looks.",
  },
  {
    question: "Do you offer aftercare instructions for your treatments?",
    answer:
      "Yes, after each treatment, our professionals will provide you with detailed aftercare instructions to ensure you get the best results. If you have any questions after your treatment, feel free to contact us.",
  },
  {
    question: "What products do you use during treatments?",
    answer:
      "We use high-quality, professional-grade products tailored to your specific needs. Our team will recommend the best products for your home care routine as well.",
  },
  {
    question: "Can I purchase the products used during my treatment?",
    answer:
      "Absolutely! We retail many of the products used during our treatments, including our Virgin Raw Human Hair. Our staff can assist you in selecting the right products for your needs.",
  },
  {
    question: "What are your COVID-19 safety protocols?",
    answer: "We follow all",
  },
];

const Divider = () => {
  return (
    <div className="border-b-[0.5px] border-white border-solid border-opacity-70"></div>
  );
};

const AboutUs = () => {
  return (
    <MainLayout>
      <div className="flex bg-white px-[40px] appear overflow-hidden">
        <div className="flex transitionFromLeft">
          <div
            className="flex gap-[120px] justify-between rotate-180 font-ezra-medium text-[12px] leading-[25px] tracking-[0.25em]"
            style={{
              writingMode: "vertical-rl",
            }}
          >
            <p>RENEW</p>
            <p>REVITALIZE</p>
            <p>REPLENISH</p>
          </div>
          <div className="flex flex-col justify-center gap-[40px] font-neue-regular text-[14px] px-[143px] leading-[32px] tracking-[0]">
            <p>
              Nestled in the heart of Bellevue, Washington, Crown and Core
              Wellness Spa and Salon is more than just a sanctuary for beauty
              and relaxation—it's a haven where wellness meets luxury. Founded
              with a deep passion for holistic health and beauty, our spa and
              salon are dedicated to offering transformative experiences that
              nurture both the body and soul.
            </p>
            <p>
              At Crown and Core, we believe in the power of combining ancient
              healing practices with modern science. Our extensive range of
              services is thoughtfully designed to address the unique needs of
              each guest, helping you to rejuvenate, revitalize, and rediscover
              your best self. From the soothing embrace of Hyperbaric Therapy to
              the invigorating effects of Cryotherapy, every treatment is a
              journey towards total wellness.
            </p>
          </div>
        </div>
        <div className="flex gap-[85px] transitionFromRight">
          <div>
            <img className="min-w-[400px]" src={fullbodySerenity} alt="" />
          </div>
          <div>
            <p
              className="font-ghania text-[110px] rotate-180 leading-[110px]"
              style={{
                writingMode: "vertical-rl",
              }}
            >
              ABOUT US
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[160px] bg-white flex gap-[75px] appear overflow-hidden">
        <div className="transitionFromLeft">
          <img className="min-w-[55.2vw]" src={femaleOcean} alt="" />
        </div>
        <div className="flex flex-col justify-center gap-[40px] font-neue-regular text-[14px] leading-[32px] pr-[170px] tracking-[0] transitionFromRight">
          <p>
            We pride ourselves on creating an atmosphere of tranquility and
            elegance, where every detail—from the warm ambiance to the
            personalized care you receive—is carefully curated to elevate your
            experience. Whether you're indulging in a luxurious facial,
            revitalizing your body with our advanced Endermology treatments, or
            enhancing your natural beauty in our salon, our skilled therapists
            and stylists are committed to delivering excellence.
          </p>
          <p>
            Our salon, featuring ethnic hair design, Japanese head spa
            treatments, and the finest Virgin Raw Human Hair, celebrates
            diversity and individuality. We are passionate about making every
            guest feel beautiful, inside and out, and we strive to tailor each
            service to highlight your unique essence.
          </p>
          <p>
            Crown and Core Wellness Spa and Salon is not just a destination—it's
            a community. A place where you can retreat from the stresses of
            daily life, connect with your inner self, and emerge renewed. We
            invite you to step into our world of unparalleled luxury and
            holistic care, where your wellness is at the core of everything we
            do. Welcome to Crown and Core—where beauty and wellness reign
            supreme.
          </p>
        </div>
      </div>

      <div className="mt-[122px] text-center">
        <p className="font-ghania text-[130px]">VISION OF LIFE</p>
      </div>
      <Crowns />
      <div className="px-[84px] bg-black text-white py-[80px] max-md:px-[22px]">
        <h3 className="mb-[42px] text-[24px] font-ezra-medium">FAQ</h3>
        <div className="flex flex-col gap-[52px]">
          <Divider />
          {faqData.map((data, index) => (
            <>
              <FAQ key={index} question={data.question} answer={data.answer} />
              {index !== faqData.length - 1 && <Divider />}
            </>
          ))}
        </div>
      </div>
      <Footer />
    </MainLayout>
  );
};

export default AboutUs;
