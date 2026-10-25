import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Section from "../../../layout/Section";

export type ProblemItem = {
  num: string;
  iconPath: string;
  title: string;
  description: string;
  top: string;
};

export type ProblemData = {
  headingStart: string;
  accentText: string;
  headingEnd: string;
  items: ProblemItem[];
};

type Props = {
  data: ProblemData;
};

function Problem({ data }: Props) {
  const { headingStart, accentText, headingEnd, items } = data;

  const timeline = gsap.timeline({});

  const appear = {
    opacity: 0,
    y: 20,
    duration: 1,
  };

  useGSAP(() => {
    // timeline.from("[id^='problem-item-']", {
    // });
    timeline
      .from("#problem-item-0", {
        ...appear,
        delay: 0.7,
      })
      .from("#problem-item-1", {
        ...appear,
        delay: 0.0125,
      })
      .from("#problem-item-2", {
        ...appear,
        delay: 0.0125,
      });
  });

  return (
    <Section className="min-h-svh py-24 lg:py-36">
      <div className="h-[600vh] relative gap-8">
        <h2 className="top-20 select-none sticky text-[36px] md:max-w-2xl font-bold leading-13 text-gray-800 dark:text-white">
          {headingStart}
          <span className="accent">{accentText}</span>
          {headingEnd}
        </h2>
        <div className="flex flex-col w-full min-h-full justify-between">
          {items.map((item, idx) => (
            <div
              id={`problem-item-${idx}`}
              key={item.num}
              className={`problem__row is-visible self-end sticky ${item.top}`}
              data-reveal=""
            >
              <div>
                <div className="problem__num">{item.num}</div>
                <div className="problem__icon">
                  {/* <svg viewBox="0 0 16 16" fill="none">
                    <path
                      d={item.iconPath}
                      stroke="#0D1520"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg> */}
                </div>
              </div>
              <h3 className="text-2xl text-gray-800 dark:text-white">
                {item.title}
              </h3>
              <p className="text-md text-gray-500 max-w-md">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Problem;
