// Define a name for the current cache
var cacheName = 'rm-bayelsa-cache-v1.2';

// List of files to cache immediately after service worker installs
var urlsToCache = [
    '/',
    './index.html',
    './static/css/styles.css',
    './static/js/script.js',
    'https://pallytoys.backendless.app/api/files/rm-images/logo.jpg',
    'https://pallytoys.backendless.app/api/files/rm-images/prayer-changes-things.jpg',
    'https://pallytoys.backendless.app/api/files/rm-images/church-of-the-firstborn.webp',
    'https://pallytoys.backendless.app/api/files/rm-images/worship-experience.jpg',
    'https://pallytoys.backendless.app/api/files/rm-images/4744824.png',
    'https://pallytoys.backendless.app/api/files/rm-images/bc-img-4.jpg',
    'https://pallytoys.backendless.app/api/files/rm-images/s-special_service_1.jpg',
    'https://pallytoys.backendless.app/api/files/rm-images/bc-img-2.jpg',
    'https://pallytoys.backendless.app/api/files/rm-images/s-kabash_2022.jpg',
    'https://pallytoys.backendless.app/api/files/rm-images/s-altar_call1.jpg',
    'https://pallytoys.backendless.app/api/files/rm-images/s-pastors_2.jpg',
    'https://pallytoys.backendless.app/api/files/rm-images/s-music_1.jpg',
    'https://pallytoys.backendless.app/api/files/rm-images/hr1.png',
    'https://pallytoys.backendless.app/api/files/rm-images/easter-2.jpg',
    'https://pallytoys.backendless.app/api/files/rm-images/tentative-img.jpeg',
    'https://pallytoys.backendless.app/api/files/rm-images/rm-hq.png',
    'https://pallytoys.backendless.app/api/files/rm-images/praying-hand.png',
    'https://pallytoys.backendless.app/api/files/rm-images/s-GO.jpg',
    'https://pallytoys.backendless.app/api/files/rm-images/s-pastor_victor_1.jpg',
    'https://pallytoys.backendless.app/api/files/rm-images/s-congregation_2.jpg',
    'https://pallytoys.backendless.app/api/files/rm-images/640208.jpg',
    'https://pallytoys.backendless.app/api/files/rm-images/banner.jpg',
    'https://pallytoys.backendless.app/api/files/rm-images/spirituality-religion-hands-folded-prayer-holy-bible-church-concept-faith (1) (1).jpg',

];

// Install event
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
    self.skipWaiting();
});

// Fetch event: when a resource (like a web page, image, or font) is fetched, this event triggers
self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request).then(function(networkResponse) {
            caches.open(cacheName).then(function(cache) {
                cache.put(event.request, networkResponse.clone());
            });
            return networkResponse;
        }).catch(function() {
            return caches.match(event.request);
        })
    );
});

// Activate event: manage old caches
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(oldCacheNames) {
            return Promise.all(
                oldCacheNames.map(function(oldCacheName) {
                    if (oldCacheName !== cacheName) {
                        return caches.delete(oldCacheName);
                    }
                })
            );
        })
    );
    return self.clients.claim();
});