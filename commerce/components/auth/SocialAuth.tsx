import React, { FC, useEffect } from 'react'
import { getAuth } from 'firebase/auth'
import app from 'firebase-config'
import { useGoogleSignin } from '../../hooks'
import { getUserProfile } from '../../utils'

const SocialAuth: FC = () => {
  const auth = getAuth(app)

  // Function for google sign in
  const googleSignIn = async () => {
    try {
      const { user, credentials } = await useGoogleSignin(auth)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex justify-between items-center pt-4">
      <button className="flex items-center bg-fbColor text-white py-2 px-6">
        <i className="fab fa-facebook pr-3"></i>
        Facebook
      </button>
      <span>or</span>
      <button
        onClick={googleSignIn}
        className="flex items-center bg-white border-2 border-gray-300 py-2 px-6"
      >
        <i className="fab fa-google pr-3 text-gray-600"></i>
        Google
      </button>
    </div>
  )
}

export default SocialAuth
