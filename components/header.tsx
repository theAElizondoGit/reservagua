"use client";

import { useState } from "react";
import Link from "next/link";
//import { useCart } from "../context/CartContext"; // Import Cart Context
//import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Header() {
  //const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  //const { cart, toggleCart } = useCart();
{/*
  useEffect(() => {
    setIsClient(true); // Ensures the component re-renders only on the client
  }, []);

  const categories = ["Todas", "Aire", "Agua", "Descanso", "Repuestos"];
*/}
  const navLinks = [
    { name: "Acerca", href: "#acerca", type: "scroll" },
    { name: "Beneficios", href: "#beneficios", type: "scroll" },
    { name: "Instalacion", href: "#instalacion", type: "scroll" },
    { name: "Contacto", href: "#contacto", type: "scroll" },
    { name: "Tienda", href: "/store", type: "external" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white text-black font-semibold tracking-wide h-28 flex items-center shadow-md">
      <div className="container flex items-center justify-between py-4 relative">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center no-underline">
          <img
            src="/images/logo.png"
            alt="Reservagua Logo"
            className="h-48 sm:h-52 lg:h-64 w-auto object-contain max-w-[250px]"
            style={{ transformOrigin: "left center" }}
          />

          </Link>

          <nav className="hidden md:flex items-center space-x-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`text-gray-700 hover:text-black font-medium transition no-underline px-3 ${
                index !== 0 ? "border-l border-gray-400" : ""
              }`}
              scroll={link.type === "scroll"}
            >
              {link.name}
            </Link>
          ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6 ml-auto">
          {/*
          <button className="relative flex items-center bg-[#19333F] p-2 rounded-full hover:bg-[#4B6B70]" onClick={toggleCart}>
            <ShoppingCartIcon className="w-6 h-6 text-white hover:text-[#84AAAF]" /> 
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
          */}
          <button className="md:hidden text-white bg-[#19333F] p-2 rounded-md z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-95 text-gray-700 flex flex-col items-center justify-center z-[100]">
          <button className="absolute top-4 right-6 text-2xl" onClick={() => setIsMenuOpen(false)}>✖</button>
          <ul className="text-lg space-y-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-gray-700 hover:text-black font-medium transition no-underline"
                  onClick={() => setIsMenuOpen(false)}
                  scroll={link.type === "scroll"}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
