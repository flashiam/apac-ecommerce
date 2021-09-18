import React, { FC } from 'react'

const SocialAuth: FC = () => {
  return (
    <div className="flex justify-between items-center pt-4">
      <button className="flex items-center bg-fbColor text-white py-2 px-6">
        <i className="fab fa-facebook pr-3"></i>
        Facebook
      </button>
      <span>or</span>
      <button className="flex items-center bg-white border-2 border-gray-300 py-2 px-6">
        <i className="fab fa-google pr-3 text-gray-600"></i>
        Google
      </button>
    </div>
  )
}

export default SocialAuth
