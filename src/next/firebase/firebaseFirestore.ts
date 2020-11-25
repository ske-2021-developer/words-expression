import firebase from 'firebase/app'
import 'firebase/firestore'

import firebaseClient from './firebaseClient'

firebaseClient()

const firestore = firebase.firestore()

export { firestore }
