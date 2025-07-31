import React from 'react';
import { MapPin, Users, Bed, Bath, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Apartment } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ApartmentCardProps {
  apartment: Apartment;
}

const ApartmentCard: React.FC<ApartmentCardProps> = ({ apartment }) => {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src="/hbscshouse11.jpg"
          alt={`${t('apartment.card.alt.prefix')} ${t(apartment.nameKey)}`}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-lg text-sm font-semibold">
          €{apartment.price}{t('card.night')}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-800">{t(apartment.nameKey)}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">4.9</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{t(apartment.shortDescriptionKey)}</p>
        
        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{apartment.maxGuests} {t('card.guests')}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bed className="h-4 w-4" />
            <span>{apartment.bedrooms} {t('card.bed')}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bath className="h-4 w-4" />
            <span>{apartment.bathrooms} {t('card.bath')}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-1 mb-4">
          <MapPin className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-600">{apartment.location.address}</span>
        </div>
        
        <Link
          to={`/apartments/${apartment.id}`}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 text-center block"
        >
          {t('apartments.viewdetails')}
        </Link>
      </div>
    </div>
  );
};

export default ApartmentCard;