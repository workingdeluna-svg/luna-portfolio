import React from 'react';
import { useTranslation } from 'react-i18next';

// 科技感悬浮视频弹窗组件
export default function VideoModal({ work, onClose, categoryId }) {
  const { t } = useTranslation();

  // 模拟数据（实际应从后端获取）
  const stats = work.stats || {
    views: '44万',
    likes: '2000+',
    comments: '50+',
    favorites: '5,432',
    shares: '600+'
  };

  // 点击背景关闭
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* 背景遮罩 - 透明感 */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md" />

      {/* 弹窗内容容器 - 适中的悬浮卡片 */}
      <div className="relative z-10 w-[1000px] max-w-[92vw] h-[680px] max-h-[88vh] flex rounded-2xl overflow-hidden shadow-2xl">
        {/* 发光边框效果 - 细微科技感 */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-cyan-500/30 rounded-2xl blur-sm opacity-70" />

        {/* 弹窗主体内容 */}
        <div className="relative w-full flex rounded-2xl overflow-hidden bg-white/5 border border-white/20 backdrop-blur-2xl">
          {/* 左侧视频区域 - 占65% */}
          <div className="w-[65%] relative bg-black/20 flex items-center justify-center">
            <video
              controls
              autoPlay
              className="w-full h-full max-h-[calc(85vh-4px)] object-contain"
              src={work.videoUrl}
              poster={work.image}
            />

            {/* 关闭按钮 - 右上角 */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* 右侧信息区域 - 占35% */}
          <div className="w-[35%] flex flex-col">
            {/* 头部标题区 */}
            <div className="p-5 border-b border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-medium border border-cyan-500/30">
                  {work.year}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-xs font-medium border border-purple-500/30">
                  {t(`categories.${categoryId}`, categoryId)}
                </span>
              </div>

              <h2 className="text-lg font-bold text-white leading-tight mb-2 line-clamp-2">
                {t(`works.${categoryId}.${work.id}.title`, work.title)}
              </h2>

              <p className="text-neutral-400 text-xs leading-relaxed line-clamp-3">
                {t(`works.${categoryId}.${work.id}.description`, work.description || '')}
              </p>
            </div>

            {/* 数据统计区 - 紧凑排列 */}
            <div className="flex-1 p-6 overflow-y-auto">
              {/* 发布后累计标题 */}
              <div className="mb-5 pb-3 border-b border-white/10">
                <span className="text-xs font-medium text-white/90">
                  发布后累计</span>
              </div>

              {/* 上排：播放、点赞、评论 */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {/* 播放量 */}
                <div className="text-center p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                  <svg className="w-4 h-4 text-cyan-400 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <div className="text-sm font-bold text-white">{stats.views}</div>
                  <div className="text-[10px] text-neutral-500">播放</div>
                </div>

                {/* 点赞 */}
                <div className="text-center p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                  <svg className="w-4 h-4 text-pink-400 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <div className="text-sm font-bold text-white">{stats.likes}</div>
                  <div className="text-[10px] text-neutral-500">点赞</div>
                </div>

                {/* 评论 */}
                <div className="text-center p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                  <svg className="w-4 h-4 text-blue-400 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <div className="text-sm font-bold text-white">{stats.comments}</div>
                  <div className="text-[10px] text-neutral-500">评论</div>
                </div>
              </div>

              {/* 下排：收藏、转发 */}
              <div className="grid grid-cols-2 gap-2">
                {/* 收藏 */}
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 cursor-pointer">
                  <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-sm font-medium text-white">{stats.favorites}</div>
                    <div className="text-[10px] text-neutral-500">收藏</div>
                  </div>
                </div>

                {/* 转发 */}
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 cursor-pointer">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-sm font-medium text-white">{stats.shares}</div>
                    <div className="text-[10px] text-neutral-500">转发</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 底部链接区域 */}
<div className="p-5 border-t border-white/10">
  {work.link && (
    <div className="flex items-center justify-center">
      <a
        href={work.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-400 hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
        <span>查看原视频</span>
      </a>
    </div>
  )}
</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ title, value, icon, color }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center hover:bg-white/10 transition-colors">

      <svg
        className={`w-4 h-4 mx-auto mb-2 ${color}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {icon}
      </svg>

      <div className="text-sm font-semibold text-white">
        {value}
      </div>

      <div className="text-[10px] text-neutral-500 mt-1">
        {title}
      </div>

    </div>
  );
}

function SmallStat({ title, value }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-3">

      <div className="text-white font-semibold">
        {value}
      </div>

      <div className="text-[10px] text-neutral-500 mt-1">
        {title}
      </div>

    </div>
  );
}