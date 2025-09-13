const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Formando los líderes del mañana
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Nuestra institución se dedica a proporcionar educación de calidad
              con valores sólidos para el desarrollo integral de nuestros
              estudiantes.
            </p>
            <div className="mt-10 flex justify-center">
              <div className="rounded-md shadow">
                <a
                  href="#programs"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition duration-300"
                >
                  Nuestros Programas
                </a>
              </div>
              <div className="ml-3 rounded-md shadow">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition duration-300"
                >
                  Contactarnos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Nuestros Programas Académicos
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Ofrecemos una variedad de programas diseñados para el desarrollo
              integral de nuestros estudiantes.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Program Cards */}
            {[
              {
                title: "Educación Primaria",
                description:
                  "Programa integral para niños de 6 a 12 años con enfoque en desarrollo de habilidades básicas.",
                icon: "📚",
              },
              {
                title: "Educación Secundaria",
                description:
                  "Formación para adolescentes con énfasis en preparación universitaria y desarrollo personal.",
                icon: "🎓",
              },
              {
                title: "Programas Técnicos",
                description:
                  "Carreras técnicas cortas con alta demanda en el mercado laboral actual.",
                icon: "⚙️",
              },
              {
                title: "Artes y Humanidades",
                description:
                  "Desarrollo de habilidades creativas y pensamiento crítico en diversas disciplinas artísticas.",
                icon: "🎨",
              },
              {
                title: "Ciencias y Tecnología",
                description:
                  "Enfoque en STEM con laboratorios equipados y proyectos de investigación.",
                icon: "🔬",
              },
              {
                title: "Deportes",
                description:
                  "Programas deportivos competitivos y recreativos para el desarrollo físico y mental.",
                icon: "⚽",
              },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300"
              >
                <div className="px-4 py-5 sm:p-6">
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {program.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Próximos Eventos
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Participa en nuestras actividades y eventos educativos.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Event Cards */}
            {[
              {
                title: "Feria de Ciencias",
                date: "15 Oct, 2023",
                time: "9:00 AM - 2:00 PM",
                description:
                  "Exhibición de proyectos científicos estudiantiles con invitados especiales.",
                location: "Auditorio Principal",
              },
              {
                title: "Olimpiadas Deportivas",
                date: "22 Oct, 2023",
                time: "8:00 AM - 5:00 PM",
                description:
                  "Competencias deportivas intercurso con premiación especial.",
                location: "Campos Deportivos",
              },
              {
                title: "Concierto de Gala",
                date: "5 Nov, 2023",
                time: "6:00 PM - 9:00 PM",
                description:
                  "Presentación de la orquesta y coro estudiantil con repertorio clásico.",
                location: "Teatro Institucional",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-gray-50 overflow-hidden shadow rounded-lg hover:shadow-lg transition duration-300"
              >
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    {event.title}
                  </h3>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <svg
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      {event.date} • {event.time}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <svg
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Contáctanos</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl">
              Estamos aquí para responder tus preguntas sobre nuestros programas
              y proceso de admisión.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium">Información de Contacto</h3>
              <dl className="mt-4 space-y-4">
                <div className="flex">
                  <dt className="text-sm font-medium">
                    <svg
                      className="h-6 w-6 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </dt>
                  <dd className="text-sm">
                    Av. Principal #123, Ciudad, Estado
                  </dd>
                </div>
                <div className="flex">
                  <dt className="text-sm font-medium">
                    <svg
                      className="h-6 w-6 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </dt>
                  <dd className="text-sm">+1 (555) 123-4567</dd>
                </div>
                <div className="flex">
                  <dt className="text-sm font-medium">
                    <svg
                      className="h-6 w-6 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </dt>
                  <dd className="text-sm">info@institucion.edu</dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="text-lg font-medium">Envíanos un mensaje</h3>
              <form className="mt-4 space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nombre completo"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 text-gray-900"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Correo electrónico"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 text-gray-900"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    // rows="3"
                    placeholder="Tu mensaje"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 text-gray-900"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
                  >
                    Enviar mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
