const CACHE_NAME = "2025-11-06 00:00";
const urlsToCache = [
  "/usa-map-puzzle/",
  "/usa-map-puzzle/en/",
  "/usa-map-puzzle/index.js",
  "/usa-map-puzzle/map.svg",
  "/usa-map-puzzle/data/en.lst",
  "/usa-map-puzzle/mp3/decision50.mp3",
  "/usa-map-puzzle/mp3/correct1.mp3",
  "/usa-map-puzzle/mp3/correct3.mp3",
  "/usa-map-puzzle/favicon/favicon.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName)),
      );
    }),
  );
});
