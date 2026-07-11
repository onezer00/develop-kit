# Capabilities

> Este documento define as capabilities candidatas do produto e sua relação com workflows.
>
> Capability é uma unidade funcional capaz de resolver uma tarefa específica.
>
> Workflow é um agrupamento orientado a problema, composto por capabilities relacionadas.

---

# Workflows do MVP

## WF-001: Authentication Workflow

Ajuda o usuário a inspecionar, transformar e gerar dados comuns em fluxos de autenticação.

### Capabilities MVP

| ID | Capability | Objetivo | Processamento preferencial |
| --- | --- | --- | --- |
| CAP-001 | JWT Decoder | Decodificar header e payload de JWT | Local |
| CAP-002 | Base64 Encode/Decode | Codificar e decodificar strings | Local |
| CAP-003 | UUID Generator | Gerar UUIDs | Local |
| CAP-004 | Hash Generator | Gerar hashes comuns para strings | Local |
| CAP-005 | Timestamp Converter | Converter Unix timestamp e datas | Local |

---

## WF-002: Data Workflow

Ajuda o usuário a manipular, validar e visualizar dados estruturados.

### Capabilities MVP

| ID | Capability | Objetivo | Processamento preferencial |
| --- | --- | --- | --- |
| CAP-006 | JSON Formatter | Formatar e minificar JSON | Local |
| CAP-007 | JSON Validator | Validar JSON e apontar erros | Local |
| CAP-008 | YAML Formatter | Formatar YAML | Local |
| CAP-009 | CSV to JSON | Converter CSV simples para JSON | Local |
| CAP-010 | SQL Formatter | Formatar SQL | Local |

---

## WF-003: API & Web Workflow

Ajuda o usuário a lidar com elementos comuns de requisições, URLs e debugging web.

### Capabilities MVP

| ID | Capability | Objetivo | Processamento preferencial |
| --- | --- | --- | --- |
| CAP-011 | URL Encode/Decode | Codificar e decodificar URLs | Local |
| CAP-012 | Query Params Parser | Explodir e editar query strings | Local |
| CAP-013 | HTTP Status Reference | Consultar status HTTP | Local |
| CAP-014 | Headers Formatter | Organizar headers HTTP | Local |
| CAP-015 | cURL Formatter | Melhorar leitura de comandos cURL | Local |

---

# Capabilities transversais do MVP

| ID | Capability | Objetivo |
| --- | --- | --- |
| CAP-016 | Global Search | Abrir workflows e capabilities rapidamente |
| CAP-017 | Recent History | Exibir últimas capabilities e ações recentes |
| CAP-018 | Favorites | Permitir acesso rápido a capabilities recorrentes |
| CAP-019 | Copy Result | Copiar saídas com um clique |
| CAP-020 | Local Processing Indicator | Comunicar quando os dados não saem do navegador |

---

# Critérios para incluir uma capability no MVP

Uma capability entra no MVP apenas se atender aos critérios abaixo:

- Resolve uma tarefa frequente para o ICP.
- Pode entregar valor sem integração complexa.
- Pode ser executada localmente ou com baixo custo operacional.
- Reduz troca de contexto.
- Possui comportamento previsível.
- Pode ser medida por uso, conclusão e retorno.

---

# Fora do MVP

- Playgrounds avançados.
- IA generativa.
- Marketplace de capabilities.
- API pública.
- Colaboração em equipe.
- Sincronização completa entre dispositivos.
- Extensões de IDE.
- Execução remota de código.

---

# Rastreabilidade

| Workflow | Problemas relacionados | Oportunidades relacionadas |
| --- | --- | --- |
| Authentication | UP-0001, UP-0002, UP-0005 | OP-001, OP-006, OP-007 |
| Data | UP-0001, UP-0002, UP-0004 | OP-001, OP-002, OP-010 |
| API & Web | UP-0001, UP-0003, UP-0007 | OP-001, OP-003, OP-011 |
| Transversais | UP-0004, UP-0007, UP-0008 | OP-002, OP-003, OP-004, OP-006 |
