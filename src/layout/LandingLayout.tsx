import Navbar from "../shared/components/Navbar";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "./Footer/FooterVariation";
import type { NavbarItem } from "../core/types/navbar";

type Props = {};

const navbarItems: NavbarItem[] = [
  {
    type: "group",
    label: "The Platform",
    items: [
      {
        label: "White-Label Ticketing",
        path: "/white-label-ticketing",
        type: "item",
      },
      {
        label: "Multi-Gate Check-In",
        path: "/multi-gate-check-in",
        type: "item",
      },
      { label: "Cash Management", path: "/cash-management", type: "item" },
      {
        label: "Bring Your Own Device",
        path: "/bring-your-own-device",
        type: "item",
      },
    ],
  },
  {
    type: "group",
    label: "For Event Operators",
    items: [
      { label: "Fairs & Festivals", path: "/fairs-festivals", type: "item" },
      {
        label: "Touring Productions",
        path: "/touring-productions",
        type: "item",
      },
      {
        label: "Traveling Circuses",
        path: "/traveling-circuses",
        type: "item",
      },
    ],
  },
  {
    type: "group",
    label: "Why Evinra",
    items: [
      { label: "Our Story", path: "/our-story", type: "item" },
      { label: "Field Results", path: "/field-results", type: "item" },
    ],
  },
  {
    type: "item",
    label: "Pricing",
    path: "/pricing",
  },
  {
    type: "item",
    label: "Founding Program",
    path: "/founding-program",
  },
  {
    type: "item",
    label: "Contact",
    path: "/contact-us",
  },
];

function LandingLayout({}: Props) {
  return (
    <div className="flex min-h-svh flex-col bg-white dark:bg-gray-950">
      <Navbar items={navbarItems} />
      <motion.main
        id="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Outlet />
      </motion.main>

      <Footer />
    </div>
  );
}

export default LandingLayout;
