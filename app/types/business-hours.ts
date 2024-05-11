export type BusinessHours = {
  day: number;
  openTime: string;
  closeTime: string;
  vanId: string;
  locationId: string;
  exceptions: Exception[];
};

type Exception = {
  date: Date | string;
  openTime: string;
  closeTime: string;
  details: string;
};
