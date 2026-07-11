# Product Requirements

Status: Draft para planejamento do MVP  
Base: `docs/01_PRODUCT_SPEC.md`

---

# Objetivo

Definir requisitos funcionais e não funcionais do MVP da Developer Productivity Platform, mantendo rastreabilidade com problemas de usuário, oportunidades e decisões de produto.

---

# Requisitos Funcionais

## PRD-001: Dashboard inicial

O usuário deve acessar uma tela inicial com:

- busca global;
- workflows principais;
- capabilities recentes;
- favoritos, quando existirem;
- estado vazio claro para novos usuários.

Critério de aceite:

- Usuário consegue abrir qualquer workflow do MVP a partir do dashboard.
- Usuário consegue iniciar busca sem navegar por menus profundos.

---

## PRD-002: Busca global

O usuário deve conseguir localizar e abrir workflows e capabilities rapidamente.

Critério de aceite:

- Busca encontra capabilities por nome, aliases e termos comuns.
- Resultados aparecem durante a digitação.
- Seleção por teclado deve ser considerada requisito de UX do MVP.

---

## PRD-003: Workflows do MVP

O produto deve apresentar três workflows iniciais:

- Authentication
- Data
- API & Web

Critério de aceite:

- Cada workflow exibe suas capabilities relacionadas.
- Cada capability possui relação clara com o workflow.
- Usuário consegue navegar entre capabilities relacionadas sem voltar ao dashboard.

---

## PRD-004: Capabilities do MVP

O MVP deve entregar as capabilities definidas em `planning/discovery/05_CAPABILITIES.md`.

Critério de aceite:

- Cada capability possui input, ação principal, resultado, copiar resultado e estado de erro.
- Capabilities com transformação determinística devem funcionar sem cadastro.
- Capabilities devem indicar quando o processamento ocorre localmente.

---

## PRD-005: Histórico recente

O produto deve registrar capabilities utilizadas recentemente.

Critério de aceite:

- Usuário consegue abrir uma capability usada recentemente.
- Histórico não deve armazenar dados sensíveis sem consentimento explícito.
- Para usuário não autenticado, histórico pode ser local.

---

## PRD-006: Favoritos

O usuário deve conseguir marcar capabilities como favoritas.

Critério de aceite:

- Favoritos aparecem no dashboard.
- Favoritar e desfavoritar deve ser ação de baixo atrito.
- Para usuário não autenticado, favoritos podem ser locais.

---

## PRD-007: Autenticação

O usuário deve conseguir criar conta ou entrar para preservar continuidade.

Critério de aceite:

- Login Google deve ser o caminho principal.
- Cadastro tradicional simples deve existir como alternativa.
- Cadastro não deve bloquear o primeiro uso das capabilities básicas.

---

## PRD-008: URLs por capability

Cada capability deve ter URL própria e compartilhável.

Critério de aceite:

- URL abre diretamente a capability.
- Página deve ser indexável quando fizer sentido para SEO.
- Metadata básica deve refletir a capability.

---

## PRD-009: Analytics de produto

O produto deve registrar eventos mínimos para validação do MVP.

Eventos:

- capability_opened
- capability_executed
- result_copied
- search_used
- favorite_added
- history_item_opened
- workflow_opened
- signup_started
- signup_completed

Critério de aceite:

- Eventos devem permitir medir Productive Tasks Completed.
- Eventos não devem armazenar inputs sensíveis do usuário.

---

# Requisitos Não Funcionais

## NFR-001: Velocidade percebida

O produto deve parecer instantâneo em tarefas simples.

Critério:

- Time to First Value alvo inferior a 30 segundos.

---

## NFR-002: Privacidade

Dados fornecidos pelo usuário devem ser processados localmente sempre que possível.

Critério:

- Nenhuma capability deve enviar conteúdo do input ao servidor sem necessidade clara.
- O usuário deve entender quando uma operação é local.

---

## NFR-003: Consistência de UX

Capabilities devem seguir padrões comuns de layout e interação.

Critério:

- Input, output, erros, copiar resultado e ações secundárias devem ser previsíveis.

---

## NFR-004: Acessibilidade

O MVP deve considerar acessibilidade desde o início.

Critério:

- Navegação por teclado em fluxos principais.
- Contraste adequado.
- Estados de foco visíveis.
- Labels claros em inputs e ações.

---

## NFR-005: SEO técnico

Páginas públicas de capability devem ser indexáveis e úteis.

Critério:

- URL limpa.
- Título e descrição específicos.
- Conteúdo objetivo.
- Capability utilizável sem cadastro.

---

# Rastreabilidade

| Requisito | Problemas | Oportunidades |
| --- | --- | --- |
| PRD-001 | UP-0001, UP-0004, UP-0007 | OP-001, OP-003 |
| PRD-002 | UP-0001, UP-0004 | OP-002 |
| PRD-003 | UP-0002, UP-0003 | OP-011 |
| PRD-004 | UP-0001, UP-0002 | OP-001 |
| PRD-005 | UP-0007 | OP-003 |
| PRD-006 | UP-0004, UP-0007 | OP-004 |
| PRD-007 | UP-0007 | OP-005 |
| PRD-008 | UP-0004 | OP-009, OP-010 |
| PRD-009 | Todos | OP-001, OP-002, OP-003 |

---

# Definição de pronto para capability

Uma capability só pode ser considerada pronta quando:

- resolve a tarefa principal;
- possui tratamento de erro;
- permite copiar resultado;
- possui URL própria;
- registra eventos mínimos;
- respeita privacidade;
- segue padrões visuais do produto;
- possui critério de aceite validado.
