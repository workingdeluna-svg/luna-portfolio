import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'wouter';
import { workCategories } from '../data/works';
import LanguageSwitcher from './LanguageSwitcher';

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const [location] = useLocation();

  const isActive = (path) => {
    if (path === '/') {
      return location === '/';
    }
    return location.startsWith(path);
  };

  return (
    <>
      {/* 手机顶部栏 */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-neutral-100 z-50 flex items-center justify-between px-5">

        <button
          onClick={() =>{console.log("open"); setOpen(true)}}
          className="text-neutral-900"
        >
          <Menu size={24} />
        </button>

        <Link href="/">
          <h1 className="text-lg font-light tracking-wide">
            Luna Qiu
          </h1>
        </Link>

        <LanguageSwitcher />

      </header>


      {/* 黑色遮罩 */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="md:hidden fixed inset-0 bg-black/30 z-50"
        />
      )}


      {/* 左侧滑出菜单 */}
      <aside
        className={`
          md:hidden fixed top-0 left-0 h-screen w-72 bg-white z-[60]
          transform transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >

      {/* Header */}
        <div className="h-16 px-6 border-b border-neutral-100 flex items-center justify-between">

          <h1 className="text-lg font-light">
            Luna Qiu
          </h1>

          <button onClick={() => setOpen(false)}>
            <X size={22}/>
          </button>

        </div>
  

        {/* Menu */}
        <nav className="py-8">

          <h2 className="px-8 text-[10px] text-neutral-300 tracking-widest uppercase mb-4">
            {t('nav.work')}
          </h2>


          <ul className="space-y-1">

            {workCategories.map((category)=>(
              <li key={category.id}>

                <Link href={`/work/${category.id}`}>
                  <div
                    onClick={()=>setOpen(false)}
                    className={`
                      px-8 py-3 text-sm
                      ${
                        isActive(`/work/${category.id}`)
                        ? 'text-neutral-900'
                        : 'text-neutral-400'
                      }
                    `}
                  >
                    {t(`categories.${category.id}`, category.name)}
                  </div>
                </Link>

              </li>
            ))}

          </ul>


          <div className="mt-8">

            <h2 className="px-8 text-[10px] text-neutral-300 tracking-widest uppercase mb-4">
              {t('nav.navigate')}
            </h2>


            <Link href="/contact">

              <div
                onClick={()=>setOpen(false)}
                className={`
                  px-8 py-3 text-sm
                  ${
                    isActive('/contact')
                    ? 'text-neutral-900'
                    : 'text-neutral-400'
                  }
                `}
              >
                {t('nav.contact')}
              </div>

            </Link>

          </div>

        </nav>

      </aside>

    </>
  );
}