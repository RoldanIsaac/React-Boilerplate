import Section from "../../../layout/Section";
import GridPatternOverlay from "../components/GridPatternOverlay";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

type Props = {};

function GiantText({}: Props) {
  const tl = gsap.timeline({});
  useGSAP(() => {
    let giantText = SplitText.create("#giantText", { type: "chars" });

    gsap.set(giantText.chars, {
      display: "inline-block", // Important for chars not get piled up
    });

    tl.fromTo(
      giantText.chars.slice(1),
      { y: 0 },
      {
        y: 50,
        duration: 0.2,
        ease: "power2.out",
      },
    );
  });

  return (
    <Section className="min-h-[100vh] py-4 lg:py-8">
      <GridPatternOverlay className="translate-y-20" />
      <div
        id="giantText"
        className="-translate-x-12 absolute inset-0 z-10 text-[450px] opacity-40 leading-112 font-bold bg-clip-text bg-gradient-to-br from-white/60 via-gray-50/20 to-white/10 text-transparent"
        style={{
          display: "flex", // para que las letras estén en línea
          flexWrap: "nowrap", // por si acaso
        }}
      >
        EVINRA
      </div>
    </Section>
  );
}

export default GiantText;
