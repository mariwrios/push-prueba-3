import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD_esX1YXaasECuyJHwTJB087MuXCV7biU",
  authDomain: "push-notification-87732.firebaseapp.com",
  projectId: "push-notification-87732",
  storageBucket: "push-notification-87732.appspot.com",
  messagingSenderId: "264595940486",
  appId: "1:264595940486:web:de81c969c0e2493b171d07"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase