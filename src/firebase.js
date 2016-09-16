import firebase from 'firebase'

import {firebase as firebaseConfig} from './config'

const app = firebase.initializeApp(firebaseConfig)
const ref = app.database().ref()

// For debugging, to be removed
window.ref = ref

export default ref
