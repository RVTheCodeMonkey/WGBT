const CACHE = "wbgt-v1";

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE).then(cache =>
            cache.addAll([
                "index.html",
                "manifest.json",
                "icons/icon-192.png",
                "icons/icon-512.png"
            ])
        )
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        fetch(event.request)
            .then(res => {
                const clone = res.clone();
                caches.open(CACHE).then(cache => cache.put(event.request, clone));
                return res;
            })
            .catch(() => caches.match(event.request))
    );
});
