import { Apartment } from '../types';

export const apartments: Apartment[] = [
  {
    id: 'ocean-vista',
    nameKey: 'apt.ocean.name',
    shortDescriptionKey: 'apt.ocean.short',
    descriptionKey: 'apt.ocean.desc',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    amenitiesKeys: [
      'amenity.ocean.views',
      'amenity.terrace',
      'amenity.kitchen',
      'amenity.bedding',
      'amenity.wifi',
      'amenity.ac',
      'amenity.concierge',
      'amenity.housekeeping'
    ],
    location: {
      lat: 32.6669,
      lng: -16.9241,
      address: 'Zona Velha, Funchal, Madeira'
    },
    price: 280,
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2
  }
];