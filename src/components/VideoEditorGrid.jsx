import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";
import { useState } from "react";
import VideoModal from "./VideoModal";

export default function VideoEditorGrid({
  works,
  activeCategory,
}) {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      {        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {works?.map((work) => (
            <div
              key={work.id}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedVideo(work)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">

                <div className="aspect-[4/5] overflow-hidden relative rounded-t-2xl">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {work.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <svg
                          className="w-6 h-6 text-neutral-800 ml-0.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-medium text-neutral-900 line-clamp-2">
                    {t(`works.${activeCategory}.${work.id}.title`, work.title)}
                  </h3>

                  <p className="text-xs text-neutral-500 mt-2 line-clamp-2">
                    {t(
                      `works.${activeCategory}.${work.id}.description`,
                      work.description || ""
                    )}
                  </p>

                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[10px] text-neutral-400">
                      {work.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>}
    {selectedVideo && (
      <VideoModal
        work={selectedVideo}
        categoryId={activeCategory}
        onClose={() => setSelectedVideo(null)}
      />
    )}
  </>
);
}