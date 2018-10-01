import firebase from 'firebase'

const config = {
	apiKey: process.env.API_KEY,
	authDomain: 'ske-workplace.firebaseapp.com',
	databaseURL: 'https://ske-workplace.firebaseio.com',
	projectId: 'ske-workplace',
	storageBucket: 'ske-workplace.appspot.com',
	messagingSenderId: '959189747042',
}

const firebaseInstance = firebase.initializeApp(config).firebase_

export default firebaseInstance
