const CACHE_PREFIX = 'ai-prompt-builder-v';
const CACHE_NAME = CACHE_PREFIX + '6';
const ASSETS = [
  './',
  './index.html',
  './LICENSE',
  './manifest.json',
  './favicon.ico',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png'
];

// Data files (JSON backups, exports) must always come from the network.
const NEVER_CACHE = /\.json$/i;

// Install: pre-cache the core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate: drop old caches and tell open tabs an update is ready
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    const obsolete = keys.filter((k) => k.startsWith(CACHE_PREFIX) && k !== CACHE_NAME);
    await Promise.all(obsolete.map((k) => caches.delete(k)));
    await self.clients.claim();
    if (obsolete.length > 0) {
      const clientList = await self.clients.matchAll({ type: 'window' });
      clientList.forEach((client) => client.postMessage({ type: 'SW_UPDATED', version: CACHE_NAME }));
    }
  })());
});

// Fetch: cache-first for same-origin static assets, network for the rest
self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  let url;
  try { url = new URL(request.url); } catch (e) { return; }
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match('./index.html').then((cached) => cached || fetch(request))
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  if (NEVER_CACHE.test(url.pathname)) return;

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        }
        return response;
      });
    })
  );
});
