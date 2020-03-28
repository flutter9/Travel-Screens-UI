'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "f517567f7dda3c9a6ad4b4f445f390a3",
"/manifest.json": "119885e2e11635385ebc0b503525964f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/assets/Merriweather-Bold.ttf": "adac1da5dad02caa43140a8ebdce945e",
"/assets/assets/person.jpeg": "5d12a9a8deff4a2d98143c33b0cf59b1",
"/assets/assets/Cardo-Regular.ttf": "e43d972253fdbb6670c8a6e5aa33f686",
"/assets/assets/arcdetrimp.jpg": "bca3c442e008973fbf887d26f1c675b9",
"/assets/assets/Merriweather-Black.ttf": "d6d573587f9d8e47d8df1257cf60954c",
"/assets/assets/Merriweather-Regular.ttf": "f96a44b40f99ae4b63f275f1142f7c98",
"/assets/assets/Cardo-Italic.ttf": "72a0545092e4a6e25aba1a78a580a380",
"/assets/assets/Cardo-Bold.ttf": "b898d7de5f3f75347c8829c7cbce579f",
"/assets/assets/museedu.jpg": "0291661189c0e3b66016ec38d11d6381",
"/assets/assets/tower.jpg": "ce20f4839828858f84eb71a4157b3eb4",
"/assets/assets/flagfrance.png": "df6659c898da8be2bb32c24e357c6de7",
"/assets/assets/eiffeltower.jpg": "53a6f473f5549b856a14f92fa50761e7",
"/assets/FontManifest.json": "9fbb3d60619d7cffb929589240b0ae1e",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "92d31c55b874b98ab9972dbeefa2fdcb",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "7d4fe1b3a071b68bed2d98d8b4c28d63",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/web/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
