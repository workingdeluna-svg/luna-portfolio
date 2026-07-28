import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.js';
import esTranslations from './locales/es.js';
import zhTranslations from './locales/zh.js';

// 使用 createInstance() 创建 i18n 实例，避免全局冲突
const i18n = i18next.createInstance();

i18n.use(initReactI18next).init({
  // 配置三种语言
  resources: {
    en: {
      translation: enTranslations,
    },
    es: {
      translation: esTranslations,
    },
    zh: {
      translation: zhTranslations,
    },
  },
  // 默认语言设为 zh
  lng: 'zh',
  // 配置 fallbackLng
  fallbackLng: 'zh',
  // 关闭 debug 模式
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
