// Define a name for the current cache
var cacheName = 'rm-bayelsa-cache-v1';

// List of files to cache immediately after service worker installs
var urlsToCache = [
    '/',
    './index.html',
    './static/css/styles.css',
    './static/js/script.js'
];

// Install event
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

// Fetch event: when a resource (like a web page, image, or font) is fetched, this event triggers
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            // If the request matches a cached resource, return it
            if (response) {
                return response;
            }

            // If not, fetch the resource from the network and cache it
            return fetch(event.request).then(function(networkResponse) {
                var responseClone = networkResponse.clone();

                caches.open(cacheName).then(function(cache) {
                    cache.put(event.request, responseClone);
                });

                return networkResponse;
            });
        })
    );
});

// Activate event: manage old caches
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(thisCacheName) {
                    if (thisCacheName !== cacheName) {
                        return caches.delete(thisCacheName);
                    }
                })
            );
        })
    );
});