import { useState } from "react";

const TeacherContract = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    specialization: "",
    experience: "",
    subjects: [],
    groups: [],
  });

  const [credentials, setCredentials] = useState(null);

  const availableSubjects = [
    { id: 1, name: "Matemáticas" },
    { id: 2, name: "Física" },
    { id: 3, name: "Química" },
    { id: 4, name: "Historia" },
    { id: 5, name: "Literatura" },
    { id: 6, name: "Biología" },
    { id: 7, name: "Inglés" },
    { id: 8, name: "Educación Física" },
  ];

  const availableGroups = [
    { id: 1, name: "10A - Décimo Grado" },
    { id: 2, name: "10B - Décimo Grado" },
    { id: 3, name: "11A - Undécimo Grado" },
    { id: 4, name: "11B - Undécimo Grado" },
    { id: 5, name: "12A - Duodécimo Grado" },
    { id: 6, name: "12B - Duodécimo Grado" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubjectChange = (subjectId) => {
    setFormData((prev) => {
      const subjects = prev.subjects.includes(subjectId)
        ? prev.subjects.filter((id) => id !== subjectId)
        : [...prev.subjects, subjectId];

      return { ...prev, subjects };
    });
  };

  const handleGroupChange = (groupId) => {
    setFormData((prev) => {
      const groups = prev.groups.includes(groupId)
        ? prev.groups.filter((id) => id !== groupId)
        : [...prev.groups, groupId];

      return { ...prev, groups };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular envío de datos y generación de credenciales
    const generatedEmail = `${formData.firstName.toLowerCase()}.${formData.lastName.toLowerCase()}@institucion.edu`;
    const generatedPassword = Math.random().toString(36).slice(-8);

    setCredentials({
      email: generatedEmail,
      password: generatedPassword,
    });

    // Aquí iría la lógica para enviar los datos al backend
    console.log("Datos del docente:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Contratación de Docente
      </h1>

      {credentials ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-green-800 mb-4">
            Docente Registrado Exitosamente
          </h2>
          <p className="text-green-700 mb-2">
            <strong>Email:</strong> {credentials.email}
          </p>
          <p className="text-green-700 mb-4">
            <strong>Contraseña:</strong> {credentials.password}
          </p>
          <p className="text-green-600 text-sm">
            Por favor, proporcione estas credenciales al docente.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Apellido
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Especialización
              </label>
              <input
                type="text"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Años de Experiencia
              </label>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                min="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Materias que puede impartir
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
                {availableSubjects.map((subject) => (
                  <label key={subject.id} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.subjects.includes(subject.id)}
                      onChange={() => handleSubjectChange(subject.id)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      {subject.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Grupos asignados
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                {availableGroups.map((group) => (
                  <label key={group.id} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.groups.includes(group.id)}
                      onChange={() => handleGroupChange(group.id)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      {group.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
            >
              Registrar Docente
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TeacherContract;
