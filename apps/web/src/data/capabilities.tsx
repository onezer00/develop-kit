import { Braces, Clock3, Code2, Database, FileJson2, Fingerprint, Globe2, Hash, KeyRound, Link2, ListTree, Regex, Rows3, ScrollText, ShieldCheck, TerminalSquare } from "lucide-react";
import type { CapabilityDefinition, WorkflowGroup } from "@develop-kit/shared";
import type { ReactNode } from "react";

interface WorkflowGroupDefinition {
  key: WorkflowGroup;
  label: string;
  icon: ReactNode;
}

export const workflowGroups: WorkflowGroupDefinition[] = [
  { key: "authentication", label: "Autenticação", icon: <Fingerprint size={18} /> },
  { key: "data", label: "Dados", icon: <Database size={18} /> },
  { key: "api-web", label: "API e Web", icon: <Globe2 size={18} /> }
];

export const capabilities: CapabilityDefinition[] = [
  { key: "jwt-decoder", title: "Decodificador JWT", summary: "Inspecione cabeçalhos e payloads de token localmente sem enviar conteúdo sensível.", workflowGroup: "authentication", executionMode: "client-side", privacyLevel: "high", accent: "#71F6C7" },
  { key: "base64", title: "Base64 Codificar/Decodificar", summary: "Transforme strings Base64 no local com feedback rápido de cópia.", workflowGroup: "data", executionMode: "client-side", privacyLevel: "medium", accent: "#9EA7FF" },
  { key: "uuid-generator", title: "Gerador de UUID", summary: "Gere UUIDs para testes, payloads, mocks e fixtures.", workflowGroup: "data", executionMode: "client-side", privacyLevel: "low", accent: "#F6D365" },
  { key: "hash-generator", title: "Gerador de Hash", summary: "Crie hashes SHA no navegador sem persistir os valores de entrada.", workflowGroup: "data", executionMode: "client-side", privacyLevel: "medium", accent: "#FF8A7A" },
  { key: "timestamp-converter", title: "Conversor de Timestamp", summary: "Converta timestamps e datas entre formatos práticos para devs.", workflowGroup: "data", executionMode: "client-side", privacyLevel: "low", accent: "#7AD7FF" },
  { key: "json-formatter", title: "Formatador JSON", summary: "Formate e inspecione JSON com feedback claro de validação.", workflowGroup: "data", executionMode: "client-side", privacyLevel: "high", accent: "#B9F271" },
  { key: "json-validator", title: "Validador JSON", summary: "Valide JSON rapidamente e preserve o contexto da entrada em caso de erro.", workflowGroup: "data", executionMode: "client-side", privacyLevel: "high", accent: "#FCA5FF" },
  { key: "yaml-formatter", title: "Formatador YAML", summary: "Formate configurações YAML localmente para ciclos de edição mais seguros.", workflowGroup: "data", executionMode: "client-side", privacyLevel: "high", accent: "#B4A7FF" },
  { key: "csv-to-json", title: "CSV para JSON", summary: "Converta CSV estruturado em JSON para mocks e payloads de API.", workflowGroup: "data", executionMode: "client-side", privacyLevel: "medium", accent: "#6EE7B7" },
  { key: "sql-formatter", title: "Formatador SQL", summary: "Deixe o SQL legível antes de compartilhar, depurar ou documentar.", workflowGroup: "data", executionMode: "client-side", privacyLevel: "medium", accent: "#F9A8D4" },
  { key: "url-encoder", title: "URL Codificar/Decodificar", summary: "Codifique e decodifique componentes de URL sem trocar de contexto.", workflowGroup: "api-web", executionMode: "client-side", privacyLevel: "medium", accent: "#93C5FD" },
  { key: "query-parser", title: "Parser de Query Params", summary: "Analise query strings em uma estrutura legível de chave/valor.", workflowGroup: "api-web", executionMode: "client-side", privacyLevel: "medium", accent: "#FDE68A" },
  { key: "http-status", title: "Referência de Status HTTP", summary: "Consulte códigos HTTP comuns dentro do workspace.", workflowGroup: "api-web", executionMode: "client-side", privacyLevel: "low", accent: "#A7F3D0" },
  { key: "headers-formatter", title: "Formatador de Headers", summary: "Formate headers de request e response em um formato legível.", workflowGroup: "api-web", executionMode: "client-side", privacyLevel: "medium", accent: "#FDBA74" },
  { key: "curl-formatter", title: "Formatador cURL", summary: "Organize comandos cURL com um subconjunto de parsing seguro para o MVP.", workflowGroup: "api-web", executionMode: "client-side", privacyLevel: "high", accent: "#C4B5FD" }
];
