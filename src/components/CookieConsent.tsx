import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const CookieConsent: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('hibiscus-cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('hibiscus-cookie-consent', JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    const selectedPreferences = {
      ...preferences,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('hibiscus-cookie-consent', JSON.stringify(selectedPreferences));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const rejected = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('hibiscus-cookie-consent', JSON.stringify(rejected));
    setIsVisible(false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'necessary') return; // Necessary cookies cannot be disabled
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Cookie className="h-6 w-6 text-teal-600" />
              <h2 className="text-xl font-bold text-gray-800">{t('cookies.title')}</h2>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {t('cookies.description')}
          </p>

          {!showSettings ? (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  {t('cookies.acceptall')}
                </button>
                <button
                  onClick={handleRejectAll}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  {t('cookies.rejectall')}
                </button>
              </div>
              <button
                onClick={() => setShowSettings(true)}
                className="w-full flex items-center justify-center space-x-2 text-teal-600 hover:text-teal-700 font-medium py-2 transition-colors duration-200"
              >
                <Settings className="h-4 w-4" />
                <span>{t('cookies.customize')}</span>
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-4">
                {/* Necessary Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">{t('cookies.necessary.title')}</h3>
                    <div className="bg-gray-300 rounded-full w-12 h-6 flex items-center px-1">
                      <div className="bg-white w-4 h-4 rounded-full shadow transform translate-x-6"></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{t('cookies.necessary.desc')}</p>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">{t('cookies.analytics.title')}</h3>
                    <button
                      onClick={() => togglePreference('analytics')}
                      className={`rounded-full w-12 h-6 flex items-center px-1 transition-colors duration-200 ${
                        preferences.analytics ? 'bg-teal-600' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`bg-white w-4 h-4 rounded-full shadow transform transition-transform duration-200 ${
                        preferences.analytics ? 'translate-x-6' : 'translate-x-0'
                      }`}></div>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">{t('cookies.analytics.desc')}</p>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">{t('cookies.marketing.title')}</h3>
                    <button
                      onClick={() => togglePreference('marketing')}
                      className={`rounded-full w-12 h-6 flex items-center px-1 transition-colors duration-200 ${
                        preferences.marketing ? 'bg-teal-600' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`bg-white w-4 h-4 rounded-full shadow transform transition-transform duration-200 ${
                        preferences.marketing ? 'translate-x-6' : 'translate-x-0'
                      }`}></div>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">{t('cookies.marketing.desc')}</p>
                </div>

                {/* Functional Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">{t('cookies.functional.title')}</h3>
                    <button
                      onClick={() => togglePreference('functional')}
                      className={`rounded-full w-12 h-6 flex items-center px-1 transition-colors duration-200 ${
                        preferences.functional ? 'bg-teal-600' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`bg-white w-4 h-4 rounded-full shadow transform transition-transform duration-200 ${
                        preferences.functional ? 'translate-x-6' : 'translate-x-0'
                      }`}></div>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">{t('cookies.functional.desc')}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAcceptSelected}
                  className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  {t('cookies.savepreferences')}
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  {t('cookies.back')}
                </button>
              </div>
            </div>
          )}

          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              {t('cookies.moreinfo')}{' '}
              <Link to="/cookie-policy" className="text-teal-600 hover:text-teal-700 underline">
                {t('cookies.policy')}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;