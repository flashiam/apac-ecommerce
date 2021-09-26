import { useState } from 'react'
import { User } from '@firebase/auth'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import app from 'firebase-config'

interface Profile {
  username: string | null
  profilePic: string | StaticImageData
}

type UserProfile = {
  user: User
}

const useUserProfile = (): User | null => {
  const [profile, setProfile] = useState<User | null>(null)
  const auth = getAuth(app)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setProfile(user)
    }
  })

  return profile
}

export default useUserProfile
