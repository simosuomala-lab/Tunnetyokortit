const CACHE="tunnetyokortit-v3";
const ASSETS=["./","./index.html","./manifest.json",
"./assets/vohveli-viha.png","./assets/vohveli-hengitys.png",
"./assets/vohveli-ilo.png","./assets/vohveli-suru.png","./assets/vohveli-pelko.png",
"./assets/vohveli-yllatys.png","./assets/vohveli-inho.png"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x))))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
