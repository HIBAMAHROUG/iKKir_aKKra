import { useContext } from 'react';
import { I18nContext } from './I18nContext';

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n doit être utilisé dans <I18nProvider>.');
  return ctx;
}