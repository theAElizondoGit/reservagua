// app/api/contact/route.ts (for App Router)
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const { name, email, phone, message } = body;

    const response = await resend.emails.send({
        from: "Reservagua Contact <onboarding@resend.dev>",
        to: ["venta.reservagua@gmail.com"],
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <h2>Nuevo mensaje desde el formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ success: false, error: "Error al enviar el correo" }, { status: 500 });
  }
}
