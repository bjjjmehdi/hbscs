import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Flower, Globe, ChevronDown } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { currentLanguage, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'EN' as Language, name: 'English', flag: '🇬🇧' },
    { code: 'PT' as Language, name: 'Português', flag: '🇵🇹' },
    { code: 'FR' as Language, name: 'Français', flag: '🇫🇷' }
  ];

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/apartments', label: t('nav.apartments') },
    { to: '/about', label: t('nav.about') },
    { to: '/contact', label: t('footer.contact') }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const selectLanguage = (langCode: Language) => {
    setLanguage(langCode);
    setIsLanguageOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Flower className={`h-8 w-8 ${isScrolled ? 'text-teal-600' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Hibiscus
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-medium transition-colors duration-200 hover:text-teal-500 ${
                  location.pathname === link.to
                    ? 'text-teal-500'
                    : isScrolled
                    ? 'text-gray-700'
                    : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={toggleLanguage}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-opacity-10 hover:bg-teal-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">{currentLanguage}</span>
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${
                  isLanguageOpen ? 'rotate-180' : ''
                }`} />
              </button>

              {/* Language Dropdown */}
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => selectLanguage(lang.code)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 hover:bg-teal-50 hover:text-teal-600 flex items-center space-x-3 ${
                        currentLanguage === lang.code ? 'bg-teal-50 text-teal-600' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Language Switcher */}
            <div className="relative">
              <button
                onClick={toggleLanguage}
                className={`flex items-center space-x-1 px-2 py-1 rounded-md ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                <Globe className="h-4 w-4" />
                <span className="text-xs font-medium">{currentLanguage}</span>
              </button>

              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => selectLanguage(lang.code)}
                      className={`w-full text-left px-3 py-2 text-sm transition-colors duration-200 hover:bg-teal-50 hover:text-teal-600 flex items-center space-x-2 ${
                        currentLanguage === lang.code ? 'bg-teal-50 text-teal-600' : 'text-gray-700'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === link.to
                    ? 'text-teal-500 bg-teal-50'
                    : 'text-gray-700 hover:text-teal-500 hover:bg-teal-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;