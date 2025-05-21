"use client";

export default function Installation() {
  return (
    <section id="instalacion" className="py-12 px-6 lg:py-16 lg:px-24">
      <div className="bg-[#0245c1] border-4 border-[#ac5358] rounded-lg p-8 lg:p-12 text-white text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-10">
          ¿Qué requiere para su instalación?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {/* Water */}
          <div className="flex flex-col items-center space-y-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff3b30"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-12 w-12"
            >
              <path d="M3 7c3 -2 6 -2 9 0s6 2 9 0" />
              <path d="M3 17c3 -2 6 -2 9 0s6 2 9 0" />
              <path d="M3 12c3 -2 6 -2 9 0s6 2 9 0" />
            </svg>
            <p className="font-bold text-sm sm:text-base">
              TOMA DE AGUA CON LLAVE
            </p>
          </div>

          {/* Electricity */}
          <div className="flex flex-col items-center space-y-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff3b30"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-12 w-12"
            >
              <path d="M16.123 16.092l-.177 .177a5.81 5.81 0 1 1 -8.215 -8.215l.159 -.159" />
              <path d="M4 20l3.5 -3.5" />
              <path d="M15 4l-3.5 3.5" />
              <path d="M20 9l-3.5 3.5" />
              <path d="M3 3l18 18" />
            </svg>
            <p className="font-bold text-sm sm:text-base">
              TOMA DE LUZ (110–120V)
            </p>
          </div>

          {/* Floor */}
          <div className="flex flex-col items-center space-y-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff3b30"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-12 w-12"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            </svg>
            <p className="font-bold text-sm sm:text-base">
              ESPACIO LISO SIN DESNIVEL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
