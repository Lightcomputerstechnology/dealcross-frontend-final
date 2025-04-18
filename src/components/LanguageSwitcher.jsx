// src/components/LanguageSwitcher.jsx import React, { useState } from 'react';

const languages = [ { code: 'en', name: 'English', emoji: '🇺🇸' }, { code: 'es', name: 'Spanish', emoji: '🇪🇸' }, { code: 'fr', name: 'French', emoji: '🇫🇷' }, { code: 'de', name: 'German', emoji: '🇩🇪' }, { code: 'it', name: 'Italian', emoji: '🇮🇹' }, { code: 'pt', name: 'Portuguese', emoji: '🇵🇹' }, { code: 'zh', name: 'Chinese', emoji: '🇨🇳' }, { code: 'ja', name: 'Japanese', emoji: '🇯🇵' }, { code: 'ar', name: 'Arabic', emoji: '🇸🇦' }, { code: 'ru', name: 'Russian', emoji: '🇷🇺' }, ];

const LanguageSwitcher = () => { const [selected, setSelected] = useState(languages[0]); const [open, setOpen] = useState(false);

const handleSelect = (lang) => { setSelected(lang); setOpen(false); // Add your i18n change logic here };

return ( <div className="relative inline-block text-left"> <button onClick={() => setOpen(!open)} className="inline-flex items-center px-3 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md hover:shadow" > <span className="mr-2">{selected.emoji}</span> {selected.name} </button>

{open && (
    <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleSelect(lang)}
          className="w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white flex items-center gap-2"
        >
          <span>{lang.emoji}</span>
          {lang.name}
        </button>
      ))}
    </div>
  )}
</div>

); };

export default LanguageSwitcher;

  
