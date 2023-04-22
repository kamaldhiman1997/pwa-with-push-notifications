let cacheData = "AppV1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll(["/static/js/bundle.js", "/", "/index.html", "/users"]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    if (event.request.url === "http://localhost:3000/static/js/bundle.js") {
      event.waitUntil(
        this.registration.showNotification("From your app", {
          body: "Internet is not working.",
        })
      );
    }
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp;
        }
        let requestUrl = event.request.clone();
        fetch(requestUrl);
      })
    );
  }
});
