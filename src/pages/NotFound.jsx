import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'wouter';

export default function NotFound() {
  const { t } = useTranslation();
  const [location] = useLocation();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <h1>{t('notFound.title')}</h1>
      <p>{t('notFound.message')}: {location}</p>
    </div>
  );
}