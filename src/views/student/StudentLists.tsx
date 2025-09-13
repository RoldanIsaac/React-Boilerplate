// pages/admin/StudentsList.jsx
import React, { useState } from "react";

const StudentsList = () => {
  const [students] = useState([
    { id: 1, name: "Juan Pérez", group: "10A", status: "active", balance: 0 },
    {
      id: 2,
      name: "María García",
      group: "10A",
      status: "active",
      balance: 150,
    },
    {
      id: 3,
      name: "Carlos López",
      group: "10B",
      status: "inactive",
      balance: 0,
    },
    {
      id: 4,
      name: "Ana Martínez",
      group: "10B",
      status: "active",
      balance: 300,
    },
    {
      id: 5,
      name: "Pedro Rodríguez",
      group: "11A",
      status: "blocked",
      balance: 500,
    },
    {
      id: 6,
      name: "Laura Sánchez",
      group: "11A",
      status: "active",
      balance: 0,
    },
    {
      id: 7,
      name: "Miguel González",
      group: "11B",
      status: "active",
      balance: 200,
    },
    {
      id: 8,
      name: "Sofía Ramírez",
      group: "11B",
      status: "active",
      balance: 0,
    },
  ]);

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = students.filter((student) => {
    const matchesFilter = filter === "all" || student.status === filter;
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.group.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const toggleStudentStatus = (studentId, currentStatus) => {
    // Aquí iría la lógica para cambiar el estado del estudiante
    console.log(
      `Cambiando estado del estudiante ${studentId} desde ${currentStatus}`
    );

    if (currentStatus === "blocked") {
      alert(`Estudiante desbloqueado: ${studentId}`);
    } else {
      alert(`Estudiante bloqueado: ${studentId}`);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Gestión de Estudiantes
      </h1>

      {/* Filtros y Búsqueda */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Filtrar por estado
            </label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Todos</option>
              <option value="active">Activos</option>
              <option value="inactive">Inactivos</option>
              <option value="blocked">Bloqueados</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Buscar estudiante
            </label>
            <input
              type="text"
              placeholder="Buscar por nombre o grupo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Lista de Estudiantes */}
      <div className="bg-white shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium text-gray-900">
            Listado de Estudiantes
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Todos los estudiantes de la institución con su información y estado.
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
                    Estado
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Mora ($)
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
                {filteredStudents.map((student) => (
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
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          student.status === "active"
                            ? "bg-green-100 text-green-800"
                            : student.status === "inactive"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {student.status === "active"
                          ? "Activo"
                          : student.status === "inactive"
                          ? "Inactivo"
                          : "Bloqueado"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span
                        className={
                          student.balance > 0
                            ? "text-red-600 font-semibold"
                            : "text-green-600"
                        }
                      >
                        ${student.balance}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        Ver
                      </button>
                      {student.status === "blocked" ? (
                        <button
                          onClick={() =>
                            toggleStudentStatus(student.id, student.status)
                          }
                          className="text-green-600 hover:text-green-900"
                        >
                          Desbloquear
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            toggleStudentStatus(student.id, student.status)
                          }
                          className="text-red-600 hover:text-red-900"
                        >
                          Bloquear
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Información adicional */}
      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-lg font-medium text-yellow-800 mb-2">
          Información sobre bloqueo de estudiantes
        </h3>
        <p className="text-sm text-yellow-700">
          Los estudiantes pueden ser bloqueados cuando se encuentran en mora con
          los pagos institucionales. Un estudiante bloqueado no podrá acceder a
          sus calificaciones ni material académico hasta regularizar su
          situación.
        </p>
      </div>
    </div>
  );
};

export default StudentsList;
