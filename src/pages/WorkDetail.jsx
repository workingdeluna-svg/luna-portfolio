import React from 'react';
import { useParams, useLocation, Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import { workCategories, worksData } from '../data/works';

// 获取作品描述 - 优先从翻译文件获取，然后是 work 数据中的 description
function getWorkDescription(t, categoryId, workId, workDescription) {
  // 优先从翻译文件获取
  const translatedDesc = t(`workDetail.workDescriptions.${categoryId}.${workId}`, { defaultValue: '' });
  if (translatedDesc) {
    return translatedDesc;
  }

  // 如果没有翻译，使用原始描述
  if (workDescription) {
    return workDescription;
  }

  // 最后使用默认描述
  return t('work.defaultDescription');
}

// 章节分隔线组件
function SectionDivider() {
  return <div className="w-12 h-px bg-neutral-300 my-6" />;
}

// 章节标题组件
function SectionTitle({ children }) {
  return (
    <h2 className="text-xl font-bold text-neutral-900 tracking-tight text-center">
      {children}
    </h2>
  );
}

// 章节描述文字组件
function SectionText({ children }) {
  return (
    <p className="text-sm text-neutral-500 leading-relaxed whitespace-pre-line max-w-2xl text-center mx-auto">
      {children}
    </p>
  );
}

// 查找作品的通用函数
function findWork(categoryId, workId) {
  // 处理摄影分类的特殊结构
  if (categoryId === 'photographer') {
    const photoData = worksData['photographer'];
    if (!photoData) return null;

    // 遍历所有子分类
    for (const subCat of photoData.subCategories || []) {
      const subCatWorks = photoData[subCat.id];
      if (Array.isArray(subCatWorks)) {
        const work = subCatWorks.find((w) => w.id === workId);
        if (work) {
          return {
            ...work,
            subCategory: subCat.name,
            subCategoryId: subCat.id,
          };
        }
      }
    }
    return null;
  }

  // 处理普通分类
  const categoryWorks = worksData[categoryId];
  if (Array.isArray(categoryWorks)) {
    const work = categoryWorks.find((w) => w.id === workId || w.id === parseInt(workId, 10));
    return work || null;
  }

  return null;
}

export default function WorkDetail() {
  const { categoryId, id } = useParams();
  const [, setLocation] = useLocation();
  const { t } = useTranslation();

  // 查找作品
  const work = findWork(categoryId, id);

  // 获取分类信息
  const category = workCategories.find((c) => c.id === categoryId);

  // 处理返回
  const handleBack = () => {
    setLocation(`/work/${categoryId}`);
  };

  // 作品不存在
  if (!work || !category) {
    return (
      <div className="min-h-screen p-8 lg:p-12 flex items-center justify-center">
        <div className="text-center">
          <p className="text-neutral-400 mb-4">{t('workDetail.workNotFound')}</p>
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-sm text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('workDetail.backToPortfolio')}
          </button>
        </div>
      </div>
    );
  }

  // Brand Identity 分类使用特殊布局
  const isBrandIdentity = categoryId === 'brand-identity';

  return (
    <div className="min-h-screen p-8 lg:p-12">
      {/* 返回按钮 */}
      <button
        onClick={handleBack}
        className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors mb-12"
      >
        <ArrowLeft className="w-4 h-4" />
        {t('workDetail.backToCategory', { category: category.name })}
      </button>

      {isBrandIdentity ? (
        // Brand Identity 详情页布局
        <div className="max-w-5xl mx-auto">
          {/* 顶部：项目编号、名称、服务标签 */}
          <header className="text-center py-16 lg:py-24">
            <p className="text-sm text-neutral-400 tracking-wider mb-6">
              {t('work.project', { id: work.id })}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-900 mb-8">
              {t(`works.${categoryId}.${id}.title`, work.title || 'Untitled')}
            </h1>
            {work.tags && work.tags.length > 0 && (
              <p className="text-sm text-neutral-500 tracking-wide">
                {work.tags.join(' | ')}
              </p>
            )}
          </header>

          {/* 1. 项目简介 */}
          <section className="py-12">
            <SectionTitle>{t('workDetail.sections.projectIntro')}</SectionTitle>
            <SectionDivider />
            <SectionText>
              {getWorkDescription(t, categoryId, id, work.description)}
            </SectionText>
          </section>

          {/* 2. LOGO设计理念 - 左图右文布局 */}
          <section className="py-16">
            <SectionTitle>{t('workDetail.sections.logoConcept')}</SectionTitle>
            <SectionDivider />
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* 左侧：图片区域 */}
<div className="bg-white aspect-square md:aspect-[4/3] flex items-center justify-center">
  <img
    src={work.logoConcept}
    alt="Logo Concept"
    className="max-w-full max-h-full object-contain"
  />
</div>
{/* 右侧：文字描述 */}
<div>
<p className="text-sm text-neutral-500 leading-relaxed whitespace-pre-line text-left">
  {t(`workDetail.descriptions.logoConcept.${work.id}`, {
    defaultValue: t('workDetail.descriptions.logoConcept'),
  })}
</p>
</div>
            </div>
          </section>

          {/* 3. 色彩系统 */}
          <section className="py-12">
            <SectionTitle>{t('workDetail.sections.colorSystem')}</SectionTitle>
            <SectionDivider />
            <SectionText>
              {t(`workDetail.descriptions.colorSystem.${work.id}`, { defaultValue: t('workDetail.descriptions.colorSystem') })}
            </SectionText>
            {/* 两张图片 */}
<div className="mt-12 flex justify-center items-center gap-10">

  <img
    src={work.colorImage1}
    className="w-64 rounded-lg object-contain"
    alt=""
  />

  <img
    src={work.colorImage2}
    className="w-64 rounded-lg object-contain"
    alt=""
  />

</div>
          </section>

          {/* 4. 品牌寓意 */}
<SectionTitle>{t('workDetail.sections.brandMeaning')}</SectionTitle>
<SectionDivider />

<p className="text-sm text-neutral-500 leading-7 text-center max-w-2xl mx-auto mb-8">
  {t(`workDetail.descriptions.brandMeaning.${work.id}`)}
</p>

<div className="flex flex-wrap justify-center gap-3">
  {[
    t("workDetail.descriptions.tags.globalVision"),
    t("workDetail.descriptions.tags.consulting"),
    t("workDetail.descriptions.tags.strategy"),
    t("workDetail.descriptions.tags.collaboration"),
    t("workDetail.descriptions.tags.growth"),
  ].map((tag) => (
    <span
      key={tag}
      className="px-4 py-2 border border-neutral-200 rounded-full text-xs text-neutral-500 tracking-wide"
    >
      {tag}
    </span>
  ))}
</div>

          {/* 5. 名片应用设计 */}
          <section className="py-12">
            <SectionTitle>{t('workDetail.sections.businessCard')}</SectionTitle>
            <SectionDivider />
            <SectionText>
              {t(`workDetail.descriptions.businessCard.${work.id}`, { defaultValue: t('workDetail.descriptions.businessCard') })}
            </SectionText>
            {/* 名片占位图 */}
<div className="mt-12 grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
  <img
    src={work.businessCard1}
    alt="Business Card Front"
    className="w-full rounded-xl shadow-lg object-cover"
  />

  <img
    src={work.businessCard2}
    alt="Business Card Back"
    className="w-full rounded-xl shadow-lg object-cover"
  />
</div>
          </section>

          {/* 6. 网站视觉设计 */}
          <section className="py-12">
            <SectionTitle>{t('workDetail.sections.websiteDesign')}</SectionTitle>
            <SectionDivider />
            <SectionText>
              {t(`workDetail.descriptions.websiteDesign.${work.id}`, { defaultValue: t('workDetail.descriptions.websiteDesign') })}
            </SectionText>
            {/* 网站占位图 */}
<div className="mt-10 max-w-5xl mx-auto">
  <img
    src={work.websiteDesign}
    alt="Website Design"
    className="w-full rounded-xl shadow-lg object-contain"
  />
</div>
          </section>

          {/* 7. 项目成果 */}
          <section className="py-12 pb-24">
            <SectionTitle>{t('workDetail.sections.projectOutcome')}</SectionTitle>
            <SectionDivider />
            <SectionText>
              {t(`workDetail.descriptions.projectOutcome.${work.id}`, { defaultValue: t('workDetail.descriptions.projectOutcome') })}
            </SectionText>
          </section>
        </div>
      ) : (
        // 其他分类原有布局
        <>
          {/* 作品大图 - 支持视频播放 */}
          <div className="mb-12">
            <div className="w-full bg-neutral-100 overflow-hidden rounded-lg">
              {work.videoUrl && work.isVideo ? (
                <video
                  controls
                  autoPlay
                  className="w-full max-h-[70vh] rounded-lg shadow-lg"
                  src={work.videoUrl}
                  poster={work.image}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={work.image}
                  alt={work.title || '作品图片'}
                  className="w-full h-auto max-h-[70vh] object-contain mx-auto block"
                />
              )}
            </div>
          </div>

          {/* 作品信息 */}
          <div className="max-w-3xl">
            {/* 分类标签 */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs text-neutral-400 tracking-wider uppercase">
                {category.name}
              </span>
              {work.subCategory && (
                <>
                  <span className="text-neutral-300">/</span>
                  <span className="text-xs text-neutral-400 tracking-wider">
                    {work.subCategory}
                  </span>
                </>
              )}
            </div>

            {/* 标题 */}
            <h1 className="text-3xl font-light text-neutral-900 mb-4">
              {t(`works.${categoryId}.${id}.title`, work.title || 'Untitled')}
            </h1>

            {/* 描述或示例简介 */}
            <p className="text-neutral-500 text-sm leading-relaxed mb-8 best-w-[600px]">
              {getWorkDescription(t, categoryId, id, work.description)}
            </p>

            {/* 元信息 */}
            <div className="flex items-center gap-6 text-xs text-neutral-400 pt-6 border-t border-neutral-100">
              {work.year && (
                <span>{t('workDetail.year')} / {work.year}</span>
              )}
              <span>{t('workDetail.id')} / {work.id}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
