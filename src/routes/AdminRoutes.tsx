import { Routes, Route } from "react-router-dom";
import GroupsList from "../views/admin/GroupsList";
import StudentEnrollment from "../views/admin/StudentEnrollment";
import TeacherContract from "../views/admin/TeacherContract";
import AdminDashboard from "../views/admin/AdminDashboard";
import StudentsList from "../views/student/StudentLists";
import ProtectedRoute from "../components/ProtectedRoute";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute requiredRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/enroll-student"
        element={
          <ProtectedRoute requiredRole="admin">
            <StudentEnrollment />
          </ProtectedRoute>
        }
      />
      <Route
        path="/contract-teacher"
        element={
          <ProtectedRoute requiredRole="admin">
            <TeacherContract />
          </ProtectedRoute>
        }
      />
      <Route
        path="/groups"
        element={
          <ProtectedRoute requiredRole="admin">
            <GroupsList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/students"
        element={
          <ProtectedRoute requiredRole="admin">
            <StudentsList />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AdminRoutes;
