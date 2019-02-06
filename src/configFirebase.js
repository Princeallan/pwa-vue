import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/messaging';

const config = {
    apiKey: "AIzaSyAEfdvV_sMrDeY42Gu-XFRfdF3u7omLuAU",
    authDomain: "vue-pwa-d4925.firebaseapp.com",
    databaseURL: "https://vue-pwa-d4925.firebaseio.com",
    projectId: "vue-pwa-d4925",
    storageBucket: "vue-pwa-d4925.appspot.com",
    messagingSenderId: "1026370344024"
  };
  firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

export default {
  db
}