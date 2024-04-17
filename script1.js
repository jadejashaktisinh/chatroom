
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, set, ref, get, child, onValue, } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
import {  getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSic1-yyviSY8adUHJLNgU27HTKL__gNo",
  authDomain: "chatroom-6c496.firebaseapp.com",
  databaseURL: "https://chatroom-6c496-default-rtdb.firebaseio.com",
  projectId: "chatroom-6c496",
  storageBucket: "chatroom-6c496.appspot.com",
  messagingSenderId: "188670677643",
  appId: "1:188670677643:web:8ab5b3e6437f498bb3fa8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const provider = new GoogleAuthProvider();



let logbBtn = document.getElementById('googlebtn');

logbBtn.onclick = function () {

  const auth = getAuth();
  signInWithPopup(auth, provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    console.log(user);
    window.location.href = "chatroom.html";
    sessionStorage.setItem("user",JSON.stringify(user))

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });


}