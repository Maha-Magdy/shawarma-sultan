export type Location = {
  _id: string;
  _doc: {};
  address1: string;
  address2?: string;
  city: string;
  county?: string;
  postalCode: string;
  mapLocation: string;
  vanIds: string[];
};
