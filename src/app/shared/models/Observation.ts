interface Observation {
  resourceType: string;
  id: string;
  meta: Meta;
  type: string;
  total: number;
  link: LinkItem[];
  entry: EntryItem[];
}
interface Meta {
  lastUpdated: string;
  versionId?: string;
  profile?: string[];
}
interface LinkItem {
  relation: string;
  url: string;
}
interface EntryItem {
  fullUrl: string;
  resource: Resource;
  search: Search;
}
interface Resource {
  resourceType: string;
  id: string;
  meta: Meta;
  status: string;
  category: CategoryItem[];
  code: Code;
  subject: Subject;
  context: Context;
  effectiveDateTime: string;
  issued: string;
  valueQuantity: ValueQuantity;
}
interface CategoryItem {
  coding: CodingItem[];
}
interface CodingItem {
  system: string;
  code: string;
  display?: string;
}
interface Code {
  coding: CodingItem[];
  text: string;
}
interface Subject {
  reference: string;
}
interface Context {
  reference: string;
}
interface ValueQuantity {
  value: number;
  unit: string;
  system: string;
  code: string;
}
interface Search {
  mode: string;
}

