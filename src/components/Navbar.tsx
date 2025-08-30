import { LogOut, Moon, SignatureIcon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { app, navbar } from "../styles/styles";
import { useTheme } from "../context/ThemeProvider";
import { useAuth } from "../context/AuthContext";

interface NavItem {
  label: string;
  path: string;
}

interface NavbarProps {
  items?: NavItem[];
}

const Navbar = ({ items }: NavbarProps) => {
  const { toggleTheme, darkMode } = useTheme();
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-20">
      <div className={`${navbar} ${app.border} ${app.appearance}`}>
        <h2 className="text-lg font-bold">Ol Mgmt Pro</h2>
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

        <div className="flex flex-row gap-2">
          <button className="app-circle-button" onClick={toggleTheme}>
            {darkMode && <Moon className="text-gray-100 h-6 w-6" />}
            {!darkMode && <Sun className="text-gray-600 h-6 w-6" />}
          </button>

          {user && (
            <button onClick={logout} className="app-circle-button">
              <LogOut className="text-gray-600 dark:text-gray-100 h-6 w-6" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
