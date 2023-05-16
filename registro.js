import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';

import {sendEmailVerification, getAuth, signInWithPopup, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword,  
    onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyC6YooXnBbBzI6KXWozjfXq2ygWa9Vsii8",
  authDomain: "buenosbeat-4ff68.firebaseapp.com",
  databaseURL: "https://buenosbeat-4ff68.firebaseio.com",
  projectId: "buenosbeat-4ff68",
  storageBucket: "buenosbeat-4ff68.appspot.com",
  messagingSenderId: "990746387626",
  appId: "1:990746387626:web:aef64a382ef03767fc1cd3"
};

// Iniciar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(App);

registro.addEventLstener('click', (e) => {
	var email = document.getElementById('emailreg').value;
	var password = document.getElementById('passwordreg').value;
	
	createUserWithEmailAndPassword(auth, email, password).then(cred => {
	alert ("usuario creado");
    sendEmailVerificationEmail(auth.currentUser).then(() => {
        alert('Se ha enviado el correco electronico de verificacion');
    });
	}).catch (error => {
		const errorCode = error.code;
		
		if (errorCode == 'auth/email-already-in-use')
			alert ('El correo ya esta en uso');
		else if (errorCode == 'auth/invalid-email')
			alert ('El correo no es valido');
		else if (errorCode == 'auth/weak-password')
		    alert('La contraseña debe tener al menos 6 caracteres');	
	});
});