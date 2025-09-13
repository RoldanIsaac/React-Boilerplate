import { navItems } from "../constants";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <Navbar />

      <div className="flex flex-row">
        <Sidebar items={navItems} />
        <div className="flex-1 p-6">Welcome 🚀</div>
      </div>
    </div>
  );
};

export default Dashboard;
