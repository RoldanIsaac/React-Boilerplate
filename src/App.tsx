import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./shared/Loading";
import Landing from "./pages/Landing/Landing";
import SignInForm from "./auth/SignInForm";
import SignUpForm from "./auth/SignUpForm";
import Profile from "./pages/Profile";

// -- Lazy layouts --
// import EmptyLayout from "./layout/EmptyLayout";
const EmptyLayout = lazy(() => import("./layout/EmptyLayout"));
const LandingLayout = lazy(() => import("./layout/LandingLayout"));

// -- Lazy components --
const Dashboard = lazy(() => import("./pages/Dashboard"));

const router = createBrowserRouter([
  // -- Landing (public) --
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading fullscreen />}>
        <LandingLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },

  // -- Sign in (public) --
  {
    path: "auth",
    element: (
      <Suspense fallback={<Loading fullscreen />}>
        <EmptyLayout />
      </Suspense>
    ),
    children: [
      {
        path: "sign-in",
        element: <SignInForm />,
      },

      { path: "sign-up", element: <SignUpForm /> },
    ],
  },

  // -- Dashboard (protected) --
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<Loading fullscreen />}>
        <Dashboard />
      </Suspense>
    ),
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
