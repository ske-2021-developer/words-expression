import type firebase from 'firebase/app'

interface WordData {
	message: string
	timestamp: firebase.firestore.Timestamp
}

export { WordData }
