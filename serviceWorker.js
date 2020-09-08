importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCoz1UxNYE53ujAkXysPTSEA-IDU9utcNQ",
    authDomain: "nih-nci-dceg-connect-dev.firebaseapp.com",
    databaseURL: "https://nih-nci-dceg-connect-dev.firebaseio.com",
    projectId: "nih-nci-dceg-connect-dev",
    storageBucket: "nih-nci-dceg-connect-dev.appspot.com",
    messagingSenderId: "1061430463455",
    appId: "1:1061430463455:web:948e929b4b47dd0909926a",
    measurementId: "G-HNEN7DH59R"
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(payload => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon,
        vibrate: [100, 50, 100]
    };
    return self.registration.showNotification(notificationTitle, notificationOptions);
})

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst, StaleWhileRevalidate, NetworkOnly } = workbox.strategies;
const { CacheableResponse, CacheableResponsePlugin } = workbox.cacheableResponse;
const { ExpirationPlugin } = workbox.expiration;
const { BackgroundSyncPlugin } = workbox.backgroundSync
const googleAnalytics = workbox.googleAnalytics;

googleAnalytics.initialize();
registerRoute(/\.(?:js|css)$/, new NetworkFirst({cacheName: 'static-cache'}));
registerRoute(/\.(?:png|jpg|jpeg|svg|gif|ico|webp)$/,
    new CacheFirst({
        cacheName: 'images-cache',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 30,
                maxAgeSeconds: 24 * 60 * 60,
            })
        ]
    })
);

registerRoute(
    new RegExp('https://us-central1-nih-nci-dceg-connect-dev.cloudfunctions.net/.+'),
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
    new RegExp('https://us-central1-nih-nci-dceg-connect-dev.cloudfunctions.net/.+'),
    new NetworkOnly({
      plugins: [bgSyncPlugin]
    }),
    'POST'
);

workbox.precaching.precacheAndRoute([{url: 'index.html', revision: '9'}]);
