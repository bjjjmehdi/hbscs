import { Apartment } from '../types';

export const apartments: Apartment[] = [
  {
    id: 'ocean-vista',
    nameKey: 'apt.ocean.name',
    shortDescriptionKey: 'apt.ocean.short',
    descriptionKey: 'apt.ocean.desc',
    images: [
      '/hsbscshouse1.jpg',
      '/hbscshouse2.jpg',
      '/hbscshouse3.jpg',
      '/hbscshouse4.jpg',
      '/hbscshouse5.jpg',
      '/hbscshouse6.jpg',
      '/hbscshouse7.jpg',
      '/hbscshouse8.jpg',
      '/hbscshouse9.jpg',
      '/hbscshouse10.jpg',
      '/hbscshouse11.jpg',
      '/hbscshouse12.jpg',
      '/hbscshouse13.jpg',
      '/hbscshouse14.jpg',
      '/hbscshouse15.jpg',
      '/hbscshouse16.jpg',
      '/hbscshouse17.jpg',
      '/hbscshouse18.jpg'
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
    bedrooms: 3,
    fullBathrooms: 1,
    halfBathrooms: 1,
    queenBeds: 2,
    singleBeds: 2,
    sofaBeds: 1
  }
];