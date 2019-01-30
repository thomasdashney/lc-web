import * as firebase from "firebase/app";
import "firebase/database";

firebase.initializeApp({
  apiKey: "AIzaSyCoPtglVmrGdd9_08sva4ErujUWldxtH54",
  authDomain: "lost-cousins.firebaseapp.com",
  databaseURL: "https://lost-cousins.firebaseio.com",
  storageBucket: "lost-cousins.appspot.com",
  messagingSenderId: "227992144548"
});

export const database = firebase.database();
