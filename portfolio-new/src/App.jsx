import { useState, useEffect, useRef } from "react";

// ─── TOKENS ──────────────────────────────────────────────────────────────────
const T = {
  bg: "#F5F4F0",
  bgCard: "rgba(255,255,255,0.72)",
  bgCardHover: "rgba(255,255,255,0.88)",
  border: "rgba(0,0,0,0.08)",
  borderStrong: "rgba(0,0,0,0.14)",
  text: "#1A1A18",
  textMuted: "#6B6B62",
  textFaint: "#A8A89E",
  accent: "#2D7A5F",
  accentLight: "rgba(45,122,95,0.10)",
  accentMid: "rgba(45,122,95,0.22)",
  accentSolid: "#2D7A5F",
  glass: "rgba(255,255,255,0.55)",
  glassBorder: "rgba(255,255,255,0.80)",
};

// ─── DATA ────────────────────────────────────────────────────────────────────
const NAV = ["About", "Experience", "Skills", "Projects", "Contact"];

const EXPERIENCES = [
  {
    role: "AI Product Engineer",
    company: "Codet.ai",
    period: "Oct 2025 – Present",
    tag: "Current",
    bullets: [
      "Designed and deployed production-grade AI/ML systems with scalable inference pipelines using Python and REST APIs.",
      "Built and served LLM inference APIs using FastAPI, enabling low-latency, high-throughput model responses.",
      "Containerized AI services using Docker and deployed across AWS and Azure cloud environments.",
      "Optimized inference performance through batching, caching, and prompt design — measurable latency reduction.",
      "Engineered DSL-based agents for dynamic web app generation: frontends, backends, and full-stack workflows.",
      "Implemented workflow orchestration for multi-step AI pipelines, improving reliability and execution efficiency.",
    ],
  },
  {
    role: "AI & Business Solutions Executive",
    company: "VIDIZMO.AI",
    period: "Jul 2025 – Oct 2025",
    tag: "Enterprise",
    bullets: [
      "Led AI-driven solution design for multimodal video and evidence management systems serving 50+ enterprise clients.",
      "Built production-ready AI pipelines for multimodal data processing, document Q&A, and metadata extraction.",
      "Developed multimodal RAG chatbot architectures that improved proposal conversions by 30%.",
      "Managed Azure and AWS deployments integrating Active Directory, Service Bus, and secure onboarding pipelines.",
    ],
  },
  {
    role: "AI Engineer",
    company: "Seeqlo",
    period: "Jan 2025 – Jul 2025",
    tag: "Remote",
    bullets: [
      "Built an AI-assisted tutoring platform leveraging LLMs for personalized learning — 3,000+ active learners.",
      "Deployed transformer-based models into production serving 5,000+ monthly queries via API endpoints.",
      "Reduced inference latency by 35% through model and pipeline optimization techniques.",
      "Monitored system performance and improved response reliability through iterative tuning.",
    ],
  },
];

const SKILLS = [
  { label: "MLOps & Deployment", items: ["FastAPI", "Flask", "Docker", "REST APIs", "CI/CD", "Model Serving", "Inference Optimization", "Monitoring"] },
  { label: "AI & Machine Learning", items: ["LLMs", "RAG", "LangChain", "LangGraph", "Hugging Face", "PyTorch", "TensorFlow", "OpenAI API", "Fine-Tuning", "Multi-Agent"] },
  { label: "Cloud Platforms", items: ["AWS", "Azure", "GCP", "Firebase", "Vercel"] },
  { label: "Languages", items: ["Python", "TypeScript", "JavaScript", "C++", "Java", "C#"] },
  { label: "Concepts", items: ["Agent Orchestration", "Graph Databases", "Workflow Automation", "Distributed Systems", "API Design", "Latency Optimization"] },
];

const STATS = [
  { val: "35%", label: "Latency reduced" },
  { val: "5K+", label: "Monthly queries" },
  { val: "50+", label: "Enterprise clients" },
  { val: "3K+", label: "Active learners" },
];

// ─── HOOKS ───────────────────────────────────────────────────────────────────
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    io.observe(el); return () => io.disconnect();
  }, [threshold]);
  return { ref, vis };
}

// ─── NOISE SVG background texture ────────────────────────────────────────────
const NoiseBg = () => (
  <svg style={{ position: "fixed", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0, opacity: 0.4 }}
    xmlns="http://www.w3.org/2000/svg">
    <filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
    <rect width="100%" height="100%" filter="url(#noise)" opacity="0.08" />
  </svg>
);

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn);
  }, []);
  const go = (id) => { document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      padding: scrolled ? "0 clamp(20px,5vw,64px)" : "0 clamp(20px,5vw,64px)",
      height: scrolled ? "56px" : "68px",
      background: scrolled ? "rgba(245,244,240,0.82)" : "transparent",
      backdropFilter: scrolled ? "blur(20px) saturate(1.6)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.6)" : "none",
      borderBottom: scrolled ? `0.5px solid ${T.border}` : "none",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      transition: "height 0.35s ease, background 0.35s ease",
    }}>
      <span style={{ fontFamily: "'Fraunces', serif", fontSize: "18px", fontWeight: 600, color: T.text, letterSpacing: "-0.3px" }}>
        Syed Hadi<span style={{ color: T.accent }}>.</span>
      </span>

      {/* Desktop */}
      <div className="desk-nav" style={{ display: "flex", gap: "4px" }}>
        {NAV.map(n => (
          <button key={n} onClick={() => go(n)} style={{
            background: active === n ? T.accentLight : "transparent",
            border: "none", cursor: "pointer", padding: "6px 14px", borderRadius: "100px",
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "13px", fontWeight: 500,
            color: active === n ? T.accent : T.textMuted,
            transition: "all 0.2s ease", letterSpacing: "0.1px",
          }}
            onMouseEnter={e => { if (active !== n) e.currentTarget.style.background = "rgba(0,0,0,0.04)"; }}
            onMouseLeave={e => { if (active !== n) e.currentTarget.style.background = "transparent"; }}>
            {n}
          </button>
        ))}
      </div>

      {/* Mobile */}
      <button className="mob-btn" onClick={() => setOpen(!open)}
        style={{ background: "none", border: "none", cursor: "pointer", fontSize: "20px", color: T.text, display: "none" }}>
        {open ? "✕" : "☰"}
      </button>
      {open && (
        <div style={{
          position: "fixed", top: "56px", left: 0, right: 0,
          background: "rgba(245,244,240,0.96)", backdropFilter: "blur(20px)",
          borderBottom: `0.5px solid ${T.border}`, padding: "12px 20px 20px",
          display: "flex", flexDirection: "column", gap: "4px",
        }}>
          {NAV.map(n => (
            <button key={n} onClick={() => go(n)} style={{
              background: "none", border: "none", cursor: "pointer", textAlign: "left",
              padding: "10px 12px", borderRadius: "8px",
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "15px",
              color: T.text, fontWeight: 500,
            }}>{n}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  const roles = ["MLOps Engineer", "AI Systems Builder", "LLM Deployment Specialist", "Inference API Developer"];
  const [ri, setRi] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = roles[ri];
    if (!deleting && typed.length < word.length) {
      const t = setTimeout(() => setTyped(word.slice(0, typed.length + 1)), 65);
      return () => clearTimeout(t);
    }
    if (!deleting && typed.length === word.length) {
      const t = setTimeout(() => setDeleting(true), 2400);
      return () => clearTimeout(t);
    }
    if (deleting && typed.length > 0) {
      const t = setTimeout(() => setTyped(typed.slice(0, -1)), 35);
      return () => clearTimeout(t);
    }
    if (deleting && typed.length === 0) {
      setDeleting(false);
      setRi((ri + 1) % roles.length);
    }
  }, [typed, deleting, ri]);

  return (
    <section id="about" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "120px clamp(20px,6vw,80px) 80px",
      position: "relative",
    }}>
      {/* Decorative blob */}
      <div style={{
        position: "absolute", top: "8%", right: "4%",
        width: "clamp(260px,35vw,500px)", height: "clamp(260px,35vw,500px)",
        background: "radial-gradient(ellipse at 60% 40%, rgba(45,122,95,0.12) 0%, rgba(45,122,95,0.04) 50%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none", filter: "blur(1px)",
      }} />
      <div style={{
        position: "absolute", bottom: "12%", left: "2%",
        width: "clamp(180px,22vw,320px)", height: "clamp(180px,22vw,320px)",
        background: "radial-gradient(ellipse, rgba(45,122,95,0.07) 0%, transparent 65%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "760px" }}>
        {/* Eyebrow pill */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          padding: "6px 14px 6px 8px",
          background: T.bgCard, border: `0.5px solid ${T.border}`,
          borderRadius: "100px", marginBottom: "32px",
          backdropFilter: "blur(12px)",
          boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
        }}>
          <span style={{
            width: "8px", height: "8px", borderRadius: "50%",
            background: T.accent, display: "block",
            boxShadow: `0 0 0 3px ${T.accentLight}`,
            animation: "pulse 2.4s ease infinite",
          }} />
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "12px", fontWeight: 600, color: T.accent, letterSpacing: "0.4px" }}>
            Available for roles
          </span>
        </div>

        <h1 style={{
          fontFamily: "'Fraunces', serif",
          fontSize: "clamp(52px, 8.5vw, 100px)",
          fontWeight: 700, lineHeight: 0.93,
          color: T.text, letterSpacing: "-2.5px",
          margin: "0 0 28px",
        }}>
          Syed<br />
          <em style={{ fontStyle: "italic", color: T.accent }}>Hadi</em>{" "}
          <span style={{ color: T.text }}>Raza</span>
        </h1>

        <div style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "clamp(15px, 2vw, 20px)", fontWeight: 500,
          color: T.textMuted, marginBottom: "28px",
          minHeight: "30px", display: "flex", alignItems: "center", gap: "8px",
        }}>
          <span style={{
            display: "inline-block", width: "28px", height: "1.5px",
            background: T.accent, flexShrink: 0,
          }} />
          {typed}
          <span style={{ animation: "blink 1s step-end infinite", color: T.accent, fontWeight: 300 }}>|</span>
        </div>

        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "clamp(14px,1.6vw,16px)", color: T.textMuted,
          lineHeight: 1.85, maxWidth: "560px", marginBottom: "48px", fontWeight: 400,
        }}>
          AI & MLOps Engineer specializing in deploying, scaling, and optimizing
          ML/LLM systems in production. Experienced in inference APIs, containerized
          deployments, agent orchestration, and cloud pipelines across AWS, Azure, and GCP.
        </p>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <button onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              padding: "13px 28px",
              background: T.accent, border: "none", cursor: "pointer",
              borderRadius: "100px",
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px", fontWeight: 600,
              color: "#fff", letterSpacing: "0.2px",
              boxShadow: "0 4px 20px rgba(45,122,95,0.30)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(45,122,95,0.38)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(45,122,95,0.30)"; }}>
            View Experience
          </button>
          <a href="mailto:syedhadiraza2025@gmail.com" style={{
            padding: "13px 28px",
            background: T.bgCard, border: `0.5px solid ${T.borderStrong}`,
            borderRadius: "100px", textDecoration: "none",
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px", fontWeight: 600,
            color: T.text, backdropFilter: "blur(12px)",
            transition: "transform 0.2s, background 0.2s",
            boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = T.bgCard; }}>
            Get in touch ↗
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── STATS BAR ────────────────────────────────────────────────────────────────
function StatsBar() {
  const { ref, vis } = useInView();
  return (
    <section ref={ref} style={{
      padding: "0 clamp(20px,6vw,80px) 0",
      position: "relative", zIndex: 1,
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px,1fr))",
        background: T.bgCard,
        border: `0.5px solid ${T.border}`,
        borderRadius: "20px",
        backdropFilter: "blur(20px) saturate(1.4)",
        WebkitBackdropFilter: "blur(20px) saturate(1.4)",
        boxShadow: "0 4px 32px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.7)",
        overflow: "hidden",
      }}>
        {STATS.map((s, i) => (
          <div key={i} style={{
            padding: "28px 20px", textAlign: "center",
            borderRight: i < STATS.length - 1 ? `0.5px solid ${T.border}` : "none",
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(16px)",
            transition: `all 0.55s ease ${i * 0.09}s`,
          }}>
            <div style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(30px,4vw,42px)", fontWeight: 700,
              color: T.accent, lineHeight: 1, letterSpacing: "-1px",
            }}>{s.val}</div>
            <div style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "12px", color: T.textFaint,
              marginTop: "6px", fontWeight: 500, letterSpacing: "0.3px",
            }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── SECTION LABEL ───────────────────────────────────────────────────────────
function SLabel({ eyebrow, heading, vis }) {
  return (
    <div style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(18px)", transition: "all 0.6s ease" }}>
      <p style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "12px", fontWeight: 700,
        color: T.accent, letterSpacing: "1.5px", textTransform: "uppercase",
        margin: "0 0 10px",
      }}>{eyebrow}</p>
      <h2 style={{
        fontFamily: "'Fraunces', serif",
        fontSize: "clamp(30px,4.5vw,48px)", fontWeight: 700,
        color: T.text, margin: 0, lineHeight: 1.05, letterSpacing: "-1px",
      }}>{heading}</h2>
    </div>
  );
}

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
function Experience() {
  const [open, setOpen] = useState(null);
  const { ref, vis } = useInView(0.08);

  return (
    <section id="experience" ref={ref}
      style={{ padding: "100px clamp(20px,6vw,80px)" }}>
      <SLabel eyebrow="Experience" heading="Production AI built & shipped" vis={vis} />

      <div style={{ marginTop: "48px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {EXPERIENCES.map((e, i) => (
          <div key={i} style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "none" : "translateY(24px)",
            transition: `all 0.55s ease ${0.08 + i * 0.12}s`,
          }}>
            <div onClick={() => setOpen(open === i ? null : i)} style={{
              padding: "22px 28px",
              background: open === i ? "#fff" : T.bgCard,
              border: `0.5px solid ${open === i ? T.borderStrong : T.border}`,
              borderRadius: open === i ? "16px 16px 0 0" : "16px",
              backdropFilter: "blur(16px)",
              cursor: "pointer",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              flexWrap: "wrap", gap: "12px",
              transition: "all 0.25s ease",
              boxShadow: open === i ? "0 4px 24px rgba(0,0,0,0.07)" : "0 1px 6px rgba(0,0,0,0.04)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "12px",
                  background: T.accentLight,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <div style={{ width: "14px", height: "14px", borderRadius: "4px", background: T.accent }} />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                    <span style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(16px,2vw,19px)", fontWeight: 600, color: T.text, letterSpacing: "-0.3px" }}>
                      {e.role}
                    </span>
                    <span style={{
                      padding: "2px 10px",
                      background: T.accentLight,
                      borderRadius: "100px",
                      fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "11px", fontWeight: 700,
                      color: T.accent, letterSpacing: "0.3px",
                    }}>{e.tag}</span>
                  </div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "13px", color: T.textFaint, marginTop: "2px" }}>
                    {e.company} · {e.period}
                  </div>
                </div>
              </div>
              <div style={{
                width: "28px", height: "28px", borderRadius: "8px",
                background: T.accentLight,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: T.accent, fontSize: "18px", lineHeight: 1, flexShrink: 0,
                transition: "transform 0.25s ease",
                transform: open === i ? "rotate(45deg)" : "none",
              }}>+</div>
            </div>

            {open === i && (
              <div style={{
                padding: "8px 28px 24px",
                background: "#fff",
                border: `0.5px solid ${T.borderStrong}`,
                borderTop: "none",
                borderRadius: "0 0 16px 16px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                animation: "fadeSlide 0.25s ease",
              }}>
                {e.bullets.map((b, j) => (
                  <div key={j} style={{
                    display: "flex", gap: "14px", padding: "10px 0",
                    borderBottom: j < e.bullets.length - 1 ? `0.5px solid ${T.border}` : "none",
                  }}>
                    <span style={{ color: T.accent, fontSize: "15px", flexShrink: 0, marginTop: "1px" }}>→</span>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px", color: T.textMuted, lineHeight: 1.75, margin: 0 }}>
                      {b}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── SKILLS ───────────────────────────────────────────────────────────────────
function Skills() {
  const { ref, vis } = useInView(0.08);
  return (
    <section id="skills" ref={ref}
      style={{
        padding: "100px clamp(20px,6vw,80px)",
        background: "linear-gradient(180deg, transparent 0%, rgba(45,122,95,0.03) 50%, transparent 100%)",
      }}>
      <SLabel eyebrow="Skills" heading="Technologies I work with" vis={vis} />
      <div style={{
        marginTop: "48px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
        gap: "14px",
      }}>
        {SKILLS.map((g, gi) => (
          <div key={gi} style={{
            padding: "24px",
            background: T.bgCard,
            border: `0.5px solid ${T.border}`,
            borderRadius: "18px",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 2px 12px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.6)",
            opacity: vis ? 1 : 0,
            transform: vis ? "none" : "translateY(24px)",
            transition: `all 0.5s ease ${gi * 0.08}s`,
          }}
            onMouseEnter={e => { e.currentTarget.style.background = T.bgCardHover; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.09), inset 0 1px 0 rgba(255,255,255,0.8)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = T.bgCard; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.6)"; }}>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "11px", fontWeight: 700, color: T.accent, letterSpacing: "1.2px", textTransform: "uppercase", margin: "0 0 16px" }}>
              {g.label}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {g.items.map((sk, si) => (
                <span key={si} style={{
                  padding: "5px 12px",
                  background: "rgba(0,0,0,0.04)",
                  border: `0.5px solid ${T.border}`,
                  borderRadius: "100px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "12.5px", fontWeight: 500, color: T.textMuted,
                  transition: "all 0.18s ease", cursor: "default",
                }}
                  onMouseEnter={e => { e.target.style.background = T.accentLight; e.target.style.borderColor = T.accentMid; e.target.style.color = T.accent; }}
                  onMouseLeave={e => { e.target.style.background = "rgba(0,0,0,0.04)"; e.target.style.borderColor = T.border; e.target.style.color = T.textMuted; }}>
                  {sk}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
function Projects() {
  const { ref, vis } = useInView(0.08);
  const items = [
    {
      eyebrow: "Research · Spring 2025",
      title: "Hybrid CNN–Transformer Brain Tumor Classifier",
      body: "CrossFormer-based hybrid model with enhanced cross-scale attention for medical image classification. Achieved 3.8% accuracy improvement and 11% faster inference through optimized feature fusion. Integrated FAISS-based retrieval for fast diagnostic comparison with k-fold validation.",
      tags: ["PyTorch", "CrossFormer", "FAISS", "CNN"],
    },
    {
      eyebrow: "AI Platform · 2025",
      title: "LLM-Powered Tutoring & Quiz Platform",
      body: "AI-assisted tutoring platform serving 3,000+ active learners. LangChain + OpenAI chatbot handling 5,000+ monthly student queries with 92% contextual accuracy. Optimized transformer models, reducing inference latency by 35%.",
      tags: ["LangChain", "OpenAI", "FastAPI", "Docker"],
    },
    {
      eyebrow: "Agent Systems · 2025",
      title: "DSL-Based Web Generation Agent System",
      body: "Autonomous agents for dynamic website & web app generation using LangGraph. Enabled automated creation of frontends, backends, and full-stack workflows. TypeScript coding agents for clean code generation and autonomous debugging.",
      tags: ["LangGraph", "TypeScript", "Multi-Agent", "REST API"],
    },
  ];

  return (
    <section id="projects" ref={ref}
      style={{ padding: "100px clamp(20px,6vw,80px)" }}>
      <SLabel eyebrow="Projects" heading="Research & engineering highlights" vis={vis} />
      <div style={{
        marginTop: "48px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
        gap: "14px",
      }}>
        {items.map((p, i) => (
          <div key={i} style={{
            padding: "28px",
            background: T.bgCard,
            border: `0.5px solid ${T.border}`,
            borderRadius: "20px",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 2px 16px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.6)",
            opacity: vis ? 1 : 0,
            transform: vis ? "none" : "translateY(28px)",
            transition: `all 0.55s ease ${i * 0.12}s`,
            display: "flex", flexDirection: "column",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.9)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = T.bgCard; e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.6)"; e.currentTarget.style.transform = "none"; }}>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "11px", fontWeight: 700, color: T.accent, letterSpacing: "1.2px", textTransform: "uppercase", margin: "0 0 14px" }}>
              {p.eyebrow}
            </p>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(17px,2vw,21px)", fontWeight: 600, color: T.text, margin: "0 0 14px", lineHeight: 1.25, letterSpacing: "-0.3px" }}>
              {p.title}
            </h3>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "13.5px", color: T.textMuted, lineHeight: 1.8, margin: "0 0 22px", flex: 1 }}>
              {p.body}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
              {p.tags.map(t => (
                <span key={t} style={{
                  padding: "4px 12px",
                  background: T.accentLight,
                  border: `0.5px solid ${T.accentMid}`,
                  borderRadius: "100px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "11.5px", fontWeight: 600,
                  color: T.accent,
                }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function Contact() {
  const { ref, vis } = useInView();
  return (
    <section id="contact" ref={ref}
      style={{ padding: "100px clamp(20px,6vw,80px) 80px" }}>
      <div style={{
        background: T.bgCard,
        border: `0.5px solid ${T.border}`,
        borderRadius: "28px",
        backdropFilter: "blur(24px) saturate(1.4)",
        WebkitBackdropFilter: "blur(24px) saturate(1.4)",
        boxShadow: "0 8px 48px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.7)",
        padding: "clamp(40px,6vw,72px) clamp(28px,6vw,72px)",
        textAlign: "center",
        position: "relative", overflow: "hidden",
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : "translateY(24px)",
        transition: "all 0.65s ease",
      }}>
        {/* Subtle radial accent */}
        <div style={{
          position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)",
          width: "400px", height: "200px",
          background: "radial-gradient(ellipse, rgba(45,122,95,0.10) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "12px", fontWeight: 700, color: T.accent, letterSpacing: "1.5px", textTransform: "uppercase", margin: "0 0 16px" }}>
          Get in touch
        </p>
        <h2 style={{
          fontFamily: "'Fraunces', serif", fontSize: "clamp(32px,5vw,58px)",
          fontWeight: 700, color: T.text, margin: "0 0 20px", lineHeight: 1.05, letterSpacing: "-1px",
        }}>
          Let's build<br /><em style={{ fontStyle: "italic", color: T.accent }}>something real.</em>
        </h2>
        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "15px", color: T.textMuted, maxWidth: "440px", margin: "0 auto 40px", lineHeight: 1.8 }}>
          Open to MLOps, AI Engineering, and LLM deployment roles. Available for on-site and remote positions.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
          {[
            { label: "syedhadiraza2025@gmail.com", href: "mailto:syedhadiraza2025@gmail.com", primary: true },
            { label: "LinkedIn", href: "https://linkedin.com/in/hadi-raza-aa833a246", primary: false },
            { label: "GitHub", href: "https://github.com/hadIRAZA1", primary: false },
          ].map(btn => (
            <a key={btn.label} href={btn.href}
              target={btn.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              style={{
                padding: "12px 24px",
                background: btn.primary ? T.accent : "#fff",
                border: btn.primary ? "none" : `0.5px solid ${T.borderStrong}`,
                borderRadius: "100px", textDecoration: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "13.5px", fontWeight: 600,
                color: btn.primary ? "#fff" : T.text,
                boxShadow: btn.primary ? "0 4px 20px rgba(45,122,95,0.28)" : "0 1px 6px rgba(0,0,0,0.06)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; }}>
              {btn.label}
            </a>
          ))}
        </div>
        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "12px", color: T.textFaint }}>
          FAST National University, BSc Computer Science · Karachi, PK
        </p>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      padding: "20px clamp(20px,6vw,80px)",
      borderTop: `0.5px solid ${T.border}`,
      display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px",
    }}>
      <span style={{ fontFamily: "'Fraunces', serif", fontSize: "15px", color: T.textFaint }}>
        Syed Hadi Raza<span style={{ color: T.accent }}>.</span>
      </span>
      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "12px", color: T.textFaint }}>
        © 2025
      </span>
    </footer>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState("About");
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting && e.target.id) setActive(e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1)); }),
      { threshold: 0.35 }
    );
    NAV.forEach(n => { const el = document.getElementById(n.toLowerCase()); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,600;1,9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #F5F4F0; color: #1A1A18; overflow-x: hidden; }

        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(45,122,95,0.15); }
          50% { box-shadow: 0 0 0 6px rgba(45,122,95,0.05); }
        }
        @keyframes fadeSlide { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: none; } }

        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #F5F4F0; }
        ::-webkit-scrollbar-thumb { background: rgba(45,122,95,0.25); border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(45,122,95,0.45); }

        @media (max-width: 600px) {
          .desk-nav { display: none !important; }
          .mob-btn { display: flex !important; }
        }
        @media (min-width: 601px) {
          .mob-btn { display: none !important; }
        }
      `}</style>

      <NoiseBg />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar active={active} />
        <main>
          <Hero />
          <StatsBar />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}