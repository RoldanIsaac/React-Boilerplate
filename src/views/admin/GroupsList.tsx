// pages/admin/GroupsList.jsx
import React, { useState } from "react";

const GroupsList = () => {
  const [groups] = useState([
    {
      id: 1,
      name: "10A",
      grade: "Décimo Grado",
      schedule: "Lunes a Viernes 7:00am - 12:00pm",
      capacity: 30,
      students: 28,
      teacher: "María Rodríguez",
    },
    {
      id: 2,
      name: "10B",
      grade: "Décimo Grado",
      schedule: "Lunes a Viernes 7:00am - 12:00pm",
      capacity: 30,
      students: 25,
      teacher: "Carlos Méndez",
    },
    {
      id: 3,
      name: "11A",
      grade: "Undécimo Grado",
      schedule: "Lunes a Viernes 1:00pm - 6:00pm",
      capacity: 30,
      students: 30,
      teacher: "Ana Gómez",
    },
    {
      id: 4,
      name: "11B",
      grade: "Undécimo Grado",
      schedule: "Lunes a Viernes 1:00pm - 6:00pm",
      capacity: 30,
      students: 22,
      teacher: "Pedro López",
    },
    {
      id: 5,
      name: "12A",
      grade: "Duodécimo Grado",
      schedule: "Lunes a Viernes 7:00am - 12:00pm",
      capacity: 30,
      students: 29,
      teacher: "Laura Martínez",
    },
    {
      id: 6,
      name: "12B",
      grade: "Duodécimo Grado",
      schedule: "Lunes a Viernes 7:00am - 12:00pm",
      capacity: 30,
      students: 26,
      teacher: "Jorge Sánchez",
    },
  ]);

  const [selectedGroup, setSelectedGroup] = useState(null);
  const [showStudents, setShowStudents] = useState(false);

  const viewStudents = (group) => {
    setSelectedGroup(group);
    setShowStudents(true);
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Gestión de Grupos
      </h1>

      {!showStudents ? (
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium text-gray-900">
              Listado de Grupos
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Todos los grupos de la institución con su información básica.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {groups.map((group) => (
                <div
                  key={group.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-300"
                >
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {group.name} - {group.grade}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {group.schedule}
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Capacidad</p>
                        <p className="text-lg font-semibold">
                          {group.students}/{group.capacity}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Docente</p>
                        <p className="text-sm font-medium">{group.teacher}</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button
                        onClick={() => viewStudents(group)}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
                      >
                        Ver Estudiantes
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Estudiantes del Grupo {selectedGroup.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Listado de estudiantes en el grupo {selectedGroup.name} -{" "}
                {selectedGroup.grade}
              </p>
            </div>
            <button
              onClick={() => setShowStudents(false)}
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-300"
            >
              Volver a Grupos
            </button>
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
                      Estado
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
                  {[
                    { id: 1, name: "Juan Pérez", status: "Activo" },
                    { id: 2, name: "María García", status: "Activo" },
                    { id: 3, name: "Carlos López", status: "Inactivo" },
                    { id: 4, name: "Ana Martínez", status: "Activo" },
                    { id: 5, name: "Pedro Rodríguez", status: "Bloqueado" },
                  ].map((student) => (
                    <tr key={student.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {student.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {student.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            student.status === "Activo"
                              ? "bg-green-100 text-green-800"
                              : student.status === "Inactivo"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {student.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">
                          Ver detalles
                        </button>
                        {student.status === "Bloqueado" ? (
                          <button className="text-green-600 hover:text-green-900">
                            Desbloquear
                          </button>
                        ) : (
                          <button className="text-red-600 hover:text-red-900">
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
      )}
    </div>
  );
};

export default GroupsList;
