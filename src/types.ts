export interface AddressLookupResult {
  Collection_Address: string;
}

export interface CollectionDatesResult {
  Address: string;
  RedBin: string;
  YellowBin: string;
  CollectionWeek: number;
  CollectionDay: number;
}

export type { CollectionSchedule } from "./schedule";
