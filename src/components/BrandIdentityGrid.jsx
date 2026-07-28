       import { useTranslation } from "react-i18next";
       import { useLocation } from "wouter";
       export default function BrandIdentitySection({ works, activeCategory }) {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();

  return (
       <div className="columns-2 md:columns-3 gap-8">
          {works?.map((work) => (
            <div
              key={work.id}
              className="break-inside-avoid mb-8 group cursor-pointer max-w-sm"
              onClick={() => setLocation(`/work/${activeCategory}/${work.id}`)}
            >
              <div className="overflow-hidden bg-white mb-4 h-72 flex items-center justify-center">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-48 h-auto transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">
                    {t(`works.${activeCategory}.${work.id}.title`, work.title)}
                  </h3>

                  <p className="text-xs text-neutral-400 mt-1">
                    {t(
                      `works.${activeCategory}.${work.id}.description`,
                      work.description || ""
                    )}
                  </p>
                </div>

                <span className="text-xs text-neutral-300">
                  {work.year}
                </span>
              </div>
            </div>
          ))}
        </div>
          );
}