import Navbar from "../shared/components/Navbar";
import Sidebar from "../shared/components/Sidebar";
import { navItems } from "../constants";

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
