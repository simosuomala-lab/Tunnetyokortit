const CACHE='tunnetyokortit-v11';
const FILES=['./','./index.html','./audio/ohjaus.m4a','./assets/vohveli-hengitys.png','./assets/vohveli-ilo.png','./assets/vohveli-suru.png','./assets/vohveli-viha-thumb.png','./assets/vohveli-pelko.png','./assets/vohveli-yllatys.png','./assets/vohveli-inho.png','./assets/vohveli-viha.png','./assets/vohveli-lupa.png','./assets/vohveli-harjoitus1.png','./assets/vohveli-harjoitus2.png','./assets/vohveli-harjoitus3.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))));
