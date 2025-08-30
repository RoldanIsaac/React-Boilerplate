import { Link } from "react-router-dom";

interface NavItem {
  label: string;
  path: string;
}

interface NavbarProps {
  items?: NavItem[];
}

const Navbar = ({ items }: NavbarProps) => {
  return (
    <nav className="w-full bg-gray-50 text-gray-900 shadow-md px-6 py-3 flex justify-between items-center">
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
    </nav>
  );
};

export default Navbar;
