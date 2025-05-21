"use client";

export default function Beneficios() {
  return (
    <section
      id="beneficios"
      className="bg-white text-gray-800 py-12 px-6 lg:py-16 lg:px-24"
    >
      <div className="container mx-auto text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-[#0245c1]">
          Beneficios de la Cisterna Vertical Inteligente
        </h2>
        <p className="text-lg lg:text-xl font-medium mb-6">
          La <span className="font-bold">Cisterna Vertical Inteligente</span> ofrece múltiples ventajas en comparación con las cisternas tradicionales. 
          Gracias a su diseño compacto y moderno, es ideal para espacios reducidos como departamentos, oficinas y negocios, evitando excavaciones y complejas instalaciones.
        </p>
        <p className="text-lg lg:text-xl font-medium mb-8">
          Con una instalación rápida en solo <span className="font-bold">30 minutos</span>, y sin la necesidad de obras mayores, 
          garantiza un almacenamiento eficiente del agua con un mantenimiento mínimo.
        </p>
        {/* Video Section */}
        <div className="w-full px-0 lg:px-8 my-12">
          <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-lg">
            <video
              className="absolute top-0 left-0 w-full h-full"
              controls
              autoPlay
              muted
              playsInline
            >
              <source src="/videos/reservagua.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-[#0245c1] text-white">
                <th className="py-4 px-6">Característica</th>
                <th className="py-4 px-6">Cisterna Vertical Inteligente</th>
                <th className="py-4 px-6">Cisterna Tradicional</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Instalación</td>
                <td className="py-4 px-6">30 minutos, sin excavaciones</td>
                <td className="py-4 px-6">Excavación y obra civil</td>
              </tr>
              <tr className="bg-gray-50 border-b">
                <td className="py-4 px-6 font-medium">Espacio Requerido</td>
                <td className="py-4 px-6">Vertical y compacto</td>
                <td className="py-4 px-6">Horizontal y voluminoso</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Mantenimiento</td>
                <td className="py-4 px-6">Fácil acceso y limpieza</td>
                <td className="py-4 px-6">Difícil acceso, propenso a fugas</td>
              </tr>
              <tr className="bg-gray-50 border-b">
                <td className="py-4 px-6 font-medium">Durabilidad</td>
                <td className="py-4 px-6">Materiales resistentes a la intemperie</td>
                <td className="py-4 px-6">Propenso a corrosión y desgaste</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Versatilidad</td>
                <td className="py-4 px-6">Ideal para hogares, oficinas y negocios</td>
                <td className="py-4 px-6">Generalmente solo uso residencial</td>
              </tr>
              <tr className="bg-gray-50 border-b">
                <td className="py-4 px-6 font-medium">Costos de Instalación</td>
                <td className="py-4 px-6">Económico y eficiente</td>
                <td className="py-4 px-6">Costoso y laborioso</td>
              </tr>
              <tr>
                <td className="py-4 px-6 font-medium">Capacidad de Almacenamiento</td>
                <td className="py-4 px-6">Adaptable según necesidades</td>
                <td className="py-4 px-6">Limitada por espacio</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
