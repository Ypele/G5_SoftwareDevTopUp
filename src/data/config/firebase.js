import firebase from 'firebase'
// import * as admin from 'firebase-admin'
const firebase_config = {
    apiKey: "AIzaSyCZI2x2-W1RfxCY9WfTvQbb0Ek4eBTiaOQ",
    authDomain: "softwaredevtopup.firebaseapp.com",
    databaseURL: "https://softwaredevtopup.firebaseio.com",
    projectId: "softwaredevtopup",
    storageBucket: "softwaredevtopup.appspot.com",
    messagingSenderId: "85694341661"
}

firebase.initializeApp(firebase_config)

export const dbRef = firebase.database().ref()
export const fAuth = firebase.auth
export const facebookAuth = new firebase.auth.FacebookAuthProvider()
