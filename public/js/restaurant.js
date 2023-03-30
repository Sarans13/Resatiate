import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import {
	getFirestore,
	collection,
	getDocs,
	addDoc,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";
import {
	getAuth,
	onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

const firebaseConfig = {
	apiKey: "AIzaSyBGKX14k6jRqHVH0mvzwEO5lA0G4_ImoSQ",
	authDomain: "fire-base-resatiate.firebaseapp.com",
	projectId: "fire-base-resatiate",
	storageBucket: "fire-base-resatiate.appspot.com",
	messagingSenderId: "260707572479",
	appId: "1:260707572479:web:784fe1f7f76bedc875caca",
};
const firebaseApp = initializeApp(firebaseConfig);

// data base for restaurant section ---------------------------------------------------
const db = getFirestore();
const colRef = collection(db, "Restaurant");

getDocs(colRef).then((snapshot) => {
	console.log(snapshot.docs);
});

//Get the current logged in user code ---------------------------------------------------
const auth = getAuth(firebaseApp);
let email = "test@mail.com";

onAuthStateChanged(auth, (user) => {
	if (user) {
		// User is signed in, see docs for a list of available properties
		email = user.email;
	} else {
		// User is signed out
		// alert("Please Login/Sign Up first!");
		// window.location.href = "/";
	}
});

// Add data to firestore from register form ---------------------------------------------------
const addcustomerform = document.querySelector("#register-form");
addcustomerform.addEventListener("submit", (e) => {
	e.preventDefault();
	addDoc(colRef, {
		Name: addcustomerform.Name.value,
		AadhaarNumber: addcustomerform.AadhaarNumber.value,
		LicenseNumber: addcustomerform.LicenseNumber.value,
		Country: addcustomerform.Country.value,
		City: addcustomerform.City.value,
		Address: addcustomerform.Address.value,
		email: email,
	});
});
