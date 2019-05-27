export interface PatientDetails {
  resourceType: string;
  id: string;
  meta: Meta;
  text: Text;
  extension: Extension[];
  identifier: Identifier[];
  name: Name[];
  telecom: Telecom[];
  gender: string;
  birthDate: string;
  deceasedDateTime: string;
  address: Address[];
  maritalStatus: MaritalStatus;
  multipleBirthBoolean: boolean;
  communication: Communication[];
  generalPractitioner: GeneralPractitioner[];
}

interface GeneralPractitioner {
  reference: string;
}

interface Communication {
  language: Language;
}

interface Language {
  coding: Coding[];
}

interface MaritalStatus {
  coding: Coding2[];
  text: string;
}

interface Address {
  extension: Extension3[];
  line: string[];
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface Extension3 {
  url: string;
  extension: Extension2[];
}

interface Extension2 {
  url: string;
  valueDecimal: number;
}

interface Telecom {
  system: string;
  value: string;
  use: string;
}

interface Name {
  use: string;
  family: string;
  given: string[];
  prefix: string[];
}

interface Identifier {
  system: string;
  value: string;
  type?: Type;
}

interface Type {
  coding: Coding2[];
}

interface Coding2 {
  system: string;
  code: string;
}

interface Extension {
  url: string;
  valueCodeableConcept?: ValueCodeableConcept;
  valueAddress?: ValueAddress;
  valueString?: string;
  valueCode?: string;
  valueBoolean?: boolean;
  valueHumanName?: ValueHumanName;
}

interface ValueHumanName {
  text: string;
}

interface ValueAddress {
  city: string;
  state: string;
  country: string;
}

interface ValueCodeableConcept {
  coding: Coding[];
  text: string;
}

interface Coding {
  system: string;
  code: string;
  display: string;
}

interface Text {
  status: string;
  div: string;
}

interface Meta {
  versionId: string;
  lastUpdated: string;
  profile: string[];
}
