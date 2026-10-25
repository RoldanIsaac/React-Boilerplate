import Section from "../../../layout/Section";
import { layout, section } from "../../../styles/styles";

type Props = {};

const Offerts = (props: Props) => {
  return (
    <Section
      className="h-[100vh]"
      // svgBg={stackedWavesSvgBg}
      flip={true}
    >
      <div className={`${layout.section}`}>
        <div className={`${section.spacing} ${section.flex}`}></div>
      </div>
    </Section>
  );
};

export default Offerts;
