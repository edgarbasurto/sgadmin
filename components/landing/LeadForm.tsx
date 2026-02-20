"use client";

import { FormEvent, useMemo, useState } from "react";

type LeadPayload = {
  full_name: string;
  company_name: string;
  email: string;
  phone: string;
  company_size: string;
  interested_plan: string;
  message: string;
};

const initialState: LeadPayload = {
  full_name: "",
  company_name: "",
  email: "",
  phone: "",
  company_size: "",
  interested_plan: "",
  message: "",
};

export function LeadForm() {
  const [form, setForm] = useState<LeadPayload>(initialState);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = useMemo(() => {
    return (
      Boolean(form.full_name.trim()) &&
      Boolean(form.company_name.trim()) &&
      Boolean(form.email.trim()) &&
      Boolean(form.interested_plan.trim())
    );
  }, [form]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit || sending) return;

    setSending(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "No se pudo enviar la solicitud.");
      }

      setSuccess(
        "Solicitud enviada. Un asesor te contactará en menos de 24 horas para coordinar la demo."
      );
      setForm(initialState);
    } catch (submitError) {
      const message =
        submitError instanceof Error ? submitError.message : "Ocurrió un error inesperado.";
      setError(message);
    } finally {
      setSending(false);
    }
  };

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label className="field">
          <span>Nombre completo *</span>
          <input
            type="text"
            placeholder="Ej: Ana Pérez"
            value={form.full_name}
            onChange={(event) => setForm((prev) => ({ ...prev, full_name: event.target.value }))}
            required
          />
        </label>

        <label className="field">
          <span>Empresa *</span>
          <input
            type="text"
            placeholder="Ej: Constructora Alfa"
            value={form.company_name}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, company_name: event.target.value }))
            }
            required
          />
        </label>

        <label className="field">
          <span>Email *</span>
          <input
            type="email"
            placeholder="contacto@empresa.com"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            required
          />
        </label>

        <label className="field">
          <span>Teléfono</span>
          <input
            type="text"
            placeholder="0999999999"
            value={form.phone}
            onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
          />
        </label>

        <label className="field">
          <span>Tamaño de empresa</span>
          <select
            value={form.company_size}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, company_size: event.target.value }))
            }
          >
            <option value="">Selecciona</option>
            <option value="1-5">1 a 5 colaboradores</option>
            <option value="6-20">6 a 20 colaboradores</option>
            <option value="21-50">21 a 50 colaboradores</option>
            <option value="51+">Más de 50 colaboradores</option>
          </select>
        </label>

        <label className="field">
          <span>Plan de interés *</span>
          <select
            value={form.interested_plan}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, interested_plan: event.target.value }))
            }
            required
          >
            <option value="">Selecciona</option>
            <option value="starter">Starter</option>
            <option value="growth">Growth</option>
            <option value="enterprise">Enterprise</option>
          </select>
        </label>
      </div>

      <label className="field">
        <span>¿Qué deseas resolver con SGAdmin?</span>
        <textarea
          rows={4}
          placeholder="Cuéntanos tu proceso actual y qué deseas mejorar."
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
        />
      </label>

      <button type="submit" className="button button-primary button-full" disabled={!canSubmit || sending}>
        {sending ? "Enviando solicitud..." : "Solicitar demo y más información"}
      </button>

      {success ? <p className="form-feedback success">{success}</p> : null}
      {error ? <p className="form-feedback error">{error}</p> : null}
    </form>
  );
}
