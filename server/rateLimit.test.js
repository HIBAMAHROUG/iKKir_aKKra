import { describe, expect, it, vi } from 'vitest';
import { rateLimit } from './rateLimit.js';

function response() {
  return {
    headers: {},
    statusCode: 200,
    body: null,
    setHeader(name, value) {
      this.headers[name] = value;
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(body) {
      this.body = body;
      return this;
    },
  };
}

describe('rateLimit', () => {
  it('autorise les requêtes dans la limite configurée', () => {
    const middleware = rateLimit({ windowMs: 60_000, max: 2, message: 'Limite' });
    const next = vi.fn();

    middleware({ path: '/test', ip: '192.0.2.1' }, response(), next);
    middleware({ path: '/test', ip: '192.0.2.1' }, response(), next);

    expect(next).toHaveBeenCalledTimes(2);
  });

  it('retourne 429 après dépassement de la limite', () => {
    const middleware = rateLimit({ windowMs: 60_000, max: 1, message: 'Limite' });
    const next = vi.fn();
    const request = { path: '/limited', ip: '192.0.2.2' };

    middleware(request, response(), next);
    const limitedResponse = response();
    middleware(request, limitedResponse, next);

    expect(next).toHaveBeenCalledTimes(1);
    expect(limitedResponse.statusCode).toBe(429);
    expect(limitedResponse.body).toEqual({ error: 'Limite' });
    expect(limitedResponse.headers['Retry-After']).toBeDefined();
  });
});
