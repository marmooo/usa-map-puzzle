var CACHE_NAME="2023-08-10 00:15",urlsToCache=["/usa-map-puzzle/","/usa-map-puzzle/ja/","/usa-map-puzzle/index.js","/usa-map-puzzle/map.svg","/usa-map-puzzle/data/ja.lst","/usa-map-puzzle/mp3/decision50.mp3","/usa-map-puzzle/mp3/correct1.mp3","/usa-map-puzzle/mp3/correct3.mp3","/usa-map-puzzle/favicon/favicon.svg","https://cdn.jsdelivr.net/npm/fabric@5.3.0/dist/fabric.min.js","https://cdn.jsdelivr.net/npm/svgpath@2.6.0/+esm"];self.addEventListener("install",function(a){a.waitUntil(caches.open(CACHE_NAME).then(function(a){return a.addAll(urlsToCache)}))}),self.addEventListener("fetch",function(a){a.respondWith(caches.match(a.request).then(function(b){return b||fetch(a.request)}))}),self.addEventListener("activate",function(a){var b=[CACHE_NAME];a.waitUntil(caches.keys().then(function(a){return Promise.all(a.map(function(a){if(b.indexOf(a)===-1)return caches.delete(a)}))}))})