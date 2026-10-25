import { LogOut, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
// import { app, navbar } from "../styles/styles";
import { useTheme } from "../../context/ThemeProvider";
import { useAuth } from "../../context/AuthContext";
import Brand from "../../pages/Landing/data/brand";
import type { NavbarItem } from "../../core/types/navbar";

interface NavbarProps {
  items?: NavbarItem[];
}

const Navbar = ({ items }: NavbarProps) => {
  //   const { toggleTheme, darkMode } = useTheme();
  const { user, logout } = useAuth();

  return (
    <nav className="z-20">
      <div
        className={`flex flex-row relative z-20 h-14 w-full items-center justify-between gap-2 border-b border-gray-400/10 shadow-md/40 shadow-black/30 px-4 lg:px-8 bg-backdrop-sm bg-white/5 `}
      >
        <div className="flex items-center gap-2">
          <Brand />
        </div>

        <div className="flex flex-row items-center gap-6">
          <ul className="flex flex-row gap-6">
            {items &&
              items.map((item, index) =>
                item.type === "item" ? (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="hover:text-blue-200 transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ) : (
                  <li key={index} className="relative group cursor-pointer">
                    <span>{item.label}</span>

                    <ul className="flex flex-col gap-2 ml-4 mt-1 opacity-0 absolute transition-all duration-100">
                      {item.items.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.path}
                            className="hover:text-blue-200 transition"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ),
              )}
          </ul>

          <div className="flex flex-row gap-2">
            <button className="bg-gray-800 px-4 py-2 rounded-xl cursor-pointer transition hover:bg-gray-200/20 dark:hover:bg-gray-600 hover:text-white">
              Request a demo
            </button>

            {user && (
              <button
                onClick={logout}
                className="p-2 rounded-full cursor-pointer transition hover:bg-gray-200/20 dark:hover:bg-gray-700/20"
              >
                <LogOut className="text-gray-600 dark:text-gray-100 h-6 w-6" />
              </button>
            )}

            {/* <button
            className="p-2 rounded-full cursor-pointer transition hover:bg-gray-200/20 dark:hover:bg-gray-700/20"
            onClick={toggleTheme}
          >
            {darkMode && <Moon className="text-gray-100 h-6 w-6" />}
            {!darkMode && <Sun className="text-gray-600 h-6 w-6" />}
          </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
