import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import BlurText from '../components/BlurText';

const TermsOfService: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{t('terms.seo.title')}</title>
        <meta name="description" content={t('terms.seo.description')} />
      </Helmet>
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-8">
              <FileText className="h-8 w-8 text-teal-600" />
              <BlurText 
                text={t('terms.title')}
                className="text-3xl font-bold text-gray-800"
                delay={100}
                animateBy="words"
              />
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-sm text-gray-500 mb-8">{t('terms.lastupdated')}: {new Date().toLocaleDateString()}</p>

              <section className="mb-8">
                <BlurText 
                  text={t('terms.acceptance.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <p>{t('terms.acceptance.content')}</p>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('terms.services.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <p>{t('terms.services.content')}</p>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('terms.bookings.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <p>{t('terms.bookings.intro')}</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>{t('terms.bookings.confirmation')}</li>
                  <li>{t('terms.bookings.payment')}</li>
                  <li>{t('terms.bookings.checkin')}</li>
                  <li>{t('terms.bookings.checkout')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('terms.cancellation.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <p>{t('terms.cancellation.content')}</p>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('terms.conduct.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <p>{t('terms.conduct.intro')}</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>{t('terms.conduct.respect')}</li>
                  <li>{t('terms.conduct.damage')}</li>
                  <li>{t('terms.conduct.noise')}</li>
                  <li>{t('terms.conduct.smoking')}</li>
                  <li>{t('terms.conduct.pets')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('terms.liability.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <p>{t('terms.liability.content')}</p>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('terms.intellectual.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <p>{t('terms.intellectual.content')}</p>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('terms.governing.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <p>{t('terms.governing.content')}</p>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('terms.contact.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <p>{t('terms.contact.content')}</p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="font-medium">Hibiscus Madeira</p>
                  <p>Rua da Carreira, 132</p>
                  <p>9000-042 Funchal, Madeira, Portugal</p>
                  <p>Email: legal@hibiscusmadeira.com</p>
                  <p>Phone: +351 291 123 456</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;