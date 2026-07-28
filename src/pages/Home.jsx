import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col justify-center px-12 lg:px-20">
      {/* 毛玻璃卡片 */}
      <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-16 max-w-5xl transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-white/80 hover:border-white/70 ring-1 ring-white/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_8px_32px_rgba(0,0,0,0.08)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_25px_50px_-12px_rgba(0,0,0,0.15)]">
        {/* 欢迎语 */}
        <p className="text-xs text-neutral-500/80 tracking-widest uppercase mb-8">
          {t('home.welcome')}
        </p>

        {/* 主标题 */}
        <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-10 text-neutral-700">
          {t('home.title').split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < t('home.title').split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>

        {/* 描述 */}
        <p className="text-neutral-600/90 text-lg leading-relaxed mb-10 max-w-2xl">
          {t('home.description')}
        </p>

        {/* 关键词 */}
        <div className="flex flex-wrap gap-4 mb-12">
          {t('home.tags', { returnObjects: true }).map((tag, index) => (
            <span
              key={index}
              className="text-xs text-neutral-500/70 tracking-wider px-3 py-1 border border-white/50 bg-white/20 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 分隔线 */}
        <div className="border-t border-neutral-300/50 my-10"></div>

        {/* 特色数据 - 放在玻璃卡片内部 */}
        <div className="grid grid-cols-3 gap-12">
          <div>
            <p className="text-4xl font-light text-neutral-800">1+</p>
            <p className="text-xs text-neutral-500/80 mt-1 tracking-wider">{t('home.stats.years')}</p>
          </div>
          <div>
            <p className="text-4xl font-light text-neutral-800">1+</p>
            <p className="text-xs text-neutral-500/80 mt-1 tracking-wider">{t('home.stats.projects')}</p>
          </div>
          <div>
            <p className="text-4xl font-light text-neutral-800">1+</p>
            <p className="text-xs text-neutral-500/80 mt-1 tracking-wider">{t('home.stats.clients')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
