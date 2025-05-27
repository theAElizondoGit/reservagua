"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
//import { useCart } from "@/context/CartContext"; // ✅ Import Cart Context

// ✅ Define Product Type
interface Product {
  id: number;
  name: string;
  description: string;
  images: string[]
  category: string;
  originalPrice: number;
  discount: string;
  price: number;
  sizes?: string[]; // ✅ Add optional sizes field
}
{/* 
interface CartItem extends Product {
  selectedSize?: string; // ✅ Optional, only for products with sizes
  quantity: number; // ✅ Required field for cart
}
*/}
export default function Store() {
  //const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todas");
  const searchParams = useSearchParams();
  const router = useRouter();
  const categories = ["todas", "aire", "descanso", "agua", "repuestos"];
  const [inquiryProduct, setInquiryProduct] = useState<Product | null>(null);

  // Fetch products dynamically from Redis API
useEffect(() => {
  async function fetchProducts() {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      if (data.products && Array.isArray(data.products)) {
        setProducts(
          data.products.map((product: Product) => ({
            ...product,
            sizes: Array.isArray(product.sizes) ? product.sizes : [], // ✅ Ensure sizes are always an array
          }))
        );
      } else {
        console.error("Invalid product data received:", data);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  }

  fetchProducts();
}, []);

  // Update selectedCategory based on URL search params
  useEffect(() => {
    const category = searchParams.get("category") || "todas";
    setSelectedCategory(category);
  }, [searchParams]);

  // ✅ Filtered products based on category and search term
  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "todas" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p className="text-center text-gray-500">Cargando productos...</p>;
  }

  return (
<div className="container mx-auto mt-32 py-8 overflow-hidden">

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4">
          <h2 className="text-xl font-bold mb-4 text-black">Categorías</h2>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <button
                  className={`w-full text-left px-4 py-2 rounded-lg border ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-black hover:bg-primary hover:text-white"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Product List */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="text-black w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary mb-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
                  onClick={() => router.push(`/store/${product.id}`)} // ✅ Navigate to product page
                >
                 <img
                    src={product.images?.[0]}
                    alt={product.name}
                    className="w-full h-36 object-contain"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-black group-hover:text-primary transition">
                      {product.name}
                    </h2>
                    <p className="text-gray-700">
                      {product.price && product.price > 0 ? `$${product.price.toFixed(2)}` : "Precio no disponible"}
                    </p>

                    {/* ✅ Add to Cart Button */}
                    {/* 
                    <button
                      className="mt-4 w-full bg-primary text-white py-2 px-4 rounded hover:bg-accent transition"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent navigation trigger
                      
                        const cartItem: CartItem = {
                          ...product,
                          price: Number(product.price),
                          quantity: 1
                        };
                      
                        addToCart(cartItem);
                      }}                                          
                    >
                      Añadir al carrito
                    </button>
                    */}
                    <button
                      className="mt-4 w-full bg-[#007697] text-white py-2 px-4 rounded hover:bg-[#005c74] transition"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent card click navigation
                        setInquiryProduct(product); // Show the form
                      }}
                    >
                      Contáctanos
                    </button>

                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">No se encontraron productos</p>
            )}
          </div>
        </div>
      </div>
      {/* Contact Form Modal */}
      {inquiryProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full text-left relative">
            <button
              className="absolute top-2 right-4 text-gray-500 hover:text-black text-xl"
              onClick={() => setInquiryProduct(null)}
            >
              &times;
            </button>

            <h2 className="text-xl text-black font-bold mb-4">Consulta por: {inquiryProduct.name}</h2>
            <form
              action="https://formsubmit.co/jrf2421@gmail.com"
              method="POST"
              className="space-y-4"
            >
              {/* Optional: Prevent spam */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Nueva consulta desde la tienda" />
              <input type="hidden" name="_template" value="table" />
              <div>
                <label className="block text-sm text-black mb-1">Nombre</label>
                <input type="text" name="name" required className="w-full border border-gray-300 rounded px-3 py-2 text-black" />
              </div>
              <div>
                <label className="block text-sm text-black mb-1">Correo</label>
                <input type="email" name="email" required className="w-full border border-gray-300 rounded px-3 py-2 text-black" />
              </div>
              <div>
                <label className="block text-sm text-black mb-1">Mensaje</label>
                <textarea
                  name="message"
                  rows={4}
                  defaultValue={`Hola! Quisiera saber más del producto ${inquiryProduct.name}. ¡Gracias!`}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                />
              </div>
              <button type="submit" className="bg-[#007697] text-white px-4 py-2 rounded hover:bg-[#005c74]">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
