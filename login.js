
import { initializeApp } from "firebase/app";
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

login.addEventLstener('click', (e) => {
	var email = document.getElementById('emaillog').value;
	var password = document.getElementById('passwordlog').value;
	
	createUserWithEmailAndPassword(auth, email, password).then(cred => {
	alert ("Usuario logeado!");
        console.log(cred.user);
	}).catch (error => {
		const errorCode = error.code;
		
		if (errorCode == 'auth/email-invalid-email')
			alert ('El correono no es valido');
		else if (errorCode == 'auth/user-disabled')
			alert ('El usuario ha sido desabilitado');
		else if (errorCode == 'auth/user-not-found')
		    alert('El usuario no existe');	
		else if (errorCode == 'auth/wrong-password')
		    alert('Contraseña incorrecta');	
		
	});
});

cerrar.addEventListener('click', (e) => {
    auth.signout().then(() => {
        alert('Sesion cerrada');
    }).catch((error ) => {
        alert('Error al cerrar sesion');
    });
});

auth.outAuthstatechanged(user => {
	if(user){
console.log("Usuario activo");
	    var email =user.emailverified;
	if(email){
		window.open("https://www.google.com/")
        }else{
	auth.singOut();
}
}else{
	console.log("Usuario inactivo");
    }
});
