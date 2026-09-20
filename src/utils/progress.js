// Save quiz results locally in the learner's browser.
const PREFIX = 'ikkir:quiz:'

function key(path) {
  return PREFIX + path.replace(/\/+$/, '')
}

export function getQuizResult(path) {
  try {
    const raw = window.localStorage.getItem(key(path))
    if (!raw) return null
    const data = JSON.parse(raw)
    return typeof data?.best === 'number' ? data : null
  } catch {
    return null
  }
}

export function saveQuizResult(path, score, total) {
  const previous = getQuizResult(path)
  const result = {
    best: Math.max(score, previous?.best ?? 0),
    last: score,
    total,
    attempts: (previous?.attempts ?? 0) + 1,
    date: new Date().toISOString(),
  }
  try {
    window.localStorage.setItem(key(path), JSON.stringify(result))
  } catch {
    // Keep the visible result even when browser storage is unavailable.
  }
  return result
}
