import { Link } from "react-router-dom";

interface SidebarItem {
  label: string;
  path: string;
}

interface SidebarProps {
  items?: SidebarItem[];
}

const Sidebar = ({ items }: SidebarProps) => {
  return (
    <aside className="h-screen w-64 bg-gray-800 text-white p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-6">Menú</h2>
      <ul className="space-y-4">
        {items &&
          items.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="block py-2 px-3 rounded hover:bg-gray-700 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

// src/components/Sidebar.tsx
