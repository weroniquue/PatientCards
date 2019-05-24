import {EntryEntity, LinkEntity} from './patient.module';

export interface PatientDetails {
  resourceType: string;
  id: string;
  meta: Meta;
  type: string;
  total: number;
  link?: (LinkEntity)[] | null;
  entry?: (EntryEntity)[] | null;
}
export interface Meta {
  lastUpdated: string;
}

export interface Resource {
  resourceType: string;
  id: string;
  meta: Meta1;
  text: Text;
  extension?: (ExtensionEntity)[] | null;
  identifier?: (IdentifierEntity)[] | null;
  name?: (NameEntity)[] | null;
  telecom?: (TelecomEntity)[] | null;
  gender: string;
  birthDate: string;
  address?: (AddressEntity)[] | null;
  contact?: (ContactEntity)[] | null;
}
export interface Meta1 {
  versionId: string;
  lastUpdated: string;
}
export interface Text {
  status: string;
  div: string;
}
export interface ExtensionEntity {
  url: string;
  valueTime: string;
}
export interface IdentifierEntity {
  system: string;
  value: string;
}
export interface NameEntity {
  text: string;
  family: string;
  given?: (string)[] | null;
}
export interface TelecomEntity {
  system: string;
  value: string;
  use: string;
}
export interface AddressEntity {
  use: string;
  text: string;
  city: string;
  district: string;
  state: string;
}
export interface ContactEntity {
  relationship?: (RelationshipEntity)[] | null;
  telecom?: (CodingEntityOrTelecomEntity)[] | null;
  gender: string;
}
export interface RelationshipEntity {
  coding?: (CodingEntityOrTelecomEntity)[] | null;
}
export interface CodingEntityOrTelecomEntity {
  system: string;
}
export interface Search {
  mode: string;
}
