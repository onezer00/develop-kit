# MVP Scope

> Este documento define o escopo do MVP da Developer Productivity Platform.
>
> O objetivo do MVP é validar comportamento recorrente, proposta de valor e adoção pelo ICP, não monetização imediata.

---

# Objetivo do MVP

Validar se desenvolvedores backend e full stack orientados a APIs utilizarão uma plataforma integrada para resolver tarefas recorrentes em vez de alternar entre ferramentas isoladas.

---

# Hipóteses principais

1. Desenvolvedores usarão a plataforma várias vezes durante o mesmo dia.
2. Busca global será a principal forma de abrir capabilities.
3. Workflows aumentarão uso de múltiplas capabilities por sessão.
4. Histórico e favoritos aumentarão retorno.
5. Processamento local e ausência de anúncios aumentarão confiança.

---

# Incluído no MVP

## Workflows

- Authentication Workflow
- Data Workflow
- API & Web Workflow

## Capabilities funcionais

- JWT Decoder
- Base64 Encode/Decode
- UUID Generator
- Hash Generator
- Timestamp Converter
- JSON Formatter
- JSON Validator
- YAML Formatter
- CSV to JSON
- SQL Formatter
- URL Encode/Decode
- Query Params Parser
- HTTP Status Reference
- Headers Formatter
- cURL Formatter

## Plataforma

- Dashboard inicial simples.
- Busca global.
- Histórico recente.
- Favoritos.
- Login Google.
- Cadastro tradicional simples.
- URLs amigáveis por capability.
- Dark mode.
- Indicação de processamento local quando aplicável.
- Eventos básicos de analytics.
- Páginas SEO por capability.

---

# Fora do MVP

- IA generativa.
- Workspace com IA.
- Planos pagos.
- Billing.
- Times e organizações.
- Marketplace.
- API pública.
- Extensão VSCode.
- Extensão de navegador.
- Sincronização avançada entre dispositivos.
- Playgrounds complexos.
- Colaboração em tempo real.
- Execução remota de código.

---

# Critérios de aceite do MVP

O MVP estará pronto para validação quando:

- Usuário conseguir usar as principais capabilities sem cadastro obrigatório.
- Usuário autenticado conseguir manter favoritos e histórico.
- Busca global abrir qualquer capability em poucos segundos.
- Cada capability tiver URL própria e página indexável.
- Eventos essenciais de uso forem coletados.
- O produto tiver experiência consistente entre workflows.
- Capabilities sensíveis indicarem claramente o modelo de processamento.

---

# Critérios de não escopo

Qualquer funcionalidade será recusada no MVP se:

- exigir arquitetura complexa sem validar hipótese crítica;
- existir apenas por comparação com concorrente;
- depender de IA sem métrica clara de ganho;
- adicionar cadastro, pagamento ou configuração antes do primeiro valor;
- não estiver ligada a um problema documentado.

---

# Sequência sugerida de entrega

## Release MVP Alpha

- Dashboard.
- Busca global.
- Authentication Workflow.
- Data Workflow básico.
- Analytics de uso.

## Release MVP Beta

- API & Web Workflow.
- Histórico.
- Favoritos.
- Login Google.
- Páginas SEO por capability.

## Release MVP Public

- Ajustes de UX e performance.
- Instrumentação final.
- Landing enxuta.
- Conteúdo inicial de aquisição.
- Coleta estruturada de feedback.

---

# Resultado esperado

Ao final do MVP, a equipe deve conseguir decidir com dados se o produto deve:

- avançar para workspace personalizado;
- expandir workflows;
- investir em SEO;
- introduzir monetização;
- experimentar IA em casos específicos.
