export interface Apartment {
  id: string;
  nameKey: string;
  descriptionKey: string;
  shortDescriptionKey: string;
  images: string[];
  video?: string;
  amenitiesKeys: string[];
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  price: number;
  maxGuests: number;
  bedrooms: number;
  fullBathrooms: number;
  halfBathrooms: number;
  queenBeds: number;
  singleBeds: number;
  sofaBeds: number;
}

export interface BookingData {
  checkIn: string;
  checkOut: string;
  guests: number;
  apartmentId: string;
}