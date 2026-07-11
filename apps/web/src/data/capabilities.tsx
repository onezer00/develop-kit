import { Braces, Clock3, Code2, Database, FileJson2, Fingerprint, Globe2, Hash, KeyRound, Link2, ListTree, Regex, Rows3, ScrollText, ShieldCheck, TerminalSquare } from "lucide-react";
import type { CapabilityDefinition, WorkflowGroup } from "@develop-kit/shared";
import type { ReactNode } from "react";

interface WorkflowGroupDefinition {
  key: WorkflowGroup;
  label: string;
  icon: ReactNode;
}

export const workflowGroups: WorkflowGroupDefinition[] = [
  { key: "authentication", label: "Authentication", icon: <Fingerprint size={18} /> },
  { key: "data", label: "Data", icon: <Database size={18} /> },
  { key: "api-web", label: "API & Web", icon: <Globe2 size={18} /> }
];

export const capabilities: CapabilityDefinition[] = [
  { key: "jwt-decoder", title: "JWT Decoder", summary: "Inspect token headers and payloads locally without sending sensitive content away.", workflowGroup: "authentication", executionMode: "client-side", privacyLevel: "high", accent: "#71F6C7" },
  { key: "base64", title: "Base64 Encode/Decode", summary: "Transform Base64 strings in place with fast copy feedback.", workflowGroup: "data", executionMode: "client-side", privacyLevel: "medium", accent: "#9EA7FF" },
  { key: "uuid-generator", title: "UUID Generator", summary: "Generate UUIDs for tests, payloads, mocks, and fixtures.", workflowGroup: "data", executionMode: "client-side", privacyLevel: "low", accent: "#F6D365" },
  { key: "hash-generator", title: "Hash Generator", summary: "Create browser-side SHA hashes without persisting input values.", workflowGroup: "data", executionMode: "client-side", privacyLevel: "medium", accent: "#FF8A7A" },
  { key: "timestamp-converter", title: "Timestamp Converter", summary: "Convert timestamps and dates across practical developer formats.", workflowGroup: "data", executionMode: "client-side", privacyLevel: "low", accent: "#7AD7FF" },
  { key: "json-formatter", title: "JSON Formatter", summary: "Format and inspect JSON with clear validation feedback.", workflowGroup: "data", executionMode: "client-side", privacyLevel: "high", accent: "#B9F271" },
  { key: "json-validator", title: "JSON Validator", summary: "Validate JSON quickly and preserve input context on errors.", workflowGroup: "data", executionMode: "client-side", privacyLevel: "high", accent: "#FCA5FF" },
  { key: "yaml-formatter", title: "YAML Formatter", summary: "Format YAML configuration locally for safer editing loops.", workflowGroup: "data", executionMode: "client-side", privacyLevel: "high", accent: "#B4A7FF" },
  { key: "csv-to-json", title: "CSV to JSON", summary: "Convert structured CSV into JSON for mocks and API payloads.", workflowGroup: "data", executionMode: "client-side", privacyLevel: "medium", accent: "#6EE7B7" },
  { key: "sql-formatter", title: "SQL Formatter", summary: "Make SQL readable before sharing, debugging, or documenting.", workflowGroup: "data", executionMode: "client-side", privacyLevel: "medium", accent: "#F9A8D4" },
  { key: "url-encoder", title: "URL Encode/Decode", summary: "Encode and decode URL components without context switching.", workflowGroup: "api-web", executionMode: "client-side", privacyLevel: "medium", accent: "#93C5FD" },
  { key: "query-parser", title: "Query Params Parser", summary: "Parse query strings into a readable key/value structure.", workflowGroup: "api-web", executionMode: "client-side", privacyLevel: "medium", accent: "#FDE68A" },
  { key: "http-status", title: "HTTP Status Reference", summary: "Look up common HTTP codes from the workspace.", workflowGroup: "api-web", executionMode: "client-side", privacyLevel: "low", accent: "#A7F3D0" },
  { key: "headers-formatter", title: "Headers Formatter", summary: "Format request and response headers into a readable shape.", workflowGroup: "api-web", executionMode: "client-side", privacyLevel: "medium", accent: "#FDBA74" },
  { key: "curl-formatter", title: "cURL Formatter", summary: "Clean up cURL commands with an MVP-safe parsing subset.", workflowGroup: "api-web", executionMode: "client-side", privacyLevel: "high", accent: "#C4B5FD" }
];
