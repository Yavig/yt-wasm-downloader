const CACHE = 'yt-wasm-site-v1';
const TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './service-worker.js',
  './icons/192.png',
  './icons/512.png',
  'https://raw.githubusercontent.com/golang/go/master/misc/wasm/wasm_exec.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(TO_CACHE)));
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
