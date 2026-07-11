<!--
Sync Impact Report
- Version change: 1.1.0 → 1.2.0
- Modified principles: Reframed the constitution around the approved product discovery documents and clarified the authority of decisions, assumptions, and open questions.
- Added sections: Source of Truth and Product Discovery
- Removed sections: None
- Templates requiring updates: ✅ .specify/templates/plan-template.md, ✅ .specify/templates/spec-template.md, ✅ .specify/templates/tasks-template.md
- Follow-up TODOs: none
-->

# SAAS-DEV Constitution

## Core Principles

### 1. Developer First
Toda decisão MUST centrar a experiência do desenvolvedor. O produto existe para reduzir fricção, carga cognitiva e troca de contexto no trabalho diário. O objetivo principal é ajudar o desenvolvedor a ir da intenção ao resultado com menos interrupção, menos adivinhação e menos alternância entre ferramentas.

### 2. Stay in Flow
O sistema MUST preservar foco e momentum. Otimizamos para execução ininterrupta, menos troca de contexto, menos etapas e menos tempo entre intenção e resultado.

### 3. Solve Real Problems
Nenhuma funcionalidade entra no produto sem estar ligada a pelo menos um problema de usuário documentado nos documentos aprovados de discovery. Product discovery, evidências e necessidades do usuário MUST preceder a expansão de escopo. Funcionalidades sem problema claro estão fora de escopo.

### 4. Simplicity Wins
MUST preferir a solução mais simples que resolve bem o problema. Simplicidade é uma qualidade do produto, não um compromisso. Complexidade MUST ser justificada por valor claro para o usuário.

### 5. Speed is a Feature
Desempenho é parte da experiência do produto. A plataforma MUST parecer rápida, responsiva e confiável em uso diário. Interações lentas são tratadas como defeitos de produto.

### 6. Consistency Creates Trust
A experiência MUST ser coerente em toda a plataforma. Navegação, terminologia, padrões de interação e expectativas de qualidade MUST permanecer consistentes para que o produto pareça um único sistema, não um catálogo de utilidades desconectadas.

### 7. Privacy by Design
Privacidade é um princípio central do produto. MUST minimizar coleta de dados, priorizar processamento local quando tecnicamente viável e tornar o tratamento de dados transparente. A confiança do usuário é construída pela proteção do contexto e dos dados sensíveis.

### 8. AI is an Accelerator, Not the Product
IA MAY ser usada apenas quando reduzir tempo, carga cognitiva ou número de etapas em um fluxo real. Ela MUST apoiar a jornada do usuário em vez de se tornar a principal proposta de valor do produto.

### 9. Evidence-Driven Product
Decisões MUST ser fundamentadas em evidências: discovery, pesquisa com usuários, telemetria, feedback e métricas de impacto. Opiniões e preferências estéticas não devem superar necessidades validadas.

### 10. Quality Before Quantity
Preferimos menos experiências melhores a um grande catálogo de capacidades medianas. Qualidade, polimento e confiabilidade MUST vir antes do volume de funcionalidades.

### 11. One Workspace
O produto MUST parecer um único workspace, não um conjunto de ferramentas separadas. Contexto do usuário, ações e informações devem fluir naturalmente pela experiência.

### 12. Build for Daily Use
O produto MUST ser desenhado para uso diário recorrente. Se um fluxo for útil apenas ocasionalmente, ele não é base para a plataforma. A barreira de inclusão é valor habitual.

## Source of Truth and Product Discovery

Os seguintes documentos são a base autoritativa para decisões de produto e implementação:

- DECISIONS.md é soberano. Decisões aprovadas prevalecem sobre preferências locais, atalhos informais ou convenções temporárias.
- ASSUMPTIONS.md contém hipóteses ainda em validação. Hipóteses MUST NOT ser tratadas como decisões.
- QUESTIONS.md contém perguntas abertas e pontos sem resposta definitiva. Elas MUST permanecer visíveis até serem resolvidas por evidência ou por uma decisão aprovada.
- Os materiais aprovados de Product Discovery em .specify/product/planning/discovery representam a linha de base de problemas de usuário, oportunidades, posicionamento e escopo do MVP.
- Nenhuma Spec pode contradizer DECISIONS.md.
- Nenhuma implementação pode contradizer uma Spec aprovada.

## Product Guardrails

As seguintes regras são não negociáveis:

- O produto é uma Developer Productivity Platform, não um site de ferramentas.
- O objetivo principal é reduzir carga cognitiva, troca de contexto e fricção no fluxo do desenvolvedor.
- Toda funcionalidade MUST estar ligada a pelo menos um problema de usuário documentado no discovery aprovado.
- Privacidade, processamento local quando possível, simplicidade e consistência são princípios obrigatórios.
- IA MUST ser justificada por redução mensurável de esforço, carga cognitiva ou etapas; ela NÃO deve ser introduzida por novidade.
- O produto MUST parecer um workspace premium e coerente, e NÃO deve se apresentar como um catálogo de utilidades desconectadas.

## Product Experience Standards

A plataforma MUST comunicar confiança, clareza e polimento. Design, linguagem, movimento e padrões de interação SHOULD reforçar uma experiência premium, calma e focada. Cada interação deve reduzir fricção e fazer o desenvolvedor se sentir no controle.

## Development Workflow

A equipe MUST seguir este fluxo:

1. Começar a partir de um problema de usuário documentado e do contexto aprovado de Product Discovery.
2. Traduzir o problema em uma Spec que preserve o fluxo desejado e as restrições do produto.
3. Implementar apenas o que a Spec autoriza, mantendo a implementação alinhada com ela.
4. Validar impacto em fluxo, simplicidade, performance, privacidade e confiança antes de expandir escopo.
5. Usar evidências de uso, feedback e métricas de qualidade para decidir entre iterar, expandir ou parar.

## Governance

Esta constituição substitui práticas locais que conflitam com ela. Mudanças em princípios, guardrails ou workflow MUST ser documentadas, revisadas e aprovadas antes de entrarem em vigor. Cada mudança significativa MUST ser conferida quanto à consistência com Product Discovery, a Spec ativa e o plano de implementação. Em caso de conflito, esta constituição tem precedência sobre conveniência, preferência local ou solução de curto prazo.

**Version**: 1.2.0 | **Ratified**: 2026-07-09 | **Last Amended**: 2026-07-09
