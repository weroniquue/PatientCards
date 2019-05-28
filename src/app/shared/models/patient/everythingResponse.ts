export interface EverythingResponse {
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
  text?: Text | null;
  extension?: (ExtensionEntity)[] | null;
  identifier?: (IdentifierEntity)[] | null;
  name?: (NameEntity)[] | null;
  telecom?: (TelecomEntity)[] | null;
  gender?: string | null;
  birthDate?: string | null;
  address?: (AddressEntity)[] | null;
  maritalStatus?: MaritalStatus | null;
  multipleBirthBoolean?: boolean | null;
  communication?: (CommunicationEntity)[] | null;
  generalPractitioner?: (GeneralPractitionerEntityOrSubjectOrContextOrPatientOrPrescription)[] | null;
  status?: string | null;
  category?: (TypeOrCategoryEntity)[] | null;
  code?: Code | null;
  subject?: GeneralPractitionerEntityOrSubjectOrContextOrPatientOrPrescription1 | null;
  context?: GeneralPractitionerEntityOrSubjectOrContextOrPatientOrPrescription2 | null;
  effectiveDateTime?: string | null;
  issued?: string | null;
  valueQuantity?: ValueQuantity | null;
  performedPeriod?: PerformedPeriodOrBillablePeriod | null;
  use?: string | null;
  patient?: GeneralPractitionerEntityOrSubjectOrContextOrPatientOrPrescription3 | null;
  billablePeriod?: PerformedPeriodOrBillablePeriod1 | null;
  item?: (ItemEntity)[] | null;
  total?: NetOrTotal | null;
  prescription?: GeneralPractitionerEntityOrSubjectOrContextOrPatientOrPrescription4 | null;
  result?: (ResultEntity)[] | null;
}
export interface Meta1 {
  versionId: string;
  lastUpdated: string;
  profile?: (string)[] | null;
}
export interface Text {
  status: string;
  div: string;
}
export interface ExtensionEntity {
  url: string;
  valueCodeableConcept?: ValueCodeableConceptOrCode | null;
  valueAddress?: ValueAddress | null;
  valueString?: string | null;
  valueCode?: string | null;
  valueBoolean?: boolean | null;
  valueHumanName?: ValueHumanName | null;
}
export interface ValueCodeableConceptOrCode {
  coding?: (CodingEntity)[] | null;
  text: string;
}
export interface CodingEntity {
  system: string;
  code: string;
  display: string;
}
export interface ValueAddress {
  city: string;
  state: string;
  country: string;
}
export interface ValueHumanName {
  text: string;
}
export interface IdentifierEntity {
  system: string;
  value: string;
  type?: TypeOrCategoryEntity1 | null;
}
export interface TypeOrCategoryEntity1 {
  coding?: (CodingEntity1)[] | null;
}
export interface CodingEntity1 {
  system: string;
  code: string;
}
export interface NameEntity {
  use: string;
  family: string;
  given?: (string)[] | null;
  prefix?: (string)[] | null;
}
export interface TelecomEntity {
  system: string;
  value: string;
  use: string;
}
export interface AddressEntity {
  extension?: (ExtensionEntity1)[] | null;
  line?: (string)[] | null;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}
export interface ExtensionEntity1 {
  url: string;
  extension?: (ExtensionEntity2)[] | null;
}
export interface ExtensionEntity2 {
  url: string;
  valueDecimal: number;
}
export interface MaritalStatus {
  coding?: (CodingEntity1)[] | null;
  text: string;
}
export interface CommunicationEntity {
  language: LanguageOrCode;
}
export interface LanguageOrCode {
  coding?: (CodingEntity)[] | null;
}
export interface GeneralPractitionerEntityOrSubjectOrContextOrPatientOrPrescription {
  reference: string;
}
export interface TypeOrCategoryEntity {
  coding?: (CodingEntity1)[] | null;
}
export interface Code {
  coding?: (CodingEntity)[] | null;
  text?: string | null;
}
export interface GeneralPractitionerEntityOrSubjectOrContextOrPatientOrPrescription1 {
  reference: string;
}
export interface GeneralPractitionerEntityOrSubjectOrContextOrPatientOrPrescription2 {
  reference: string;
}
export interface ValueQuantity {
  value: number;
  unit: string;
  system: string;
  code: string;
}
export interface PerformedPeriodOrBillablePeriod {
  start: string;
  end: string;
}
export interface GeneralPractitionerEntityOrSubjectOrContextOrPatientOrPrescription3 {
  reference: string;
}
export interface PerformedPeriodOrBillablePeriod1 {
  start: string;
  end: string;
}
export interface ItemEntity {
  sequence: number;
  net: NetOrTotal1;
}
export interface NetOrTotal1 {
  value: number;
  system: string;
  code: string;
}
export interface NetOrTotal {
  value: number;
  system: string;
  code: string;
}
export interface GeneralPractitionerEntityOrSubjectOrContextOrPatientOrPrescription4 {
  reference: string;
}
export interface ResultEntity {
  reference: string;
  display: string;
}
export interface Search {
  mode: string;
}
