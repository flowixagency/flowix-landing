import ScrollReveal from "./components/ScrollReveal";
import FeatureTabs from "./components/FeatureTabs";

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

export default function LandingPage() {
  const apptData = [
    { time: "09:00", name: "Matías G.",  service: "Corte + barba",  color: G         },
    { time: "10:30", name: "Lucas P.",   service: "Corte clásico",  color: "#a78bfa" },
    { time: "12:00", name: "Diego M.",   service: "Degradé",        color: "#60a5fa" },
    { time: "15:00", name: "Bruno A.",   service: "Cejas + corte",  color: G         },
  ];

  return (
    <main style={{ fontFamily: "'Outfit', system-ui, sans-serif", color: "#fff", background: "#050508", overflowX: "hidden" }}>

      {/* Grain */}
      <div aria-hidden style={{ position: "fixed", inset: 0, backgroundImage: GRAIN, opacity: 0.022, pointerEvents: "none", zIndex: 9999 }} />

      {/* Premium bg glow */}
      <div aria-hidden style={{ position: "fixed", top: 0, left: 0, right: 0, height: "90vh", background: "radial-gradient(ellipse 100% 70% at 50% 0%, rgba(0,204,106,0.18) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
      {/* Ambient glow secundario */}
      <div aria-hidden style={{ position: "fixed", bottom: 0, right: "-10%", width: "55vw", height: "55vh", background: "radial-gradient(ellipse, rgba(0,150,255,0.04) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />

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
          <a href="#detalle"  className="nav-link" style={{ color: "#71717a", fontSize: 14, textDecoration: "none", padding: "8px 16px", borderRadius: 8 }}>El sistema</a>
          <a href={`${APP_URL}/login`} className="nav-link" style={{ color: "#71717a", fontSize: 14, textDecoration: "none", padding: "8px 16px", borderRadius: 8 }}>Ingresar</a>
        </div>
        <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" style={{ background: G, color: "#000", fontSize: 14, fontWeight: 700, textDecoration: "none", padding: "10px 24px", borderRadius: 10 }}>Quiero probarlo</a>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero-section" style={{ padding: "110px 40px 90px", maxWidth: 1180, margin: "0 auto", position: "relative", overflow: "hidden" }}>

        {/* Top glow */}
        <div aria-hidden style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: 1000, height: 560,
          background: "radial-gradient(ellipse at 50% 0%, rgba(0,204,106,0.12) 0%, transparent 62%)",
          pointerEvents: "none",
        }} />
        <div aria-hidden style={{
          position: "absolute", bottom: "10%", right: "-8%",
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(0,204,106,0.04) 0%, transparent 65%)",
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
              App de escritorio · También disponible en web
            </div>

            <h1 className="anim-up" style={{
              fontSize: "clamp(38px, 4.8vw, 68px)", fontWeight: 800,
              lineHeight: 1.04, letterSpacing: "-3px",
              margin: "0 0 28px", animationDelay: "0.1s",
            }}>
              Gestioná tu<br />negocio como<br /><em style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: G, letterSpacing: "-1px" }}>un profesional.</em>
            </h1>

            <p className="anim-up" style={{
              fontSize: "clamp(15px, 1.8vw, 17px)", color: "#999", lineHeight: 1.75,
              maxWidth: 460, marginBottom: 40, animationDelay: "0.22s",
            }}>
              Agenda, caja, clientes y reportes en un solo sistema. Instalá en tu PC o abrí desde el navegador — los datos siempre en la nube, siempre disponibles.
            </p>

            <div className="anim-up" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 28, animationDelay: "0.32s" }}>
              <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" style={{
                background: G, color: "#000", fontWeight: 700, fontSize: 15,
                textDecoration: "none", padding: "14px 28px", borderRadius: 12, letterSpacing: "-0.3px",
              }}>Quiero probarlo →</a>
              <a href={`${APP_URL}/login`} style={{
                background: "rgba(255,255,255,0.05)", color: "#e4e4e7", fontWeight: 600, fontSize: 15,
                textDecoration: "none", padding: "14px 28px", borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.1)",
              }}>Acceder desde el navegador →</a>
            </div>

            <div className="anim-up" style={{ display: "flex", gap: 22, flexWrap: "wrap", animationDelay: "0.42s" }}>
              {["Sin compromiso", "Windows + Web", "Soporte local"].map(t => (
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
            { value: "8",     label: "Rubros soportados" },
            { value: "100%",  label: "Cloud — datos siempre seguros" },
            { value: "2",    label: "Formas de acceder: PC y web" },
            { value: "ARG", label: "Soporte local, mismo huso horario" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "0 24px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : undefined }}>
              <p style={{ margin: 0, fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 800, letterSpacing: "-1px", color: G }}>{s.value}</p>
              <p style={{ margin: "4px 0 0", fontSize: 13, color: "#444" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── PAIN POINTS ─────────────────────────────────────── */}
      <section className="section-pad" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div className="sr" style={{ textAlign: "center" as const, marginBottom: 56 }}>
            <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>El problema</p>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 52px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.04, margin: 0 }}>
              ¿Te suena familiar?
            </h2>
          </div>
          <div className="pain-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {[
              { tag: "Sin agenda",   pain: "Los turnos son un caos — WhatsApp por todos lados, cuaderno en mano, clientes que se olvidan y solapamientos que te arruinan el día." },
              { tag: "Sin caja",     pain: "Sabés cuánto ganaste cuando contás la plata, pero no cuánto fue efectivo, cuánto transferencia, ni cuánto le tocó a cada profesional." },
              { tag: "Sin historial",pain: "Tenés clientes de hace años y no recordás qué les hiciste la última vez, qué les gusta o cuándo fue su visita anterior." },
              { tag: "Sin reportes", pain: "Al final del mes no podés responder: ¿cuál fue tu mejor semana? ¿qué servicio te deja más plata? ¿quién del equipo trabajó más?" },
            ].map((p, i) => (
              <div key={i} className="sr" style={{
                background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 18, padding: "32px 36px", position: "relative",
                transitionDelay: `${i * 0.08}s`,
              }}>
                <div style={{
                  display: "inline-block", background: "rgba(239,68,68,0.08)",
                  border: "1px solid rgba(239,68,68,0.2)", borderRadius: 8,
                  padding: "4px 12px", fontSize: 11, color: "#ef4444", fontWeight: 700,
                  letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: 18,
                }}>{p.tag}</div>
                <p style={{ fontSize: 15, color: "#999", lineHeight: 1.75, margin: 0 }}>{p.pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIADORES ─────────────────────────────────── */}
      <section className="section-pad sr" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 560, marginBottom: 56 }}>
            <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>Por qué Flowix Book</p>
            <h2 style={{ fontSize: "clamp(26px, 3vw, 44px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.08, margin: "0 0 14px" }}>
              No es lo mismo que<br />lo que ya tenés.
            </h2>
            <p style={{ color: "#666", fontSize: 15, lineHeight: 1.75, margin: 0 }}>
              Excel y Google Calendar no fueron hechos para gestionar un negocio de servicios. Flowix Book sí.
            </p>
          </div>

          {/* Tabla */}
          <div style={{ overflowX: "auto" as const }}>
            <table style={{ width: "100%", borderCollapse: "separate" as const, borderSpacing: 0 }}>
              <thead>
                <tr>
                  <th style={{ width: "28%", padding: "12px 20px", textAlign: "left" as const, fontSize: 12, color: "#333", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}></th>
                  {[
                    { label: "Excel / Sheets",    muted: true  },
                    { label: "Google Calendar",   muted: true  },
                    { label: "Flowix Book",       muted: false },
                  ].map((col, ci) => (
                    <th key={ci} style={{
                      width: "24%", padding: "12px 20px", textAlign: "center" as const,
                      fontSize: 13, fontWeight: 700,
                      color: col.muted ? "#444" : G,
                      background: col.muted ? "transparent" : "rgba(0,204,106,0.04)",
                      borderRadius: ci === 2 ? "12px 12px 0 0" : undefined,
                      border: ci === 2 ? "1px solid rgba(0,204,106,0.2)" : undefined,
                      borderBottom: ci === 2 ? "none" : undefined,
                    }}>{col.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Turnos y agenda",              excel: false, gcal: true,  flowix: true  },
                  { feature: "Caja y cobros",                excel: false, gcal: false, flowix: true  },
                  { feature: "Comisiones por profesional",   excel: false, gcal: false, flowix: true  },
                  { feature: "Historial de clientes",        excel: false, gcal: false, flowix: true  },
                  { feature: "Reportes automáticos",         excel: false, gcal: false, flowix: true  },
                  { feature: "Cierre de caja diario",        excel: false, gcal: false, flowix: true  },
                  { feature: "Sin fórmulas ni configuración",excel: false, gcal: false, flowix: true  },
                  { feature: "Soporte local en Argentina",   excel: false, gcal: false, flowix: true  },
                ].map((row, ri) => {
                  const isLast = ri === 7;
                  const cell = (val: boolean, isFlowix: boolean) => (
                    <td style={{
                      padding: "14px 20px", textAlign: "center" as const,
                      background: isFlowix ? "rgba(0,204,106,0.04)" : "transparent",
                      borderLeft:   isFlowix ? "1px solid rgba(0,204,106,0.2)" : undefined,
                      borderRight:  isFlowix ? "1px solid rgba(0,204,106,0.2)" : undefined,
                      borderBottom: isFlowix && isLast ? "1px solid rgba(0,204,106,0.2)" : isFlowix ? "1px solid rgba(0,204,106,0.08)" : "1px solid rgba(255,255,255,0.04)",
                      borderRadius: isFlowix && isLast ? "0 0 12px 12px" : undefined,
                    }}>
                      {val
                        ? <span style={{ color: isFlowix ? G : "#555", fontSize: 16, fontWeight: 700 }}>✓</span>
                        : <span style={{ color: "#2a2a2a", fontSize: 16 }}>✕</span>
                      }
                    </td>
                  );
                  return (
                    <tr key={ri}>
                      <td style={{ padding: "14px 20px", fontSize: 14, color: "#777", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>{row.feature}</td>
                      {cell(row.excel,  false)}
                      {cell(row.gcal,   false)}
                      {cell(row.flowix, true)}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────────── */}
      <section id="features" className="section-pad" style={{ padding: "80px 40px 100px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div className="sr" style={{ maxWidth: 580, marginBottom: 64 }}>
            <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>Funcionalidades</p>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 52px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.04, margin: "0 0 18px" }}>
              Todo lo que necesitás,<br /><em style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: G }}>en un solo lugar.</em>
            </h2>
            <p style={{ color: "#999", fontSize: 16, lineHeight: 1.75, margin: 0 }}>
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
                <div style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 7, padding: "3px 10px", fontSize: 11, color: "#666", fontWeight: 600, letterSpacing: "0.04em" }}>{f.tag}</div>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(0,204,106,0.08)", border: "1px solid rgba(0,204,106,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 20 }}>{f.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, letterSpacing: "-0.3px" }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "#999", lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
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
            Arrancás en <em style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: G }}>3 pasos.</em>
          </h2>
          <div style={{ display: "flex", flexDirection: "column" as const }}>
            {[
              { n: "01", title: "Hablamos", desc: "Nos contás qué necesita tu negocio. Una charla corta y ya entendemos tu operación — rubros, equipo, servicios." },
              { n: "02", title: "Te configuramos todo", desc: "Cargamos tus servicios, profesionales y configuraciones. Vos no tocás nada técnico, nosotros lo dejamos listo." },
              { n: "03", title: "Empezás a gestionar", desc: "El sistema ya está operativo. Agendás turnos, cerrás caja y ves reportes desde el primer día." },
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
                  <p style={{ fontSize: 14, color: "#999", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NICHES ──────────────────────────────────────────── */}
      <section className="section-pad sr" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", textAlign: "center" as const }}>
          <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>Para tu negocio</p>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 44px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.08, margin: "0 0 14px" }}>
            ¿Tu negocio está acá?
          </h2>
          <p style={{ color: "#666", fontSize: 15, lineHeight: 1.75, maxWidth: 480, margin: "0 auto 44px" }}>
            Flowix Book está pensado para negocios de servicios que trabajan con turnos, profesionales y caja diaria.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 28 }}>
            {niches.map(n => (
              <div key={n.label} className="niche-chip" style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12, padding: "10px 18px", fontSize: 14, color: "#aaa", cursor: "default",
              }}>
                <span style={{ fontSize: 17 }}>{n.emoji}</span> {n.label}
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "#444" }}>
            ¿No ves tu rubro?{" "}
            <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" style={{ color: G, textDecoration: "none", fontWeight: 600 }}>Igual puede funcionar →</a>
          </p>
        </div>
      </section>

      {/* ── EL SISTEMA EN DETALLE ────────────────────────────── */}
      <section id="detalle" className="section-pad" style={{ padding: "80px 40px 100px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>

          <div className="sr" style={{ maxWidth: 600, marginBottom: 80 }}>
            <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>El sistema en detalle</p>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 52px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.04, margin: "0 0 18px" }}>
              Cada módulo resuelve<br /><em style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: G }}>un problema real.</em>
            </h2>
            <p style={{ color: "#999", fontSize: 16, lineHeight: 1.75, margin: 0 }}>
              No es un sistema genérico con funciones de relleno. Cada parte de Flowix fue diseñada con el flujo de trabajo real de tu negocio en mente.
            </p>
          </div>

          <div className="sr">
            <FeatureTabs />
          </div>

        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="section-pad" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.01)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div className="sr" style={{ marginBottom: 52, textAlign: "center" as const }}>
            <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>FAQ</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.04 }}>
              Preguntas frecuentes
            </h2>
          </div>
          <div className="sr" style={{ display: "flex", flexDirection: "column" as const }}>
            {[
              { q: "¿Funciona sin internet?", a: "Sí necesitás conexión a internet — los datos viven en la nube para que nunca los pierdas y puedas acceder desde cualquier dispositivo." },
              { q: "¿Cuántos profesionales puedo agregar?", a: "Los que necesites. No hay límite de profesionales. Podés tener uno o diez, cada uno con su propio perfil, servicios y comisiones." },
              { q: "¿Qué pasa con mis datos si desinstalo?", a: "Nada. Los datos están en la nube, no en la computadora. Si desinstalás y volvés a instalar, o entrás desde la web, todo sigue exactamente igual." },
              { q: "¿Funciona solo en Windows?", a: "La app de escritorio es para Windows 10/11. Pero también podés usar Flowix desde cualquier navegador, sin instalar nada." },
              { q: "¿Cuánto tarda en configurarse?", a: "El mismo día. Instalás, creás tu cuenta, cargás tus servicios y profesionales, y empezás a gestionar. La mayoría lo tiene listo en menos de una hora." },
              { q: "¿Puedo ver cómo funciona antes de decidir?", a: "Sí. Hablamos, te mostramos el sistema en vivo y te explicamos cómo se adaptaría a tu negocio. Sin compromiso." },
            ].map((item, i) => (
              <details key={i} className="faq-item" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <summary style={{ padding: "20px 4px", fontSize: 16, fontWeight: 600, color: "#ccc", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                  {item.q}
                  <span className="faq-arrow" style={{ color: G, fontSize: 22, fontWeight: 300, flexShrink: 0, lineHeight: 1 }}>+</span>
                </summary>
                <p style={{ fontSize: 15, color: "#999", lineHeight: 1.75, paddingBottom: 20, paddingLeft: 4, margin: 0 }}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ─────────────────────────────────────── */}
      <section className="section-pad" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div className="sr" style={{
            background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 24, padding: "48px 56px", position: "relative", overflow: "hidden",
          }}>
            <div aria-hidden style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, background: "radial-gradient(circle, rgba(0,204,106,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
            <p style={{ fontSize: 72, color: G, opacity: 0.15, lineHeight: 0.8, marginBottom: 28, fontFamily: "Georgia, serif", position: "relative" }}>"</p>
            <p style={{ fontSize: "clamp(16px, 1.9vw, 20px)", color: "#ccc", lineHeight: 1.8, fontStyle: "italic", fontFamily: "Georgia, 'Times New Roman', serif", marginBottom: 36, position: "relative" }}>
              Antes anotaba los turnos en un cuaderno y cerraba la caja haciendo cuentas en la cabeza. Con Flowix tardé una tarde en configurarlo y al día siguiente ya tenía todo ordenado. Ahora sé exactamente cuánto entró cada día y qué le toca a cada chico del equipo.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 16, position: "relative" }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(0,204,106,0.1)", border: "1px solid rgba(0,204,106,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, fontWeight: 800, color: G, flexShrink: 0 }}>F</div>
              <div>
                <p style={{ fontWeight: 700, fontSize: 15, margin: 0 }}>Fernando G.</p>
                <p style={{ color: "#555", fontSize: 13, margin: "3px 0 0" }}>Barbería — Buenos Aires</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────── */}
      <section id="contacto" className="section-pad" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "90%", height: "60%", background: "radial-gradient(ellipse, rgba(0,204,106,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative" }}>
          <div className="cta-box sr" style={{
            background: "linear-gradient(160deg, rgba(0,204,106,0.12) 0%, rgba(0,0,0,0) 55%)",
            border: "1px solid rgba(0,204,106,0.3)", borderRadius: 28,
            textAlign: "center" as const, position: "relative", overflow: "hidden",
            boxShadow: "0 0 120px rgba(0,204,106,0.12), 0 40px 120px rgba(0,0,0,0.55)",
          }}>
            <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent 0%, rgba(0,204,106,0.9) 50%, transparent 100%)", pointerEvents: "none" }} />
            <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px", maskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, #000 10%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, #000 10%, transparent 80%)", pointerEvents: "none" }} />
            <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 800, height: 400, background: "radial-gradient(ellipse, rgba(0,204,106,0.14) 0%, transparent 65%)", pointerEvents: "none" }} />
            <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 20, position: "relative" }}>Empezá hoy</p>
            <h2 style={{ fontSize: "clamp(28px, 4.5vw, 60px)", fontWeight: 800, letterSpacing: "-3px", lineHeight: 1.02, marginBottom: 20, position: "relative" }}>
              Tu negocio, organizado<br />de una vez.
            </h2>
            <p style={{ fontSize: 17, color: "#999", lineHeight: 1.75, maxWidth: 460, margin: "0 auto 44px", position: "relative" }}>
              Hablamos, te configuramos el sistema y en 24 horas ya estás gestionando como un profesional.
            </p>
            <div className="cta-buttons" style={{ position: "relative" }}>
              <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" style={{
                background: "linear-gradient(135deg, #00CC6A 0%, #00E87A 100%)", color: "#000", fontWeight: 700, fontSize: 15,
                textDecoration: "none", padding: "16px 36px", borderRadius: 12,
                boxShadow: "0 0 40px rgba(0,204,106,0.35)",
              }}>Quiero probarlo →</a>
              <a href={`${APP_URL}/login`} style={{
                background: "rgba(255,255,255,0.05)", color: "#ccc", fontWeight: 500, fontSize: 15,
                textDecoration: "none", padding: "16px 36px", borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.1)",
              }}>Ya tengo cuenta →</a>
            </div>
            <div style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap", marginTop: 36, position: "relative" }}>
              {["Sin contratos", "Configuración incluida", "Soporte local"].map(t => (
                <span key={t} style={{ color: "#555", fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ color: G, fontWeight: 700 }}>✓</span> {t}
                </span>
              ))}
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
              <a href="https://www.instagram.com/flowixagency/" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#555", fontSize: 13, textDecoration: "none", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 9, padding: "8px 14px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                @flowixagency
              </a>
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "#333", marginBottom: 18 }}>Producto</p>
              {[
                { label: "Funciones",    href: "#features" },
                { label: "El sistema",   href: "#detalle" },
                { label: "Probarlo",     href: "#contacto" },
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

      <ScrollReveal />
    </main>
  );
}
