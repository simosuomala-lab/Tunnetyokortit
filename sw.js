const CACHE="tunnetyokortit-v4";
const ASSETS=["./","./index.html","./manifest.json",
"./assets/vohveli-ilo.png",
"./assets/vohveli-harjoitus2.png",
"./assets/vohveli-pelko.png",
"./assets/vohveli-inho.png",
"./assets/vohveli-viha.png",
"./assets/vohveli-suru.png",
"./assets/vohveli-yllatys.png",
"./assets/vohveli-hengitys.png",
"./assets/vohveli-harjoitus3.png",
"./assets/vohveli-lupa.png",
"./assets/vohveli-viha-thumb.png"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
