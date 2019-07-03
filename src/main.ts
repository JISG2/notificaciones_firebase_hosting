import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import firebase from 'firebase';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyDPYNH1OvP8YDS6jdiQ2a9quZo-x4-SbWY",
  authDomain: "pwa-hosting-9d219.firebaseapp.com",
  databaseURL: "https://pwa-hosting-9d219.firebaseio.com",
  projectId: "pwa-hosting-9d219",
  storageBucket: "",
  messagingSenderId: "334387788294",
  appId: "1:334387788294:web:70e8b659f9885501"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.usePublicVapidKey("BERrxsF75DrZzm61NeceKyxY1oKPFIr8Yrku-giDZ4RyX1UNPl2CxAsoc5DI5r5anpQRVc9mUSclkWBR5u1iIXM");

messaging.requestPermission().then(()  => {
  console.log('Notification permission granted.');

  messaging.getToken().then((token) => {
    console.log(token);
  });
}).catch((err) => {
  console.log('Unable to get ',err)
})
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

/*curl -X POST -H "Authorization: key="AAAATdsQugY:APA91bFXUb7TKKjpooVefxizpDKBhW2tJq4NQkrRyfVw7KsD8Q4wDGJnZ-_tF6KeH6KkL3NSx95SoOr5ysPgTaD2vZxAZAjPHItjCX-aMIUKUe2mJ7SR5mq_DspZWLFuy9Ftor0qlkyK" -H "Content-Type: application/json" -d '{
  "to": "${5’s token}",
  "notification": {
    "title": "FCM Message",
    "body": "This is an FCM Message",
    "icon": "./img/icons/android-chrome-192x192.png"
  }
}' https://fcm.googleapis.com/fcm/send*/