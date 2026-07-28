import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useRoute } from 'wouter';
import { workCategories } from '../data/works';

export default function Sidebar() {
  const { t } = useTranslation();
  const [location] = useLocation();
  const [isPhotographerPage] = useRoute('/work/photographer');

  // 检查当前路径是否激活
  const isActive = (path) => {
    if (path === '/') {
      return location === '/';
    }
    return location.startsWith(path);
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-white border-r border-neutral-100 flex flex-col z-50">
      {/* Logo 区域 */}
      <div className="p-8 border-b border-neutral-100">
        <Link href="/">
          <div className="cursor-pointer group">
            <h1 className="text-xl font-light tracking-wide text-neutral-900 group-hover:text-neutral-600 transition-colors">
              Luna Qiu
            </h1>
            <p className="text-xs text-neutral-400 mt-1 tracking-widest uppercase">
              {t('nav.title', 'Visual Designer')}
            </p>
          </div>
        </Link>
      </div>

      {/* 导航区域 */}
      <nav className="flex-1 overflow-y-auto py-8">
        {/* Work 分类 */}
        <div className="mb-8">
          <h2 className="px-8 text-[10px] text-neutral-300 tracking-widest uppercase mb-4 font-medium">
            {t('nav.work')}
          </h2>
          <ul className="space-y-1">
            {workCategories.map((category) => (
              <li key={category.id}>
                {category.id === 'photographer' && isPhotographerPage ? (
                  // 摄影分类在当前页面时，点击触发刷新
                  <a
                    href="#/work/photographer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.hash = '/work/photographer';
                      window.location.reload();
                    }}
                    className={`px-8 py-2 text-sm cursor-pointer transition-all duration-200 block ${
                      isActive(`/work/${category.id}`)
                        ? 'text-neutral-900 font-normal'
                        : 'text-neutral-400 hover:text-neutral-600'
                    }`}
                  >
                    {t(`categories.${category.id}`, category.name)}
                  </a>
                ) : (
                  <Link href={`/work/${category.id}`}>
                    <div
                      className={`px-8 py-2 text-sm cursor-pointer transition-all duration-200 ${
                        isActive(`/work/${category.id}`)
                          ? 'text-neutral-900 font-normal'
                          : 'text-neutral-400 hover:text-neutral-600'
                      }`}
                    >
                      {t(`categories.${category.id}`, category.name)}
                    </div>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* 页面导航 */}
        <div>
          <h2 className="px-8 text-[10px] text-neutral-300 tracking-widest uppercase mb-4 font-medium">
            {t('nav.navigate')}
          </h2>
          <ul className="space-y-1">
            <li>
              <Link href="/contact">
                <div
                  className={`px-8 py-2 text-sm cursor-pointer transition-all duration-200 ${
                    isActive('/contact')
                      ? 'text-neutral-900 font-normal'
                      : 'text-neutral-400 hover:text-neutral-600'
                  }`}
                >
                  {t('nav.contact')}
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* 底部版权 */}
      <div className="p-8 border-t border-neutral-100">
        <p className="text-[10px] text-neutral-300 tracking-wider">
          {t('footer.copyright', '© 2026 Luna Qiu')}
        </p>
      </div>
    </aside>
  );
}
