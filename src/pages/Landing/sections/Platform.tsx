import Section from "../../../layout/Section";
import Brand from "../Brand";
import {
  Invoice04Icon,
  Ticket02Icon,
  BarChartHorizontalIcon,
  CreditCardPosIcon,
  Share02Icon,
  UserGroup03Icon,
  AffiliateIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Lines from "../components/Lines";
import GridPatternOverlay from "../components/GridPatternOverlay";
import CurvyLines from "../components/CurvyLines";
import UiComponentVariations from "../components/UiComponentVariations";
import { useState, useEffect } from "react";

type Props = {};

const features = [
  {
    id: 1,
    icon: Invoice04Icon,
    title: "Multi-Gate Synchronization",
    description: "",
  },
  {
    id: 2,
    icon: AffiliateIcon,
    title: "Multi-Vendor Cash Management",
    description: "",
  },
  {
    id: 3,
    icon: UserGroup03Icon,
    title: "Granular Team Permissions",
    description: "",
  },
  {
    id: 4,
    icon: Share02Icon,
    title: "Unified Financial Reporting",
    description: "",
  },
  {
    id: 5,
    icon: Share02Icon,
    title: "Booking System",
    description: "",
  },
  {
    id: 6,
    icon: Share02Icon,
    title: "Logistics",
    description: "",
  },
];

function Platform({}: Props) {
  const strokeWidth = 2;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % features.length);
        setIsAnimating(false);
      }, 500); // Duración de la animación
    }, 3000); // Intervalo entre cambios

    return () => clearInterval(interval);
  }, []);

  return (
    <Section className="min-h-[100vh] py-24 lg:py-36">
      <div className="container">
        <div className="text-white is-visible" data-reveal="">
          <h2 className="text-[42px] font-bold">
            One{" "}
            <span className="text-transparent bg-gradient-to-b from-teal-300 via-teal-500 via-teal-500 via-teal-600 via-teal-700 to-teal-900 bg-clip-text">
              Connected
            </span>{" "}
            Ecosystem
          </h2>
          <p className="mt-1 text-[16px] text-gray-300 max-w-2xl">
            Once a ticket is scanned, Evinra expands into a native, all-in-one
            management platform. No plugins. No data silos. Just one unified
            system.
          </p>
        </div>

        <div className="px-5 py-1 h-70 mx-18 my-8 max-w-4xl rounded-lg">
          <GridPatternOverlay
            className="z-10 top-20 w-250 -translate-x-1/2 left-1/2"
            gridSize={30}
          />
          <div className="relative m-2 max-w-4xl">
            <div className="absolute left-0 top-4 flex flex-col gap-6 transition-all duration-500 ease-in-out overflow-y-hidden">
              {features.map((item) => (
                <span
                  style={{ transform: `translateY(-${currentIndex * 62}px)` }}
                  key={item.id}
                  className={`px-4 py-2 border-2 border-gray-700 text-white flex flex-row shadow-sm rounded-lg gap-2 transition-all duration-500
                  
                  `}
                >
                  <HugeiconsIcon icon={item.icon} size={18} />
                  <h3>{item.title}</h3>
                </span>
              ))}
            </div>

            <div className="absolute left-61 top-6">
              <CurvyLines
                stroke="#eae7e734"
                strokeWidth={strokeWidth}
                width={205}
              />
              <CurvyLines
                strokeArray={["#FF5733", "#33FF57", "#3357FF", "#FF33F5"]}
                strokeWidth={strokeWidth + 8}
                width={205}
                mask="url(#gradient-mask)"
                defs={
                  <>
                    <linearGradient id="gradient">
                      <stop offset="0" stop-color="white" stop-opacity="0" />
                      <stop offset="0.8" stop-color="white" stop-opacity="1" />
                      <stop offset="0.8" stop-color="white" stop-opacity="0" />
                    </linearGradient>

                    <mask id="gradient-mask">
                      <rect
                        className="mask-rect"
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="url(#gradient)"
                      />
                    </mask>
                  </>
                }
              />
            </div>
            <div className="absolute left-110.5 top-14">
              <div className="w-32 p-4 border-2 border-gray-700 rounded-md mx-1.5">
                <Brand />
              </div>
            </div>
            <div className="absolute left-144 top-11">
              <Lines stroke="#eae7e734" strokeWidth={strokeWidth} width={165} />
              <Lines
                strokeWidth={strokeWidth + 5}
                strokeArray={["#209991", "#209991", "#209991", "#209991"]}
                width={165}
              />
            </div>
            <div className="absolute left-185 top-0">
              <UiComponentVariations />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Platform;
