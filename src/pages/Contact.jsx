import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Smartphone, Globe, MessageCircle } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col justify-center px-12 lg:px-20 py-20">
      {/* 页面标题 */}
      <div className="mb-16">
       <h1 className="text-5xl font-light text-neutral-900">
  {t("contact.pageTitle")}
</h1>
<p className="mt-10 max-w-xl whitespace-pre-line text-neutral-500 leading-9 text-base">
  {t("contact.pageDescription")}
</p>
      </div>

      {/* 联系信息网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-3xl">
        {/* Email */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 mb-2">
            <Mail className="w-5 h-5 text-neutral-400" />
            <span className="text-xs text-neutral-400 tracking-widest uppercase">
              {t('contact.email')}
            </span>
          </div>
          <a
            href="mailto:hello@studiomono.design"
            className="block text-lg text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            workingdeluna@gmail.com
          </a>
        </div>

        {/* Address */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 mb-2">
            <MapPin className="w-5 h-5 text-neutral-400" />
            <span className="text-xs text-neutral-400 tracking-widest uppercase">
              {t('contact.address')}
            </span>
          </div>
          <div className="text-lg text-neutral-900 leading-relaxed">
            <p>Madrid, España</p>
          </div>
        </div>

        {/* Social */}
<div className="space-y-3">
  <div className="flex items-center gap-3 mb-2">
    <Globe className="w-5 h-5 text-neutral-400" />
    <span className="text-xs text-neutral-400 tracking-widest uppercase">
      {t('contact.social')}
    </span>
  </div>

  {/* WeChat */}
  <div className="flex items-center gap-2 text-neutral-900">
    <MessageCircle className="w-4 h-4 text-neutral-400" />
    <span className="text-neutral-400">WeChat:</span>
    <span className="text-lg">Tencent-202</span>
  </div>

  {/* WhatsApp */}
  <div className="flex items-center gap-2 text-neutral-900">
    <MessageCircle className="w-4 h-4 text-green-500" />
    <span className="text-neutral-400">WhatsApp:</span>
    <span className="text-lg">+34 633 589 968</span>
  </div>
</div>
      </div>
    </div>
  );
}
