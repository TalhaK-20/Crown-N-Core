import MainLayout from "../layout/MainLayout";
import sanctuary from "../assets/img/home/sanctuary.jpg";
import vision from "../assets/img/home/vision.jpg";
import Vector from "../svg/Vector";
import Footer from "../components/Footer";
import Services from "../components/Services";
import "../assets/css/ScalingAnimation.css";
import "../assets/css/TranslateAnimation.css";
import Crowns from "../components/Crowns";
import { useEffect, useState } from "react";
import FAQ from "../components/FAQ";
import Reveal from "../components/Reveal";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "Crown and Core Wellness Spa and Salon offers a wide range of services including Hyperbaric Therapy, Infrared and Chromotherapy, IV Therapy, Cryotherapy, Shockwave Therapy, Massage, Facials, Body Wraps, Body Moisturizing, Endermology, Japanese Head Spa, Ethnic Hair Design, Hair Extensions, and we also retail Virgin Raw Human Hair.",
  },
  {
    question: "How can I book an appointment? 📌",
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
      " During your session, you'll be comfortably seated in a calming environment while a premade or customized blend of vitamins, minerals, and hydration is administered through an IV for maximum absorption. Our nurse practitioner and registered nurses will ensure a safe and gentle process. IV therapy sessions typically last 30-60 minutes, leaving you feeling refreshed and rejuvenated",
  },
  {
    question: "Can you explain the benefits of Cryotherapy?",
    answer:
      " During your session, you’ll step into a specialized cryotherapy chamber, where your body is exposed to temperatures as low as -200°F to -300°F for a duration of up to 3 minutes. Our trained staff will guide you through the process, ensuring your comfort and safety while you experience a quick and invigorating treatment designed to promote recovery, reduce inflammation, enhance mood, support weight loss, improve skin health, ease chronic pain, and boost immunity.",
  },
  {
    question: "What is the Japanese Head Spa?",
    answer:
      " the Japanese head spa is a luxurious scalp treatment that deeply cleanses, nourishes, and rejuvenates the scalp and hair. Combining massage techniques with specialized products, it promotes relaxation, improves scalp health, and encourages hair growth, leaving you feeling refreshed and revitalized.",
  },
  {
    question: "Do you cater to all hair types, including ethnic hair?",
    answer:
      "Our salon offers hair care, color, cuts, and styling. We specialize in ethnic hair design, extensions, and braids. Our stylists are experienced in working with all hair types and textures to create healthy and beautiful, customized looks.",
  },
  {
    question: "What types of hair extensions do you offer?",
    answer:
      " We offer a variety of extension for your hair needs, including Invisible Bead Extensions (IBE), raw virgin hair, wigs, sew ins, human hair for dread loc extensions, synthetic hair for braiding, Keratin hair extensions, and more.",
  },
  {
    question: "Do you offer aftercare instructions for your treatments?",
    answer:
      "After each treatment, our professionals will provide you with detailed aftercare instructions to ensure you get the best results. If you have any questions or concerns after your wellness, spa, or hair treatment, feel free to contact us. You will also have access to a registered nurse and nurse practitioner for additional support, if needed",
  },
  {
    question: "What products do you use during treatments?",
    answer:
      "We use high-quality, professional-grade products, including non-toxic options, tailored to your specific needs. Our team will recommend the best products for your home care routine as well.",
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

const Home = () => {
  const [screenW, setScreenW] = useState(window.innerWidth);

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
    <MainLayout>
      <div className="flex h-[800px] max-md:h-fit appear max-md:flex-col-reverse">
        <div className="relative flex justify-center items-center max-md:justify-center max-md:gap-10 max-md:px-[60px] max-md:flex-col bg-[#111111] w-full text-white max-md:min-h-[334px]">
          <div className="h-full flex flex-col-reverse justify-center items-center gap-[20%] max-md:gap-[10%] max-md:text-[12px] absolute left-[10px] top-0">
            <Reveal bgColor="transparent">
              <p
                className="rotate-180 font-ezra-medium tracking-[2px]"
                style={{
                  writingMode: "vertical-rl",
                }}
              >
                RENEW
              </p>
            </Reveal>
            <Reveal bgColor="transparent">
              <p
                className="rotate-180 font-ezra-medium tracking-[2px]"
                style={{
                  writingMode: "vertical-rl",
                }}
              >
                REVITALIZE
              </p>
            </Reveal>
            <Reveal bgColor="transparent">
              <p
                className="rotate-180 font-ezra-medium tracking-[2px]"
                style={{
                  writingMode: "vertical-rl",
                }}
              >
                REPLENISH
              </p>
            </Reveal>
          </div>
          <div className="leading-[58px] flex flex-col gap-[36px] max-md:leading-normal tracking-[0.25em]">
            <Reveal bgColor="transparent">
              <p
                className="font-ezra-medium font-normal"
                style={{
                  fontSize: "clamp(26px, 5vw, 52px)",
                }}
              >
                FIND YOUR
              </p>
            </Reveal>
            <Reveal bgColor="transparent">
              <p
                className="font-ghania leading-[75px]"
                style={{
                  fontSize: "clamp(30px, 5vw, 75px)",
                }}
              >
                SANCTUARY OF
              </p>
            </Reveal>
            <Reveal bgColor="transparent">
              <p
                className="font-ezra-medium font-normal"
                style={{
                  fontSize: "clamp(26px, 5vw, 52px)",
                }}
              >
                SERENITY
              </p>
            </Reveal>
          </div>
          <div className="absolute max-md:static bottom-[61px] max-md:bottom-[20px] flex flex-col gap-[15px] max-md:gap-[10px] w-full justify-center items-center">
            <Vector color="white" />
            <button className="outline-none bg-white bg-opacity-60 rounded-[33px] max-md:min-w-full  px-[13%] py-[20px] max-md:py-[10px] hover:bg-opacity-100 hover:text-black transition-all duration-300 ease-linear">
              <Link to="/book-appointment" style={{ textDecoration: "none" }}>
              <Reveal bgColor="transparent">
                <p className="font-neue-regular tracking-[0.25em] max-md:text-[12px] h-fit">
                  BOOK APPOINTMENT
                </p>
              </Reveal>
              </Link>
            </button>
            <Vector color="white" />
          </div>
        </div>
        <div
          className="w-full bg-cover bg-center max-md:h-[446px]"
          style={{
            backgroundImage: `url(${sanctuary})`,
          }}
        ></div>
      </div>
      <div className="flex h-[866px] max-md:h-fit appear overflow-hidden">
        <div
          className="flex-[1.9] bg-cover transitionFromLeft max-md:hidden"
          style={{
            backgroundImage: `url(${vision})`,
          }}
        ></div>
        <div
          className="flex-1 flex flex-col justify-between max-md:justify-start max-md:gap-[30px] pt-[40px] pl-[75px] pr-[47px] max-md:px-[46px] pb-[75px] transitionFromRight max-md:bg-opacity-20 md:bg-opacity-0"
          style={{
            background:
              screenW < 768
                ? `linear-gradient(to top, rgba(255, 255, 255, .8) 100%, rgba(255, 255, 255, .8) 100%), url(${vision})`
                : "",
          }}
        >
          <div
            className="flex flex-col font-ghania leading-[130px] max-md:leading-[90px]"
            style={{
              fontSize: "clamp(90px, 10vw, 122px)",
            }}
          >
            <Reveal bgColor="transparent">
              <p className="w-full text-right">VISION</p>
            </Reveal>
            <Reveal bgColor="transparent">
              <p className="w-full text-right">OF</p>
            </Reveal>
            <Reveal bgColor="transparent">
              <p className="w-full text-right">LIFE</p>
            </Reveal>
          </div>
          <div>
            <p
              className="font-neue-regular leading-[33px] max-md:leading-[26px]"
              style={{
                fontSize: "clamp(12px, 2vw, 14px)",
              }}
            >
              <Reveal bgColor="transparent">
                Find your Crown of tranquility and healing to the Core of your
                essence. Step into a symphony of peace as we nurture all your
                senses to dissolve the stresses of the world and reveal your
                serene aura. Each visit is a unique journey—a dance of care and
                intention tailored to your innermost being, so you can recharge,
                refresh, and prioritize self-care. At Crown & Core Wellness Spa
                and Salon, we combine restorative therapies that promote balance
                at the cellular level, indulgent spa treatments that renew your
                vitality, and expert hair services that crown your beauty. Every
                experience is thoughtfully crafted to align your body, mind, and
                spirit. In this sanctuary, time becomes an endless sea, guiding
                you back to wellness and renewing your spirit. Welcome to a
                space where your health, beauty, and relaxation are our ultimate
                priorities—from your Crown to your Core.
              </Reveal>
            </p>
          </div>
        </div>
      </div>

      <Services />

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
      {/* <div className="bg-white h-[38px]"></div> */}
      <Footer />
    </MainLayout>
  );
};

export default Home;