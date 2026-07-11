# Success Metrics

> Este documento define as métricas de sucesso do MVP.

---

# North Star Metric

## Productive Tasks Completed

Quantidade de tarefas técnicas concluídas com sucesso na plataforma.

Uma tarefa concluída ocorre quando o usuário executa uma capability e realiza pelo menos uma ação de valor, como copiar resultado, validar entrada, abrir capability relacionada ou salvar favorito.

## Por que essa métrica

Ela mede valor entregue, não apenas tráfego ou cadastro.

O produto existe para ajudar desenvolvedores a resolverem tarefas recorrentes e voltarem ao código.

---

# Métricas primárias

| Métrica | Objetivo MVP | Interpretação |
| --- | --- | --- |
| Time to First Value | Menos de 30 segundos | Velocidade do primeiro benefício |
| Sessions per Active User per Day | Maior que 3 para ICP | Recorrência diária |
| Capabilities per Session | Maior que 1.5 | Uso integrado, não pontual |
| Search Open Rate | Maior que 60% | Busca global como fluxo primário |
| Returning Users 7D | Maior que 25% | Retenção inicial |
| Copy/Export Action Rate | Maior que 50% das execuções | Conclusão prática da tarefa |

---

# Métricas secundárias

- Favoritos criados por usuário ativo.
- Uso de histórico.
- Capabilities mais utilizadas.
- Workflows mais utilizados.
- Erros por capability.
- Tempo médio até resultado.
- Porcentagem de usuários autenticados após primeiro uso.
- Origem de aquisição.
- Páginas SEO com tráfego orgânico.

---

# Métricas qualitativas

Durante entrevistas ou feedbacks, validar:

- O usuário percebeu redução de troca de contexto?
- A plataforma substituiu alguma ferramenta favorita?
- O usuário confiaria em manipular dados sensíveis?
- A organização por workflows fez sentido?
- O usuário voltaria espontaneamente?

---

# Eventos mínimos de analytics

| Evento | Quando dispara |
| --- | --- |
| capability_opened | Usuário abre uma capability |
| capability_executed | Usuário executa uma ação principal |
| result_copied | Usuário copia resultado |
| search_used | Usuário utiliza busca global |
| favorite_added | Usuário adiciona favorito |
| history_item_opened | Usuário abre item do histórico |
| workflow_opened | Usuário abre workflow |
| signup_started | Usuário inicia cadastro |
| signup_completed | Usuário conclui cadastro |

---

# Critérios para validar o MVP

O MVP será considerado validado se, durante o período inicial de validação:

- Usuários do ICP retornarem mais de uma vez por semana.
- Pelo menos 25% dos usuários ativos retornarem em 7 dias.
- Mais de 50% das sessões concluírem uma tarefa produtiva.
- Mais de 30% das sessões abrirem mais de uma capability.
- Feedback qualitativo indicar redução percebida de troca de contexto.

---

# Sinais de alerta

- Alto tráfego orgânico com baixa recorrência.
- Uso concentrado em uma única capability.
- Usuários usando o produto apenas como ferramenta pontual.
- Busca global pouco utilizada.
- Cadastro causando abandono antes do primeiro valor.
- Feedback indicando que workflows confundem em vez de ajudar.

---

# Decisões orientadas por métricas

| Resultado observado | Decisão provável |
| --- | --- |
| Alta recorrência e múltiplas capabilities | Investir em workspace e personalização |
| Alto SEO e baixa recorrência | Melhorar retenção e cross-linking entre workflows |
| Alto uso sem cadastro | Manter valor aberto e adiar paywall |
| Alta intenção Premium | Testar monetização leve |
| Baixo uso de workflows | Revisar organização de navegação |
