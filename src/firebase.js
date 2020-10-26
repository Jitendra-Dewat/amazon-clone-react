import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC6oi1YwlV4fgoTGADSleokFpeNpsD1fE4",
    authDomain: "clone-react-5d754.firebaseapp.com",
    databaseURL: "https://clone-react-5d754.firebaseio.com",
    projectId: "clone-react-5d754",
    storageBucket: "clone-react-5d754.appspot.com",
    messagingSenderId: "20984444467",
    appId: "1:20984444467:web:baa03bc1c2048e199f5546",
    measurementId: "G-N1MFDKLRVK"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };