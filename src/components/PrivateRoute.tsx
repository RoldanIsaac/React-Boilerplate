// import { useAuth } from "../context/AuthContext";
// import { Navigate } from "react-router-dom";
import { useEffect, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: Props) => {
  const [loading, setLoading] = useState(true);
  //   const { user, loading } = useAuth();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-center mt-10">Loading...</p>
      </div>
    );
  //   return user ? children : <Navigate to="/" replace />;
  return children;
};

export default PrivateRoute;
