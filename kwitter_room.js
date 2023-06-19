
var firebaseConfig = {
      apiKey: "AIzaSyDc5wLy31WSK7yrT2BLsQnYSNunoU5x7KI",
      authDomain: "kwitter-15181.firebaseapp.com",
      databaseURL: "https://kwitter-15181-default-rtdb.firebaseio.com",
      projectId: "kwitter-15181",
      storageBucket: "kwitter-15181.appspot.com",
      messagingSenderId: "110544505053",
      appId: "1:110544505053:web:6e5ec9f5a14f4f492c3334"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
