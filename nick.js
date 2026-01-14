import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
getAuth,
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


const firebaseConfig = {
apiKey: "AIzaSyB7QbVxGHR7Qm8o8Wzl_wxsCpzMUdS5rws",
authDomain: "gdboard-add4a.firebaseapp.com",
projectId: "gdboard-add4a",
storageBucket: "gdboard-add4a.firebasestorage.app",
messagingSenderId: "883125028740",
appId: "1:883125028740:web:c504de4139943b8606bfd1"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


onAuthStateChanged(auth, user => {
if (!user) {
location.href = "index.html";
} else {
document.getElementById("user").textContent = "Email: " + user.email;
}
});


window.logout = function () {
signOut(auth).then(() => location.href = "index.html");
};
```js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
getAuth,
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


const firebaseConfig = {
apiKey: "ВСТАВЬ_СВОЙ_API_KEY",
authDomain: "PROJECT.firebaseapp.com",
projectId: "PROJECT",
appId: "APP_ID"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


onAuthStateChanged(auth, user => {
if (!user) {
location.href = "index.html";
} else {
document.getElementById("user").textContent = "Email: " + user.email;
}
});


window.logout = function () {
signOut(auth).then(() => location.href = "index.html");
};