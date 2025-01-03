export type EventEnquiry = {
    name: string;
    eventCategory: string;
    phoneNumber: string;
    email: string;
    eventDate: Date;
    eventTime: string;
    guestsNumber: Number;
    address: string;
    details?: string;
  }