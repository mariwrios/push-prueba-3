
importScripts('https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.7.1/firebase-messaging.js');



if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../firebase-messaging-sw.js')
    .then(function(registration) {
      console.log('Registration successful, scope is:', registration.scope);
    }).catch(function(err) {
      console.log('Service worker registration failed, error:', err);
    });
  }

  firebase.initializeApp({
    apiKey: "AIzaSyD_esX1YXaasECuyJHwTJB087MuXCV7biU",
    authDomain: "push-notification-87732.firebaseapp.com",
    projectId: "push-notification-87732",
    storageBucket: "push-notification-87732.appspot.com",
    messagingSenderId: "264595940486",
    appId: "1:264595940486:web:de81c969c0e2493b171d07"
  })
  
  
  const messaging = firebase.messaging();