import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/storage';

const config = {
    
  };
  firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});
db.enablePersistence({
  experimentalTabSynchronization:true
});

const storage = firebase.storage()

export default {
  db,
  storage
}
