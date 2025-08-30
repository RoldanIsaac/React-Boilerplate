import Dashboard from "./views/Dashboard";
import Landing from "./views/Landing";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./views/Login";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
