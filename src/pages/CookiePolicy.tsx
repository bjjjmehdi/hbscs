import React from 'react';
import { Cookie } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import BlurText from '../components/BlurText';

const CookiePolicy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-8">
              <Cookie className="h-8 w-8 text-teal-600" />
              <BlurText 
                text={t('cookiepolicy.title')}
                className="text-3xl font-bold text-gray-800"
                delay={100}
                animateBy="words"
              />
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-sm text-gray-500 mb-8">{t('cookiepolicy.lastupdated')}: {new Date().toLocaleDateString()}</p>

              <section className="mb-8">
                <BlurText 
                  text={t('cookiepolicy.what.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <p>{t('cookiepolicy.what.content')}</p>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('cookiepolicy.types.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                
                <div className="space-y-6">
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('cookiepolicy.types.necessary.title')}</h3>
                    <p>{t('cookiepolicy.types.necessary.content')}</p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('cookiepolicy.types.analytics.title')}</h3>
                    <p>{t('cookiepolicy.types.analytics.content')}</p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('cookiepolicy.types.marketing.title')}</h3>
                    <p>{t('cookiepolicy.types.marketing.content')}</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('cookiepolicy.types.functional.title')}</h3>
                    <p>{t('cookiepolicy.types.functional.content')}</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('cookiepolicy.manage.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <p>{t('cookiepolicy.manage.content')}</p>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('cookiepolicy.thirdparty.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <p>{t('cookiepolicy.thirdparty.content')}</p>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('cookiepolicy.updates.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <p>{t('cookiepolicy.updates.content')}</p>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('cookiepolicy.contact.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <p>{t('cookiepolicy.contact.content')}</p>
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

export default CookiePolicy;