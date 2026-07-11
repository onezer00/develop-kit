import { Link, Route, Routes } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock3, Code2, DatabaseZap, Gauge, KeyRound, LockKeyhole, Search, ShieldCheck, Sparkles, Star, TerminalSquare, Zap } from "lucide-react";
import { capabilities, workflowGroups } from "./data/capabilities";
import "./styles/app.css";

function BrandMark() {
  return (
    <Link to="/" className="brand" aria-label="Página inicial do Develop Kit">
      <span className="brand-mark"><Code2 size={20} /></span>
      <span>Develop Kit</span>
    </Link>
  );
}

function AppNav() {
  return (
    <header className="app-nav">
      <BrandMark />
      <nav aria-label="Navegação principal">
        <Link to="/workspace">Área de trabalho</Link>
        <a href="http://127.0.0.1:8000/health" target="_blank" rel="noreferrer">Saúde da API</a>
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
          <p className="eyebrow"><Sparkles size={16} /> Área de trabalho moderna para devs</p>
          <h1 id="hero-title">Um cockpit focado para utilidades diárias de desenvolvimento.</h1>
          <p className="hero-lede">
            Decodifique, formate, converta, inspecione e retome tarefas comuns em um workspace rápido criado para manter o dev em fluxo.
          </p>
          <div className="hero-actions">
            <Link to="/workspace" className="button button-primary">Abrir workspace <ArrowRight size={18} /></Link>
            <button className="button button-secondary" type="button"><LockKeyhole size={18} /> Google Auth em breve</button>
          </div>
          <div className="trust-row" aria-label="Product guardrails">
            <span><ShieldCheck size={16} /> Ferramentas locais</span>
            <span><Gauge size={16} /> Feedback rápido</span>
            <span><Star size={16} /> Pronto para favoritos</span>
          </div>
        </div>
        <div className="hero-console" aria-label="Prévia do workspace">
          <div className="console-topbar"><span /><span /><span /></div>
          <div className="console-command"><Search size={16} /> Pesquisar JSON, JWT, cURL e headers...</div>
          <div className="console-grid">
            {capabilities.slice(0, 6).map((capability) => (
              <div className="console-tile" key={capability.key}>
                <span style={{ background: capability.accent }} />
                <strong>{capability.title}</strong>
                <small>{workflowGroupLabels[capability.workflowGroup]}</small>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="landing-band" aria-label="Princípios do workspace">
        <article><TerminalSquare /><strong>Um workspace</strong><span>Busca, recentes, favoritos e ferramentas ficam juntos.</span></article>
        <article><DatabaseZap /><strong>Sem armazenar payloads</strong><span>Inputs e outputs das ferramentas permanecem no navegador no MVP.</span></article>
        <article><Zap /><strong>Microfeedback</strong><span>Copiar, executar, favoritar e navegar responde com fluidez.</span></article>
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
        <aside className="workspace-sidebar" aria-label="Área de trabalho sections">
          <BrandMark />
          <div className="sidebar-section">
            <p>Fluxos</p>
            {workflowGroups.map((group) => (
              <a href={`#${group.key}`} key={group.key}>{group.icon}<span>{group.label}</span></a>
            ))}
          </div>
          <div className="sidebar-note">
            <ShieldCheck size={18} />
            <span>Execução no navegador nas capacidades do MVP.</span>
          </div>
        </aside>

        <section className="workspace-main">
          <div className="workspace-hero">
            <div>
              <p className="eyebrow"><Clock3 size={16} /> Cockpit de utilidades diárias</p>
              <h1 id="workspace-title">Mantenha tarefas recorrentes em um só fluxo.</h1>
            </div>
            <button className="button button-secondary" type="button"><KeyRound size={18} /> Conectar com Google</button>
          </div>

          <label className="command-bar" aria-label="Pesquisar capacidades">
            <Search size={20} />
            <input placeholder="Pesquisar capacidades, recentes ou favoritos" />
            <kbd>Ctrl K</kbd>
          </label>

          <div className="workspace-panels">
            <section className="panel panel-wide" aria-label="Capacidades favoritas">
              <div className="panel-heading"><h2>Favoritos</h2><span>Retorno em um clique</span></div>
              <div className="mini-list">
                {favorites.map((capability) => <CapabilityMini key={capability.key} capability={capability} />)}
              </div>
            </section>
            <section className="panel" aria-label="Histórico recente">
              <div className="panel-heading"><h2>Recentes</h2><span>Após login</span></div>
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
                <span>{capabilities.filter((capability) => capability.workflowGroup === group.key).length} itens</span>
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
        <span>{executionModeLabels[capability.executionMode] ?? capability.executionMode}</span>
        <button type="button" aria-label={`Favoritar ${capability.title}`}><Star size={16} /></button>
      </div>
      <h3>{capability.title}</h3>
      <p>{capability.summary}</p>
      <div className="card-actions">
        <button className="button button-ghost" type="button">Abrir <ArrowRight size={16} /></button>
        <span><CheckCircle2 size={15} /> Local</span>
      </div>
    </article>
  );
}

const workflowGroupLabels = {
  authentication: "Autenticação",
  data: "Dados",
  "api-web": "API e Web"
} as const;

const executionModeLabels = {
  "client-side": "No navegador"
} as const;

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/workspace" element={<WorkspacePage />} />
    </Routes>
  );
}
