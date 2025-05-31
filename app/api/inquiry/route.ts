import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const { name, email, message, productName } = body;

    const data = await resend.emails.send({
      from: "Reservagua Store <onboarding@resend.dev>", // ✅ You haven't verified a domain yet
      to: ["venta.reservagua@gmail.com"],
      subject: `Consulta sobre: ${productName}`,
      html: `
        <h2>Nueva consulta desde la tienda</h2>
        <p><strong>Producto:</strong> ${productName}</p>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("❌ Resend error:", error);
    return NextResponse.json(
      { success: false, error: "Error al enviar el correo" },
      { status: 500 }
    );
  }
}
