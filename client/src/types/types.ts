export interface Insurance {
  id: string;
  name: string;
  company: string;
  group: string;
}
export interface Patient {
  id?: string;
  name: string;
  contact: string;
  address: string;
  insurance: Insurance;
}
