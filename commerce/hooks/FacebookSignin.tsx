import { FacebookAuthProvider, Auth, signInWithPopup } from 'firebase/auth'

const FacebookSignin = async (auth: Auth) => {
  try {
    const provider = new FacebookAuthProvider()
    provider.addScope('user-birthday')
    const res = await signInWithPopup(auth, provider)
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

export default FacebookSignin
