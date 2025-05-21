"use client";

interface AcercaProps {
  images: string[];
}

export default function Acerca({ images }: AcercaProps) {
  return (
    <section
      id="acerca"
      className="bg-whitetext-gray-800 py-12 px-6 lg:py-16 lg:px-24"
    >
      <div className="container mx-auto text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-[#0245c1]">
          Reservagua
        </h2>
        <p className="text-black text-lg lg:text-xl font-medium mb-6">
          En <span className="font-bold">Reservagua</span>, estamos comprometidos con el desarrollo de soluciones innovadoras para el manejo y almacenamiento de agua. 
          Nuestra experiencia nos permite ofrecer productos de alta eficiencia y durabilidad para el aprovechamiento del recurso hídrico.
        </p>
        <p className="text-black text-lg lg:text-xl font-medium mb-8">
          Nuestra visión es transformar el acceso al agua en una experiencia eficiente, ecológica y segura, colaborando con empresas y hogares para garantizar{" "}
          <span className="font-bold">soluciones prácticas</span> y{" "}
          <span className="font-bold">fáciles de instalar</span>.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md">
              <img
                src={image}
                alt={`Acerca Image ${index + 1}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
