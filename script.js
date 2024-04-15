
                      // Import the functions you need from the SDKs you need
                      import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
                        import { getDatabase,set,ref,get,child,onValue, } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

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
              let user_ref = ref(db,'user/');
              let arr_ref = ref(db,'user inputs/');
              let arrayOfJs = [];
              let i;

              onValue(arr_ref,function(snapshot){
                arrayOfJs = snapshot.val();
                console.log(arrayOfJs);
                if(arrayOfJs == null){
                    arrayOfFirebase = [];
                }
                else{
                  arrayOfFirebase = arrayOfJs;
                }
                
                for(i = 0; i < arrayOfFirebase.length; i++){

                  let p = document.createElement('p');
                  p.innerHTML = arrayOfFirebase[i];
                  content.appendChild(p);
                
               }
              });
              btn.onclick = function () {
                
                  arrayOfFirebase.push(inputid.value);


                             set(ref(db , 'user inputs/') ,arrayOfFirebase);
                               

                               
                               content.innerHTML = " " ;

                           for(i = 0; i < arrayOfFirebase.length; i++){

                              let p = document.createElement('p');
                              p.innerHTML = arrayOfFirebase[i];
                              content.appendChild(p);
                            
                           }
                           

                           
              }
            
              // window.onload =  load();
              //   setTimeout(load,2000);
              // function load() {
              //   console.log("erty");
              //   for(i = 0; i < arrayOfFirebase.length; i++){

              //                 let p = document.createElement('p');
              //                 p.innerHTML = arrayOfFirebase[i];
              //                 content.appendChild(p);
                            
              //              }
              // }

