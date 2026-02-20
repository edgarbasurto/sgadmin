import { NextResponse } from "next/server";

type LeadPayload = {
  full_name?: string;
  company_name?: string;
  email?: string;
  phone?: string;
  company_size?: string;
  interested_plan?: string;
  message?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { success: false, message: "Solicitud inválida." },
      { status: 400 }
    );
  }

  const fullName = payload.full_name?.trim() ?? "";
  const companyName = payload.company_name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const interestedPlan = payload.interested_plan?.trim() ?? "";

  if (!fullName || !companyName || !email || !interestedPlan) {
    return NextResponse.json(
      { success: false, message: "Completa los campos obligatorios." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { success: false, message: "Correo electrónico inválido." },
      { status: 400 }
    );
  }

  // Simulación de persistencia para conectar luego con CRM o backend principal.
  const leadId = `LD-${Date.now()}`;

  return NextResponse.json({
    success: true,
    message: "Solicitud recibida correctamente.",
    data: { lead_id: leadId },
  });
}
