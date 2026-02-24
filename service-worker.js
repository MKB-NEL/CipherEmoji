const cacheName = "cipheremoji-v1";
const cacheFiles = [
  "/",
  "/index.html",
  "/manifest.json",
  "/styles.css", 
  "/script.js"
];

self.addEventListener("install", evt => {
  evt.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(cacheFiles);
    })
  );
});

self.addEventListener("fetch", evt => {
  evt.respondWith(
    caches.match(evt.request).then(res => {
      return res || fetch(evt.request);
    })
  );
});
