import firebase from 'firebase'

require("firebase/firestore");
require("firebase/storage")

/* eslint-disable */
// var database = firebase.database();

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA-6UTBSsm1msvjhGZZ27ci24zwTfFfJWs",
    authDomain: "vue-shop-7ed4f.firebaseapp.com",
    databaseURL: "https://vue-shop-7ed4f.firebaseio.com",
    projectId: "vue-shop-7ed4f",
    storageBucket: "vue-shop-7ed4f.appspot.com",
    messagingSenderId: "305741859130",
    appId: "1:305741859130:web:2e180a831c4837f3a4a803"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {fb, db}
