import React from 'react';
import { Link } from 'react-router-dom';
import { Flower, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Flower className="h-8 w-8 text-teal-400" />
              <span className="text-2xl font-bold">Hibiscus</span>
            </Link>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quicklinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/apartments" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                  {t('nav.apartments')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-teal-400 transition-colors duration-200">
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-teal-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Rua da Carreira, 132<br />
                  9000-042 Funchal<br />
                  Madeira, Portugal
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-teal-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+351 291 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-teal-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@hibiscusmadeira.com</span>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm">
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm">
                  {t('footer.cookies')}
                </Link>
              </li>
              <li>
                <Link to="/cancellation-policy" className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm">
                  {t('footer.cancellation')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Hibiscus Madeira. {t('footer.rights')}
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              {t('footer.madewith')} ❤️ {t('footer.inmadeira')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;