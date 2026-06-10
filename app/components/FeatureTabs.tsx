"use client";
import { useState, useRef } from "react";

const G = "#00CC6A";

const TABS = [
  { label: "Agenda",   color: G,         icon: "📅" },
  { label: "Caja",     color: "#f59e0b",  icon: "💰" },
  { label: "Reportes", color: "#60a5fa",  icon: "📊" },
];

function AgendaContent() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="tab-grid">
      <div>
        <div style={{ display: "inline-block", background: "rgba(0,204,106,0.08)", border: "1px solid rgba(0,204,106,0.15)", borderRadius: 8, padding: "4px 12px", fontSize: 11, color: G, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 22 }}>Agenda</div>
        <h3 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 800, letterSpacing: "-1.2px", lineHeight: 1.1, marginBottom: 16 }}>Control de turnos sin planillas ni cuadernos</h3>
        <p style={{ color: "#999", fontSize: 15, lineHeight: 1.8, marginBottom: 26 }}>
          Vista diaria y semanal con cada turno asignado al profesional correspondiente. Agregás un turno en menos de 10 segundos. Sin cruces, sin solapamientos, sin confusiones.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
          {["Alta de turno rápida con buscador de cliente", "Vista por profesional o por día completo", "Historial de turnos de cada cliente", "Cierre automático de turnos completados"].map(f => (
            <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <span style={{ color: G, fontWeight: 700, fontSize: 13, marginTop: 1, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 14, color: "#777", lineHeight: 1.5 }}>{f}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: "rgba(8,8,10,0.95)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 18, overflow: "hidden" }}>
        <div style={{ padding: "10px 14px", background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 6 }}>
          {["#ff5f56","#ffbd2e","#27c93f"].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />)}
          <span style={{ flex: 1, textAlign: "center", fontSize: 10, color: "#333", fontWeight: 600 }}>Flowix — Agenda · Martes</span>
        </div>
        <div style={{ padding: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <div>
              <p style={{ margin: 0, fontSize: 12, fontWeight: 700 }}>Martes, 27 de mayo</p>
              <p style={{ margin: 0, fontSize: 10, color: "#444" }}>4 turnos · $48.000 proyectados</p>
            </div>
            <div style={{ background: "rgba(0,204,106,0.1)", border: "1px solid rgba(0,204,106,0.2)", borderRadius: 7, padding: "4px 10px", fontSize: 10, color: G, fontWeight: 600 }}>En curso</div>
          </div>
          {[
            { time: "09:00", name: "Matías G.",  service: "Corte + barba",  color: G,         done: true  },
            { time: "10:30", name: "Lucas P.",   service: "Corte clásico",  color: "#a78bfa", done: false },
            { time: "12:00", name: "Diego M.",   service: "Degradé",        color: "#60a5fa", done: false },
            { time: "15:00", name: "Bruno A.",   service: "Barba",          color: "#f59e0b", done: false },
          ].map((a, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 10, marginBottom: 6, background: a.done ? "rgba(0,204,106,0.04)" : "rgba(255,255,255,0.025)", border: `1px solid ${a.done ? "rgba(0,204,106,0.12)" : "rgba(255,255,255,0.05)"}` }}>
              <span style={{ fontSize: 10, color: "#444", width: 34, flexShrink: 0, fontFamily: "monospace" }}>{a.time}</span>
              <div style={{ width: 3, height: 28, borderRadius: 3, background: a.color, flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ margin: 0, fontSize: 12, fontWeight: 600 }}>{a.name}</p>
                <p style={{ margin: 0, fontSize: 10, color: "#555" }}>{a.service}</p>
              </div>
              {a.done && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={G} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CajaContent() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="tab-grid">
      <div>
        <div style={{ display: "inline-block", background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.15)", borderRadius: 8, padding: "4px 12px", fontSize: 11, color: "#f59e0b", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 22 }}>Caja & Pagos</div>
        <h3 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 800, letterSpacing: "-1.2px", lineHeight: 1.1, marginBottom: 16 }}>Cierre de caja en un clic, sin calculadora</h3>
        <p style={{ color: "#999", fontSize: 15, lineHeight: 1.8, marginBottom: 26 }}>
          Registrá cada cobro con el método de pago correspondiente. Las comisiones de cada profesional se calculan automáticamente. El cierre del día te da el total neto en segundos.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
          {["Efectivo, tarjeta, transferencia y más", "Comisiones automáticas por profesional", "Egresos y gastos del local integrados", "Cierre diario con resumen neto"].map(f => (
            <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <span style={{ color: "#f59e0b", fontWeight: 700, fontSize: 13, marginTop: 1, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 14, color: "#777", lineHeight: 1.5 }}>{f}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: "rgba(8,8,10,0.95)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 18, overflow: "hidden" }}>
        <div style={{ padding: "10px 14px", background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 6 }}>
          {["#ff5f56","#ffbd2e","#27c93f"].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />)}
          <span style={{ flex: 1, textAlign: "center", fontSize: 10, color: "#333", fontWeight: 600 }}>Flowix — Caja del día</span>
        </div>
        <div style={{ padding: 20 }}>
          <p style={{ fontSize: 9, color: "#333", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Ingresos hoy</p>
          <p style={{ fontSize: 42, fontWeight: 900, color: G, letterSpacing: "-2px", margin: "0 0 4px", lineHeight: 1 }}>$48.000</p>
          <p style={{ fontSize: 12, color: "#444", marginBottom: 16 }}>de 4 atenciones · 3 profesionales</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 14 }}>
            {[{ label: "Efectivo", val: "$22.000", c: "#60a5fa" }, { label: "Transferencia", val: "$18.000", c: "#a78bfa" }, { label: "Tarjeta", val: "$8.000", c: "#f59e0b" }].map(m => (
              <div key={m.label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "10px 8px", textAlign: "center" }}>
                <p style={{ margin: 0, fontSize: 12, fontWeight: 700, color: m.c }}>{m.val}</p>
                <p style={{ margin: 0, fontSize: 9, color: "#444", marginTop: 2 }}>{m.label}</p>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(0,204,106,0.06)", border: "1px solid rgba(0,204,106,0.15)", borderRadius: 10, padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 12, color: "#777" }}>Neto después de comisiones</span>
            <span style={{ fontSize: 15, fontWeight: 800, color: G }}>$34.200</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReportesContent() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="tab-grid">
      <div>
        <div style={{ display: "inline-block", background: "rgba(96,165,250,0.08)", border: "1px solid rgba(96,165,250,0.15)", borderRadius: 8, padding: "4px 12px", fontSize: 11, color: "#60a5fa", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 22 }}>Reportes</div>
        <h3 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 800, letterSpacing: "-1.2px", lineHeight: 1.1, marginBottom: 16 }}>Entendé tu negocio con datos reales</h3>
        <p style={{ color: "#999", fontSize: 15, lineHeight: 1.8, marginBottom: 26 }}>
          Los reportes te muestran cuánto ganaste, qué servicios son los más pedidos, qué días son más movidos y cómo rinde cada profesional. Todo sin exportar nada ni hacer cuentas.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
          {["Ingresos por día, semana y mes", "Servicios más demandados", "Rendimiento individual por profesional", "Detalle de cada operación del día"].map(f => (
            <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <span style={{ color: "#60a5fa", fontWeight: 700, fontSize: 13, marginTop: 1, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 14, color: "#777", lineHeight: 1.5 }}>{f}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: "rgba(8,8,10,0.95)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 18, overflow: "hidden" }}>
        <div style={{ padding: "10px 14px", background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 6 }}>
          {["#ff5f56","#ffbd2e","#27c93f"].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />)}
          <span style={{ flex: 1, textAlign: "center", fontSize: 10, color: "#333", fontWeight: 600 }}>Flowix — Reportes · Mayo</span>
        </div>
        <div style={{ padding: 20 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
            {[{ label: "Este mes", val: "$312.000", color: G }, { label: "Vs. mes anterior", val: "+18%", color: "#60a5fa" }].map(s => (
              <div key={s.label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "12px 14px" }}>
                <p style={{ margin: 0, fontSize: 9, color: "#444", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</p>
                <p style={{ margin: 0, fontSize: 20, fontWeight: 800, color: s.color, letterSpacing: "-0.5px" }}>{s.val}</p>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 10, padding: "12px 14px", marginBottom: 12 }}>
            <p style={{ margin: "0 0 10px", fontSize: 9, color: "#333", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.09em" }}>Ingresos — últimos 7 días</p>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 44 }}>
              {[38, 60, 42, 78, 52, 88, 65].map((h, i) => (
                <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: "3px 3px 0 0", background: i === 6 ? G : `rgba(0,204,106,${0.12 + i * 0.06})` }} />
              ))}
            </div>
          </div>
          <p style={{ margin: 0, fontSize: 9, color: "#333", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 8 }}>Servicios más pedidos</p>
          {[["Corte + barba", "42%"], ["Corte clásico", "31%"], ["Degradé", "18%"]].map(([svc, pct]) => (
            <div key={svc} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <span style={{ fontSize: 11, color: "#666", flex: 1 }}>{svc}</span>
              <div style={{ width: 80, height: 4, background: "rgba(255,255,255,0.06)", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ width: pct, height: "100%", background: G, borderRadius: 4 }} />
              </div>
              <span style={{ fontSize: 10, color: "#444", width: 28, textAlign: "right" }}>{pct}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FeatureTabs() {
  const [active, setActive]       = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const [visible, setVisible]     = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleClick(i: number) {
    if (i === active) return;
    if (timer.current) clearTimeout(timer.current);
    setVisible(false);
    timer.current = setTimeout(() => {
      setDisplayed(i);
      setActive(i);
      setVisible(true);
    }, 200);
  }

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 52, flexWrap: "wrap" }}>
        {TABS.map((tab, i) => (
          <button key={i} onClick={() => handleClick(i)} style={{
            background: active === i ? `rgba(${tab.color === G ? "0,204,106" : tab.color === "#f59e0b" ? "245,158,11" : "96,165,250"}, 0.1)` : "rgba(255,255,255,0.03)",
            border: `1px solid ${active === i ? (tab.color === G ? "rgba(0,204,106,0.3)" : tab.color === "#f59e0b" ? "rgba(245,158,11,0.3)" : "rgba(96,165,250,0.3)") : "rgba(255,255,255,0.08)"}`,
            color: active === i ? tab.color : "#555",
            padding: "10px 24px", borderRadius: 10, cursor: "pointer",
            fontSize: 14, fontWeight: active === i ? 700 : 500,
            fontFamily: "'Outfit', system-ui, sans-serif",
            transition: "all 0.2s ease",
            display: "flex", alignItems: "center", gap: 8,
          }}>
            <span>{tab.icon}</span> {tab.label}
          </button>
        ))}
      </div>

      <div style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.22s ease, transform 0.22s ease",
      }}>
        {displayed === 0 && <AgendaContent />}
        {displayed === 1 && <CajaContent />}
        {displayed === 2 && <ReportesContent />}
      </div>
    </div>
  );
}
