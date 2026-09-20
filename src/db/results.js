import { db } from './localDb';

export function saveResult({ userId, quiz, score, total }) {
  return db.insert('results', { userId, quiz, score, total });
}

export function getResults(userId) {
  return db
    .filter('results', (r) => r.userId === userId)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}