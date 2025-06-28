import { ReactNode, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface IProps {
  children: ReactNode;
  bgColor?: string;
  className?: string;
}

const Reveal = ({ children, bgColor = "#fff", className }: IProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute top-[4px] bottom-[4px] left-0 right-0 z-[20] rounded-[40px]"
        style={{
          background: bgColor,
        }}
      />
    </div>
  );
};

export default Reveal;
