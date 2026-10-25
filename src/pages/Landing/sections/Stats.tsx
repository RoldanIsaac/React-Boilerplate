import AnimatedCounter from "../components/AnimatedCounter";

export type StatItem = {
  num: string;
  label: string;
};

type Props = {
  stats: StatItem[];
};

export default function Stats({ stats }: Props) {
  return (
    <section className="relative">
      <div className="stats__inner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-2 gap-y-4 md:gap-y-12 border-y border-gray-400/10 py-8 px-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="border border-x-gray-400/10 border-y-transparent flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-gray-50/0 to-gray-50/5 dark:from-gray-950/0 dark:to-gray-700/15 py-8 rounded-xl hover:border hover:border-gray-400/20 shadow-lg/10 shadow-teal-500/20 transition-all duration-300 ease-in-out"
          >
            <div className="text-transparent bg-gradient-to-b from-teal-300 via-teal-400 via-teal-500 via-teal-600 to-teal-700 bg-clip-text text-4xl font-extrabold">
              <AnimatedCounter
                value={parseInt(stat.num, 10)}
                duration={200}
              ></AnimatedCounter>
            </div>
            <div className="stat__label text-white/90">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
