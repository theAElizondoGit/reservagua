"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    setIsSubmitted(true);
  };

  return (
    <section
      id="contacto"
      className="bg-white text-black py-12 px-6 lg:py-16 lg:px-24"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-[#0245c1] text-center lg:text-left">
          Contáctanos
        </h2>
        <p className="text-lg lg:text-xl font-medium mb-10 text-center lg:text-left">
          Nos encantaría saber de ti. Ya sea que tengas dudas sobre nuestros
          productos, quieras agendar una instalación o necesites asistencia
          personalizada, nuestro equipo está listo para ayudarte. Llena el
          siguiente formulario y nos pondremos en contacto contigo a la brevedad
          posible.
        </p>

        <div className="bg-white p-6 lg:p-8 rounded-lg">
          {isSubmitted ? (
            <p className="text-green-600 text-xl font-semibold text-center">
              ¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.
            </p>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8 items-stretch min-h-[600px]">
              {/* Left: Form */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-between space-y-6 w-full lg:w-1/2"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007697]"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007697]"
                    placeholder="Tu correo"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007697]"
                    placeholder="Tu teléfono"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007697]"
                    placeholder="Cuéntanos cómo podemos ayudarte"
                    rows={4}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0245c1] text-white font-bold rounded-md hover:bg-[#007697] transition"
                >
                  Enviar Mensaje
                </button>
              </form>

              {/* Right: Image */}
              <div className="w-full lg:w-1/2 h-full">
                <img
                  src="/images/soumaya.jpeg"
                  alt="Contacto"
                  className="w-full h-full max-h-[600px] object-cover rounded-md shadow"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
