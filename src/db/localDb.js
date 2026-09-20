const PREFIX = 'ikkir:db:';
export const SESSION_KEY = 'ikkir:session';

function newId() {
  return globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function read(table) {
  try {
    const raw = localStorage.getItem(PREFIX + table);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function write(table, rows) {
  try {
    localStorage.setItem(PREFIX + table, JSON.stringify(rows));
    return true;
  } catch {
    return false;
  }
}

export const db = {
  all: (table) => read(table),
  find: (table, predicate) => read(table).find(predicate) ?? null,
  filter: (table, predicate) => read(table).filter(predicate),

  insert(table, row) {
    const item = { id: newId(), createdAt: new Date().toISOString(), ...row };
    if (!write(table, [...read(table), item])) {
      throw new Error("Impossible d'enregistrer : le stockage du navigateur est indisponible ou plein.");
    }
    return item;
  },

  update(table, id, patch) {
    write(table, read(table).map((r) => (r.id === id ? { ...r, ...patch } : r)));
  },

  remove(table, id) {
    write(table, read(table).filter((r) => r.id !== id));
  },

  removeWhere(table, predicate) {
    write(table, read(table).filter((r) => !predicate(r)));
  },
};

export const session = {
  get() {
    try { return localStorage.getItem(SESSION_KEY); } catch { return null; }
  },
  set(id) {
    try { localStorage.setItem(SESSION_KEY, id); } catch { /* stockage indisponible */ }
  },
  clear() {
    try { localStorage.removeItem(SESSION_KEY); } catch { /* stockage indisponible */ }
  },
};