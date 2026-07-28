import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * 语言切换组件
 * 显示三个按钮：EN、ES、中文
 * 当前选中的语言使用深色（neutral-900），未选中的使用浅色（neutral-400）
 */
export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const languages = [
    { code: 'en', label: t('language.en') },
    { code: 'es', label: t('language.es') },
    { code: 'zh', label: t('language.zh') },
  ];

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`text-xs tracking-wider px-2 py-1 transition-colors duration-200 ${
            i18n.language === lang.code
              ? 'text-neutral-900 font-medium'
              : 'text-neutral-400 hover:text-neutral-600'
          }`}
          aria-label={`Switch to ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
