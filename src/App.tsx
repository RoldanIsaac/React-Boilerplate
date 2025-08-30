import LoginForm from "./auth/LoginForm";
import SignUpForm from "./auth/SignUpForm";
import Dashboard from "./views/Dashboard";
import Landing from "./views/Landing";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
