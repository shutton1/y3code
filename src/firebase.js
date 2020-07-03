

const firebase = require("firebase/app");
// Required for side-effects
require("firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyAsijtYg2kPU3ECFyG8QQeGSGWUy8cXaz0",
    authDomain: "ebay-images-b1ca6.firebaseapp.com",
    databaseURL: "https://ebay-images-b1ca6.firebaseio.com",
    projectId: "ebay-images-b1ca6",
    storageBucket: "gs://ebay-images-b1ca6.appspot.com/",
    messagingSenderId: "797907603345",
    appId: "1:797907603345:web:dcf5384c14eecf2ca1d430"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export { firebase, db as default };