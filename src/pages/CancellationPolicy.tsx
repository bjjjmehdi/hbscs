import React from 'react';
import { Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import BlurText from '../components/BlurText';

const CancellationPolicy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-8">
              <Calendar className="h-8 w-8 text-teal-600" />
              <BlurText 
                text={t('cancellation.title')}
                className="text-3xl font-bold text-gray-800"
                delay={100}
                animateBy="words"
              />
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-sm text-gray-500 mb-8">{t('cancellation.lastupdated')}: {new Date().toLocaleDateString()}</p>

              <section className="mb-8">
                <BlurText 
                  text={t('cancellation.overview.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <p>{t('cancellation.overview.content')}</p>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('cancellation.standard.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-teal-800 mb-4">{t('cancellation.standard.subtitle')}</h3>
                  <ul className="space-y-3 text-teal-700">
                    <li className="flex items-start space-x-2">
                      <span className="font-semibold">•</span>
                      <span>{t('cancellation.standard.free')}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-semibold">•</span>
                      <span>{t('cancellation.standard.partial')}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-semibold">•</span>
                      <span>{t('cancellation.standard.norefund')}</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('cancellation.flexible.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-4">{t('cancellation.flexible.subtitle')}</h3>
                  <ul className="space-y-3 text-green-700">
                    <li className="flex items-start space-x-2">
                      <span className="font-semibold">•</span>
                      <span>{t('cancellation.flexible.free')}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-semibold">•</span>
                      <span>{t('cancellation.flexible.partial')}</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('cancellation.strict.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-4">{t('cancellation.strict.subtitle')}</h3>
                  <ul className="space-y-3 text-red-700">
                    <li className="flex items-start space-x-2">
                      <span className="font-semibold">•</span>
                      <span>{t('cancellation.strict.partial')}</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-semibold">•</span>
                      <span>{t('cancellation.strict.norefund')}</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('cancellation.process.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <ol className="list-decimal pl-6 space-y-2">
                  <li>{t('cancellation.process.step1')}</li>
                  <li>{t('cancellation.process.step2')}</li>
                  <li>{t('cancellation.process.step3')}</li>
                  <li>{t('cancellation.process.step4')}</li>
                </ol>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('cancellation.exceptions.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <p>{t('cancellation.exceptions.content')}</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>{t('cancellation.exceptions.weather')}</li>
                  <li>{t('cancellation.exceptions.emergency')}</li>
                  <li>{t('cancellation.exceptions.government')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('cancellation.modifications.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <p>{t('cancellation.modifications.content')}</p>
              </section>

              <section className="mb-8">
                <BlurText 
                  text={t('cancellation.contact.title')}
                  className="text-2xl font-semibold text-gray-800 mb-4"
                  delay={80}
                  animateBy="words"
                />
                <p>{t('cancellation.contact.content')}</p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="font-medium">Hibiscus Madeira</p>
                  <p>Email: bookings@hibiscusmadeira.com</p>
                  <p>Phone: +351 291 123 456</p>
                  <p>{t('cancellation.contact.hours')}: {t('contact.info.weekdays')} 9:00-18:00</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;