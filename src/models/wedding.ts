export interface IWedding {
  id: number;
  date: string;
  location: ILocation;
  groom: IPerson & { parents: IPerson[] };
  bride: IPerson & { parents: IPerson[] };
  message: {
    intro: string;
    invitation: string;
  };
  galleryImages: string[];
  attendCount: number;
}

export interface ILocation {
  lat: number;
  lng: number;
  name: string;
  address: string;
  link: string;
  waytocome: {
    metro: string[];
    bus: string[];
  };
}

export interface IPerson {
  name: string;
  account: IAccount;
  phoneNumber: string;
}

export interface IAccount {
  bankName: string;
  accountNumber: string;
  kakaopayLink?: string;
}
