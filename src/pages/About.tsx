import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, Leaf, Users, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import BlurText from '../components/BlurText';

const About: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-teal-600" />,
      title: t('about.values.passion.title'),
      description: t('about.values.passion.desc'),
    },
    {
      icon: <Leaf className="h-8 w-8 text-teal-600" />,
      title: t('about.values.sustainable.title'),
      description: t('about.values.sustainable.desc'),
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: t('about.values.service.title'),
      description: t('about.values.service.desc'),
    },
    {
      icon: <Award className="h-8 w-8 text-teal-600" />,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.desc'),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{t('about.seo.title')}</title>
        <meta name="description" content={t('about.seo.description')} />
        <meta name="keywords" content={t('about.seo.keywords')} />
        <meta property="og:title" content={t('about.seo.title')} />
        <meta property="og:description" content={t('about.seo.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="../hbscswbst1.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('about.seo.title')} />
        <meta name="twitter:description" content={t('about.seo.description')} />
        <meta name="twitter:image" content="../hbscswbst1.jpg" />
      </Helmet>
      <div className="pt-20 pb-12">
        {/* Hero Section with hbscswbst1.jpg */}
        <div className="relative h-96 mb-16">
          <div className="absolute inset-0">
            <img
              src="../hbscswbst1.jpg" // Changed to your local image
              alt={t('about.hero.image_alt')}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <BlurText 
                text={t('about.hero.title')}
                className="text-5xl font-bold mb-6"
                delay={100}
                animateBy="words"
              />
              <p className="text-xl leading-relaxed">
                {t('about.hero.subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* Rest of your component remains exactly the same */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <BlurText 
                text={t('about.heart.title')}
                className="text-3xl font-bold text-gray-800 mb-6"
                delay={100}
                animateBy="words"
              />
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>{t('about.heart.p1')}</p>
                <p>{t('about.heart.p2')}</p>
                <p>{t('about.heart.p3')}</p>
              </div>
            </div>

            <div className="space-y-6">
              <img
                src="../hbscswbst2.jpg"
                alt={t('about.founder.image_alt')}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <blockquote className="text-lg italic text-gray-600 mb-4">
                  "{t('about.quote')}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">MS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Maria Santos</p>
                    <p className="text-sm text-gray-600">
                      {t('about.founder')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <BlurText 
                text={t('about.values.title')}
                className="text-3xl font-bold text-gray-800 mb-4"
                delay={100}
                animateBy="words"
              />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('about.values.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                >
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <BlurText 
                text={t('about.philosophy.title')}
                className="text-3xl font-bold text-gray-800 mb-6"
                delay={100}
                animateBy="words"
              />
              <div className="prose prose-lg text-gray-600 mx-auto">
                <p className="mb-4">{t('about.philosophy.p1')}</p>
                <p className="mb-4">{t('about.philosophy.p2')}</p>
                <p>{t('about.philosophy.p3')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
