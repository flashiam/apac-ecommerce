import React, { FC, useEffect } from 'react'
import { getAuth } from 'firebase/auth'
import app from 'firebase-config'
import { useDispatch } from 'react-redux'
import { GoogleSignin, FacebookSignin } from '../../hooks'
import { getUserProfile } from '../../utils'
import { addCustomer } from '../../actions/customerAction'

const SocialAuth: FC = () => {
  const auth = getAuth(app)
  const dispatch = useDispatch()

  // Function for google sign in
  const googleSignIn = async () => {
    try {
      const res = await GoogleSignin(auth)
      if (res) dispatch(addCustomer(res))
    } catch (err) {
      console.log(err)
    }
  }

  // Function for facebook sign in
  const facebookSignIn = async () => {
    try {
      await FacebookSignin(auth)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex justify-between items-center pt-4">
      <button
        onClick={facebookSignIn}
        className="flex items-center bg-fbColor text-white py-2 px-6"
      >
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
