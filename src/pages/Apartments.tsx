import React from 'react';
import { useParams } from 'react-router-dom';
import { apartments } from '../data/apartments';
import ApartmentCard from '../components/ApartmentCard';
import ImageGallery from '../components/ImageGallery';
import BookingCalendar from '../components/BookingCalendar';
import { MapPin, Users, Bed, Bath, Wifi, Car, Coffee, Waves } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import BlurText from '../components/BlurText';

const Apartments: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  
  if (id) {
    const apartment = apartments.find(apt => apt.id === id);
    
    if (!apartment) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('apartments.notfound.title')}</h1>
            <p className="text-xl text-gray-600">{t('apartments.notfound.subtitle')}</p>
          </div>
        </div>
      );
    }

    const amenityIcons: { [key: string]: React.ReactNode } = {
      'amenity.wifi': <Wifi className="h-5 w-5" />,
      'amenity.terrace': <Waves className="h-5 w-5" />,
      'amenity.kitchen': <Coffee className="h-5 w-5" />,
      'amenity.ac': <Car className="h-5 w-5" />,
      'amenity.concierge': <Users className="h-5 w-5" />,
      'amenity.housekeeping': <Coffee className="h-5 w-5" />,
      'amenity.garden': <Waves className="h-5 w-5" />,
      'amenity.fireplace': <Coffee className="h-5 w-5" />,
      'amenity.spa.bathroom': <Bath className="h-5 w-5" />,
      'amenity.hiking': <MapPin className="h-5 w-5" />,
      'amenity.yoga': <Users className="h-5 w-5" />
    };

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <BlurText 
                      text={t(apartment.nameKey)}
                      className="text-3xl font-bold text-gray-800 mb-2"
                      delay={100}
                      animateBy="words"
                    />
                    <div className="flex items-center space-x-1 mb-6">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">{apartment.location.address}</span>
                    </div>
                    
                    <div className="mb-6">
                      <ImageGallery images={apartment.images} title={t(apartment.nameKey)} />
                    </div>

                    <div className="mb-6">
                      <BlurText 
                        text={t('apartments.details.about')}
                        className="text-xl font-semibold text-gray-800 mb-3"
                        delay={80}
                        animateBy="words"
                      />
                      <p className="text-gray-600 leading-relaxed">{t(apartment.descriptionKey)}</p>
                    </div>

                    <div className="mb-6">
                      <BlurText 
                        text={t('apartments.details.title')}
                        className="text-xl font-semibold text-gray-800 mb-3"
                        delay={80}
                        animateBy="words"
                      />
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="flex items-center space-x-2">
                          <Users className="h-5 w-5 text-gray-400" />
                          <span className="text-gray-600">{apartment.maxGuests} {t('apartments.details.guests')}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Bed className="h-5 w-5 text-gray-400" />
                          <span className="text-gray-600">
                            {apartment.bedrooms} {apartment.bedrooms > 1 ? t('apartments.details.bedrooms') : t('apartments.details.bedroom')}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Bath className="h-5 w-5 text-gray-400" />
                          <span className="text-gray-600">
                            {apartment.bathrooms} {apartment.bathrooms > 1 ? t('apartments.details.bathrooms') : t('apartments.details.bathroom')}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-5 w-5 text-gray-400" />
                          <span className="text-gray-600">{t('apartments.details.location')}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <BlurText 
                        text={t('apartments.amenities')}
                        className="text-xl font-semibold text-gray-800 mb-3"
                        delay={80}
                        animateBy="words"
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {apartment.amenitiesKeys.map((amenityKey, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            {amenityIcons[amenityKey] || <Coffee className="h-5 w-5" />}
                            <span className="text-gray-600">{t(amenityKey)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <BlurText 
                        text={t('apartments.location')}
                        className="text-xl font-semibold text-gray-800 mb-3"
                        delay={80}
                        animateBy="words"
                      />
                      <div className="aspect-video rounded-lg overflow-hidden bg-gray-200">
                        <iframe
                          src={`https://maps.google.com/maps?q=${apartment.location.lat},${apartment.location.lng}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`${t(apartment.nameKey)} Location`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <BookingCalendar
                  apartmentId={apartment.id}
                  price={apartment.price}
                  maxGuests={apartment.maxGuests}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BlurText 
              text={t('apartments.title')}
              className="text-4xl font-bold text-gray-800 mb-4"
              delay={100}
              animateBy="words"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('apartments.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {apartments.map((apartment) => (
              <ApartmentCard key={apartment.id} apartment={apartment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apartments;