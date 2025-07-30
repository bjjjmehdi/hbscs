import React from 'react';
import { Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import BlurText from '../components/BlurText';

const PrivacyPolicy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-8">
              <Shield className="h-8 w-8 text-teal-600" />
              <BlurText 
                text={t('privacy.title')}
                className="text-3xl font-bold text-gray-800"
                delay={100}
                animateBy="words"
              />
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-sm text-gray-500 mb-8">{t('privacy.lastupdated')}: {new Date().toLocaleDateString()}</p>

              <section className="mb-8">
                <BlurText 
                  text={t('privacy.introduction.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <p>{t('privacy.introduction.content')}</p>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('privacy.datacollection.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <p>{t('privacy.datacollection.intro')}</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>{t('privacy.datacollection.personal')}</li>
                  <li>{t('privacy.datacollection.booking')}</li>
                  <li>{t('privacy.datacollection.technical')}</li>
                  <li>{t('privacy.datacollection.communication')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('privacy.datause.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <p>{t('privacy.datause.intro')}</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>{t('privacy.datause.bookings')}</li>
                  <li>{t('privacy.datause.communication')}</li>
                  <li>{t('privacy.datause.improvement')}</li>
                  <li>{t('privacy.datause.legal')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('privacy.datasharing.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <p>{t('privacy.datasharing.content')}</p>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('privacy.cookies.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <p>{t('privacy.cookies.content')}</p>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('privacy.rights.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <p>{t('privacy.rights.intro')}</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>{t('privacy.rights.access')}</li>
                  <li>{t('privacy.rights.rectification')}</li>
                  <li>{t('privacy.rights.erasure')}</li>
                  <li>{t('privacy.rights.portability')}</li>
                  <li>{t('privacy.rights.objection')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('privacy.security.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <p>{t('privacy.security.content')}</p>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('privacy.contact.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <p>{t('privacy.contact.content')}</p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="font-medium">Hibiscus Madeira</p>
                  <p>Rua da Carreira, 132</p>
                  <p>9000-042 Funchal, Madeira, Portugal</p>
                  <p>Email: privacy@hibiscusmadeira.com</p>
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

export default PrivacyPolicy;