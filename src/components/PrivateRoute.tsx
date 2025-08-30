import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: Props) => {
  const { user, loading } = useAuth();
  if (loading) return <p className="text-center mt-10">...Loading</p>;
  return user ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
