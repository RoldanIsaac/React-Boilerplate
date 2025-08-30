import Section from "../layout/Section";
import { scanGif, stackedWavesSvgBg } from "../assets";
import { layout, section } from "../styles/styles";

type Props = {};

const Hero = (props: Props) => {
  return (
    <Section className="h-[100vh]" svgBg={stackedWavesSvgBg}>
      <div className={`${layout.section}`}>
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
      </div>
    </Section>
  );
};

export default Hero;
