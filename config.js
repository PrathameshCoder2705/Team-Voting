import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
	apiKey: "AIzaSyBPhZHPlYIc289059swn6Bcrrhtmdahu9Q",
    	authDomain: "voting-59181.firebaseapp.com",
    	projectId: "voting-59181",
    	storageBucket: "voting-59181.appspot.com",
    	messagingSenderId: "945443440607",
    	appId: "1:945443440607:web:498a68c56f576b9f90a66a"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();