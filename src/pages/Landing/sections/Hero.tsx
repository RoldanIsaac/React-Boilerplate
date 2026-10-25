import { stackedWavesSvgBg, scanGif } from "../../../assets";
import Section from "../../../layout/Section";
import { layout, section } from "../../../styles/styles";

type Props = {};

const Hero = (props: Props) => {
  return (
    <Section
      className="h-[100vh] py-24 lg:py-36"
      // svgBg={stackedWavesSvgBg}
    >
      {/* <div className={`${layout.section}`}>
        <div className={`${section.spacing} ${section.flex}`}>
          <div>
            <div className="app-hero"> The best and worst world leaders </div>
            <div className="max-w-[700px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              repellat. Esse facere exercitationem odit dolorem maxime ex
              tempora quae modi! Deleniti accusamus, et minima cum soluta
              reiciendis aliquam corporis consequatur.
            </div>
          </div>

          <div className="">
            <img src={scanGif} alt="Scan Gif" />
          </div>
        </div>
      </div> */}

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,.03) 0px, rgba(255,255,255,.03) 1px, transparent 1px, transparent 60px)," +
            "repeating-linear-gradient(90deg, rgba(255,255,255,.03) 0px, rgba(255,255,255,.03) 1px, transparent 1px, transparent 60px)",
          maskImage:
            "linear-gradient(to bottom, transparent, black, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto text-center max-w-4xl">
        <span>HSA/FSA eligible</span>

        {/* Margin top 12px */}
        <h1 className="text-[48px] mt-3 font-bold leading-13">
          Hero & Gabanna <span className="text-teal-400"> Hitting</span> Hard
        </h1>

        {/* Margin top 8px */}
        <p className="mt-2 text-[16px] max-w-2xl mx-auto leading-6">
          Giving iteration comes in handy. Wait the real average come into your
          life with the supremacy and elegance that your body needs.
        </p>

        {/* Margin top 32px */}
        <div className="flex flex-col sm:flex-row justify-center mt-8 gap-4">
          <button className="cursor-pointer rounded-full py-3 w-full sm:w-auto px-6 bg-white text-black hover:bg-gray-200 transition-color duration-100">
            Start Testings
          </button>
          <button className="cursor-pointer rounded-full py-3 w-full sm:w-auto px-6 bg-transparent text-white backdrop-blur-sm bg-white/5 hover:bg-white/20 transition-color duration-100">
            See more
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
