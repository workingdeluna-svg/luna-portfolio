import React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link, useLocation } from 'wouter';
import { workCategories, worksData } from '../data/works';
import GraphicDesignGrid from "../components/GraphicDesignGrid";
import PhotographyGrid from "../components/PhotographyGrid";
import BrandIdentityGrid from "../components/BrandIdentityGrid";
import VideoEditorGrid from "../components/VideoEditorGrid";

// 摄影子分类组件 - CSS Columns 瀑布流布局

// 普通作品网格组件
function WorksGrid({ works, categoryId }) {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();

  // 处理作品点击
  const handleWorkClick = (workId) => {
    setLocation(`/work/${categoryId}/${workId}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {works.map((work) => (
        <div
          key={work.id}
          className="group cursor-pointer"
          onClick={() => handleWorkClick(work.id)}
        >
          {/* 图片容器 */}
          <div className="aspect-[4/3] overflow-hidden bg-neutral-100 mb-4">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* 作品信息 */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                {t(`works.${categoryId}.${work.id}.title`, work.title)}
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                {t(`works.${categoryId}.${work.id}.description`, work.description || '')}
              </p>
            </div>
            <span className="text-xs text-neutral-300">{work.year}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Work() {
  const { t } = useTranslation();
  const { categoryId } = useParams();
  const [, setLocation] = useLocation();
  const [activeCategory, setActiveCategory] = useState(
    categoryId || 'logo-design'
  );
  const [key, setKey] = useState(0); // 用于触发重新渲染

  // 当 URL 参数变化时更新当前分类
  useEffect(() => {
    if (categoryId && workCategories.find((c) => c.id === categoryId)) {
      setActiveCategory(categoryId);
    }
  }, [categoryId]);

  // 获取当前分类的作品
  const currentWorks = worksData[activeCategory];

  // 获取当前分类信息
  const currentCategory = workCategories.find((c) => c.id === activeCategory);

  // 判断是否为摄影分类
  const isPhotography = activeCategory === 'photographer';
  
  // 判断是否为 Logo Design 分类
  const isBrandIdentity = activeCategory === 'logo-design';

  const isGraphicDesign = activeCategory === 'graphic-design';



  // 处理摄影分类点击 - 刷新页面
  const handlePhotographyClick = (e) => {
    if (activeCategory === 'photographer') {
      e.preventDefault();
      // 通过改变 key 触发重新渲染，重置到默认状态
      setKey((prev) => prev + 1);
      // 重新定位到当前页面（刷新效果）
      setLocation('/work/photographer');
    }
  };

  return (
    <div className="min-h-screen p-8 lg:p-12">
      {/* 页面标题 */}
      <div className="mb-12">
        <p className="text-xs text-neutral-400 tracking-widest uppercase mb-4">
          {t('work.pageTitle')}
        </p>
        <h1 className="text-3xl font-light text-neutral-900">
          {t(`categories.${currentCategory?.id}`, currentCategory?.name)}
        </h1>
        {currentCategory?.description && (
          <p className="text-neutral-400 text-xs mt-3 leading-relaxed max-w-md">
            {t(`categoryDescriptions.${currentCategory.id}`, currentCategory.description)}
          </p>
        )}
      </div>

      {/* 分类切换 (移动端显示) */}
      <div className="lg:hidden mb-8">
        <div className="flex flex-wrap gap-2">
          {workCategories.map((category) => (
            <Link key={category.id} href={`/work/${category.id}`}>
              <button
                onClick={
                  category.id === 'photographer'
                    ? handlePhotographyClick
                    : undefined
                }
                className={`px-4 py-2 text-xs tracking-wider transition-all duration-200 border ${
                  activeCategory === category.id
                    ? 'bg-neutral-900 text-white border-neutral-900'
                    : 'bg-white text-neutral-400 border-neutral-200 hover:border-neutral-400'
                }`}
              >
                {t(`categories.${category.id}`, category.name)}
              </button>
            </Link>
          ))}
        </div>
      </div>

      {/* 内容区域 */}
      {isPhotography ? (
        currentWorks && currentWorks.subCategories ? (
<PhotographyGrid
    key={key}
    works={currentWorks}
    subCategories={currentWorks.subCategories}
    categoryId={activeCategory}
/>
        ) : (
          <div className="text-center py-20">
            <p className="text-neutral-400">{t('work.emptyState')}</p>
          </div>
        )
      ) : isBrandIdentity ? (
        <BrandIdentityGrid works={currentWorks} activeCategory={activeCategory} />
        
      ) : activeCategory === "graphic-design" ? (
        <GraphicDesignGrid works={currentWorks} activeCategory={activeCategory} />

      ) : activeCategory === "video-editor" ? (
        <VideoEditorGrid works={currentWorks} activeCategory={activeCategory} />

      ) : (
        // 普通分类网格展示 (Videography)
        <>
          {Array.isArray(currentWorks) ? (
            <WorksGrid works={currentWorks} categoryId={activeCategory} />
          ) : (
            <div className="text-center py-20">
              <p className="text-neutral-400">{t('work.emptyState')}</p>
            </div>
          )}
        </>
      )}

      {/* 空状态 */}
      {!currentWorks && (
        <div className="text-center py-20">
          <p className="text-neutral-400">{t('work.noWorksFound')}</p>
        </div>
      )}
    </div>
  );
}
