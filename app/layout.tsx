import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { CartProvider } from "../context/CartContext";
import CartDrawer from "@/components/cartDrawer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"], // Light, Regular, Bold, Black
  variable: "--font-poppins",
});



export const metadata: Metadata = {
  title: "Reservagua",
  description: "Nunca te quedes seco",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
  <head>
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    {/* Optional: PNG fallback for browsers that don’t support SVG favicons */}
    {/* <link rel="icon" href="/favicon.png" sizes="96x96" /> */}
    <title>Reservagua</title>
    <meta name="description" content="Nunca te quedes seco" />
  </head>
  <body className={`${poppins.variable} antialiased text-foreground bg-background flex flex-col min-h-screen font-poppins`}>
    <CartProvider>
      <CartDrawer />
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8">{children}</main>
      <Footer />
    </CartProvider>
  </body>
</html>

  );
}
