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
  bathrooms: number;
}

export interface BookingData {
  checkIn: string;
  checkOut: string;
  guests: number;
  apartmentId: string;
}