import firebase from 'firebase'
import config from 'core/config'

const firebaseInstance = firebase.initializeApp(config.firebase).firebase_

export default firebaseInstance
