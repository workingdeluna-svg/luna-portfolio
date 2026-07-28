import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";
export default function PhotographyGrid({ works, subCategories, categoryId }) {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();
  const [activeSubCategory, setActiveSubCategory] = useState('personal-projects');
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedPhotos, setDisplayedPhotos] = useState([]);

  // 初始化显示风光
  useEffect(() => {
    if (works && works[activeSubCategory]) {
      setDisplayedPhotos(works[activeSubCategory]);
    }
  }, [works]);

  // 切换子分类
  const handleSubCategoryChange = (subId) => {
    if (subId === activeSubCategory) return;

    setIsAnimating(true);

    // 淡出动画
    setTimeout(() => {
      setActiveSubCategory(subId);
      setDisplayedPhotos(works[subId] || []);

      // 淡入动画
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 200);
  };

  // 处理照片点击 - 跳转到详情页
  const handlePhotoClick = (photoId) => {
    setLocation(`/work/${categoryId}/${photoId}`);
  };

  return (
    <div>
      {/* 子分类标签按钮 */}
      <div className="flex gap-8 mb-16 border-b border-neutral-200 pb-4">
          {subCategories.map((sub) => (
            <button
              key={sub.id}
              onClick={() => handleSubCategoryChange(sub.id)}
              className={`text-sm transition-all duration-200 ${
                activeSubCategory === sub.id
                  ? 'text-neutral-900'
                  : 'text-neutral-400 hover:text-neutral-600'
              }`}
            >
              {t(`subCategories.${sub.id}`, sub.name)}
            </button>
          ))}
      </div>

      {/* CSS Columns 瀑布流布局 - 自然错落保持原始宽高比 */}
      <div
        className={`columns-2 md:columns-3 gap-1 transition-opacity duration-200 ${
          isAnimating ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {displayedPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => handlePhotoClick(photo.id)}
            className="break-inside-avoid mb-1 group cursor-pointer overflow-hidden bg-white"
          >
            <img
              src={photo.image}
              alt=""
              className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* 空状态 */}
      {displayedPhotos.length === 0 && (
        <div className="text-center py-20">
          <p className="text-neutral-400">{t('work.noPhotos')}</p>
        </div>
      )}
    </div>
  );
}