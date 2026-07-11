# Ideal Customer Profile

> Este documento define o público-alvo inicial para validação do MVP.
>
> O ICP deverá ser revisto após os primeiros dados reais de uso.

---

# ICP primário

## Desenvolvedor backend ou full stack orientado a APIs

Profissional que trabalha diariamente com APIs, autenticação, payloads, integrações, bancos de dados, logs, debugging e pequenas transformações de dados.

Esse perfil sente dor frequente com troca de contexto porque executa muitas tarefas auxiliares entre uma alteração de código e outra.

## Características

- Trabalha com desenvolvimento web ou SaaS.
- Usa IDE, navegador, terminal, documentação e ferramentas online todos os dias.
- Manipula JSON, JWT, Base64, URLs, headers, tokens, SQL, Markdown ou Regex com frequência.
- Valoriza velocidade, clareza e confiabilidade.
- Prefere ferramentas objetivas a fluxos excessivamente conversacionais.
- Pode trabalhar em startups, software houses, times internos de produto ou como freelancer.

## Dores principais

- Perde foco alternando entre várias abas.
- Usa favoritos, Google ou sites isolados para tarefas simples.
- Recria pequenos fluxos repetidamente.
- Desconfia de colar dados sensíveis em ferramentas desconhecidas.
- Quer resolver tarefas técnicas sem sair do raciocínio principal.

## Comportamentos esperados

- Abrir a plataforma várias vezes ao dia.
- Usar busca global como porta de entrada.
- Favoritar capabilities recorrentes.
- Retornar ao histórico recente.
- Preferir workflows quando estiver lidando com problemas compostos, como autenticação ou payloads de API.

## Jobs to be Done

Quando estou desenvolvendo uma feature e encontro uma tarefa auxiliar, quero resolvê-la em segundos, sem abrir várias abas, para voltar imediatamente ao código.

Quando preciso inspecionar dados de autenticação ou payloads, quero uma ferramenta confiável e consistente para evitar copiar informações sensíveis em sites desconhecidos.

Quando estou alternando entre várias pequenas transformações, quero que as ferramentas conversem entre si para não precisar reconstruir meu fluxo manualmente.

---

# ICP secundário

## Desenvolvedor frontend que trabalha com integrações

Usuário que consome APIs, trata payloads, valida estados, manipula dados e depura problemas de interface com backend.

## DevOps, SRE ou platform engineer

Usuário que realiza tarefas rápidas envolvendo URLs, headers, logs, encodings, secrets, hashes, timestamps e infraestrutura.

## Desenvolvedor independente ou freelancer

Usuário que alterna entre múltiplos projetos e se beneficia de um workspace padronizado para tarefas recorrentes.

---

# Não ICP inicial

- Estudantes iniciantes que ainda buscam material didático básico.
- Times enterprise que exigem governança avançada desde o primeiro uso.
- Usuários não técnicos.
- Desenvolvedores que preferem resolver todas as tarefas via terminal e scripts próprios.
- Usuários que buscam uma IDE online completa.

---

# Critérios de validação do ICP

O ICP será considerado validado quando:

- Pelo menos 60% dos usuários ativos se encaixarem no perfil backend/full stack orientado a APIs.
- Usuários do ICP realizarem mais de 3 sessões por dia em média durante dias úteis.
- Mais de 50% das sessões do ICP envolverem capabilities de autenticação, dados ou APIs.
- Entrevistas qualitativas confirmarem redução percebida de troca de contexto.

---

# Implicações para o produto

- O MVP deve priorizar workflows de Authentication, Data e API.
- A experiência deve ser rápida, densa e profissional.
- A busca global deve ser tratada como fluxo primário.
- Privacidade e processamento local devem ser comunicados com clareza.
- A plataforma deve evitar parecer uma ferramenta educacional ou um catálogo genérico.
