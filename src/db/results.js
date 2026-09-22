import { api } from '../api';

export function saveResult({ quiz, score, total }) {
  return api('/results', {
    method: 'POST',
    body: JSON.stringify({ quiz, score, total }),
  });
}

export async function getResults() {
  return api('/results');
}