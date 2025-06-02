"use client";

import { useEffect, useState } from "react";
import Acerca from "../components/about"; 
import Installation from "../components/installation";
import Beneficios from "@/components/benefits";
import Contact from "../components/contact";


export default function Home() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const popupDismissed = sessionStorage.getItem("popupDismissed");
    if (!popupDismissed) {
      const timer = setTimeout(() => {
        setIsPopupVisible(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsPopupVisible(false);
    sessionStorage.setItem("popupDismissed", "true");
  };

  const handleScrollToConoceMas = () => {
    const section = document.getElementById("acerca");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const acercaImages = [
    "/images/cisterna1.png",
    "/images/cisterna1.png",
    "/images/cisterna1.png",
  ];

  return (
    <div className="text-center bg-white">
      {/* Hero Section */}
      <div className="pt-32 lg:pt-36">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full p-8 lg:p-16">
        {/* Text Section */}
        <div className="lg:w-1/2 text-left lg:pl-8 space-y-4">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-[#0245c1]">
            CISTERNA VERTICAL INTELIGENTE
          </h1>
          <p className="text-lg lg:text-xl font-medium text-gray-700">
            IDEAL PARA DEPARTAMENTOS, CASAS, OFICINAS O NEGOCIOS,{" "}
            <span className="font-bold text-black">SIN EXCAVACIONES,</span> INSTALACIÓN EN{" "}
            <span className="font-bold text-black">30 MINUTOS</span>
          </p>
          <button
            onClick={handleScrollToConoceMas}
            className="mt-6 py-3 px-6 bg-[#0245c1] text-white font-bold rounded-md hover:bg-[#007697] transition"
          >
            CONOCE MÁS
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img
            src="/images/cisternavertical.png"
            alt="Cisterna Vertical Inteligente"
            className="w-full max-w-lg mx-auto"
            loading="lazy"
          />
        </div>
      </div>
      </div>
      {/* Quienes Somos Section */}
      <Acerca images={acercaImages} />
      <Beneficios />
      <Installation />
      <Contact />

      {/* Popup Section */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white p-10 sm:p-12 rounded-lg shadow-lg w-11/12 sm:w-[500px] md:w-[650px]">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-400 text-2xl"
              onClick={closePopup}
            >
              &times;
            </button>

            {/* Form Title */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">
              Suscríbete
            </h2>
            <p className="text-sm mb-8 text-center text-gray-400">
              * Indica requerido
            </p>

            {/* Mailchimp Form */}
            <form
  action="https://gmail.us20.list-manage.com/subscribe/post?u=eab1a0d5b451dcbc3f7d9da1e&amp;id=ec9fa0c2ae&amp;f_id=00851ce0f0"
  method="post"
  target="_blank"
>
  <div className="flex flex-col items-center justify-center space-y-6">

    {/* Email */}
    <div className="w-full">
      <label htmlFor="mce-EMAIL" className="block mb-2 text-sm text-gray-300 text-center">
        Correo Electrónico <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="EMAIL"
        id="mce-EMAIL"
        className="w-full px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        placeholder="Correo Electrónico"
        required
      />
    </div>

    {/* First Name */}
    <div className="w-full">
      <label htmlFor="mce-FNAME" className="block mb-2 text-sm text-gray-300 text-center">
        Nombre
      </label>
      <input
        type="text"
        name="FNAME"
        id="mce-FNAME"
        className="w-full px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        placeholder="Nombre"
      />
    </div>

    {/* Phone */}
    <div className="w-full">
      <label htmlFor="mce-PHONE" className="block mb-2 text-sm text-gray-300 text-center">
        Teléfono
      </label>
      <input
        type="text"
        name="PHONE"
        id="mce-PHONE"
        className="w-full px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        placeholder="Teléfono"
      />
    </div>

    {/* Company */}
    <div className="w-full">
      <label htmlFor="mce-COMPANY" className="block mb-2 text-sm text-gray-300 text-center">
        Empresa
      </label>
      <input
        type="text"
        name="COMPANY"
        id="mce-COMPANY"
        className="w-full px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        placeholder="Empresa"
      />
    </div>
  </div>

  {/* Honeypot */}
  <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
    <input type="text" name="b_eab1a0d5b451dcbc3f7d9da1e_ec9fa0c2ae" tabIndex={-1} defaultValue="" />
  </div>

  {/* Submit */}
  <div className="mt-8">
    <button
      type="submit"
      name="subscribe"
      id="mc-embedded-subscribe"
      className="w-full py-4 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-500 transition text-lg shadow-lg"
    >
      Suscribirse
    </button>
  </div>
</form>

          </div>
        </div>
      )}
    </div>
  );
}
