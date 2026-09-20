import { useCallback, useEffect, useMemo, useState } from 'react';
import { I18nContext } from './I18nContext';
import { LANGS, translations } from './translations';

const KEY = 'ikkir:lang';

function initialLang() {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved && translations[saved]) return saved;
  } catch {
    /* stockage indisponible */
  }
  return 'fr';
}

export default function I18nProvider({ children }) {
  const [lang, setLangState] = useState(initialLang);
  const meta = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;
    document.title = translations[lang]['site.title'];
  }, [lang, meta.dir]);

  const setLang = useCallback((code) => {
    if (!translations[code]) return;
    try {
      localStorage.setItem(KEY, code);
    } catch {
      /* stockage indisponible */
    }
    setLangState(code);
  }, []);

  const t = useCallback(
    (key, vars) => {
      let text = translations[lang][key] ?? translations.fr[key] ?? key;
      if (vars) {
        Object.entries(vars).forEach(([k, v]) => {
          text = text.split(`{${k}}`).join(String(v));
        });
      }
      return text;
    },
    [lang],
  );

  const value = useMemo(
    () => ({ lang, setLang, t, dir: meta.dir, locale: meta.locale }),
    [lang, setLang, t, meta.dir, meta.locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}