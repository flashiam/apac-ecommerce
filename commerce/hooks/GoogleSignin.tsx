import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {
  Auth,
  OAuthCredential,
  sendEmailVerification,
  User,
} from '@firebase/auth'
import { useDispatch } from 'react-redux'
import { Customer } from '../data1'
import { addCustomer } from '../actions/customerAction'

interface Response {
  user: User | null
  accessToken: null
  credentials: OAuthCredential | null
  provider: string | null
  isError: boolean
}

const GoogleSignin = async (auth: Auth) => {
  // const dispatch = useDispatch()
  try {
    const provider = new GoogleAuthProvider()
    const res = await signInWithPopup(auth, provider)
    // Fething credentials
    const credentials = GoogleAuthProvider.credentialFromResult(res)
    console.log(credentials)
    // Fetching user profile
    const { uid, displayName, email, photoURL, providerId } = res.user

    const response: Customer = {
      id: uid,
      name: displayName || '',
      email: email || '',
      accessToken: credentials?.accessToken || '',
      profilePic: photoURL || '',
      provider: providerId,
    }
    // dispatch(addCustomer(response))
    // Sending email
    if (auth.currentUser) await sendEmailVerification(auth?.currentUser)
    console.log('Email sent for verfication')
    return response
  } catch (error) {
    // const credentials = GoogleAuthProvider.credentialFromError(error)
    console.log(error)
  }
}

export default GoogleSignin
