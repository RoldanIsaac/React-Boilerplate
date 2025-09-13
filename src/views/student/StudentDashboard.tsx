import { useState } from "react";

const StudentDashboard = () => {
  const [academicStatus] = useState({
    semester: 5,
    overallAverage: 85.5,
    graduationEligibility: false,
    subjects: [
      {
        id: 1,
        name: "Matemáticas Avanzadas",
        grades: [90, 85, 88],
        finalGrade: 87.7,
        attendance: 75,
        status: "in_progress",
        progress: 60,
      },
      {
        id: 2,
        name: "Física",
        grades: [78, 82, 80],
        finalGrade: 80,
        attendance: 90,
        status: "in_progress",
        progress: 70,
      },
      {
        id: 3,
        name: "Química",
        grades: [92, 88, 95],
        finalGrade: 91.7,
        attendance: 95,
        status: "passed",
        progress: 100,
      },
      {
        id: 4,
        name: "Historia",
        grades: [65, 70, 60],
        finalGrade: 65,
        attendance: 60,
        status: "failed",
        progress: 100,
      },
      {
        id: 5,
        name: "Literatura",
        grades: [],
        finalGrade: 0,
        attendance: 0,
        status: "not_started",
        progress: 0,
      },
    ],
  });

  const getStatusColor = (status, attendance) => {
    if (status === "not_started") return "bg-gray-200";
    if (status === "in_progress") {
      if (attendance < 80) return "bg-red-200";
      return "bg-green-200";
    }
    if (status === "passed") return "bg-green-200";
    if (status === "failed") return "bg-red-200";
    return "bg-gray-200";
  };

  const getStatusText = (status, attendance) => {
    if (status === "not_started") return "Sin cursar";
    if (status === "in_progress") {
      if (attendance < 80) return "En riesgo por inasistencia";
      return "En progreso";
    }
    if (status === "passed") return "Aprobada";
    if (status === "failed") return "Reprobada";
    return "Desconocido";
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Dashboard del Estudiante
      </h1>

      {/* Resumen Académico */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Resumen Académico
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-600">Semestre Actual</p>
            <p className="text-2xl font-bold text-blue-800">
              {academicStatus.semester}
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-green-600">Promedio General</p>
            <p className="text-2xl font-bold text-green-800">
              {academicStatus.overallAverage}%
            </p>
          </div>
          <div
            className={`p-4 rounded-lg ${
              academicStatus.graduationEligibility ? "bg-green-50" : "bg-red-50"
            }`}
          >
            <p className="text-sm">Elegibilidad para Graduación</p>
            <p
              className={`text-2xl font-bold ${
                academicStatus.graduationEligibility
                  ? "text-green-800"
                  : "text-red-800"
              }`}
            >
              {academicStatus.graduationEligibility
                ? "Elegible"
                : "No Elegible"}
            </p>
          </div>
        </div>
      </div>

      {/* Estado de Materias */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Estado de Materias - Semestre {academicStatus.semester}
        </h2>

        {!academicStatus.graduationEligibility && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  No es elegible para graduación
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>
                    Tiene materias reprobadas o con inasistencia superior al
                    20%. Debe regularizar su situación académica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Materia
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Progreso
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Calificación
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Asistencia
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Estado
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {academicStatus.subjects.map((subject) => (
                <tr key={subject.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {subject.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${
                          subject.progress < 50
                            ? "bg-red-600"
                            : subject.progress < 80
                            ? "bg-yellow-400"
                            : "bg-green-600"
                        }`}
                        style={{ width: `${subject.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">
                      {subject.progress}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {subject.finalGrade > 0 ? `${subject.finalGrade}%` : "N/A"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span
                      className={
                        subject.attendance < 80
                          ? "text-red-600 font-semibold"
                          : ""
                      }
                    >
                      {subject.attendance}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                        subject.status,
                        subject.attendance
                      )}`}
                    >
                      {getStatusText(subject.status, subject.attendance)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Leyenda */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-200 rounded-full mr-2"></div>
            <span>Sin cursar</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-200 rounded-full mr-2"></div>
            <span>En progreso/Aprobada</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-200 rounded-full mr-2"></div>
            <span>Reprobada/En riesgo</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
            <span>Progreso intermedio</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
