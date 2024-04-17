
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, set, ref, get, child, onValue, } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";



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

var arrayOfFirebase = [];
let user_ref = ref(db, 'user/');
let arr_ref = ref(db, 'user_inputs/');
let arrayOfJs = [];
let i;
let btn = document.getElementById('btn');
let content = document.getElementById('content');

onValue(arr_ref, function (snapshot) {
  arrayOfJs = snapshot.val();
  if (arrayOfJs == null) {
    arrayOfFirebase = [];
  }
  else {
    arrayOfFirebase = arrayOfJs;
  }
  console.log(arrayOfFirebase);
  content.innerHTML = " ";

  for (i = 0; i < arrayOfFirebase.length; i++) {

    let p = document.createElement('p');
    p.innerHTML = '<span>' + arrayOfFirebase[i].user +  '</span>'  + arrayOfFirebase[i].input;
    content.appendChild(p);
  }
});

btn.onclick = function () {

  let obj = {
    "input": inputid.value,
    "user": JSON.parse(sessionStorage.getItem('user')).email
  }
  arrayOfFirebase.push(obj);
  set(ref(db, 'user_inputs/'), arrayOfFirebase);
  content.innerHTML = " ";

  for (i = 0; i < arrayOfFirebase.length; i++) {

    let span = document.createElement('span');
    let p = document.createElement('p');
    content.appendChild(span);
    span.innerHTML = arrayOfFirebase[i].user;
    p.innerHTML = arrayOfFirebase[i].input;
    content.appendChild(p);
  }

  inputid.value = "";

  obj = {

  }
}

