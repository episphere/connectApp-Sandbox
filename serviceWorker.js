importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst, StaleWhileRevalidate, NetworkOnly } = workbox.strategies;
const { CacheableResponse, CacheableResponsePlugin } = workbox.cacheableResponse;
const { ExpirationPlugin } = workbox.expiration;
const { BackgroundSyncPlugin } = workbox.backgroundSync
const googleAnalytics = workbox.googleAnalytics;

googleAnalytics.initialize();
registerRoute(/\.(?:js|css)$/, new NetworkFirst({cacheName: 'static-cache'}));
registerRoute(/\.(?:png|jpg|jpeg|svg|gif|ico)$/,
    new CacheFirst({
        cacheName: 'images-cache',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 30,
                maxAgeSeconds: 7 * 24 * 60 * 60,
            })
        ]
    })
);

registerRoute(
    new RegExp('https://us-central1-nih-nci-dceg-episphere-dev.cloudfunctions.net/.+'),
    new NetworkFirst({
        cacheName: 'api-cache',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [200],
            })
        ]
    }),
    'GET'
);

const bgSyncPlugin = new BackgroundSyncPlugin('ConnectAppBgSync', {
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

registerRoute(
    new RegExp('https://us-central1-nih-nci-dceg-episphere-dev.cloudfunctions.net/.+'),
    new NetworkOnly({
      plugins: [bgSyncPlugin]
    }),
    'POST'
);

workbox.precaching.precacheAndRoute([{url: 'index.html', revision: '1590505867650'}]);
