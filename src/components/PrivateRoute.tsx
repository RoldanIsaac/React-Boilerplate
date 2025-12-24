import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: Props) => {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-center mt-10">Loading...</p>
      </div>
    );
  return user ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
