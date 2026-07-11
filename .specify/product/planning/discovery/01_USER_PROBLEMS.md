# User Problems

> Este documento consolida os problemas de usuário que fundamentam o produto.
>
> Nenhuma capability deverá entrar no roadmap sem estar relacionada a pelo menos um problema documentado aqui.

---

# UP-0001: Troca constante de contexto

## Descrição

Desenvolvedores interrompem o fluxo de trabalho para alternar entre IDE, navegador, buscadores, ferramentas isoladas, documentação, ChatGPT, terminal e sites especializados.

## Usuários afetados

- Desenvolvedores backend
- Desenvolvedores full stack
- Desenvolvedores frontend que lidam com APIs e dados
- DevOps e platform engineers em tarefas auxiliares

## Impacto

Alto.

Mesmo interrupções curtas quebram concentração e aumentam o tempo para retomar o raciocínio.

## Evidências relacionadas

- RF-0001
- RF-0003
- RF-0004
- RF-0006

## Oportunidades relacionadas

- OP-001
- OP-002
- OP-006

---

# UP-0002: Tarefas simples exigem ferramentas demais

## Descrição

Atividades como formatar JSON, decodificar JWT, converter Base64, validar Regex, gerar UUID ou inspecionar uma URL normalmente exigem acesso a sites diferentes, cada um com comportamento, layout e qualidade distintos.

## Impacto

Alto.

O tempo gasto não está apenas na execução da tarefa, mas na busca, escolha e validação da ferramenta correta.

## Evidências relacionadas

- RF-0003
- RF-0008

## Oportunidades relacionadas

- OP-001
- OP-009
- OP-010

---

# UP-0003: Ferramentas isoladas não formam um fluxo

## Descrição

Ferramentas atuais resolvem uma tarefa específica, mas raramente ajudam o usuário a continuar o raciocínio para a próxima etapa.

Exemplo: o usuário decodifica um JWT, copia um campo, converte Base64, valida um timestamp e consulta headers em páginas diferentes.

## Impacto

Muito alto.

A ausência de continuidade aumenta esforço mental e reduz a percepção de produtividade.

## Evidências relacionadas

- RF-0008
- COMPETITORS ANALYSIS

## Oportunidades relacionadas

- OP-011
- OP-012
- OP-015

---

# UP-0004: Encontrar a ferramenta certa pode demorar mais que usar a ferramenta

## Descrição

Quando a tarefa é pequena, qualquer fricção na busca, navegação ou interface torna o processo desproporcionalmente caro.

## Impacto

Alto.

Se abrir a capability demora demais, o usuário volta para Google, favoritos ou scripts próprios.

## Evidências relacionadas

- RF-0001
- RF-0004

## Oportunidades relacionadas

- OP-002
- OP-003
- OP-004

---

# UP-0005: Falta de confiança em ferramentas online

## Descrição

Desenvolvedores frequentemente manipulam tokens, payloads, dados de APIs, strings sensíveis e exemplos de produção. Ferramentas online pouco transparentes geram insegurança sobre privacidade e armazenamento.

## Impacto

Alto.

Privacidade influencia adoção, principalmente em tarefas envolvendo autenticação e dados internos.

## Evidências relacionadas

- D-0010
- D-0011

## Oportunidades relacionadas

- OP-006
- OP-007
- OP-012

---

# UP-0006: IA nem sempre é a forma mais rápida de resolver tarefas triviais

## Descrição

Para tarefas simples, conversar com uma IA pode exigir prompt, espera, revisão e correção. Isso pode aumentar etapas em vez de reduzi-las.

## Impacto

Médio a alto.

IA deve complementar fluxos específicos, não substituir ferramentas rápidas e determinísticas.

## Evidências relacionadas

- RF-0002
- RF-0005
- RF-0007
- D-0009

## Oportunidades relacionadas

- OP-016
- OP-017

---

# UP-0007: Falta de histórico e continuidade

## Descrição

Usuários repetem tarefas parecidas ao longo do dia, mas muitas ferramentas não preservam histórico, preferências, entradas recentes ou contexto reutilizável.

## Impacto

Alto.

Sem continuidade, cada uso começa do zero.

## Oportunidades relacionadas

- OP-003
- OP-004
- OP-012
- OP-014

---

# UP-0008: Experiência visual inconsistente e poluída

## Descrição

Muitos sites de utilidades têm anúncios, interfaces antigas, excesso de ruído visual ou padrões inconsistentes.

## Impacto

Médio a alto.

Uma experiência ruim reduz confiança e aumenta carga cognitiva.

## Evidências relacionadas

- COMPETITORS ANALYSIS
- OP-006
- OP-007

---

# Priorização inicial

| ID | Problema | Prioridade MVP |
| --- | --- | --- |
| UP-0001 | Troca constante de contexto | Crítica |
| UP-0002 | Tarefas simples exigem ferramentas demais | Crítica |
| UP-0003 | Ferramentas isoladas não formam um fluxo | Alta |
| UP-0004 | Encontrar a ferramenta certa demora demais | Crítica |
| UP-0005 | Falta de confiança em ferramentas online | Alta |
| UP-0006 | IA nem sempre é mais rápida | Média |
| UP-0007 | Falta de histórico e continuidade | Alta |
| UP-0008 | Experiência visual inconsistente | Alta |
