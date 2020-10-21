import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyDceVoym5XlLnRpioOZBvwnXfpq6j3KeSg",
    authDomain: "vue-firebase-9a74d.firebaseapp.com",
    databaseURL: "https://vue-firebase-9a74d.firebaseio.com",
    projectId: "vue-firebase-9a74d",
    storageBucket: "vue-firebase-9a74d.appspot.com",
    messagingSenderId: "189527776412",
    appId: "1:189527776412:web:08a62fbf4d5ebc957ae159"
};
  
const app = firebase.initializeApp(config);
// console.log(app,' app');
  // let db = app.database();
  // let answers = db.ref('answers');
  // console.log(answers,'  ansswers'); 
export const db = app.database();