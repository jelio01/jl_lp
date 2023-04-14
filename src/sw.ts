import {
  cleanupOutdatedCaches,
  createHandlerBoundToURL,
  precacheAndRoute,
} from "workbox-precaching";
import { clientsClaim } from "workbox-core";
import { NavigationRoute, registerRoute } from "workbox-routing";

declare let self: ServiceWorkerGlobalScope;

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});
// self.__WB_MANIFEST is default injection point

precacheAndRoute(self.__WB_MANIFEST);

clientsClaim();

// clean old assets
cleanupOutdatedCaches();

// to allow work offline
registerRoute(new NavigationRoute(createHandlerBoundToURL("/index.html")));
