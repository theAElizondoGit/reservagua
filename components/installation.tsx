"use client";

import { useState } from "react";

export default function Installation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setIsSubmitted(true);
  };

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
          <span className="font-bold">400 años</span>.
        </p>
        <p className="text-lg lg:text-xl font-medium mb-8">
          Contáctenos hoy mismo para recibir más información sobre la instalación y nuestros servicios adicionales.
        </p>

        {/* Contact Form */}
        <div className="bg-white p-6 lg:p-8 rounded-lg shadow-lg">
          {isSubmitted ? (
            <p className="text-green-600 text-xl font-semibold">
              ¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
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
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
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
                className="w-full py-3 bg-[#84AAAF] text-white font-bold rounded-md hover:bg-[#007697] transition"
              >
                Enviar Solicitud
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
