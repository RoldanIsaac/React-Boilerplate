import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { app, navbar } from "../styles/styles";
import { useTheme } from "../context/ThemeProvider";

interface NavItem {
  label: string;
  path: string;
}

interface NavbarProps {
  items?: NavItem[];
}

const Navbar = ({ items }: NavbarProps) => {
  const { toggleTheme, darkMode } = useTheme();

  return (
    <nav className="sticky top-0 z-20">
      <div className={`${navbar} ${app.border} ${app.appearance}`}>
        <h2 className="text-lg font-bold">OL Mgmt PRO</h2>
        <ul className="flex gap-6">
          {items &&
            items.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="hover:text-blue-200 transition">
                  {item.label}
                </Link>
              </li>
            ))}
        </ul>

        <button className="app-circle-button" onClick={toggleTheme}>
          {darkMode && <Moon className="text-gray-100 h-6 w-6" />}
          {!darkMode && <Sun className="text-gray-600 h-6 w-6" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
