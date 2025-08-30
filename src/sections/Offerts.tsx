import Section from "../layout/Section";
import { mockCards } from "../constants";
import { stackedWavesSvgBg } from "../assets";
import { layout, section } from "../styles/styles";

type Props = {};

const Offerts = (props: Props) => {
  return (
    <Section className="h-[100vh]" svgBg={stackedWavesSvgBg} flip={true}>
      <div className={`${layout.section}`}>
        <div className={`${section.spacing} ${section.flex}`}>
          {mockCards.map((card, index) => (
            <div className="app-card" key={index}>
              <h1 className="app-title">{card.title}</h1>
              <h1 className="app-subtitle">{card.subtitle}</h1>
              <p className="app-text">{card.content}</p>
              <div className="app-cta-container">
                <button className="app-button-primary"> Add </button>
                <button className="app-button-secondary"> Remove </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Offerts;
