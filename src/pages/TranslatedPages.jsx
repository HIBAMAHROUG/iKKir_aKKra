import SimplePage from './SimplePage';
import { useI18n } from '../i18n/useI18n';

export function LevelsPage() {
  const { t } = useI18n();
  return <SimplePage title={t('levels.title')} text={t('levels.text')} />;
}

export function NotFound() {
  const { t } = useI18n();
  return <SimplePage title={t('notfound.title')} text={t('notfound.text')} />;
}

export function Loading() {
  const { t } = useI18n();
  return <p className="route-loading" role="status">{t('common.loading')}</p>;
}