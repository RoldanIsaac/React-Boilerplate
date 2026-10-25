// import { useState, useEffect, useRef } from "react";

// const useCounterAnimation = (targetNumber, duration = 2000) => {
//   const [currentNumber, setCurrentNumber] = useState(0);
//   const startTimeRef = useRef(null);
//   const animationRef = useRef(null);

//   useEffect(() => {
//     if (targetNumber <= 0) {
//       setCurrentNumber(0);
//       return;
//     }

//     const startAnimation = (timestamp) => {
//       if (!startTimeRef.current) {
//         startTimeRef.current = timestamp;
//       }

//       const progress = Math.min(
//         (timestamp - startTimeRef.current) / duration,
//         1,
//       );

//       // Función de easing (opcional)
//       const easedProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease-out

//       const currentValue = Math.floor(easedProgress * targetNumber);
//       setCurrentNumber(currentValue);

//       if (progress < 1) {
//         animationRef.current = requestAnimationFrame(startAnimation);
//       } else {
//         setCurrentNumber(targetNumber);
//       }
//     };

//     animationRef.current = requestAnimationFrame(startAnimation);

//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//       startTimeRef.current = null;
//     };
//   }, [targetNumber, duration]);

//   return currentNumber;
// };

// export default useCounterAnimation;

// import React, { useState, useEffect } from "react";

// const useSpring = (target, config = { duration: 2000, easing: "easeOut" }) => {
//   const [current, setCurrent] = useState(0);
//   const [startTime, setStartTime] = useState(null);
//   const startValue = useRef(0);

//   useEffect(() => {
//     startValue.current = current;
//     setStartTime(performance.now());

//     const animate = (timestamp) => {
//       if (!startTime) {
//         setStartTime(timestamp);
//         return;
//       }

//       const progress = Math.min((timestamp - startTime) / config.duration, 1);

//       let easedProgress;
//       switch (config.easing) {
//         case "easeOutQuad":
//           easedProgress = 1 - (1 - progress) * (1 - progress);
//           break;
//         case "easeInOut":
//           easedProgress =
//             progress < 0.5
//               ? 2 * progress * progress
//               : 1 - Math.pow(-2 * progress + 2, 2) / 2;
//           break;
//         default: // easeOutCubic
//           easedProgress = 1 - Math.pow(1 - progress, 3);
//       }

//       const value =
//         startValue.current + (target - startValue.current) * easedProgress;
//       setCurrent(Math.round(value));

//       if (progress < 1) {
//         requestAnimationFrame(animate);
//       }
//     };

//     requestAnimationFrame(animate);
//   }, [target, config.duration]);

//   return current;
// };
