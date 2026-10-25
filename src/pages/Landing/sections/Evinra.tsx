import Section from "../../../layout/Section";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import GridPatternOverlay from "../components/GridPatternOverlay";
import VideoLayer from "../components/VideoLayer";
import { memo, useEffect, useRef, useState } from "react";
import Brand from "../Brand";

export type HeroButton = {
  label: string;
  variant: "primary" | "secondary";
};

export type HeroData = {
  tagline: string;
  titleLines: [string, string];
  accentLine: string;
  description: string;
  buttons: HeroButton[];
};

type Props = {
  data: HeroData;
};

const Hero = memo(function Hero({ data }: Props) {
  const { tagline, titleLines, accentLine, description, buttons } = data;

  const tl = gsap.timeline({});

  const blurStart = {
    opacity: 0,
    filter: "blur(8px)",
    webkitFilter: "blur(8px)",
  };
  const blurEnd = {
    opacity: 1,
    filter: "blur(0px)",
    webkitFilter: "blur(0px)",
  };

  useGSAP(() => {
    let heroText1 = SplitText.create("#heroText1", { type: "chars" });
    let heroText2 = SplitText.create("#heroText2", { type: "chars" });
    tl.fromTo(
      heroText1.chars,
      {
        ...blurStart,
      },
      {
        ...blurEnd,
        duration: 0.35,
        delay: 0.2,
        stagger: {
          amount: 0.5,
          from: "random",
        },
      },
    );
    tl.fromTo(
      heroText2.chars,
      {
        ...blurStart,
      },
      {
        ...blurEnd,
        duration: 0.4,
        delay: 0.225,
        stagger: {
          amount: 0.5,
          from: "random",
        },
      },
    );
  });

  // const heroText = SplitText.create("#heroTextAccent", { type: "chars" });
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
  // timeline.from(heroText.chars, {
  //   opacity: 0,
  //   y: 20,
  //   duration: 0.05,
  //   delay: 0.5,
  //   stagger: 0.05,
  // });

  //       //   .from(".hero-title", {
  //       //     opacity: 0,
  //       //     duration: 1.5,
  //       //     delay: 0.5,
  //       //   })
  //       //   .from(
  //       //     ".hero-rule",
  //       //     {
  //       //       scaleX: 0,
  //       //       duration: 2,
  //       //     },
  //       //     "-=4",
  //       //   )
  //       //   .from(
  //       //     ".hero-canvas",
  //       //     {
  //       //       scale: 0,
  //       //       opacity: 0,
  //       //       duration: 2,
  //       //     },
  //       //     "<",
  //       //   )
  //       .from(
  //         ".hero-stats",
  //         {
  //           y: 20,
  //           opacity: 0,
  //           stagger: 0.2,
  //           duration: 2,
  //         },
  //         "<",
  //       );
  //   }, []);

  //   useGSAP(() => {
  //     // timeline.from("#hero-text", {
  //     //   opacity: 0,
  //     //   duration: 5,
  //     // });

  //     timeline.to("#hero-text", {
  //       x: 250,
  //       duration: 2,
  //       delay: 2,
  //     });

  //     timeline.to("#hero-text", {
  //       x: -1000,
  //       duration: 2,
  //     });

  //     timeline.to("#hero-text", {
  //       x: 250,
  //       duration: 2,
  //     });
  //   }, []);

  // Estado para almacenar qué índices están reproduciendo (máximo 3)
  const [playingIndices, setPlayingIndices] = useState(() => {
    // Inicializar con 3 índices aleatorios
    const initial = new Set();
    const totalDivs = 8;
    const numPlaying = 3;
    while (initial.size < numPlaying) {
      initial.add(Math.floor(Math.random() * totalDivs));
    }
    return initial;
  });

  // Referencia para almacenar el intervalo
  const intervalRef = useRef(null);

  // Función para cambiar aleatoriamente los divs que están reproduciendo
  const updatePlayingVideos = () => {
    const totalDivs = 8;
    // Número aleatorio de videos reproduciendo (1-3)
    const numPlaying = Math.floor(Math.random() * 3) + 1; // 1, 2, o 3

    const newPlaying = new Set();
    while (newPlaying.size < numPlaying) {
      newPlaying.add(Math.floor(Math.random() * totalDivs));
    }
    setPlayingIndices(newPlaying);
  };

  // Change the playing videos every 2.5 seconds
  //   useEffect(() => {
  //     updatePlayingVideos();
  //     intervalRef.current = setInterval(updatePlayingVideos, 1500);
  //     // Clean up the interval on component unmount
  //     return () => {
  //       if (intervalRef.current) {
  //         clearInterval(intervalRef.current);
  //       }
  //     };
  //   }, []);

  //   const videoItems = Array.from({ length: 8 }, (_, index) => ({
  //     id: index,
  //     isPlaying: playingIndices.has(index),
  //   }));

  return (
    <>
      {/* <div className="grid grid-cols-4 grid-rows-2 gap-0 absolute top-0 left-0 w-full h-full z-0 opacity-80">
        {videoItems.map((item) => (
          <div key={item.id}>
            <VideoLayer onStartPlaying={item.isPlaying} />
          </div>
        ))}
      </div> */}
      <Section className="min-h-[100vh] py-24 lg:py-24">
        {/* Grid pattern overlay */}
        <GridPatternOverlay className="z-10" />

        {/* <div className="hero__photo" aria-hidden="true">  */}

        {/* </div>  */}

        <div className="mx-auto text-center max-w-4xl relative">
          <div className="w-72 top-[calc(4%-3rem)] left-1/2 transform -translate-x-1/2 absolute z-0 opacity-10">
            <Brand />
          </div>
          <span className="border border-teal-300/20 bg-gradient-to-br from -transparent to-teal-50/10 text-teal-400 rounded-4xl px-5 py-2">
            {tagline}
          </span>

          {/* Margin top 12px */}
          <div id="hero-title-group" className="mt-6 mb-3 flex flex-col">
            <h1
              id="heroText1"
              className="text-[48px] font-bold leading-13 text-white"
            >
              {titleLines[0]}
            </h1>
            <h1
              id="heroText2"
              className="text-[48px] font-bold leading-13 text-white"
            >
              {titleLines[1]}
            </h1>
            <h1
              id="heroTextAccent"
              className="text-[48px] font-bold leading-13 text-transparent bg-gradient-to-b from-teal-300 via-teal-500 via-teal-500 via-teal-600 via-teal-700 to-teal-900 bg-clip-text"
            >
              {accentLine}
            </h1>
          </div>

          {/* Margin top 8px */}
          <p className="mt-2 text-[14px] max-w-xl mx-auto leading-6 text-white/95">
            {description}
          </p>

          {/* Margin top 32px */}
          <div className="flex flex-col sm:flex-row justify-center mt-8 gap-4">
            {buttons.map((btn, i) =>
              btn.variant === "primary" ? (
                <button
                  key={i}
                  className="cursor-pointer rounded-full py-3 w-full sm:w-auto px-6 bg-white text-black hover:bg-gray-200 transition-color duration-100"
                >
                  {btn.label} →
                </button>
              ) : (
                <button
                  key={i}
                  className="cursor-pointer rounded-full py-3 w-full sm:w-auto px-6 bg-transparent text-white backdrop-blur-sm bg-white/5 hover:bg-white/15 transition-color duration-100"
                >
                  {btn.label} →
                </button>
              ),
            )}
          </div>
        </div>
      </Section>
    </>
  );
});

export default Hero;
