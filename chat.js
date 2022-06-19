var firebaseConfig = {
    apiKey: "AIzaSyBO73wAvUYpueI576ccq80K9okF3GeiLOg",
    authDomain: "letschat-room-app.firebaseapp.com",
    databaseURL: "https://letschat-room-app-default-rtdb.firebaseio.com",
    projectId: "letschat-room-app",
    storageBucket: "letschat-room-app.appspot.com",
    messagingSenderId: "295826286235",
    appId: "1:295826286235:web:386774a9fda21ec208c83e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function add() {
    roomname=document.getElementById("input_login").value;
    firebase.database().ref("/").child(roomname).update({
        purpose:"adding roomname"
    });
    localStorage.setItem("roomname",roomname);
    window.location="page.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  roomname=childKey;
  console.log("Roomname:"+roomname);
  row="<div class='roomnamesd' id="+roomname+"onclick='redirecttoroomname(this.id)'>#"+roomname+"</div><hr>";
  document.getElementById("output").innerHTML=row;
  
  
  
  });});}
  function redirecttoroomname(name) {
    console.log(name);
    localStorage.setItem("name",name);
    window.location="page.html";
  }
  function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location="index.html";
  }