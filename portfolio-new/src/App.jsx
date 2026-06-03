<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Syed Hadi Raza — AI Engineer</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Bebas+Neue&display=swap" rel="stylesheet"/>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --ink:#1C1B18;
  --paper:#F2EFE8;
  --paper2:#EAE6DC;
  --paper3:#E2DDD2;
  --rule:#C8C2B4;
  --muted:#7A7468;
  --faint:#B0AA9E;
  --red:#C0392B;
  --red-dim:rgba(192,57,43,0.08);
  --serif:'Instrument Serif',serif;
  --mono:'DM Mono',monospace;
  --display:'Bebas Neue',sans-serif;
}
html{scroll-behavior:smooth}
body{
  background:var(--paper);
  color:var(--ink);
  font-family:var(--mono);
  overflow-x:hidden;
}
body::after{
  content:'';position:fixed;inset:0;pointer-events:none;z-index:0;
  background-image:repeating-linear-gradient(
    transparent,transparent 27px,
    rgba(180,172,158,0.18) 27px,rgba(180,172,158,0.18) 28px
  );
}
nav{
  position:fixed;top:0;left:0;right:0;z-index:200;
  padding:0 clamp(16px,5vw,56px);
  height:48px;display:flex;align-items:center;justify-content:space-between;
  background:rgba(242,239,232,0.9);
  backdrop-filter:blur(8px);
  border-bottom:1.5px solid var(--ink);
}
.nav-logo{
  font-family:var(--display);letter-spacing:0.06em;
  font-size:20px;color:var(--ink);
}
.nav-links{display:flex;gap:0}
.nav-links a{
  font-family:var(--mono);font-size:10px;font-weight:400;
  color:var(--muted);text-decoration:none;letter-spacing:0.14em;
  padding:0 16px;height:48px;display:flex;align-items:center;
  border-left:1px solid var(--rule);
  transition:color 0.2s,background 0.2s;
  text-transform:uppercase;
}
.nav-links a:last-child{border-right:1px solid var(--rule)}
.nav-links a:hover{color:var(--ink);background:var(--paper2)}
.wrap{position:relative;z-index:1;max-width:1100px;margin:0 auto;padding:0 clamp(16px,5vw,56px)}
#hero{
  min-height:100vh;display:flex;flex-direction:column;
  justify-content:flex-end;padding-bottom:64px;padding-top:80px;
  position:relative;z-index:1;
}
.hero-wrap{max-width:1100px;margin:0 auto;padding:0 clamp(16px,5vw,56px);width:100%}
.hero-number{
  font-family:var(--mono);font-size:11px;color:var(--faint);
  letter-spacing:0.18em;margin-bottom:12px;
}
.hero-name{
  font-family:var(--display);
  font-size:clamp(80px,16vw,200px);
  line-height:0.88;letter-spacing:0.02em;
  color:var(--ink);
  margin-bottom:0;
}
.hero-name-line2{
  display:flex;align-items:flex-end;gap:clamp(16px,3vw,40px);
}
.hero-name-line2 .serif-bit{
  font-family:var(--serif);
  font-style:italic;
  font-size:clamp(18px,3vw,36px);
  color:var(--muted);
  padding-bottom:clamp(8px,1.5vw,18px);
  white-space:nowrap;
  flex-shrink:0;
}
.hero-rule{height:2px;background:var(--ink);margin:28px 0}
.hero-bottom{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:end}
.hero-desc{
  font-family:var(--mono);font-size:12px;color:var(--muted);
  line-height:1.9;font-weight:300;
}
.hero-desc em{color:var(--ink);font-style:normal;font-weight:500}
.hero-right{text-align:right}
.hero-status{
  font-family:var(--mono);font-size:10px;color:var(--muted);
  letter-spacing:0.14em;text-transform:uppercase;
  margin-bottom:16px;
}
.hero-status span{
  display:inline-block;width:6px;height:6px;border-radius:50%;
  background:var(--red);margin-right:8px;vertical-align:middle;
  animation:pulse 2.5s ease infinite;
}
.hero-btns{display:flex;gap:10px;justify-content:flex-end;flex-wrap:wrap}
.btn-a{
  padding:10px 22px;background:var(--ink);
  border:none;cursor:pointer;text-decoration:none;
  font-family:var(--mono);font-size:11px;font-weight:500;
  color:var(--paper);letter-spacing:0.1em;text-transform:uppercase;
  transition:opacity 0.2s;
}
.btn-a:hover{opacity:0.8}
.btn-b{
  padding:10px 22px;background:transparent;
  border:1px solid var(--rule);cursor:pointer;text-decoration:none;
  font-family:var(--mono);font-size:11px;
  color:var(--muted);letter-spacing:0.1em;text-transform:uppercase;
  transition:border-color 0.2s,color 0.2s;
}
.btn-b:hover{border-color:var(--ink);color:var(--ink)}
section{position:relative;z-index:1}
.section-inner{
  max-width:1100px;margin:0 auto;
  padding:80px clamp(16px,5vw,56px);
  border-top:1.5px solid var(--ink);
}
.section-label{
  display:flex;align-items:center;gap:16px;margin-bottom:48px;
}
.section-num{font-family:var(--mono);font-size:10px;color:var(--faint);letter-spacing:0.2em}
.section-title{
  font-family:var(--display);
  font-size:clamp(32px,5vw,54px);
  letter-spacing:0.04em;line-height:1;
  color:var(--ink);
}
.section-sub{
  font-family:var(--serif);font-style:italic;
  font-size:clamp(16px,2vw,22px);color:var(--muted);
  margin-left:auto;text-align:right;max-width:260px;line-height:1.3;
}
.stack-rows{display:flex;flex-direction:column;gap:0}
.stack-row{
  display:grid;grid-template-columns:140px 1fr;
  border-top:1px solid var(--rule);padding:18px 0;
}
.stack-row:last-child{border-bottom:1px solid var(--rule)}
.stack-cat{
  font-family:var(--mono);font-size:10px;color:var(--faint);
  letter-spacing:0.16em;text-transform:uppercase;padding-top:2px;
}
.stack-items{display:flex;flex-wrap:wrap;gap:8px 12px}
.chip{
  font-family:var(--mono);font-size:11px;color:var(--muted);
  padding:3px 0;border-bottom:1px solid transparent;
  transition:color 0.18s,border-color 0.18s;cursor:default;
  font-weight:300;
}
.chip:hover{color:var(--ink);border-color:var(--ink)}
.chip.hi{color:var(--ink);font-weight:500;border-bottom:1px solid var(--ink)}
.chip.hi:hover{color:var(--red);border-color:var(--red)}
.exp-list{display:flex;flex-direction:column}
.exp{
  display:grid;grid-template-columns:200px 1fr;
  border-top:1px solid var(--rule);
  cursor:pointer;
}
.exp:last-child{border-bottom:1px solid var(--rule)}
.exp-meta{
  padding:24px 24px 24px 0;
  border-right:1px solid var(--rule);
}
.exp-period{font-family:var(--mono);font-size:10px;color:var(--faint);letter-spacing:0.08em;line-height:1.7;margin-bottom:8px}
.exp-co{font-family:var(--display);font-size:22px;letter-spacing:0.06em;color:var(--ink);line-height:1;margin-bottom:6px}
.exp-badge{
  display:inline-block;font-family:var(--mono);font-size:9px;
  padding:2px 8px;border:1px solid var(--rule);
  color:var(--faint);letter-spacing:0.12em;text-transform:uppercase;
}
.exp-badge.now{border-color:var(--red);color:var(--red)}
.exp-content{padding:24px 0 24px 28px}
.exp-role{
  font-family:var(--serif);font-size:clamp(17px,2.2vw,22px);
  color:var(--ink);margin-bottom:8px;font-style:italic;
}
.exp-teaser{font-family:var(--mono);font-size:11px;color:var(--muted);font-weight:300;line-height:1.7}
.exp-expand{
  font-family:var(--mono);font-size:10px;color:var(--faint);
  letter-spacing:0.14em;text-transform:uppercase;
  margin-top:10px;display:flex;align-items:center;gap:6px;
}
.exp-expand::after{content:'↓';transition:transform 0.25s}
.exp.open .exp-expand::after{transform:rotate(180deg)}
.exp-details{
  display:none;margin-top:16px;
  border-top:1px solid var(--rule);padding-top:16px;
}
.exp.open .exp-details{display:block}
.exp-bullet{
  display:flex;gap:12px;padding:7px 0;
  font-family:var(--mono);font-size:11px;color:var(--muted);
  line-height:1.75;font-weight:300;
  border-bottom:1px dashed var(--paper3);
}
.exp-bullet:last-child{border-bottom:none}
.exp-bullet::before{content:'—';color:var(--faint);flex-shrink:0}
.exp-bullet strong{color:var(--ink);font-weight:500}
.proj-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:0;border:1.5px solid var(--ink)}
.proj-card{
  padding:28px;border-right:1px solid var(--rule);border-bottom:1px solid var(--rule);
  display:flex;flex-direction:column;
  transition:background 0.2s;
}
.proj-card:nth-child(2n){border-right:none}
.proj-card:nth-last-child(-n+2){border-bottom:none}
.proj-card:hover{background:var(--paper2)}
.proj-eyebrow{font-family:var(--mono);font-size:9px;color:var(--faint);letter-spacing:0.2em;text-transform:uppercase;margin-bottom:10px}
.proj-title{
  font-family:var(--serif);font-size:clamp(15px,1.8vw,19px);
  font-style:italic;color:var(--ink);margin-bottom:10px;line-height:1.25;
}
.proj-body{font-family:var(--mono);font-size:11px;color:var(--muted);line-height:1.85;flex:1;font-weight:300;margin-bottom:14px}
.proj-body strong{color:var(--ink);font-weight:500}
.proj-chips{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px}
.proj-chip{font-family:var(--mono);font-size:10px;color:var(--faint);border:1px solid var(--rule);padding:2px 8px}
.proj-link{font-family:var(--mono);font-size:10px;color:var(--ink);letter-spacing:0.1em;text-decoration:none;text-transform:uppercase}
.proj-link:hover{text-decoration:underline}
.contact-inner{
  display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start;
}
.contact-big{
  font-family:var(--display);
  font-size:clamp(52px,9vw,110px);
  line-height:0.88;letter-spacing:0.03em;color:var(--ink);
}
.contact-big em{font-family:var(--serif);font-style:italic;letter-spacing:0;font-size:0.7em}
.contact-right{padding-top:12px}
.contact-sub{font-family:var(--mono);font-size:11px;color:var(--muted);line-height:1.9;font-weight:300;margin-bottom:28px}
.contact-links-stack{display:flex;flex-direction:column;gap:0}
.contact-link{
  display:flex;justify-content:space-between;align-items:center;
  padding:14px 0;border-top:1px solid var(--rule);
  font-family:var(--mono);font-size:11px;color:var(--muted);
  text-decoration:none;letter-spacing:0.08em;
  transition:color 0.2s;
}
.contact-link:last-child{border-bottom:1px solid var(--rule)}
.contact-link:hover{color:var(--ink)}
.contact-link span{color:var(--faint);font-size:10px}
.contact-meta{margin-top:24px;font-family:var(--mono);font-size:10px;color:var(--faint);letter-spacing:0.1em;line-height:1.7}
footer{
  border-top:1.5px solid var(--ink);
  max-width:1100px;margin:0 auto;
  padding:20px clamp(16px,5vw,56px);
  display:flex;justify-content:space-between;align-items:center;
  position:relative;z-index:1;
  font-family:var(--mono);font-size:10px;color:var(--faint);letter-spacing:0.12em;
}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}
.reveal{opacity:0;transform:translateY(16px);transition:opacity 0.65s ease,transform 0.65s ease}
.reveal.in{opacity:1;transform:none}
@media(max-width:680px){
  .nav-links{display:none}
  .hero-bottom{grid-template-columns:1fr}
  .hero-right{text-align:left}
  .hero-btns{justify-content:flex-start}
  .exp{grid-template-columns:1fr}
  .exp-meta{border-right:none;border-bottom:1px solid var(--rule);padding:16px 0}
  .exp-content{padding:16px 0}
  .proj-grid{grid-template-columns:1fr}
  .proj-card{border-right:none!important;border-bottom:1px solid var(--rule)!important}
  .proj-card:last-child{border-bottom:none!important}
  .contact-inner{grid-template-columns:1fr}
  .section-label{flex-wrap:wrap}
  .section-sub{text-align:left;margin-left:0}
}
</style>
</head>
<body>

<nav>
  <div class="nav-logo">HADI RAZA</div>
  <div class="nav-links">
    <a href="#stack">Stack</a>
    <a href="#experience">Work</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </div>
</nav>

<section id="hero">
  <div class="hero-wrap">
    <div class="hero-number">001 — AI ENGINEER</div>
    <div class="hero-name">SYED</div>
    <div class="hero-name-line2">
      <div class="hero-name">HADI</div>
      <div class="serif-bit">building LLM systems<br/>that actually ship</div>
    </div>
    <div class="hero-name" style="color:var(--faint)">RAZA</div>
    <div class="hero-rule"></div>
    <div class="hero-bottom">
      <div class="hero-desc">
        AI engineer with <em>2+ years</em> building production-grade <em>LLM systems</em>,
        multi-agent orchestration, and RAG pipelines. I work across the full stack —
        from architecture and prompt engineering to evals and deployment.
        Currently at <em>Technosys</em>; previously owned the AI product at <em>Seeqlo</em>.
      </div>
      <div class="hero-right">
        <div class="hero-status"><span></span>Open to AI Engineer roles</div>
        <div class="hero-btns">
          <a href="#experience" class="btn-a">View work</a>
          <a href="mailto:syedhadiraza2025@gmail.com" class="btn-b">Get in touch</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="stack">
  <div class="section-inner reveal">
    <div class="section-label">
      <div class="section-num">002</div>
      <div class="section-title">TECHNICAL STACK</div>
      <div class="section-sub">what I reach for when building</div>
    </div>
    <div class="stack-rows">
      <div class="stack-row">
        <div class="stack-cat">LLM / Agents</div>
        <div class="stack-items">
          <span class="chip hi">LangChain</span>
          <span class="chip hi">LangGraph</span>
          <span class="chip hi">RAG</span>
          <span class="chip hi">OpenAI API</span>
          <span class="chip hi">Multi-Agent Systems</span>
          <span class="chip">Prompt Engineering</span>
          <span class="chip">Fine-Tuning</span>
          <span class="chip">Hugging Face</span>
          <span class="chip">FAISS</span>
          <span class="chip">Evals</span>
        </div>
      </div>
      <div class="stack-row">
        <div class="stack-cat">Engineering</div>
        <div class="stack-items">
          <span class="chip hi">Python</span>
          <span class="chip hi">TypeScript</span>
          <span class="chip">JavaScript</span>
          <span class="chip">REST APIs</span>
          <span class="chip">Docker</span>
          <span class="chip">AWS</span>
          <span class="chip">GCP</span>
          <span class="chip">Azure</span>
          <span class="chip">Firebase</span>
          <span class="chip">Git</span>
        </div>
      </div>
      <div class="stack-row">
        <div class="stack-cat">ML / Research</div>
        <div class="stack-items">
          <span class="chip hi">PyTorch</span>
          <span class="chip hi">Transformers</span>
          <span class="chip">CNN</span>
          <span class="chip">CrossFormer</span>
          <span class="chip">Pandas</span>
          <span class="chip">NumPy</span>
          <span class="chip">k-fold CV</span>
          <span class="chip">Ablation Studies</span>
        </div>
      </div>
      <div class="stack-row">
        <div class="stack-cat">Architecture</div>
        <div class="stack-items">
          <span class="chip hi">Agent Orchestration</span>
          <span class="chip hi">Graph-Based Execution</span>
          <span class="chip">Structured Memory</span>
          <span class="chip">Inference Optimisation</span>
          <span class="chip">Distributed Systems</span>
          <span class="chip">MLOps</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="experience">
  <div class="section-inner reveal">
    <div class="section-label">
      <div class="section-num">003</div>
      <div class="section-title">WORK</div>
      <div class="section-sub">systems built, agents shipped</div>
    </div>
    <div class="exp-list">

      <div class="exp" onclick="toggleExp(this)">
        <div class="exp-meta">
          <div class="exp-period">Mar 2026 — Present</div>
          <div class="exp-co">Technosys</div>
          <div class="exp-badge now">Current</div>
        </div>
        <div class="exp-content">
          <div class="exp-role">Data Scientist & AI Product Engineer</div>
          <div class="exp-teaser">End-to-end analytics product + RAG chatbot for enterprise clients. C-suite dashboards, multi-source data querying in plain English.</div>
          <div class="exp-expand">Expand</div>
          <div class="exp-details">
            <div class="exp-bullet">Architected and deployed a <strong>RAG chatbot</strong> enabling non-technical stakeholders to query multi-source business data in plain English — reduced ad-hoc analyst requests by ~40%.</div>
            <div class="exp-bullet">Built the full data pipeline: raw ingestion → transformation → interactive KPI dashboards reviewed weekly by C-suite across restaurant and enterprise clients.</div>
            <div class="exp-bullet">Implemented <strong>funnel and cohort analysis</strong> systems surfacing drop-offs and growth levers; findings directly informed product pivots.</div>
            <div class="exp-bullet">Own the full analytics product lifecycle — data requirements, engineering integration, stakeholder delivery.</div>
          </div>
        </div>
      </div>

      <div class="exp" onclick="toggleExp(this)">
        <div class="exp-meta">
          <div class="exp-period">Jun 2025 — Feb 2026</div>
          <div class="exp-co">Codet.ai</div>
          <div class="exp-badge">Product Owner</div>
        </div>
        <div class="exp-content">
          <div class="exp-role">AI Product Engineer — Owner</div>
          <div class="exp-teaser">Owned the AI agent product end-to-end. Built LangGraph multi-agent orchestration and TypeScript coding agents with autonomous debugging loops.</div>
          <div class="exp-expand">Expand</div>
          <div class="exp-details">
            <div class="exp-bullet">Owned the AI agent product end-to-end — shaped the roadmap alongside senior leadership, wrote PRDs, defined success metrics, and tracked delivery across engineering and design.</div>
            <div class="exp-bullet">Built <strong>LangGraph-based multi-agent orchestration</strong> automating full-stack web app generation from DSL specs — cut prototype-to-deployment time by more than half.</div>
            <div class="exp-bullet">Shipped <strong>TypeScript coding agents</strong> (Cursor-style) with autonomous debugging loops; led prompt tuning via structured evals to measurably improve task completion rates.</div>
            <div class="exp-bullet">Optimised agent performance through structured memory, graph-based execution flows, and iterative experimentation with rollback playbooks.</div>
          </div>
        </div>
      </div>

      <div class="exp" onclick="toggleExp(this)">
        <div class="exp-meta">
          <div class="exp-period">Jan 2025 — Jun 2025</div>
          <div class="exp-co">Seeqlo</div>
          <div class="exp-badge">Remote</div>
        </div>
        <div class="exp-content">
          <div class="exp-role">AI Engineer — Product Owner</div>
          <div class="exp-teaser">Designed and shipped the core AI tutoring chatbot and adaptive quiz engine for a K-12 learning platform.</div>
          <div class="exp-expand">Expand</div>
          <div class="exp-details">
            <div class="exp-bullet">Designed and shipped <strong>LangChain + OpenAI tutoring chatbot</strong> — Seeqlo's core engagement feature — handling K-12 student queries across subjects with strong contextual accuracy.</div>
            <div class="exp-bullet">Built the <strong>adaptive quiz engine</strong> using transformer-based answer evaluation to personalise difficulty per learner, improving session depth and retention.</div>
            <div class="exp-bullet">Ran A/B experiments on prompt templates and quiz UI formats; shipped winning variants and reported via Firebase Analytics dashboards.</div>
            <div class="exp-bullet">Owned full product: feature roadmap, user stories, sprint planning with a 4-person engineering team, KPI tracking against learning outcome goals.</div>
            <div class="exp-bullet">Conducted user research and funnel analysis to identify onboarding drop-offs; redesigned first-time experience, meaningfully improving early retention.</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section id="projects">
  <div class="section-inner reveal">
    <div class="section-label">
      <div class="section-num">004</div>
      <div class="section-title">PROJECTS</div>
      <div class="section-sub">research & production work</div>
    </div>
    <div class="proj-grid">
      <div class="proj-card">
        <div class="proj-eyebrow">Final Year Project · 2025</div>
        <div class="proj-title">Hybrid CNN–Transformer Brain Tumor MRI Classifier</div>
        <p class="proj-body">CrossFormer-based hybrid model with cross-scale attention for medical MRI classification. <strong>+3.8% accuracy gain</strong> and <strong>+11% faster inference</strong> through optimised feature fusion. FAISS-based retrieval for fast diagnostic comparison; validated via k-fold CV and ablation studies.</p>
        <div class="proj-chips">
          <span class="proj-chip">PyTorch</span>
          <span class="proj-chip">CrossFormer</span>
          <span class="proj-chip">FAISS</span>
          <span class="proj-chip">Medical AI</span>
        </div>
      </div>
      <div class="proj-card">
        <div class="proj-eyebrow">Production · 2026</div>
        <div class="proj-title">Multi-Source RAG Chatbot — Technosys</div>
        <p class="proj-body">Production RAG system letting non-technical stakeholders query business data in plain English. C-suite gets instant answers on revenue, foot traffic, and order KPIs. <strong>~40% reduction</strong> in ad-hoc analyst requests.</p>
        <div class="proj-chips">
          <span class="proj-chip">RAG</span>
          <span class="proj-chip">LLM</span>
          <span class="proj-chip">Python</span>
          <span class="proj-chip">Dashboards</span>
        </div>
      </div>
      <div class="proj-card">
        <div class="proj-eyebrow">Production · 2025–2026</div>
        <div class="proj-title">LangGraph Multi-Agent Code Generator — Codet.ai</div>
        <p class="proj-body">LangGraph multi-agent orchestration pipeline generating full-stack web apps from DSL specs. Autonomous debugging loops, structured memory, graph-based execution flows. <strong>Cut prototype-to-deploy time by 50%+.</strong></p>
        <div class="proj-chips">
          <span class="proj-chip">LangGraph</span>
          <span class="proj-chip">Multi-Agent</span>
          <span class="proj-chip">TypeScript</span>
          <span class="proj-chip">DSL</span>
        </div>
      </div>
      <div class="proj-card">
        <div class="proj-eyebrow">EdTech AI · 2025</div>
        <div class="proj-title">Seeqlo Adaptive Learning Platform</div>
        <p class="proj-body">LangChain + OpenAI tutoring chatbot and transformer-based adaptive quiz engine for K-12 students. A/B experimentation on prompts and quiz UI; onboarding redesign improving early retention.</p>
        <div class="proj-chips">
          <span class="proj-chip">LangChain</span>
          <span class="proj-chip">OpenAI</span>
          <span class="proj-chip">Firebase</span>
          <span class="proj-chip">Transformers</span>
        </div>
        <a href="https://www.seeqlo.com" class="proj-link" target="_blank">seeqlo.com ↗</a>
      </div>
    </div>
  </div>
</section>

<section id="contact">
  <div class="section-inner reveal">
    <div class="section-label">
      <div class="section-num">005</div>
      <div class="section-title">CONTACT</div>
    </div>
    <div class="contact-inner">
      <div class="contact-big">
        LET'S<br/>BUILD<br/><em>something.</em>
      </div>
      <div class="contact-right">
        <p class="contact-sub">
          Open to AI Engineer, LLM systems, and MLOps roles.
          I bring production experience across the full AI stack —
          from agent orchestration and RAG to evals and deployment.
          On-site and remote.
        </p>
        <div class="contact-links-stack">
          <a class="contact-link" href="mailto:syedhadiraza2025@gmail.com">
            syedhadiraza2025@gmail.com <span>EMAIL ↗</span>
          </a>
          <a class="contact-link" href="https://linkedin.com/in/hadi-raza-aa833a246" target="_blank">
            linkedin.com/in/hadi-raza-aa833a246 <span>LINKEDIN ↗</span>
          </a>
          <a class="contact-link" href="https://github.com/hadIRAZA1" target="_blank">
            github.com/hadIRAZA1 <span>GITHUB ↗</span>
          </a>
        </div>
        <div class="contact-meta">
          FAST National University<br/>
          BSc Computer Science · Karachi, PK
        </div>
      </div>
    </div>
  </div>
</section>

<footer>
  <span>SYED HADI RAZA — AI ENGINEER</span>
  <span>© 2026</span>
</footer>

<script>
function toggleExp(el){
  const wasOpen = el.classList.contains('open');
  document.querySelectorAll('.exp').forEach(e=>e.classList.remove('open'));
  if(!wasOpen) el.classList.add('open');
}
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')});
},{threshold:0.06});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
</script>
</body>
</html>