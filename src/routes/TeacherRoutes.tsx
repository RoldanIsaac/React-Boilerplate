import { Routes, Route } from "react-router-dom";
import TeacherDashboard from "../views/teacher/TeacherDashboard";

const TeacherRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<TeacherDashboard />} />
    </Routes>
  );
};

export default TeacherRoutes;
