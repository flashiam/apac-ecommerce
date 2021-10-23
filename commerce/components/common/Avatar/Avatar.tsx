import { FC, useRef, useEffect } from 'react'
import { useUserAvatar } from '@lib/hooks/useUserAvatar'
import Head from '../Head/Head'

interface Props {
  className?: string
  children?: any
}

const Avatar: FC<Props> = ({}) => {
  let ref = useRef() as React.MutableRefObject<HTMLInputElement>
  let { userAvatar } = useUserAvatar()

  return (
    <>
      <div
        ref={ref}
        // style={{ backgroundImage: userAvatar }}
        className="flex justify-center items-center h-8 w-8 rounded-full border-2 hover:border-secondary focus:border-primary transition-colors ease-linear"
      >
        <i className="material-icons text-black">menu</i>
      </div>
    </>
  )
}

export default Avatar

//
