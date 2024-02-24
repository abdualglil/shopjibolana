importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
let config = {
        apiKey: "AIzaSyCfAn43jGxJnqe8hM5tAgQNqpYvvgpwy6g",
        authDomain: "myshopking-2d3cf.firebaseapp.com",
        projectId: "myshopking-2d3cf",
        storageBucket: "myshopking-2d3cf.appspot.com",
        messagingSenderId: "259053256284",
        appId: "1:259053256284:web:57f6c58edebc4f691e3099",
        measurementId: "G-DS59FJCK5V",
 };
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/images/required/firebase-logo.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
