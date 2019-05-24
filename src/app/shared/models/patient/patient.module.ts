export interface Patient {
  resourceType: string;
  id: string;
  meta: Meta;
  type: string;
  link?: (LinkEntity)[] | null;
  entry?: (EntryEntity)[] | null;
}
export interface Meta {
  lastUpdated: string;
}
export interface LinkEntity {
  relation: string;
  url: string;
}
export interface EntryEntity {
  fullUrl: string;
  resource: Resource;
  search: Search;
}
export interface Resource {
  resourceType: string;
  id: string;
  meta: Meta1;
  text: Text;
  identifier?: (IdentifierEntity)[] | null;
  active?: boolean | null;
  gender: string;
  birthDate: string;
  deceasedBoolean?: boolean | null;
}
export interface Meta1 {
  versionId: string;
  lastUpdated: string;
}
export interface Text {
  status: string;
  div: string;
}
export interface IdentifierEntity {
  use: string;
  type: Type;
  value: string;
  assigner: Assigner;
}
export interface Type {
  text: string;
}
export interface Assigner {
  display: string;
}
export interface Search {
  mode: string;
}
