var CACHE_NAME = "2023-08-01 00:00";
var urlsToCache = [
  "/usa-map-puzzle/",
  "/usa-map-puzzle/en/",
  "/usa-map-puzzle/index.js",
  "/usa-map-puzzle/map.svg",
  "/usa-map-puzzle/data/en.lst",
  "/usa-map-puzzle/mp3/decision50.mp3",
  "/usa-map-puzzle/mp3/correct1.mp3",
  "/usa-map-puzzle/mp3/correct3.mp3",
  "/usa-map-puzzle/favicon/favicon.svg",
  "https://cdn.jsdelivr.net/npm/fabric@5.3.0/dist/fabric.min.js",
  "https://cdn.jsdelivr.net/npm/svgpath@2.6.0/+esm",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(urlsToCache);
      }),
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }),
  );
});

self.addEventListener("activate", function (event) {
  var cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});
