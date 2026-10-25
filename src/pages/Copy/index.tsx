import Card from "@/components/ui/Card";

import SectionLayout from "@/layouts/SectionLayout";
import { memo } from "react";
import { Link } from "react-router-dom";
import { FEATURES } from "../Landing";

const Copy = memo(function Copy() {
  //   const { isMobile, breakpoint } = useResponsive();

  return (
    <>
      <SectionLayout
        id="hero"
        className=" bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white"
      ></SectionLayout>
      <SectionLayout id="content" className="py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2>Content Section</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </SectionLayout>
      <SectionLayout id="stats" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="features-heading"
              className="font-bold tracking-tight text-gray-900 dark:text-white"
              style={{ fontSize: "clamp(1.75rem, 3vw + 0.5rem, 2.5rem)" }}
            >
              Senior-level patterns, demonstrated
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Every pattern is production-tested and architecturally sound.
            </p>
          </div>

          <div
            className="mt-8 grid gap-6"
            style={{
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            }}
          >
            {FEATURES.map((f) => (
              <Card key={f.title} className="transition-shadow hover:shadow-md">
                <div className="flex items-start gap-4">
                  <span className="text-3xl" aria-hidden="true">
                    {f.icon}
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </SectionLayout>
      <SectionLayout id="about" className="bg-gray-500 py-20 text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-[32px] font-bold leading-8">
            Explore every layout
          </h2>
          <p className="mt-2">
            Discover how to effectively utilize different layout strategies to
            create responsive and visually appealing interfaces.
          </p>

          <div className="mt-4 flex-col sm:flex-row flex gap-4">
            <Link
              to="/dashboard"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 font-semibold text-blue-600 shadow hover:bg-blue-50 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
            >
              Dashboard →
            </Link>
            <Link
              to="/login"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/40 px-6 font-semibold text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600"
            >
              Auth Layout
            </Link>
          </div>
        </div>
      </SectionLayout>
    </>
  );
});

export default Copy;
