var firebaseConfig = {
    apiKey: "AIzaSyBO73wAvUYpueI576ccq80K9okF3GeiLOg",
    authDomain: "letschat-room-app.firebaseapp.com",
    databaseURL: "https://letschat-room-app-default-rtdb.firebaseio.com",
    projectId: "letschat-room-app",
    storageBucket: "letschat-room-app.appspot.com",
    messagingSenderId: "295826286235",
    appId: "1:295826286235:web:386774a9fda21ec208c83e"
  };
 
  firebase.initializeApp(firebaseConfig);
    usernames= localStorage.getItem("user_name");
    roomname= localStorage.getItem("roomname");
    function send_message() {
     messages=document.getElementById("msg").value;
     firebase.database().ref(roomname).push({
           name:usernames,
           message:messages,
           like:0
     });
     document.getElementById("msg").value="";
  }

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("divs").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;

console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
messaged=message_data['message'];
like=message_data['like'];
name_tag="<h4>"+name+"<img class='usertick' src='tick.png'> </h4>";
message_tag="<h4 class='message_win'>"+messaged+"</h4>";
like_tag="<button class='btn btn-danger' id="+firebase_message_id+"value="+like+" onclick='updatlike(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
row=name_tag+message_tag+like_tag+span_tag;
document.getElementById("divs").innerHTML+=row;
     } });  }); }
getData();
function updatlike(message_id) {
     console.log("Like button clicked"+message_id);
     buttonid=message_id;
     likes=document.getElementById(buttonid).value;
     updatlikes=Number(likes)+1;
     console.log(updatlikes);
     firebase.database().ref(roomname).child(message_id).update({
like:updatlikes
     });

}

function log() {
     localStorage.removeItem("username");
     localStorage.removeItem("roomname");
     window.location="index.html";

}
