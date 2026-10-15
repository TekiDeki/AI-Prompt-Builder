const CACHE_NAME = 'ai-prompt-builder-v5';
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

// Instalare: cache-uiește resursele de bază
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activare: șterge cache-urile vechi
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k.startsWith('ai-prompt-builder-v') && k !== CACHE_NAME).map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Fetch: servește din cache, cu fallback la rețea
self.addEventListener('fetch', (event) => {
  const licenseUrl = new URL('./LICENSE', self.registration.scope).href;
  if (event.request.method === 'GET' && event.request.url === licenseUrl) {
    event.respondWith(caches.open(CACHE_NAME).then(cache => cache.match(event.request)).then(cached => cached || fetch(event.request)));
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).then((response) => {
        // Cache-uiește doar request-urile GET reușite
        if (event.request.method === 'GET' && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      });
    }).catch(() => caches.match('./index.html'))
  );
});
