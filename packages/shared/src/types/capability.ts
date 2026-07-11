export type WorkflowGroup = "authentication" | "data" | "api-web";
export type ExecutionMode = "client-side";
export type PrivacyLevel = "low" | "medium" | "high";

export interface CapabilityDefinition {
  key: string;
  title: string;
  summary: string;
  workflowGroup: WorkflowGroup;
  executionMode: ExecutionMode;
  privacyLevel: PrivacyLevel;
  accent: string;
}

export interface RecentItem {
  id: string;
  capabilityKey: string;
  title: string;
  lastUsedAt: string;
}
