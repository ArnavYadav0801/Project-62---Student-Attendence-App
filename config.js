import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyBCK3nz9hdsjF_dFNrOGszeWAeWyJ5cJFs",
    authDomain: "student-attendence-5dd69.firebaseapp.com",
    projectId: "student-attendence-5dd69",
    storageBucket: "student-attendence-5dd69.appspot.com",
    messagingSenderId: "277791189854",
    appId: "1:277791189854:web:f02d1e02d04415f5a13dcf",
    measurementId: "G-0L8PFC8R9R"
  };

if(!firebase.apps.length) { firebase.initializeApp(firebaseConfig) } export default firebase.database()