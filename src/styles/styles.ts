export const layout = {
  section: `relative flex flex-col md:flex-row justify-center items-center`,
  sectionHeight: `min-h-screen`,
};

export const section = {
  flex: `flex flex-col md:flex-row gap-4 items-center justify-center`,
  spacing: `p-5 px-12`,
};

export const text = {
  secondary: `text-gray-400 font-light text-md`,
  title: `text-white font-light text-2xl`,
  hero: `text-white font-bold text-5xl`,
};

export const navbar =
  "relative z-20 flex h-16 w-full items-center justify-between gap-2 border-b px-4 lg:px-8";

export const app = {
  //   border: "border-gray-50 dark:border-gray-800",
  //   appearance: "bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100",
  border: "border-[var(--border-color)]",
  appearance: "bg-[var(--bg-color)] text-[var(--text-color)] ",
};
