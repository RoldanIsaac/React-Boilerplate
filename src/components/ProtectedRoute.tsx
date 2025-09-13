import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, requiredRole }: any) => {
  // Obtener usuario del localStorage
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  // Si no hay usuario, redirigir al login
  if (!user.role) {
    return <Navigate to="/login" replace />;
  }

  // Si se requiere un rol específico y el usuario no lo tiene, redirigir al home
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  // Si todo está bien, renderizar el componente children
  return children;
};

export default ProtectedRoute;
