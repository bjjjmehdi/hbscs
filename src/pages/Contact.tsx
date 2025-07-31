import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import BlurText from '../components/BlurText';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{t('contact.seo.title')}</title>
        <meta name="description" content={t('contact.seo.description')} />
        <meta name="keywords" content={t('contact.seo.keywords')} />
        <meta property="og:title" content={t('contact.seo.title')} />
        <meta property="og:description" content={t('contact.seo.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="/hbscshouse11.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('contact.seo.title')} />
        <meta name="twitter:description" content={t('contact.seo.description')} />
        <meta name="twitter:image" content="/hbscshouse11.jpg" />
      </Helmet>
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BlurText 
              text={t('contact.title')}
              className="text-4xl font-bold text-gray-800 mb-4"
              delay={100}
              animateBy="words"
            />
            <p className="text-xl text-gray-600">{t('contact.subtitle')}</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Address */}
              <div className="text-center">
                <div className="bg-teal-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('contact.info.address')}</h3>
                <p className="text-gray-600">
                  Rua da Carreira, 132<br />
                  9000-042 Funchal<br />
                  Madeira, Portugal
                </p>
              </div>

              {/* Phone */}
              <div className="text-center">
                <div className="bg-teal-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('contact.info.phone')}</h3>
                <p className="text-gray-600">+351 291 123 456</p>
              </div>

              {/* Email */}
              <div className="text-center">
                <div className="bg-teal-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('contact.info.email')}</h3>
                <p className="text-gray-600">info@hibiscusmadeira.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;