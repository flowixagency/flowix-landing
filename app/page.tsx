const G = "#00CC6A";
const APP_URL = "https://flowix-web-production.up.railway.app";
const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const WA_ELITE    = `https://wa.me/5491126730927?text=Hola!%20Estoy%20interesado%20en%20el%20plan%20Elite%20de%20Flowix.%20%C2%BFMe%20pod%C3%A9s%20contar%20m%C3%A1s%3F`;
const WA_GENERAL  = `https://wa.me/5491126730927?text=Hola!%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20Flowix.%20%C2%BFMe%20pod%C3%A9s%20dar%20informaci%C3%B3n%3F`;
const WA_MARKETING= `https://wa.me/5491169215257?text=Hola!%20Me%20interesa%20el%20marketing%20de%20Flowix%20para%20mi%20negocio.%20%C2%BFMe%20pod%C3%A9s%20contar%20m%C3%A1s%3F`;
const WA_SOPORTE  = `https://wa.me/5491133383949?text=Hola!%20Necesito%20asistencia%20t%C3%A9cnica%20con%20Flowix.%20%C2%BFMe%20pod%C3%A9s%20ayudar%3F`;

const niches = [
  { emoji: "✂️", label: "Barberías" },
  { emoji: "💇", label: "Peluquerías" },
  { emoji: "✨", label: "Estéticas" },
  { emoji: "🤲", label: "Masajes" },
  { emoji: "💅", label: "Nail Studios" },
  { emoji: "⚡", label: "Depilación" },
  { emoji: "🧖", label: "Spas" },
  { emoji: "🎨", label: "Tattoo" },
];

const features = [
  { tag: "Agenda",   icon: "📅", title: "Agenda inteligente",      desc: "Vista semanal y diaria. Creá un turno en segundos, sin cruces ni solapamientos." },
  { tag: "Finanzas", icon: "💰", title: "Caja & pagos",            desc: "Registrá ingresos, egresos y comisiones automáticas. Cierre diario en un clic." },
  { tag: "Clientes", icon: "👥", title: "Gestión de clientes",     desc: "Historial completo, notas y búsqueda rápida. Fidelizá a tus mejores clientes." },
  { tag: "Reportes", icon: "📊", title: "Reportes en tiempo real", desc: "Ingresos del día, servicios más pedidos y rendimiento por profesional." },
  { tag: "Gastos",   icon: "🏠", title: "Control del local",       desc: "Gastos fijos con alertas de vencimiento. Nunca más una factura sorpresa." },
  { tag: "Stock",    icon: "📦", title: "Inventario",              desc: "Stock con alertas de mínimo. Siempre sabés qué te falta antes de quedarte sin nada." },
];

type FVal = boolean | string;
const tableFeatures: { name: string; base: FVal; pro: FVal; elite: FVal }[] = [
  { name: "Agenda de turnos",      base: true,  pro: true,  elite: true  },
  { name: "Gestión de clientes",   base: true,  pro: true,  elite: true  },
  { name: "Caja POS",              base: true,  pro: true,  elite: true  },
  { name: "Reportes básicos",      base: true,  pro: true,  elite: true  },
  { name: "Gastos del local",      base: false, pro: true,  elite: true  },
  { name: "Inventario",            base: false, pro: true,  elite: true  },
  { name: "Reportes avanzados",    base: false, pro: true,  elite: true  },
  { name: "Profesionales",         base: "2",   pro: "5",   elite: "∞"   },
  { name: "Soporte prioritario",   base: false, pro: false, elite: true  },
  { name: "Automatizaciones",      base: false, pro: false, elite: true  },
  { name: "Web del negocio",       base: false, pro: false, elite: true  },
  { name: "Mejoras prioritarias",  base: false, pro: false, elite: true  },
];

function PlanCell({ val, color }: { val: FVal; color: string }) {
  if (typeof val === "string") return <span style={{ fontWeight: 700, fontSize: 16, color }}>{val}</span>;
  if (val) return <span style={{ color, fontWeight: 700, fontSize: 18 }}>✓</span>;
  return <span style={{ color: "#3f3f46", fontSize: 18 }}>—</span>;
}

export default function LandingPage() {
  const apptData = [
    { time: "09:00", name: "Matías G.",  service: "Corte + barba",  color: G         },
    { time: "10:30", name: "Lucas P.",   service: "Corte clásico",  color: "#a78bfa" },
    { time: "12:00", name: "Diego M.",   service: "Degradé",        color: "#60a5fa" },
    { time: "15:00", name: "Bruno A.",   service: "Cejas + corte",  color: G         },
  ];

  return (
    <main style={{ fontFamily: "'Outfit', system-ui, sans-serif", color: "#fff", background: "#000", overflowX: "hidden" }}>

      {/* Grain */}
      <div aria-hidden style={{ position: "fixed", inset: 0, backgroundImage: GRAIN, opacity: 0.022, pointerEvents: "none", zIndex: 9999 }} />

      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(0,0,0,0.85)", backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "0 40px", display: "flex", alignItems: "center",
        justifyContent: "space-between", height: 68,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <div style={{ background: G, color: "#000", fontFamily: "monospace", fontWeight: 800, fontSize: 13, padding: "5px 11px", borderRadius: 9 }}>{"</>"}</div>
          <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: "-0.5px" }}>
            <span style={{ color: "#fff" }}>Flo</span><span style={{ color: G }}>wix</span>
          </span>
        </div>
        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <a href="#features" className="nav-link" style={{ color: "#71717a", fontSize: 14, textDecoration: "none", padding: "8px 16px", borderRadius: 8 }}>Funciones</a>
          <a href="#pricing"  className="nav-link" style={{ color: "#71717a", fontSize: 14, textDecoration: "none", padding: "8px 16px", borderRadius: 8 }}>Precios</a>
          <a href={`${APP_URL}/login`} className="nav-link" style={{ color: "#71717a", fontSize: 14, textDecoration: "none", padding: "8px 16px", borderRadius: 8 }}>Ingresar</a>
        </div>
        <a href={`${APP_URL}/register`} style={{ background: G, color: "#000", fontSize: 14, fontWeight: 700, textDecoration: "none", padding: "10px 24px", borderRadius: 10 }}>Empezar gratis</a>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero-section" style={{ padding: "110px 40px 90px", maxWidth: 1180, margin: "0 auto", position: "relative", overflow: "hidden" }}>

        {/* Top glow */}
        <div aria-hidden style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: 900, height: 500,
          background: "radial-gradient(ellipse at 50% 0%, rgba(0,204,106,0.09) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />

        {/* Subtle grid */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(0,204,106,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,204,106,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 100%)",
          pointerEvents: "none",
        }} />

        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center", position: "relative" }}>

          {/* ── Left: Text ── */}
          <div>
            <div className="anim-badge pulse-badge" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(0,204,106,0.07)", border: "1px solid rgba(0,204,106,0.2)",
              borderRadius: 20, padding: "6px 16px", marginBottom: 32,
              fontSize: 12, color: G, fontWeight: 600, letterSpacing: "0.02em",
            }}>
              <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: G, display: "inline-block" }} />
              v1.0 — Ya disponible para Windows
            </div>

            <h1 className="anim-up" style={{
              fontSize: "clamp(38px, 4.8vw, 68px)", fontWeight: 800,
              lineHeight: 1.04, letterSpacing: "-3px",
              margin: "0 0 28px", animationDelay: "0.1s",
            }}>
              Gestioná tu<br />negocio como<br /><span className="shimmer-green">un profesional.</span>
            </h1>

            <p className="anim-up" style={{
              fontSize: "clamp(15px, 1.8vw, 17px)", color: "#6b6b6b", lineHeight: 1.75,
              maxWidth: 460, marginBottom: 40, animationDelay: "0.22s",
            }}>
              Agenda, caja, clientes y reportes en una sola app. Para barberías, spas, estéticas y más. Instalá en tu PC, datos siempre en la nube.
            </p>

            <div className="anim-up" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28, animationDelay: "0.32s" }}>
              <a href="#download" style={{
                background: G, color: "#000", fontWeight: 700, fontSize: 15,
                textDecoration: "none", padding: "14px 28px", borderRadius: 12, letterSpacing: "-0.3px",
              }}>Descargar para Windows</a>
              <a href={`${APP_URL}/register`} style={{
                background: "rgba(255,255,255,0.05)", color: "#e4e4e7", fontWeight: 600, fontSize: 15,
                textDecoration: "none", padding: "14px 28px", borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.1)",
              }}>Probar online →</a>
            </div>

            <div className="anim-up" style={{ display: "flex", gap: 22, flexWrap: "wrap", animationDelay: "0.42s" }}>
              {["7 días gratis", "Sin tarjeta", "Datos seguros"].map(t => (
                <span key={t} style={{ color: "#444", fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ color: G, fontWeight: 700 }}>✓</span> {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Dashboard flotante ── */}
          <div className="hero-preview anim-preview" style={{ position: "relative", animationDelay: "0.2s" }}>
            <div className="float hero-card-glow" style={{
              background: "rgba(6,6,6,0.95)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20, padding: 20,
              backdropFilter: "blur(20px)",
              overflow: "hidden", position: "relative",
            }}>
              {/* Glow interno */}
              <div aria-hidden style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, background: "radial-gradient(circle, rgba(0,204,106,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />

              {/* Window chrome */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <div style={{ display: "flex", gap: 6 }}>
                  {["#ff5f57","#ffbd2e","#28c840"].map((c, i) => <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
                </div>
                <div style={{ flex: 1, textAlign: "center" as const, background: "rgba(255,255,255,0.04)", borderRadius: 6, padding: "4px 12px", fontSize: 11, color: "#444" }}>
                  <span style={{ color: "#fff" }}>Flo</span><span style={{ color: G }}>wix</span> — Agenda
                </div>
              </div>

              {/* Day header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, padding: "0 4px" }}>
                <div>
                  <p style={{ margin: 0, fontSize: 13, fontWeight: 600, letterSpacing: "-0.3px" }}>Martes, 23 de mayo</p>
                  <p style={{ margin: 0, fontSize: 11, color: "#444" }}>4 turnos hoy</p>
                </div>
                <div style={{ background: "rgba(0,204,106,0.1)", border: "1px solid rgba(0,204,106,0.2)", borderRadius: 8, padding: "5px 10px", fontSize: 11, color: G, fontWeight: 600 }}>En curso</div>
              </div>

              {/* Appointments */}
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 6, marginBottom: 14 }}>
                {apptData.map((a, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    background: "rgba(255,255,255,0.025)", borderRadius: 10, padding: "9px 12px",
                    border: "1px solid rgba(255,255,255,0.04)",
                  }}>
                    <span style={{ fontSize: 11, color: "#444", width: 34, flexShrink: 0 }}>{a.time}</span>
                    <div style={{ width: 3, height: 32, borderRadius: 3, background: a.color, flexShrink: 0 }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ margin: 0, fontSize: 12, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const }}>{a.name}</p>
                      <p style={{ margin: 0, fontSize: 11, color: "#555", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const }}>{a.service}</p>
                    </div>
                    {i === 0 && <div className="pulse-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: G, flexShrink: 0 }} />}
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 14 }}>
                {[
                  { label: "Hoy",      value: "$24.500", color: G },
                  { label: "Este mes", value: "$312K",   color: "#fff" },
                  { label: "Servicios",value: "47",      color: "#fff" },
                ].map(s => (
                  <div key={s.label} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 10, padding: "10px 8px", textAlign: "center" as const, border: "1px solid rgba(255,255,255,0.05)" }}>
                    <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: s.color, letterSpacing: "-0.5px" }}>{s.value}</p>
                    <p style={{ margin: 0, fontSize: 10, color: "#444", marginTop: 2 }}>{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Mini chart */}
              <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: 10, padding: "10px", border: "1px solid rgba(255,255,255,0.04)" }}>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 32 }}>
                  {[40, 65, 48, 80, 68, 90, 75].map((h, i) => (
                    <div key={i} style={{ flex: 1, background: i === 6 ? G : "rgba(0,204,106,0.18)", borderRadius: "2px 2px 0 0", height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.01)" }}>
        <div className="stats-grid sr" style={{ maxWidth: 1180, margin: "0 auto", padding: "30px 40px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", textAlign: "center" as const }}>
          {[
            { value: "8",         label: "Rubros soportados" },
            { value: "100%",      label: "Cloud — datos siempre seguros" },
            { value: "3",         label: "Planes para tu negocio" },
            { value: "Win 10/11", label: "Compatible con Windows" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "0 24px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : undefined }}>
              <p style={{ margin: 0, fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 800, letterSpacing: "-1px", color: G }}>{s.value}</p>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: "#444" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── NICHES ──────────────────────────────────────────── */}
      <section className="sr" style={{ padding: "72px 40px", maxWidth: 1180, margin: "0 auto" }}>
        <p style={{ textAlign: "center" as const, color: "#333", fontSize: 12, marginBottom: 20, textTransform: "uppercase" as const, letterSpacing: "0.12em", fontWeight: 700 }}>Adaptado a tu rubro</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
          {niches.map(n => (
            <div key={n.label} className="niche-chip" style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 12, padding: "10px 18px", fontSize: 14, color: "#666", cursor: "default",
            }}>
              <span style={{ fontSize: 18 }}>{n.emoji}</span> {n.label}
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────────── */}
      <section id="features" className="section-pad" style={{ padding: "80px 40px 100px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div className="sr" style={{ maxWidth: 580, marginBottom: 64 }}>
            <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>Funcionalidades</p>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 52px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.04, margin: "0 0 18px" }}>
              Todo lo que necesitás,<br />en un solo lugar.
            </h2>
            <p style={{ color: "#6b6b6b", fontSize: 16, lineHeight: 1.75, margin: 0 }}>
              Sin aprendizaje complicado, sin configuraciones eternas. Empezás a usar Flowix el mismo día que lo instalás.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14 }}>
            {features.map((f, i) => (
              <div key={f.title} className="feat-card sr" style={{
                background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 18, padding: "28px", position: "relative", overflow: "hidden",
                transitionDelay: `${i * 0.07}s`,
              }}>
                <div style={{ position: "absolute", top: 20, right: 20, background: "rgba(255,255,255,0.04)", borderRadius: 7, padding: "3px 10px", fontSize: 11, color: "#333", fontWeight: 600 }}>{f.tag}</div>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(0,204,106,0.08)", border: "1px solid rgba(0,204,106,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 20 }}>{f.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, letterSpacing: "-0.3px" }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "#6b6b6b", lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────── */}
      <section className="section-pad" style={{ padding: "80px 40px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p className="sr" style={{ textAlign: "center" as const, color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>Cómo funciona</p>
          <h2 className="sr" style={{ textAlign: "center" as const, fontSize: "clamp(28px, 3.5vw, 52px)", fontWeight: 800, letterSpacing: "-2.5px", margin: "0 0 72px", lineHeight: 1.04 }}>
            Arrancás en 3 pasos.
          </h2>
          <div style={{ display: "flex", flexDirection: "column" as const }}>
            {[
              { n: "01", title: "Descargá e instalá", desc: "Un instalador para Windows 10/11. Doble clic y listo, sin configuraciones complejas ni permisos de IT." },
              { n: "02", title: "Elegí tu rubro y armá tu equipo", desc: "Seleccionás tu rubro (barbería, spa, estética…), agregás tus profesionales y configurás los servicios." },
              { n: "03", title: "Empezá a gestionar desde el día uno", desc: "Cargá tus primeros clientes, agendá turnos y empezá a ver reportes. El sistema se adapta a vos." },
            ].map((s, i) => (
              <div key={s.n} className="sr" style={{ display: "flex", gap: 32, paddingBottom: 48, position: "relative", transitionDelay: `${i * 0.12}s` }}>
                {i < 2 && <div style={{ position: "absolute", left: 23, top: 48, bottom: 0, width: 1, background: "rgba(255,255,255,0.05)" }} />}
                <div style={{
                  width: 48, height: 48, borderRadius: "50%", flexShrink: 0,
                  background: i === 0 ? G : "rgba(255,255,255,0.03)",
                  border: `1px solid ${i === 0 ? G : "rgba(255,255,255,0.08)"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, fontSize: 13, color: i === 0 ? "#000" : "#444",
                }}>{s.n}</div>
                <div style={{ paddingTop: 10 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, letterSpacing: "-0.5px" }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: "#6b6b6b", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING TABLE ────────────────────────────────────── */}
      <section id="pricing" className="section-pad" style={{ padding: "80px 40px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p className="sr" style={{ textAlign: "center" as const, color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>Precios</p>
          <h2 className="sr" style={{ textAlign: "center" as const, fontSize: "clamp(28px, 3.5vw, 52px)", fontWeight: 800, letterSpacing: "-2.5px", margin: "0 0 14px", lineHeight: 1.04 }}>
            Simple y transparente.
          </h2>
          <p className="sr" style={{ textAlign: "center" as const, color: "#6b6b6b", fontSize: 16, marginBottom: 56 }}>
            7 días de prueba gratis en el plan Pro. Sin tarjeta de crédito.
          </p>

          <div className="sr" style={{ overflowX: "auto" as const, borderRadius: 20, border: "1px solid rgba(255,255,255,0.08)" }}>
            <table className="pricing-table" style={{ width: "100%", borderCollapse: "collapse" as const, minWidth: 700, tableLayout: "fixed" as const }}>
              <colgroup>
                <col style={{ width: "22%" }} />
                <col style={{ width: "26%" }} />
                <col style={{ width: "26%" }} />
                <col style={{ width: "26%" }} />
              </colgroup>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <th style={{ padding: "36px 32px", textAlign: "left" as const, fontWeight: "normal" as const }}>
                    <span style={{ fontSize: 13, color: "#333", fontWeight: 500 }}>Funcionalidades</span>
                  </th>
                  {/* BASE */}
                  <th style={{ padding: "36px 24px", textAlign: "center" as const, background: "rgba(255,255,255,0.015)", fontWeight: "normal" as const }}>
                    <p style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 600, color: "#888" }}>Base</p>
                    <p style={{ margin: "0 0 22px" }}>
                      <span style={{ fontSize: 42, fontWeight: 800, letterSpacing: "-2px" }}>$17.000</span>
                      <span style={{ fontSize: 13, color: "#444" }}>/mes</span>
                    </p>
                    <a href={`${APP_URL}/register`} style={{ display: "block", background: "rgba(255,255,255,0.06)", color: "#888", fontSize: 13, fontWeight: 600, textDecoration: "none", padding: "11px 16px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.08)" }}>Empezar</a>
                  </th>
                  {/* PRO */}
                  <th className="glow-pro" style={{ padding: "36px 24px", textAlign: "center" as const, background: "rgba(0,204,106,0.05)", fontWeight: "normal" as const, borderLeft: `2px solid ${G}`, borderRight: `2px solid ${G}`, borderTop: `2px solid ${G}`, position: "relative" as const }}>
                    <div style={{ position: "absolute" as const, top: -1, left: "50%", transform: "translateX(-50%)", background: G, color: "#000", fontSize: 10, fontWeight: 800, padding: "4px 14px", borderRadius: "0 0 10px 10px", letterSpacing: "0.07em", whiteSpace: "nowrap" as const }}>RECOMENDADO</div>
                    <p style={{ margin: "14px 0 8px", fontSize: 16, fontWeight: 700, color: G }}>Pro</p>
                    <p style={{ margin: "0 0 6px" }}>
                      <span style={{ fontSize: 42, fontWeight: 800, letterSpacing: "-2px", color: G }}>$31.000</span>
                      <span style={{ fontSize: 13, color: "#444" }}>/mes</span>
                    </p>
                    <p style={{ margin: "0 0 18px", fontSize: 12, color: "#444" }}>7 días de prueba gratis</p>
                    <a href={`${APP_URL}/register`} style={{ display: "block", background: G, color: "#000", fontSize: 13, fontWeight: 700, textDecoration: "none", padding: "11px 16px", borderRadius: 10 }}>Probar gratis</a>
                  </th>
                  {/* ELITE */}
                  <th style={{ padding: "36px 24px", textAlign: "center" as const, background: "rgba(167,139,250,0.04)", fontWeight: "normal" as const }}>
                    <p style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 600, color: "#a78bfa" }}>Elite</p>
                    <p style={{ margin: "0 0 22px" }}>
                      <span style={{ fontSize: 42, fontWeight: 800, letterSpacing: "-2px", color: "#a78bfa" }}>$64.000</span>
                      <span style={{ fontSize: 13, color: "#444" }}>/mes</span>
                    </p>
                    <a href={WA_ELITE} target="_blank" rel="noopener noreferrer" style={{ display: "block", background: "rgba(167,139,250,0.1)", color: "#a78bfa", fontSize: 13, fontWeight: 600, textDecoration: "none", padding: "11px 16px", borderRadius: 10, border: "1px solid rgba(167,139,250,0.2)" }}>Contactar</a>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableFeatures.map((f, i) => (
                  <tr key={f.name} style={{ borderBottom: "1px solid rgba(255,255,255,0.03)", background: i % 2 !== 0 ? "rgba(255,255,255,0.008)" : "transparent" }}>
                    <td style={{ padding: "10px 20px", fontSize: 13, color: "#6b6b6b" }}>{f.name}</td>
                    <td style={{ textAlign: "center" as const, padding: "10px 20px", background: "rgba(255,255,255,0.008)" }}>
                      <PlanCell val={f.base} color="#e4e4e7" />
                    </td>
                    <td style={{ textAlign: "center" as const, padding: "10px 20px", background: "rgba(0,204,106,0.03)", borderLeft: `2px solid ${G}`, borderRight: `2px solid ${G}` }}>
                      <PlanCell val={f.pro} color={G} />
                    </td>
                    <td style={{ textAlign: "center" as const, padding: "10px 20px", background: "rgba(167,139,250,0.015)" }}>
                      <PlanCell val={f.elite} color="#a78bfa" />
                    </td>
                  </tr>
                ))}
                <tr>
                  <td style={{ padding: "24px 32px" }} />
                  <td style={{ padding: "20px 24px", textAlign: "center" as const, background: "rgba(255,255,255,0.01)" }}>
                    <a href={`${APP_URL}/register`} style={{ display: "inline-block", background: "rgba(255,255,255,0.06)", color: "#888", fontSize: 13, fontWeight: 600, textDecoration: "none", padding: "11px 24px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.08)" }}>Empezar</a>
                  </td>
                  <td style={{ padding: "20px 24px", textAlign: "center" as const, background: "rgba(0,204,106,0.04)", borderLeft: `2px solid ${G}`, borderRight: `2px solid ${G}`, borderBottom: `2px solid ${G}` }}>
                    <a href={`${APP_URL}/register`} style={{ display: "inline-block", background: G, color: "#000", fontSize: 13, fontWeight: 700, textDecoration: "none", padding: "11px 28px", borderRadius: 10 }}>Probar gratis</a>
                  </td>
                  <td style={{ padding: "20px 24px", textAlign: "center" as const, background: "rgba(167,139,250,0.03)" }}>
                    <a href={WA_ELITE} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "rgba(167,139,250,0.1)", color: "#a78bfa", fontSize: 13, fontWeight: 600, textDecoration: "none", padding: "11px 24px", borderRadius: 10, border: "1px solid rgba(167,139,250,0.2)" }}>Contactar</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD ────────────────────────────────────────── */}
      <section id="download" className="section-pad" style={{ padding: "80px 40px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div className="download-grid sr" style={{
            background: "linear-gradient(135deg, rgba(0,204,106,0.06) 0%, rgba(0,0,0,0) 55%)",
            border: "1px solid rgba(0,204,106,0.12)", borderRadius: 24,
            padding: "64px 64px", display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center",
          }}>
            <div>
              <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>Descarga gratuita</p>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 52px)", fontWeight: 800, letterSpacing: "-2.5px", margin: "0 0 16px", lineHeight: 1.04 }}>
                Instalá Flowix<br />en tu PC hoy.
              </h2>
              <p style={{ color: "#6b6b6b", fontSize: 16, lineHeight: 1.75, margin: "0 0 32px", maxWidth: 420 }}>
                Los datos viven en la nube, el programa en tu escritorio. Rápido, confiable y siempre actualizado.
              </p>
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                {["Windows 10 / 11", "64-bit", "v1.0.0", "Gratis"].map(t => (
                  <span key={t} style={{ color: "#444", fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ color: G }}>✓</span> {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="download-cta" style={{ textAlign: "center" as const }}>
              <a href="https://github.com/alegresystems26/flowix-releases/releases/download/v1.0.0/Flowix.Setup.1.0.0.exe" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: G, color: "#000", fontWeight: 700, fontSize: 16,
                textDecoration: "none", padding: "16px 36px", borderRadius: 14,
                whiteSpace: "nowrap" as const, letterSpacing: "-0.3px",
              }}>↓ Descargar .exe</a>
              <p style={{ color: "#333", fontSize: 12, marginTop: 12 }}>~78 MB · Windows 10/11</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "64px 40px 40px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 52, marginBottom: 52 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 16 }}>
                <div style={{ background: G, color: "#000", fontFamily: "monospace", fontWeight: 800, fontSize: 13, padding: "4px 10px", borderRadius: 8 }}>{"</>"}</div>
                <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: "-0.5px" }}>
                  <span style={{ color: "#fff" }}>Flo</span><span style={{ color: G }}>wix</span>
                </span>
              </div>
              <p style={{ color: "#444", fontSize: 14, lineHeight: 1.65, margin: "0 0 20px", maxWidth: 280 }}>
                Sistema de gestión para negocios de servicios. Agenda, caja, clientes y reportes en un solo lugar.
              </p>
              <a href="https://www.instagram.com/flowix.ar/" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#555", fontSize: 13, textDecoration: "none", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 9, padding: "8px 14px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                @flowix.ar
              </a>
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "#333", marginBottom: 18 }}>Producto</p>
              {[
                { label: "Funciones",    href: "#features" },
                { label: "Precios",      href: "#pricing" },
                { label: "Descargar",    href: "#download" },
                { label: "Crear cuenta", href: `${APP_URL}/register` },
                { label: "Ingresar",     href: `${APP_URL}/login` },
              ].map(l => (
                <a key={l.label} href={l.href} className="footer-link" style={{ display: "block", color: "#444", fontSize: 14, textDecoration: "none", marginBottom: 11 }}>{l.label}</a>
              ))}
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "#333", marginBottom: 18 }}>Contacto</p>
              {[
                { label: "Consultas generales", href: WA_GENERAL },
                { label: "Marketing",           href: WA_MARKETING },
                { label: "Soporte técnico",     href: WA_SOPORTE },
              ].map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: "flex", alignItems: "center", gap: 7, color: "#444", fontSize: 14, textDecoration: "none", marginBottom: 13 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#25d366", flexShrink: 0 }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  {l.label}
                </a>
              ))}
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "#333", marginBottom: 18 }}>Rubros</p>
              {niches.map(n => (
                <p key={n.label} style={{ color: "#444", fontSize: 13, marginBottom: 9 }}>{n.emoji} {n.label}</p>
              ))}
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <span style={{ color: "#333", fontSize: 13 }}>© 2026 Flowix. Todos los derechos reservados.</span>
            <span style={{ color: "#222", fontSize: 13 }}>Hecho en Argentina 🇦🇷</span>
          </div>
        </div>
      </footer>

      {/* Scroll-reveal */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function(){
          var io = new IntersectionObserver(function(entries){
            entries.forEach(function(e){
              if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
            });
          },{ threshold: 0.1 });
          document.querySelectorAll('.sr').forEach(function(el){ io.observe(el); });
        })();
      ` }} />
    </main>
  );
}
