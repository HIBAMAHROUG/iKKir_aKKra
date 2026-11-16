const buckets = new Map();

function getClientKey(req) {
  return req.ip || req.socket.remoteAddress || 'unknown';
}

export function rateLimit({ windowMs, max, message }) {
  return (req, res, next) => {
    const now = Date.now();
    const key = `${req.path}:${getClientKey(req)}`;
    const current = buckets.get(key);
    const bucket = current && current.expiresAt > now
      ? current
      : { count: 0, expiresAt: now + windowMs };

    bucket.count += 1;
    buckets.set(key, bucket);
    res.setHeader('RateLimit-Limit', max);
    res.setHeader('RateLimit-Remaining', Math.max(0, max - bucket.count));
    res.setHeader('RateLimit-Reset', Math.ceil(bucket.expiresAt / 1000));

    if (bucket.count > max) {
      res.setHeader('Retry-After', Math.ceil((bucket.expiresAt - now) / 1000));
      return res.status(429).json({ error: message });
    }

    next();
  };
}

const cleanupTimer = setInterval(() => {
  const now = Date.now();
  for (const [key, bucket] of buckets) {
    if (bucket.expiresAt <= now) buckets.delete(key);
  }
}, 60_000);

cleanupTimer.unref();
