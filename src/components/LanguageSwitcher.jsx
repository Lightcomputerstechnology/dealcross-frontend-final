// src/components/LanguageSwitcher.jsx
import React, { useState } from 'react';

const languages = [
  { code: 'en', label: 'English', emoji: '🇬🇧' },
  { code: 'es', label: 'Español', emoji: '🇪🇸' },
  { code: 'fr', label: 'Français', emoji: '🇫🇷' },
  { code: 'de', label: 'Deutsch', emoji: '🇩🇪' },
  { code: 'zh', label: '中文', emoji: '🇨🇳' },
  { code: 'ar', label: 'العربية', emoji: '🇸🇦' },
  { code: 'ru', label: 'Русский', emoji: '🇷🇺' },
  { code: 'hi', label: 'हिन्दी', emoji: '🇮🇳' },
  { code: 'pt', label: 'Português', emoji: '🇧🇷' },
  { code: 'ja', label: '日本語', emoji: '🇯🇵' },
  { code: 'tr', label: 'Türkçe', emoji: '🇹🇷' },
];

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);

  const handleSelect = (lang) => {
    setSelected(lang);
    setOpen(false);
    // TODO: implement actual language change logic
  };

  return (
    <div className="relative text-sm z-50">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white hover:shadow transition duration-300"
      >
        <span className="mr-2">{selected.emoji}</span>
        {selected.label}
      </button>

      {open && (
        <div className="absolute mt-2 w-40 max-h-60 overflow-y-auto bg-white dark:bg-gray-900 border dark:border-gray-700 rounded shadow-lg transition-all duration-300 ease-in-out">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className="px-4 py-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-800 flex items-center gap-2"
            >
              <span>{lang.emoji}</span>
              {lang.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
      
