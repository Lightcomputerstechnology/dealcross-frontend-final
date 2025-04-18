// src/components/LanguageSwitcher.jsx
import React, { useState } from 'react';

const languages = [
  { code: 'en', name: 'English', emoji: '🇺🇸' },
  { code: 'es', name: 'Español', emoji: '🇪🇸' },
  { code: 'fr', name: 'Français', emoji: '🇫🇷' },
  { code: 'de', name: 'Deutsch', emoji: '🇩🇪' },
  { code: 'zh', name: '中文', emoji: '🇨🇳' },
  { code: 'ru', name: 'Русский', emoji: '🇷🇺' },
  { code: 'ar', name: 'العربية', emoji: '🇸🇦' },
  { code: 'hi', name: 'हिन्दी', emoji: '🇮🇳' },
  { code: 'pt', name: 'Português', emoji: '🇧🇷' },
  { code: 'ja', name: '日本語', emoji: '🇯🇵' },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(languages[0]);

  const toggleDropdown = () => setOpen(!open);
  const selectLanguage = (lang) => {
    setCurrent(lang);
    setOpen(false);
    // future: handle language change logic here
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <span>{current.emoji}</span>
        <span className="text-sm font-medium">{current.name}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-md z-50 overflow-y-auto max-h-64 transition duration-300 ease-in-out">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => selectLanguage(lang)}
              className="flex w-full items-center justify-start px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="mr-2">{lang.emoji}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
