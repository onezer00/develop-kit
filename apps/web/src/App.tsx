import { Link, Route, Routes } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock3, Code2, DatabaseZap, Gauge, KeyRound, LockKeyhole, Search, ShieldCheck, Sparkles, Star, TerminalSquare, Zap } from "lucide-react";
import { capabilities, workflowGroups } from "./data/capabilities";
import "./styles/app.css";

function BrandMark() {
  return (
    <Link to="/" className="brand" aria-label="Develop Kit home">
      <span className="brand-mark"><Code2 size={20} /></span>
      <span>Develop Kit</span>
    </Link>
  );
}

function AppNav() {
  return (
    <header className="app-nav">
      <BrandMark />
      <nav aria-label="Primary navigation">
        <Link to="/workspace">Workspace</Link>
        <a href="http://127.0.0.1:8000/health" target="_blank" rel="noreferrer">API Health</a>
      </nav>
    </header>
  );
}

function LandingPage() {
  return (
    <main className="page landing-page">
      <AppNav />
      <section className="hero-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={16} /> Modern developer workspace</p>
          <h1 id="hero-title">A focused cockpit for daily developer utilities.</h1>
          <p className="hero-lede">
            Decode, format, convert, inspect, and resume common tasks from one fast workspace designed to keep developers in flow.
          </p>
          <div className="hero-actions">
            <Link to="/workspace" className="button button-primary">Open workspace <ArrowRight size={18} /></Link>
            <button className="button button-secondary" type="button"><LockKeyhole size={18} /> Google Auth soon</button>
          </div>
          <div className="trust-row" aria-label="Product guardrails">
            <span><ShieldCheck size={16} /> Local-first tools</span>
            <span><Gauge size={16} /> Fast feedback</span>
            <span><Star size={16} /> Favorites-ready</span>
          </div>
        </div>
        <div className="hero-console" aria-label="Workspace preview">
          <div className="console-topbar"><span /><span /><span /></div>
          <div className="console-command"><Search size={16} /> Search JSON, JWT, cURL, headers...</div>
          <div className="console-grid">
            {capabilities.slice(0, 6).map((capability) => (
              <div className="console-tile" key={capability.key}>
                <span style={{ background: capability.accent }} />
                <strong>{capability.title}</strong>
                <small>{capability.workflowGroup}</small>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="landing-band" aria-label="Workspace principles">
        <article><TerminalSquare /><strong>One workspace</strong><span>Search, recent work, favorites, and tools stay together.</span></article>
        <article><DatabaseZap /><strong>No payload storage</strong><span>Tool inputs and outputs stay in the browser for the MVP.</span></article>
        <article><Zap /><strong>Microfeedback</strong><span>Copy, execute, favorite, and transitions feel responsive.</span></article>
      </section>
    </main>
  );
}

function WorkspacePage() {
  const recent = capabilities.slice(0, 5);
  const favorites = capabilities.filter((capability) => ["jwt-decoder", "json-formatter", "curl-formatter"].includes(capability.key));

  return (
    <main className="page workspace-page">
      <AppNav />
      <section className="workspace-shell" aria-labelledby="workspace-title">
        <aside className="workspace-sidebar" aria-label="Workspace sections">
          <BrandMark />
          <div className="sidebar-section">
            <p>Workflows</p>
            {workflowGroups.map((group) => (
              <a href={`#${group.key}`} key={group.key}>{group.icon}<span>{group.label}</span></a>
            ))}
          </div>
          <div className="sidebar-note">
            <ShieldCheck size={18} />
            <span>Client-side execution for MVP capabilities.</span>
          </div>
        </aside>

        <section className="workspace-main">
          <div className="workspace-hero">
            <div>
              <p className="eyebrow"><Clock3 size={16} /> Daily utility cockpit</p>
              <h1 id="workspace-title">Keep routine dev tasks in one flow.</h1>
            </div>
            <button className="button button-secondary" type="button"><KeyRound size={18} /> Connect Google</button>
          </div>

          <label className="command-bar" aria-label="Search capabilities">
            <Search size={20} />
            <input placeholder="Search capabilities, recent work, or favorites" />
            <kbd>Ctrl K</kbd>
          </label>

          <div className="workspace-panels">
            <section className="panel panel-wide" aria-label="Favorite capabilities">
              <div className="panel-heading"><h2>Favorites</h2><span>One-click return</span></div>
              <div className="mini-list">
                {favorites.map((capability) => <CapabilityMini key={capability.key} capability={capability} />)}
              </div>
            </section>
            <section className="panel" aria-label="Recent history">
              <div className="panel-heading"><h2>Recent</h2><span>After login</span></div>
              <div className="recent-list">
                {recent.map((capability, index) => (
                  <div key={capability.key}><span>{index + 1}</span><strong>{capability.title}</strong></div>
                ))}
              </div>
            </section>
          </div>

          {workflowGroups.map((group) => (
            <section className="capability-section" id={group.key} key={group.key}>
              <div className="section-heading">
                <div>{group.icon}<h2>{group.label}</h2></div>
                <span>{capabilities.filter((capability) => capability.workflowGroup === group.key).length} tools</span>
              </div>
              <div className="capability-grid">
                {capabilities.filter((capability) => capability.workflowGroup === group.key).map((capability) => (
                  <CapabilityCard key={capability.key} capability={capability} />
                ))}
              </div>
            </section>
          ))}
        </section>
      </section>
    </main>
  );
}

function CapabilityMini({ capability }: { capability: (typeof capabilities)[number] }) {
  return (
    <button className="mini-capability" type="button">
      <span style={{ background: capability.accent }} />
      <strong>{capability.title}</strong>
      <ArrowRight size={16} />
    </button>
  );
}

function CapabilityCard({ capability }: { capability: (typeof capabilities)[number] }) {
  return (
    <article className="capability-card">
      <div className="card-accent" style={{ background: capability.accent }} />
      <div className="card-topline">
        <span>{capability.executionMode}</span>
        <button type="button" aria-label={`Favorite ${capability.title}`}><Star size={16} /></button>
      </div>
      <h3>{capability.title}</h3>
      <p>{capability.summary}</p>
      <div className="card-actions">
        <button className="button button-ghost" type="button">Open <ArrowRight size={16} /></button>
        <span><CheckCircle2 size={15} /> Local</span>
      </div>
    </article>
  );
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/workspace" element={<WorkspacePage />} />
    </Routes>
  );
}
