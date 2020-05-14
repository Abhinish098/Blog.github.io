const Message = document.getElementById(Message);

const database = firebase.database();

Submit.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref('/users/'+ Message.Value).set({
        Message = Message.value
    });
});

const firebaseConfig = {
    apiKey: "AIzaSyBwEBSWGl1tRKF_6ug6cQ3xpBo4IZomidk",
    authDomain: "my-blog-f4902.firebaseapp.com",
    databaseURL: "https://my-blog-f4902.firebaseio.com",
    projectId: "my-blog-f4902",
    storageBucket: "my-blog-f4902.appspot.com",
    messagingSenderId: "182380815302",
    appId: "1:182380815302:web:735a224ae28181837608c7",
    measurementId: "G-45XF5B0R7E"
  };