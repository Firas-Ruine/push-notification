/*
Give the service worker access to Firebase Messaging.
Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
*/
importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js"
);

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
* New configuration for app@pulseservice.com
*/
firebase.initializeApp({
    apiKey: "AIzaSyBdMo1w_Rpd4QeT9acIgk0eZGREoPoVZOI",
    authDomain: "poc-alert-notifications.firebaseapp.com",
    projectId: "poc-alert-notifications",
    storageBucket: "poc-alert-notifications.appspot.com",
    messagingSenderId: "411782275178",
    appId: "1:411782275178:web:5e628e5f1e2ce9a5ce2a13",
    measurementId: "G-EWLBXTY3P3",
});

/*
Retrieve an instance of Firebase Messaging so that it can handle background messages.
*/
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload
    );
    /* Customize notification here */
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/itwonders-web-logo.png",
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    );
});
