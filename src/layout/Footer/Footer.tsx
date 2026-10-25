type Props = {};

const footerSections = [
  { title: "Product", links: ["Features", "Pricing", "Changelog"] },
  { title: "Patterns", links: ["Layouts", "Responsive", "Grid"] },
  { title: "Resources", links: ["Docs", "Examples", "GitHub"] },
];

export default function Footer({}: Props) {
  return (
    <footer
      className="border-t border-gray-200 dark:border-gray-800"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              ⬡ LayoutPG
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              React Layout & Responsiveness Playground
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                {section.title}
              </h3>
              <ul className="mt-3 space-y-2" role="list">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-gray-400">
          © {new Date().getFullYear()} Layout Playground. Built with React 18 +
          TypeScript + Tailwind CSS v4.
        </p>
      </div>
    </footer>
  );
}
