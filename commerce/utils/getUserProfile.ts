import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { User } from '@firebase/auth'
import app from 'firebase-config'

interface Profile {
  username: string | null
  profilePic: string | null
}
const getUserProfile = () => {
  const profile: Profile = { username: null, profilePic: null }

  const auth = getAuth(app)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      profile.username = user.displayName
      profile.profilePic = user.photoURL
      return profile
    } else {
      throw new Error('User not authenticated')
    }
  })
}

export default getUserProfile
