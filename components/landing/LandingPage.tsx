import { LeadForm } from "./LeadForm";

const capabilities = [
  {
    title: "Facturación electrónica SRI",
    description:
      "Emite facturas, notas de crédito y retenciones con validaciones previas, firma digital y seguimiento de autorización.",
  },
  {
    title: "Gestión comercial",
    description:
      "Crea cotizaciones, convierte a factura en segundos y centraliza pipeline comercial con indicadores en tiempo real.",
  },
  {
    title: "Cobros y conciliación",
    description:
      "Controla cartera, aplica pagos, detecta pendientes y reduce errores contables con procesos asistidos.",
  },
  {
    title: "Catálogos y reglas",
    description:
      "Administra productos, impuestos, secuenciales, sucursales y configuraciones por empresa desde un único panel.",
  },
  {
    title: "Reportes ejecutivos",
    description:
      "Visualiza KPIs de ventas, cobranzas, documentos y cumplimiento tributario con dashboards listos para acción.",
  },
  {
    title: "Operación multiusuario",
    description:
      "Permisos por rol, trazabilidad por etapa y auditoría completa para equipos administrativos y financieros.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "$49",
    billingLabel: "/ mes",
    annualReference: "$490 / año (2 meses gratis)",
    description: "Ideal para micro y pequeñas empresas en arranque digital.",
    cta: "Comenzar ahora",
    features: [
      "Hasta 500 comprobantes/mes",
      "1 empresa y 3 usuarios",
      "Facturación y cotizaciones",
      "Soporte por correo",
    ],
  },
  {
    name: "Growth",
    price: "$129",
    billingLabel: "/ mes",
    annualReference: "$1.290 / año (2 meses gratis)",
    highlight: true,
    description: "Para empresas que crecen y necesitan control integral.",
    cta: "Solicitar demo",
    features: [
      "Hasta 3.000 comprobantes/mes",
      "5 empresas y 20 usuarios",
      "Cartera, conciliación y reportes avanzados",
      "Soporte prioritario",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    billingLabel: "(mensual o anual)",
    annualReference: "Cotización según alcance y volumen",
    description: "Implementación para operaciones complejas y multiplanta.",
    cta: "Hablar con ventas",
    features: [
      "Volumen ilimitado",
      "Integraciones API y BI",
      "Flujos y branding personalizados",
      "Acompañamiento dedicado",
    ],
  },
];

const testimonials = [
  {
    quote:
      "Pasamos de hojas de cálculo a una operación tributaria ordenada. Reducimos retrabajos y errores de emisión.",
    author: "Laura M.",
    role: "Gerente Administrativa - Grupo Constructor",
  },
  {
    quote:
      "El seguimiento de estados SRI y la trazabilidad nos ahorran horas al cierre mensual. El equipo se adapta rápido.",
    author: "Carlos V.",
    role: "Contador General - Distribuidora Regional",
  },
  {
    quote:
      "La conversión de cotización a factura y el control de cartera mejoraron nuestro flujo de caja en pocas semanas.",
    author: "Daniela R.",
    role: "Directora Comercial - Servicios Técnicos",
  },
];

const faqs = [
  {
    question: "¿Cuánto dura la implementación?",
    answer:
      "En escenarios estándar, entre 5 y 10 días hábiles. Incluye configuración inicial, entrenamiento y salida en vivo.",
  },
  {
    question: "¿Puedo migrar desde mi sistema actual?",
    answer:
      "Sí. Podemos importar clientes, productos y comprobantes históricos para acelerar la adopción sin perder contexto.",
  },
  {
    question: "¿La plataforma cumple con SRI?",
    answer:
      "Sí. El flujo de emisión considera estructura XML, firma, envío, autorización y trazabilidad según lineamientos vigentes.",
  },
  {
    question: "¿Incluyen soporte y capacitación?",
    answer:
      "Todos los planes incluyen onboarding. En Growth y Enterprise incorporamos sesiones continuas y soporte prioritario.",
  },
];

export function LandingPage() {
  return (
    <main>
      <header className="hero-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="container header-shell">
          <nav className="top-nav">
            <div className="brand">
              <span className="brand-dot" />
              <span>SGAdmin</span>
            </div>
            <div className="nav-links">
              <a href="#funcionalidades">Funcionalidades</a>
              <a href="#planes">Planes</a>
              <a href="#clientes">Clientes</a>
              <a href="#contacto" className="button button-ghost">
                Hablar con ventas
              </a>
            </div>
          </nav>

          <section className="hero-section fade-in-up">
            <span className="eyebrow">ERP + Facturación electrónica para empresas en Ecuador</span>
            <h1>
              Acelera tu operación administrativa y tributaria con una sola plataforma.
            </h1>
            <p>
              SGAdmin integra ventas, emisión de comprobantes, cartera y reportes ejecutivos para
              que tu equipo opere con menos fricción y más control.
            </p>
            <div className="hero-actions">
              <a href="#contacto" className="button button-primary">
                Solicitar demo gratuita
              </a>
              <a href="#planes" className="button button-secondary">
                Ver planes y precios
              </a>
            </div>
          </section>

          <section className="stats-grid">
            <article className="card stat-card fade-in-up delay-1">
              <strong>+10k</strong>
              <span>Comprobantes emitidos por mes</span>
            </article>
            <article className="card stat-card fade-in-up delay-2">
              <strong>-40%</strong>
              <span>Tiempo operativo en procesos manuales</span>
            </article>
            <article className="card stat-card fade-in-up delay-3">
              <strong>99.9%</strong>
              <span>Disponibilidad de la plataforma</span>
            </article>
          </section>
        </div>
      </header>

      <section id="funcionalidades" className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Funcionalidades clave</span>
            <h2>Diseñado para equipos administrativos, comerciales y financieros.</h2>
            <p>
              Estandariza tus procesos de punta a punta con una experiencia consistente y preparada
              para escalar.
            </p>
          </div>
          <div className="feature-grid">
            {capabilities.map((item) => (
              <article key={item.title} className="card feature-card">
                <div className="feature-icon" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container split-grid">
          <article className="card process-card">
            <span className="eyebrow">Implementación orientada a resultados</span>
            <h2>Puesta en marcha estructurada y medible.</h2>
            <ol>
              <li>
                <strong>1. Diagnóstico:</strong> mapeamos tus procesos actuales y puntos de
                fricción.
              </li>
              <li>
                <strong>2. Configuración:</strong> ajustamos catálogos, reglas y flujos de emisión.
              </li>
              <li>
                <strong>3. Capacitación:</strong> entrenamos a usuarios por rol con escenarios
                reales.
              </li>
              <li>
                <strong>4. Escalamiento:</strong> acompañamiento durante estabilización y mejora
                continua.
              </li>
            </ol>
          </article>
          <article className="card impact-card">
            <h3>Resultados que importan para gerencia</h3>
            <ul>
              <li>Visibilidad inmediata de ventas, cartera y documentos.</li>
              <li>Menor riesgo operativo por validaciones automatizadas.</li>
              <li>Mejor experiencia para clientes y equipo interno.</li>
              <li>Base sólida para decisiones con datos confiables.</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="planes" className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Planes y precios</span>
            <h2>Elige el modelo que mejor se adapta a tu etapa de crecimiento.</h2>
            <p>
              Precios referenciales en USD. Starter y Growth se muestran en modalidad mensual, con
              opción anual preferencial.
            </p>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <article key={plan.name} className={`card price-card ${plan.highlight ? "highlight" : ""}`}>
                <h3>{plan.name}</h3>
                <div className="price-shell">
                  <div className="price">{plan.price}</div>
                  <span className="price-period">{plan.billingLabel}</span>
                </div>
                <div className="price-annual">{plan.annualReference}</div>
                <p>{plan.description}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a href="#contacto" className="button button-primary button-full">
                  {plan.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="clientes" className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Confianza de nuestros clientes</span>
            <h2>Empresas de servicios, comercialización e industria ya operan con SGAdmin.</h2>
          </div>

          <div className="logo-row">
            {["Constructora Nova", "Grupo Cumbre", "Enercomser", "LogiSupply", "Nexo Industrial"].map(
              (company) => (
                <div className="logo-chip" key={company}>
                  {company}
                </div>
              )
            )}
          </div>

          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <article key={item.author} className="card testimonial-card">
                <p>"{item.quote}"</p>
                <strong>{item.author}</strong>
                <span>{item.role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container faq-grid">
          <article>
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2>Resolvemos tus dudas antes de iniciar.</h2>
            <p>
              Si necesitas una evaluación más profunda, nuestro equipo funcional puede revisar tu
              caso sin costo.
            </p>
          </article>

          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question} className="faq-item">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="section section-contact">
        <div className="container contact-grid">
          <article>
            <span className="eyebrow">Demo guiada</span>
            <h2>Solicita una sesión personalizada para tu empresa.</h2>
            <p>
              Te mostraremos un flujo real: desde cotización y emisión electrónica hasta cobro y
              reporte ejecutivo.
            </p>
            <ul className="contact-benefits">
              <li>Agenda flexible para gerencia y equipo operativo.</li>
              <li>Recomendaciones según tu modelo de negocio.</li>
              <li>Roadmap de implementación por fases.</li>
            </ul>
          </article>

          <article className="card form-card">
            <h3>Pedir más información</h3>
            <LeadForm />
          </article>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-shell">
          <div>
            <strong>SGAdmin</strong>
            <p>ERP para facturación electrónica, gestión comercial y control financiero.</p>
          </div>
          <div className="footer-links">
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#planes">Planes</a>
            <a href="#clientes">Clientes</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
