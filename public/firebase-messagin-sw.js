importScripts('https://www.gstatic.com/firebasejs/6.2.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.2.3/firebase-messaging.js');

firebase.initializeApp({
    'messagingSenderId':'334387788294'
});

const messaging = firebase.messaging();

