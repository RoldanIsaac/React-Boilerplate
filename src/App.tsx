import LoginForm from "./auth/LoginForm";
import SignUpForm from "./auth/SignUpForm";
import PrivateRoute from "./components/PrivateRoute";
import ThemeProvider from "./context/ThemeProvider";
import Dashboard from "./views/Dashboard";
import Landing from "./views/Landing";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/landing" element={<Landing />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
