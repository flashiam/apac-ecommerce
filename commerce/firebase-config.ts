// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAb-fl9qJC6HhytR_9IOOene_ngifFUDyo',
  authDomain: 'apac-ecommerce.firebaseapp.com',
  projectId: 'apac-ecommerce',
  storageBucket: 'apac-ecommerce.appspot.com',
  messagingSenderId: '973353444107',
  appId: '1:973353444107:web:53ef8a159370008f21780e',
  measurementId: 'G-XZ72VWPDZL',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

export default app
