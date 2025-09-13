// src/components/Navbar.tsx
import { Link } from "react-router-dom";

interface NavItem {
  label: string;
  path: string;
}

interface NavbarProps {
  items: NavItem[];
}

export default function Navbar({ items }: NavbarProps) {
  return (
    <nav className="w-full bg-blue-600 text-white shadow-md px-6 py-3 flex justify-between items-center">
      <h1 className="text-lg font-bold">MiApp</h1>
      <ul className="flex gap-6">
        {items.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className="hover:text-blue-200 transition">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
