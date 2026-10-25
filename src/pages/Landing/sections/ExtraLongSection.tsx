import Section from "../../../layout/Section";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Circuit from "../components/Circuit";
import Ecosystem from "../components/Ecosystem";
import Globe from "../components/Globe/Globe";
import { useRef, useState } from "react";
import type { Ref } from "react";

gsap.registerPlugin(ScrollTrigger);

const SectionContainer = ({
  bgColor,
  children,
  containerRef,
}: {
  children: React.ReactNode;
  bgColor: string;
  containerRef?: Ref<HTMLDivElement>;
}) => {
  return (
    <div ref={containerRef} className={`h-full flex-1 bg-blue-800 z-10 ${bgColor}`}>
      {children}
    </div>
  );
};

function ExtraLongSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const lastSectionRef = useRef<HTMLDivElement>(null);
  const [endOfSection, setEndOfSection] = useState(false);

  //   useGSAP(() => {
  //     tl.to("#logo", {
  //       scale: 1.1,
  //       duration: 2,
  //     }).to("#logo", {
  //       scale: 1,
  //       duration: 2,
  //     });
  //     tl.repeat(-1);
  //   });

  useGSAP(() => {
    // let fadeText = SplitText.create("#fadeText", { type: "chars" });
    // tl.from(fadeText.chars, {
    //   opacity: 0,
    //   duration: 5,
    //   delay: 5,
    //   stagger: 0.05,
    // });
    // gsap.to("#text", {
    // ease: "power1.inOut",
    // opacity: 1,
    // y: 0,
    // });
    // gsap.fromTo(
    //   "#hero-text",
    //   {
    //     opacity: 0,
    //     y: 20,
    //   },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     delay: 0.5,
    //     stagger: 0.1,
    //   },
    // );
  });

  useGSAP(() => {
    const track = trackRef.current;
    const lastSection = lastSectionRef.current;
    const mainContainer = track?.closest<HTMLElement>(".main-container");
    if (!track || !lastSection || !mainContainer) {
      throw new Error("No se encontraron los contenedores del recorrido horizontal.");
    }

    const scrollTween = gsap.to(track, {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        pin: true,
        trigger: mainContainer,
        start: "left left",
        end: () =>
          `+=${mainContainer.offsetWidth} bottom`,
        scrub: 1,
        markers: false,
      },
    });

    // Sigue el desplazamiento real del tween, incluido el retraso de scrub.
    ScrollTrigger.create({
      trigger: lastSection,
      containerAnimation: scrollTween,
      start: "left right",
      end: "right left",
      onEnter: () => setEndOfSection(true),
      onLeaveBack: () => setEndOfSection(false),
      onRefresh: (self) => setEndOfSection(self.progress > 0),
    });

    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: "#logo",
    //     start: "left 0%",
    //     end: "left 100%",
    //     scrub: 1,
    //     containerAnimation: scrollTween,
    //     markers: false,
    //   },
    // });

    // tl.to("#logo", {
    //   y: -100, // Sube 100px
    //   x: 50, // Derecha 50px
    //   scale: 1.3, // Crece
    //   rotation: 15, // Rota
    //   duration: 3,
    //   ease: "power2.out",
    // }).to("#logo", {
    //   y: 0,
    //   x: 0,
    //   scale: 1,
    //   rotation: 0,
    //   duration: 3,
    //   ease: "power2.inOut",
    // });

    // Mueve el logo a una posición fija absoluta
    // tl.to("#logo", {
    //   top: "20%", // Posición fija desde arriba
    //   left: "10%", // Posición fija desde la izquierda
    //   duration: 3,
    //   ease: "power2.out",
    // })
    //   .to("#logo", {
    //     top: "20%", // Se mantiene en la misma posición
    //     left: "10%", // Se mantiene en la misma posición
    //     duration: 3,
    //   })
    //   .set("#logo", {
    //     top: "15%",
    //     left: "70%",
    //     scale: 1.3,
    //   });
  });

  return (
    <Section className="min-h-[100vh] py-0 main-container relative">
      {/* Final View */}
      {endOfSection && (
        <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
          <Globe className="translate-y-210"></Globe>
          <h1 className="text-5xl text-center text-white mb-8 font-semibold z-100">
            Software <br /> that <span id="fadeText2">Survives</span> the Real
            World.
          </h1>
        </div>
      )}

      <div
        ref={trackRef}
        className={`extra-long-container w-[7700px] h-[100vh] relative flex flex-row items-center justify-start z-10`}
      >
        {/* <div className="flower1" style={{ top: "50%", left: "2500px" }}></div>
        <div
          className="square1"
          style={{
            top: "50%",
            left: "3500px",
            position: "absolute",
            background: "blue",
            width: "200px",
            height: "200px",
          }}
        ></div> */}
        <div className="h-full flex-1 z-10">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl text-white mt-1 font-medium">
              Ticketing Apps Stop at the Front Door:
              <br />
              Evinra Runs the Entire Show
            </h1>

            <Circuit />
          </div>
        </div>
        {/* Sections */}
        <SectionDivider />
        <SectionContainer bgColor="bg-blue-800">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl mt-5">Ticketing </h1>
          </div>
        </SectionContainer>
        <SectionDivider />
        <SectionContainer bgColor="bg-zinc-800">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl mt-5">POS </h1>
          </div>
        </SectionContainer>
        <SectionDivider />
        <SectionContainer bgColor="">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl mt-5">Vendors </h1>
          </div>
        </SectionContainer>
        <SectionDivider />
        <SectionContainer bgColor="bg-white">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl mt-5">Reports </h1>
          </div>
        </SectionContainer>
        <SectionDivider />
        <SectionContainer bgColor="bg-zinc-800" containerRef={lastSectionRef}>
          <div className="flex flex-col items-center">
            <h1 className="text-5xl mt-5">Reports </h1>
          </div>
        </SectionContainer>
        <SectionDivider />

        <div id="filler" className="w-40"></div>
      </div>

      <Ecosystem />

      {/* Logo outside extralong container */}
      {/* <div
        id="logo"
        className="absolute top-[calc(50vh-100px)] left-1/2 transform -translate-x-1/2 z-10 w-36 shadow-inset shadow-lg/40 shadow-teal-500/20 rounded-full p-3 bg-white flex flex-row items-center justify-center z-10"
      >
        <Brand />
      </div> */}
    </Section>
  );
}

export default ExtraLongSection;

const SectionDivider = () => {
  return <div className="h-full bg-white border-l border-white"></div>;
};
