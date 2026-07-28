import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";
export default function GraphicDesignGrid({
  works,
  activeCategory,
}) {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();

  return (
    <>
      {        <div className="columns-2 md:columns-2 gap-4 space-y-4">
          {works?.map((work) => (
            <div
              key={work.id}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setLocation(`/work/${activeCategory}/${work.id}`)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
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
    </>
  );
}