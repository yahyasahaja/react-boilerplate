// Set this to true for production
var doCache = true;

// Name our cache
var CACHE_NAME = 'react-boilerplate-8';

// Delete old caches that are not our current one!
self.addEventListener('activate', event => {
  event.waitUntil(checkAndDeleteOlderCaches())
});
 
function checkAndDeleteOlderCaches() {
  const cacheWhitelist = [CACHE_NAME];
  caches.keys()
    .then(keyList =>
      Promise.all(keyList.map(key => {
        if (!cacheWhitelist.includes(key)) {
          console.log('Deleting cache: ' + key)
          return caches.delete(key);
        }
      }))
    )
}

// The first time the user starts up the PWA, 'install' is triggered.
self.addEventListener('install', function (event) {
  if (doCache) event.waitUntil(registerCaches());
});

function registerCaches() {
  checkAndDeleteOlderCaches()
  caches.open(CACHE_NAME)
  .then(function (cache) {
    // Get the assets manifest so we can see what our js file is named
    // This is because webpack hashes it
    const urlsToCache = [
      '/',
      '/index.html',
      '/app.bundle.js',
      '/css/style.css',
      '/font/MuseoSans-100.otf',
      '/font/MuseoSans-300.otf',
      '/font/MuseoSans-500.otf',
      '/font/MuseoSans-700.otf',
      '/font/MuseoSans-900.otf',
    ]

    cache.addAll(urlsToCache)
    console.log('cached');
  })
}

let routers = [] 

// When the webpage goes to fetch files, we intercept that request and serve up the matching files
// if we have them
function fetchData(event) {
  let path = new URL(event.request.url).pathname

  if (path.indexOf('/api') !== 0) 
  for (let i in routers) if (path.indexOf(routers[i]) === 0 ) return caches.match('/')
  
  return caches.match(event.request).then(function (response) {
    //response can be undefined if no cache found
    return response || fetch(event.request);
  })
}

self.addEventListener('fetch', function (event) {
  if (doCache) event.respondWith(fetchData(event))
});