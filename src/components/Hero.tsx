import React from 'react';
import { ArrowRight, Mountain, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SplitText from './SplitText';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Replaced Video */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('../hbscswbst.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
      </div>

      {/* Content - Kept exactly the same */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="mb-8 flex items-center justify-center space-x-6">
          <Mountain className="h-8 w-8 text-teal-300" />
          <div className="w-16 h-px bg-teal-300"></div>
          <Waves className="h-8 w-8 text-teal-300" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <SplitText 
            text="Luxury Living"
            className="block"
            splitType="words"
            delay={150}
            duration={0.8}
            from={{ opacity: 0, y: 60, rotationX: -90 }}
            to={{ opacity: 1, y: 0, rotationX: 0 }}
            threshold={0.2}
            rootMargin="-50px"
          />
          <SplitText 
            text=" in Paradise"
            className="block text-teal-300"
            splitType="words"
            delay={200}
            duration={0.8}
            from={{ opacity: 0, y: 60, rotationX: -90 }}
            to={{ opacity: 1, y: 0, rotationX: 0 }}
            threshold={0.2}
            rootMargin="-50px"
          />
        </h1>

        <SplitText 
          text={t('hero.subtitle')}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90"
          splitType="words"
          delay={100}
          duration={0.6}
          from={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          to={{ opacity: 0.9, y: 0, filter: "blur(0px)" }}
          threshold={0.2}
          rootMargin="-50px"
        />

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/apartments"
            className="group bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <span>{t('hero.cta.explore')}</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/about"
            className="group border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            {t('hero.cta.story')}
          </Link>
        </div>
      </div>

      {/* Scroll Indicator - Kept exactly the same */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-px h-16 bg-white opacity-50"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
