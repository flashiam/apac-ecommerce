import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { Auth, OAuthCredential, User } from '@firebase/auth'
import { FirebaseError } from '@firebase/util'

interface Response {
  user: User | null
  credentials: OAuthCredential | null
  isLoading: boolean
  isError: boolean
}

const useGoogleSignin = async (auth: Auth): Promise<Response> => {
  const response: Response = {
    user: null,
    credentials: null,
    isLoading: true,
    isError: false,
  }
  try {
    const provider = new GoogleAuthProvider()
    const res = await signInWithPopup(auth, provider)
    // Fething credentials
    const credentials = GoogleAuthProvider.credentialFromResult(res)
    // Fetching user profile
    const user = res.user

    response.user = user
    response.credentials = credentials
    response.isLoading = false
  } catch (error) {
    // const credentials = GoogleAuthProvider.credentialFromError(error)
    response.isLoading = false
    response.isError = true
  }

  return response
}

export default useGoogleSignin
