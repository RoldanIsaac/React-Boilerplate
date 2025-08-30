import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
