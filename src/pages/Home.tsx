import React from 'react';
import Hero from '../components/Hero';
import ApartmentCard from '../components/ApartmentCard';
import { apartments } from '../data/apartments';
import { Leaf, Mountain, Waves, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import BlurText from '../components/BlurText';

const Home: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Mountain className="h-8 w-8 text-teal-600" />,
      title: t('home.features.mountain.title'),
      description: t('home.features.mountain.desc')
    },
    {
      icon: <Waves className="h-8 w-8 text-teal-600" />,
      title: t('home.features.ocean.title'),
      description: t('home.features.ocean.desc')
    },
    {
      icon: <Leaf className="h-8 w-8 text-teal-600" />,
      title: t('home.features.nature.title'),
      description: t('home.features.nature.desc')
    },
    {
      icon: <Star className="h-8 w-8 text-teal-600" />,
      title: t('home.features.luxury.title'),
      description: t('home.features.luxury.desc')
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BlurText 
              text={t('home.features.title')}
              className="text-4xl font-bold text-gray-800 mb-4"
              delay={100}
              animateBy="words"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.features.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Apartments */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BlurText 
              text={t('home.featured.title')}
              className="text-4xl font-bold text-gray-800 mb-4"
              delay={100}
              animateBy="words"
            />
            <p className="text-xl text-gray-600">
              {t('home.featured.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {apartments.map((apartment) => (
              <ApartmentCard key={apartment.id} apartment={apartment} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BlurText 
            text={t('home.cta.title')}
            className="text-4xl font-bold text-white mb-4"
            delay={100}
            animateBy="words"
          />
          <p className="text-xl text-teal-100 mb-8">
            {t('home.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/apartments"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              {t('home.cta.view')}
            </a>
            <a
              href="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              {t('home.cta.learn')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;