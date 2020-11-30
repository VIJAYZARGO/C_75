import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBzs1dUHCBy7zozj5qlEyAmWY71U5VYFNs",
  authDomain: "wily-2410d.firebaseapp.com",
  databaseURL: "https://wily-2410d.firebaseio.com",
  projectId: "wily-2410d",
  storageBucket: "wily-2410d.appspot.com",
  messagingSenderId: "614482678000",
  appId: "1:614482678000:web:762aef411cb8acd4063235"
};

firebase.initializeApp(firebaseConfig)
export default  firebase.firestore();