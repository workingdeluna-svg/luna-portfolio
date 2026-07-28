import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col justify-center px-12 lg:px-20">
      {/* 欢迎语 */}
      <div className="max-w-2xl">
        <p className="text-xs text-neutral-400 tracking-widest uppercase mb-6">
          {t('home.welcome')}
        </p>
        <h1 className="text-4xl lg:text-5xl font-light text-neutral-900 leading-tight mb-8">
          {t('home.title').split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < t('home.title').split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>
        <p className="text-neutral-500 text-base leading-relaxed mb-12 max-w-lg">
          {t('home.description')}
        </p>

        {/* 关键词 */}
        <div className="flex flex-wrap gap-4">
          {t('home.tags', { returnObjects: true }).map((tag, index) => (
            <span
              key={index}
              className="text-xs text-neutral-400 tracking-wider px-3 py-1 border border-neutral-200 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 特色数据 */}
      <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg">
        <div>
          <p className="text-3xl font-light text-neutral-900">1+</p>
          <p className="text-xs text-neutral-400 mt-1 tracking-wider">{t('home.stats.years')}</p>
        </div>
        <div>
          <p className="text-3xl font-light text-neutral-900">1+</p>
          <p className="text-xs text-neutral-400 mt-1 tracking-wider">{t('home.stats.projects')}</p>
        </div>
        <div>
          <p className="text-3xl font-light text-neutral-900">1+</p>
          <p className="text-xs text-neutral-400 mt-1 tracking-wider">{t('home.stats.clients')}</p>
        </div>
      </div>
    </div>
  );
}
