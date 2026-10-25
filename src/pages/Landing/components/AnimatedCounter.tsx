import { useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  duration?: number;
};

const AnimatedCounter = ({ value, duration = 1000 }: AnimatedCounterProps) => {
  const spring = useSpring(0, {
    stiffness: 100,
    damping: 30,
    duration,
  });

  const displayValue = useTransform(spring, (latest) =>
    Math.round(latest).toLocaleString(),
  );

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return <motion.span>{displayValue}</motion.span>;

  //   const animatedNumber = useCounterAnimation(value, duration);

  //   return <span>{animatedNumber.toLocaleString()}</span>;
};

export default AnimatedCounter;
