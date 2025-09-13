// pages/teacher/TeacherDashboard.jsx
import React, { useState } from "react";

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState("grades");

  const students = [
    { id: 1, name: "Juan Pérez", group: "10A" },
    { id: 2, name: "María García", group: "10A" },
    { id: 3, name: "Carlos López", group: "10A" },
    { id: 4, name: "Ana Martínez", group: "10B" },
    { id: 5, name: "Pedro Rodríguez", group: "10B" },
  ];

  const subjects = [
    { id: 1, name: "Matemáticas" },
    { id: 2, name: "Física" },
  ];

  const [grades, setGrades] = useState({
    1: { 1: 85, 2: 90 }, // studentId: { subjectId: grade }
    2: { 1: 78, 2: 82 },
    3: { 1: 92, 2: 88 },
    4: { 1: 65, 2: 70 },
    5: { 1: 80, 2: 85 },
  });

  const [attendance, setAttendance] = useState({
    1: { 1: 90, 2: 95 }, // studentId: { subjectId: attendance percentage }
    2: { 1: 85, 2: 90 },
    3: { 1: 95, 2: 92 },
    4: { 1: 60, 2: 65 },
    5: { 1: 88, 2: 90 },
  });

  const handleGradeChange = (studentId, subjectId, value) => {
    setGrades((prev) => ({
      ...prev,
      [studentId]: {
        ...prev[studentId],
        [subjectId]: parseInt(value) || 0,
      },
    }));
  };

  const handleAttendanceChange = (studentId, subjectId, value) => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: {
        ...prev[studentId],
        [subjectId]: parseInt(value) || 0,
      },
    }));
  };

  const saveChanges = () => {
    // Aquí iría la lógica para guardar en el backend
    console.log("Calificaciones guardadas:", grades);
    console.log("Asistencias guardadas:", attendance);
    alert("Cambios guardados exitosamente");
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Dashboard del Docente
      </h1>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab("grades")}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "grades"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Registro de Calificaciones
          </button>
          <button
            onClick={() => setActiveTab("attendance")}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "attendance"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Control de Asistencia
          </button>
          <button
            onClick={() => setActiveTab("students")}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "students"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Listado de Estudiantes
          </button>
          <button
            onClick={() => setActiveTab("reports")}
            className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "reports"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Reportes e Impresiones
          </button>
        </nav>
      </div>

      {/* Contenido de las Tabs */}
      {activeTab === "grades" && (
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium text-gray-900">
              Registro de Calificaciones
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Asigne calificaciones a los estudiantes por materia.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Estudiante
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Grupo
                    </th>
                    {subjects.map((subject) => (
                      <th
                        key={subject.id}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {subject.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {student.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {student.group}
                      </td>
                      {subjects.map((subject) => (
                        <td
                          key={subject.id}
                          className="px-6 py-4 whitespace-nowrap"
                        >
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={grades[student.id]?.[subject.id] || ""}
                            onChange={(e) =>
                              handleGradeChange(
                                student.id,
                                subject.id,
                                e.target.value
                              )
                            }
                            className="w-16 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                onClick={saveChanges}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
              >
                Guardar Cambios
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "attendance" && (
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium text-gray-900">
              Control de Asistencia
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Registre el porcentaje de asistencia por estudiante y materia.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Estudiante
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Grupo
                    </th>
                    {subjects.map((subject) => (
                      <th
                        key={subject.id}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {subject.name} (%)
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {student.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {student.group}
                      </td>
                      {subjects.map((subject) => (
                        <td
                          key={subject.id}
                          className="px-6 py-4 whitespace-nowrap"
                        >
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={attendance[student.id]?.[subject.id] || ""}
                            onChange={(e) =>
                              handleAttendanceChange(
                                student.id,
                                subject.id,
                                e.target.value
                              )
                            }
                            className="w-16 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                onClick={saveChanges}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
              >
                Guardar Cambios
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "students" && (
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium text-gray-900">
              Listado de Estudiantes
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Todos los estudiantes asignados a sus grupos.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Nombre
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Grupo
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {student.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {student.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {student.group}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">
                          Ver perfil
                        </button>
                        <button className="text-green-600 hover:text-green-900">
                          Generar reporte
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === "reports" && (
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium text-gray-900">
              Reportes e Impresiones
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Genere reportes y planillas para observaciones de estudiantes.
            </p>
          </div>
          <div className="border-t border-gray-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  Planilla de Observaciones Académicas
                </h4>
                <p className="text-sm text-gray-500 mb-4">
                  Genere un reporte de observaciones académicas para un
                  estudiante o grupo.
                </p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300">
                  Generar Reporte Académico
                </button>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  Planilla de Observaciones Disciplinarias
                </h4>
                <p className="text-sm text-gray-500 mb-4">
                  Genere un reporte de observaciones disciplinarias para un
                  estudiante o grupo.
                </p>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300">
                  Generar Reporte Disciplinario
                </button>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg md:col-span-2">
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  Reporte de Calificaciones por Grupo
                </h4>
                <p className="text-sm text-gray-500 mb-4">
                  Genere un reporte completo de calificaciones para un grupo
                  específico.
                </p>
                <div className="flex space-x-4">
                  <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Seleccionar Grupo</option>
                    <option>10A</option>
                    <option>10B</option>
                    <option>11A</option>
                    <option>11B</option>
                  </select>
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300">
                    Generar Reporte
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;
