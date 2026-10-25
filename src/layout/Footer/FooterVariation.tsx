import Brand from "../../pages/Landing/data/brand";
import Section from "../Section";

type SocialLink = {
  href: string;
  ariaLabel: string;
  iconPath: string;
};

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "#",
    ariaLabel: "X (Twitter)",
    iconPath:
      "M12.1627 1.5H14.368L9.55 7.00667L15.218 14.5H10.78L7.304 9.95533L3.32667 14.5H1.12L6.27333 8.61L0.836 1.5H5.38667L8.52867 5.654L12.1627 1.5ZM11.3887 13.18H12.6107L4.72267 2.75067H3.41133L11.3887 13.18Z",
  },
  {
    href: "#",
    ariaLabel: "LinkedIn",
    iconPath:
      "M13.6313 13.6347H11.262V9.922C11.262 9.03667 11.244 7.89733 10.0273 7.89733C8.792 7.89733 8.60333 8.86067 8.60333 9.85667V13.6347H6.234V6H8.51V7.04067H8.54067C8.85867 6.44067 9.632 5.80733 10.7873 5.80733C13.188 5.80733 13.632 7.38733 13.632 9.444L13.6313 13.6347ZM3.558 4.95533C3.37725 4.95542 3.19826 4.91986 3.03127 4.85069C2.86428 4.78152 2.71257 4.6801 2.58482 4.55223C2.45708 4.42436 2.3558 4.27255 2.2868 4.1055C2.21779 3.93844 2.1824 3.75941 2.18267 3.57867C2.1828 3.30652 2.26363 3.04052 2.41494 2.81431C2.56624 2.58811 2.78123 2.41184 3.03271 2.30782C3.28419 2.2038 3.56087 2.17668 3.82776 2.2299C4.09466 2.28313 4.33977 2.4143 4.53212 2.60683C4.72446 2.79936 4.85539 3.0446 4.90836 3.31154C4.96132 3.57849 4.93394 3.85514 4.82967 4.10652C4.7254 4.3579 4.54893 4.57272 4.32258 4.72381C4.09622 4.87489 3.83015 4.95547 3.558 4.95533ZM4.746 13.6347H2.37V6H4.746V13.6347ZM14.8167 0H1.18067C0.528 0 0 0.516 0 1.15267V14.8473C0 15.4847 0.528 16 1.18067 16H14.8147C15.4667 16 16 15.4847 16 14.8473V1.15267C16 0.516 15.4667 0 14.8147 0H14.8167Z",
  },
  {
    href: "#",
    ariaLabel: "Instagram",
    iconPath:
      "M8 1.442C10.136 1.442 10.3893 1.45 11.2333 1.48867C13.4013 1.58733 14.414 2.616 14.5127 4.768C14.5513 5.61133 14.5587 5.86467 14.5587 8.00067C14.5587 10.1373 14.5507 10.39 14.5127 11.2333C14.4133 13.3833 13.4033 14.414 11.2333 14.5127C10.3893 14.5513 10.1373 14.5593 8 14.5593C5.864 14.5593 5.61067 14.5513 4.76733 14.5127C2.594 14.4133 1.58667 13.38 1.488 11.2327C1.44933 10.3893 1.44133 10.1367 1.44133 8C1.44133 5.864 1.45 5.61133 1.488 4.76733C1.58733 2.616 2.59733 1.58667 4.76733 1.488C5.61133 1.45 5.864 1.442 8 1.442ZM8 0C5.82733 0 5.55533 0.00933333 4.702 0.048C1.79667 0.181333 0.182 1.79333 0.0486667 4.70133C0.00933333 5.55533 0 5.82733 0 8C0 10.1727 0.00933333 10.4453 0.048 11.2987C0.181333 14.204 1.79333 15.8187 4.70133 15.952C5.55533 15.9907 5.82733 16 8 16C10.1727 16 10.4453 15.9907 11.2987 15.952C14.2013 15.8187 15.82 14.2067 15.9513 11.2987C15.9907 10.4453 16 10.1727 16 8C16 5.82733 15.9907 5.55533 15.952 4.702C15.8213 1.79933 14.2073 0.182 11.2993 0.0486667C10.4453 0.00933333 10.1727 0 8 0ZM8 3.892C7.46053 3.892 6.92634 3.99826 6.42794 4.2047C5.92953 4.41115 5.47667 4.71374 5.09521 5.09521C4.71374 5.47667 4.41115 5.92953 4.2047 6.42794C3.99826 6.92634 3.892 7.46053 3.892 8C3.892 8.53947 3.99826 9.07366 4.2047 9.57206C4.41115 10.0705 4.71374 10.5233 5.09521 10.9048C5.47667 11.2863 5.92953 11.5889 6.42794 11.7953C6.92634 12.0017 7.46053 12.108 8 12.108C9.08951 12.108 10.1344 11.6752 10.9048 10.9048C11.6752 10.1344 12.108 9.08951 12.108 8C12.108 6.91049 11.6752 5.8656 10.9048 5.09521C10.1344 4.32481 9.08951 3.892 8 3.892ZM8 10.6667C7.29276 10.6667 6.61448 10.3857 6.11438 9.88562C5.61428 9.38552 5.33333 8.70724 5.33333 8C5.33333 7.29276 5.61428 6.61448 6.11438 6.11438C6.61448 5.61428 7.29276 5.33333 8 5.33333C8.70724 5.33333 9.38552 5.61428 9.88562 6.11438C10.3857 6.61448 10.6667 7.29276 10.6667 8C10.6667 8.70724 10.3857 9.38552 9.88562 9.88562C9.38552 10.3857 8.70724 10.6667 8 10.6667ZM12.2707 2.77C12.1446 2.77 12.0197 2.79484 11.9032 2.8431C11.7866 2.89136 11.6808 2.9621 11.5916 3.05128C11.5024 3.14045 11.4317 3.24632 11.3834 3.36283C11.3352 3.47934 11.3103 3.60422 11.3103 3.73033C11.3103 3.85645 11.3352 3.98132 11.3834 4.09784C11.4317 4.21435 11.5024 4.32022 11.5916 4.40939C11.6808 4.49857 11.7866 4.5693 11.9032 4.61757C12.0197 4.66583 12.1446 4.69067 12.2707 4.69067C12.5254 4.69067 12.7696 4.58949 12.9497 4.40939C13.1298 4.22929 13.231 3.98503 13.231 3.73033C13.231 3.47564 13.1298 3.23137 12.9497 3.05128C12.7696 2.87118 12.5254 2.77 12.2707 2.77Z",
  },
];

type FooterProps = {};

export default function Footer({}: FooterProps) {
  return (
    <Section className="wp-block-template-part min-h-fit py-10">
      <footer className="footer">
        <div className="container flex flex-col w-full gap-8">
          <div className="footer__top grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4 footer__brand">
              <div className="w-32">
                <Brand />
              </div>

              <p className="text-white">
                Run the entire event lifecycle on one platform. Take your brand,
                your data, and your ticket revenue back.
              </p>
              <div className="flex gap-3 pt-1">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.ariaLabel}
                    href={social.href}
                    aria-label={social.ariaLabel}
                    className="bg-gray-800 p-1.5 w-8 h-8 rounded-md grid items-center transition-background duration-100"
                  >
                    <svg viewBox="0 0 16 16" fill="none">
                      <path d={social.iconPath} fill="#fff" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white">Core Software</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="/features/white-label-ticketing/">
                    White Label Ticketing Platform
                  </a>
                </li>
                <li>
                  <a href="/features/multi-gate-check-in/">
                    Event Check-In Software
                  </a>
                </li>
                <li>
                  <a href="/cash-management/">
                    Multi-Vendor Cash Reconciliation
                  </a>
                </li>
                <li>
                  <a href="/alternatives/">Ticketing Software Comparison</a>
                </li>
                <li>
                  <a href="/features/">Online Event Management</a>
                </li>
                <li>
                  <a href="#">Box Office Software &amp; Hardware</a>
                </li>
                <li>
                  <a href="/unified-financial-reporting/">
                    Unified Financial Reporting
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4" id="operators">
              <h4 className="text-white">For Event Operators</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="/fairs-and-festivals/">Fairs &amp; Festivals</a>
                </li>
                <li>
                  <a href="/touring-productions/">Touring Productions</a>
                </li>
                <li>
                  <a href="/traveling-circuses/">Traveling Circuses</a>
                </li>
                <li>
                  <a href="#">Independent Promoters</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4" id="founding">
              <h4 className="text-white">Resources &amp; Company</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="/our-story/">Our Story</a>
                </li>
                <li>
                  <a href="/event-operators-hub/">
                    The Event Operator&apos;s Hub
                  </a>
                </li>
                <li>
                  <a href="/roi-calculator/">Profit Margin Calculator</a>
                </li>
                <li>
                  <a href="/founding-operators/">Founding Partner Program</a>
                </li>
                <li>
                  <a href="/request-a-demo/">Request a Demo</a>
                </li>
                <li>
                  <a href="/contact/">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom flex flex-row justify-between w-full text-center border-t border-white/10 pt-8 gap-2">
            <span>© 2026 Evinra. All rights reserved.</span>
            <div className="footer__legal flex flex-row justify-center gap-8">
              <a href="/privacy-policy/">Privacy Policy</a>
              <a href="/terms-of-service/">Terms of Service</a>
              <a href="/cookie-policy/">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </Section>
  );
}
