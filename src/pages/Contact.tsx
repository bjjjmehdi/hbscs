import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import BlurText from '../components/BlurText';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
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