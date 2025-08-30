import Login from "./auth/LoginForm";
import Dashboard from "./views/Dashboard";
import Landing from "./views/Landing";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
