// src/components/LanguageSwitcher.jsx
import React, { useState } from 'react';

const languages = [
  { code: 'en', label: 'English', emoji: '🇬🇧' },
  { code: 'fr', label: 'Français', emoji: '🇫🇷' },
  { code: 'es', label: 'Español', emoji: '🇪🇸' },
  { code: 'de', label: 'Deutsch', emoji: '🇩🇪' },
  { code: 'zh', label: '中文', emoji: '🇨🇳' },
  { code: 'ru', label: 'Русский', emoji: '🇷🇺' },
  { code: 'ar', label: 'العربية', emoji: '🇸🇦' },
  { code: 'pt', label: 'Português', emoji: '🇵🇹' }
];

const LanguageSwitcher = () => {
  const [selectedLang, setSelectedLang] = useState('en');
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);
  const selectLanguage = (code) => {
    setSelectedLang(code);
    setOpen(false);
  };

  const activeLabel = languages.find(lang => lang.code === selectedLang)?.label;

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-md text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        🌐 {activeLabel}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 max-h-60 overflow-y-auto z-50">
          <div className="py-1">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => selectLanguage(lang.code)}
                className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {lang.emoji} {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
    
