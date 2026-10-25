import Demo from "./sections/Demo";
import Hero, { type HeroData } from "./sections/Evinra";
import ExtraLongSection from "./sections/ExtraLongSection";
import GiantText from "./sections/GiantText";
import Platform from "./sections/Platform";
import Problem, { type ProblemData } from "./sections/Problem";
import Stats, { type StatItem } from "./sections/Stats";
import Testimonials from "./sections/Testimonials";

const HERO_DATA: HeroData = {
  tagline: "Built for outdoor event operators",
  titleLines: ["Sell the Tickets", "Run the Show"],
  accentLine: "Keep the Revenue",
  description:
    "Stop taping your operations together. Evinra is the only platform that combines low-fee, white-label ticketing with a rugged, native event management system built for outdoor operators.",
  buttons: [
    { label: "Request a Demo", variant: "primary" },
    { label: "See How It Works", variant: "secondary" },
  ],
};

const PROBLEM_DATA: ProblemData = {
  headingStart: "The ",
  accentText: '"Industry Standard"',
  headingEnd: " is Costing You Time, Money, and Your Sanity.",
  items: [
    {
      num: "01",
      iconPath:
        "M8 1.33333V14.6667M11.3333 3.33333H6.33333C5.71449 3.33333 5.121 3.57917 4.68342 4.01675C4.24583 4.45434 4 5.04783 4 5.66667C4 6.28551 4.24583 6.879 4.68342 7.31658C5.121 7.75417 5.71449 8 6.33333 8H9.66667C10.2855 8 10.879 8.24583 11.3166 8.68342C11.7542 9.121 12 9.71449 12 10.3333C12 10.9522 11.7542 11.5457 11.3166 11.9832C10.879 12.4208 10.2855 12.6667 9.66667 12.6667H4",
      title: "The 'Standard Fee' Trap",
      description:
        "Traditional ticketing platforms charge 5–15% of every ticket sold. They built their business model on taking a cut of yours. Every seat you fill, every gate you open, they collect — on top of your marketing budget, production costs, and crew.",
      top: "top-20",
    },
    {
      num: "02",
      iconPath:
        "M0.666666 0.666666L15.3333 15.3333M11.1467 7.37333C11.6927 7.63983 12.2034 7.97353 12.6667 8.36667M3.33333 8.36667C4.32139 7.54055 5.51058 6.99081 6.78 6.77333M7.14 3.36667C8.5661 3.2534 10.0004 3.42817 11.3576 3.88056C12.7148 4.33295 13.9671 5.05373 15.04 6M0.946666 6C1.87144 5.18257 2.9318 4.53282 4.08 4.08M5.68667 10.74C6.36347 10.2592 7.17312 10.0008 8.00333 10.0008C8.83355 10.0008 9.6432 10.2592 10.32 10.74M8 13.3333H8.00667",
      title: "Failing Gate WiFi",
      description:
        "Rural fairgrounds weren't built for 5,000 smartphones and cloud-dependent apps. The moment the local cell tower overloads, your scanners freeze, your lines stop moving, and your revenue stops flowing. The vendor blames the internet.",
      top: "top-55",
    },

    {
      num: "03",
      iconPath:
        "M12.9593 5.23333C12.9267 5.448 12.9987 5.66533 13.152 5.81867L14.1973 6.864C14.5107 7.17733 14.668 7.58867 14.668 8C14.668 8.41133 14.5113 8.822 14.1973 9.136L13.1233 10.21C13.0512 10.2821 12.9631 10.3363 12.8662 10.3683C12.7693 10.4002 12.6663 10.409 12.5653 10.394C12.252 10.3473 12.0307 10.074 11.92 9.77733C11.8229 9.51519 11.6614 9.28167 11.4505 9.09824C11.2395 8.91482 10.9858 8.78738 10.7127 8.72765C10.4396 8.66792 10.1559 8.67782 9.88764 8.75642C9.61937 8.83503 9.37517 8.97983 9.1775 9.1775C8.97983 9.37517 8.83503 9.61937 8.75642 9.88764C8.67782 10.1559 8.66792 10.4396 8.72765 10.7127C8.78738 10.9858 8.91482 11.2395 9.09824 11.4505C9.28167 11.6614 9.51519 11.8229 9.77733 11.92C10.0747 12.0307 10.3473 12.2513 10.394 12.5653C10.4091 12.6663 10.4003 12.7693 10.3683 12.8662C10.3364 12.9631 10.2822 13.0512 10.21 13.1233L9.13667 14.1967C8.98776 14.3462 8.81078 14.4649 8.61589 14.5458C8.421 14.6268 8.21204 14.6685 8.001 14.6685C7.78996 14.6685 7.581 14.6268 7.38611 14.5458C7.19122 14.4649 7.01424 14.3462 6.86533 14.1967L5.82 13.1513C5.74444 13.0756 5.65219 13.0187 5.55065 12.9851C5.44911 12.9516 5.34112 12.9423 5.23533 12.958C4.90667 13.0073 4.67533 13.294 4.55533 13.6033C4.45475 13.8615 4.29139 14.0905 4.08003 14.2697C3.86867 14.4488 3.61598 14.5725 3.34482 14.6294C3.07366 14.6863 2.79258 14.6748 2.52701 14.5957C2.26145 14.5167 2.01977 14.3727 1.82385 14.1768C1.62793 13.9809 1.48395 13.7392 1.40492 13.4737C1.3259 13.2081 1.31433 12.927 1.37126 12.6558C1.42819 12.3847 1.55183 12.132 1.73098 11.9206C1.91014 11.7093 2.13916 11.5459 2.39733 11.4453C2.70667 11.3253 2.99333 11.094 3.042 10.7653C3.05781 10.6596 3.04862 10.5516 3.01516 10.4501C2.9817 10.3486 2.9249 10.2563 2.84933 10.1807L1.804 9.13533C1.53126 9.06297 1.28246 8.91987 1.08275 8.72052C0.883044 8.52116 0.739512 8.27261 0.666666 8C0.666666 7.58867 0.824 7.17733 1.13733 6.864L2.21133 5.79333C2.28341 5.72128 2.37137 5.6671 2.46815 5.63515C2.56493 5.6032 2.66785 5.59436 2.76867 5.60933C3.082 5.656 3.304 5.92933 3.414 6.226C3.5111 6.48814 3.67256 6.72167 3.88352 6.90509C4.09448 7.08851 4.34817 7.21595 4.62126 7.27568C4.89436 7.33541 5.17809 7.32552 5.44636 7.24691C5.71463 7.1683 5.95883 7.02351 6.1565 6.82583C6.35417 6.62816 6.49897 6.38396 6.57758 6.11569C6.65618 5.84742 6.66608 5.56369 6.60635 5.2906C6.54662 5.0175 6.41918 4.76381 6.23576 4.55285C6.05233 4.34189 5.81881 4.18044 5.55667 4.08333C5.26 3.97333 4.98667 3.752 4.94 3.438C4.92491 3.33708 4.9337 3.23403 4.96566 3.13712C4.99761 3.04022 5.05185 2.95215 5.124 2.88L6.19733 1.80667C6.34624 1.65712 6.52322 1.53846 6.71811 1.45749C6.913 1.37652 7.12196 1.33484 7.333 1.33484C7.54404 1.33484 7.753 1.37652 7.94789 1.45749C8.14278 1.53846 8.31976 1.65712 8.46867 1.80667L9.514 2.852C9.66733 3.00533 9.88467 3.07733 10.0987 3.04533C10.4273 2.996 10.6587 2.70933 10.7787 2.4C10.8792 2.14183 11.0426 1.9128 11.254 1.73365C11.4653 1.55449 11.718 1.43086 11.9892 1.37392C12.2603 1.31699 12.5414 1.32856 12.807 1.40759C13.0726 1.48661 13.3142 1.6306 13.5101 1.82652C13.7061 2.02244 13.8501 2.26411 13.9291 2.52968C14.0081 2.79524 14.0197 3.07632 13.9627 3.34748C13.9058 3.61865 13.7822 3.87134 13.603 4.0827C13.4239 4.29406 13.1948 4.45742 12.9367 4.558C12.6273 4.678 12.3407 4.90933 12.292 5.238L12.9593 5.23333Z",
      title: "The Software Frankenstein",
      description:
        "Ticketing in one app. Vendors tracked in a spreadsheet. Cash boxes reconciled in a separate tool. You spend event day praying these integrations hold, instead of running your show.",
      top: "top-90",
    },
  ],
};

const STATS_DATA: StatItem[] = [
  { num: "Up to 50%", label: "Lower Ticketing Fees" },
  { num: "99.9%", label: "Uptime Target" },
  { num: "35+", label: "Scans Per Min, Per Device" },
  { num: "100,000+", label: "Attendee Capacity" },
];

type Props = {};

const Landing = (props: Props) => {
  return (
    <div>
      <Hero data={HERO_DATA} />
      <Stats stats={STATS_DATA} />
      <Problem data={PROBLEM_DATA} />

      <Platform />
      <ExtraLongSection />
      <Testimonials />
      <Demo />
      <GiantText />
    </div>
  );
};

export default Landing;
