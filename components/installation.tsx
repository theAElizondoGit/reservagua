"use client";


export default function Installation() {
  

  return (
    <section
      id="instalacion"
      className="bg-white text-black py-12 px-6 lg:py-16 lg:px-24"
    >
      <div className="container mx-auto text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-[#007697]">
          Instalación de Cisterna Vertical Inteligente
        </h2>
        <p className="text-lg lg:text-xl font-medium mb-6">
          Nuestro equipo de profesionales está listo para instalar su{" "}
          <span className="font-bold">Cisterna Vertical Inteligente</span> en su hogar, oficina o negocio. 
          Garantizamos una instalación rápida y eficiente, sin necesidad de excavaciones y en tan solo{" "}
          <span className="font-bold">30 minutos</span>.
        </p>
        <p className="text-lg lg:text-xl font-medium mb-8">
          Contáctenos hoy mismo para recibir más información sobre la instalación y nuestros servicios adicionales.
        </p>

        
       {/* Installation Requirements Section */}
       <div className="bg-white py-12 px-6 rounded-lg text-white mb-12">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
    {[
      { src: "/images/water.png", alt: "Toma de Agua", text: "TOMA DE AGUA CON LLAVE" },
      { src: "/images/light.png", alt: "Toma de Luz", text: "TOMA DE LUZ (110-120V)" },
      { src: "/images/square.png", alt: "Espacio Liso", text: "ESPACIO LISO SIN DESNIVEL" },
    ].map(({ src, alt, text }, idx) => (
      <div key={idx} className="flex flex-col items-center min-h-[180px]">
        <div className="h-24 flex items-center justify-center">
          <img src={src} alt={alt} className="h-20 object-contain" />
        </div>
        <p className="mt-6 text-black font-bold uppercase tracking-wide">{text}</p>
      </div>
    ))}
  </div>
</div>



      </div>
    </section>
  );
}
