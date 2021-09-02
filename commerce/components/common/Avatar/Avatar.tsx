import { FC, useRef, useEffect } from 'react'
import { useUserAvatar } from '@lib/hooks/useUserAvatar'
import Head from "../Head/Head"

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
     style={{ backgroundImage: userAvatar }}
      className="inline-block h-8 w-8 rounded-full border-2 border-primary hover:border-secondary focus:border-secondary transition-colors ease-linear"
    >
 <span className="material-icons-outlined">
{/* My profile */}
</span>
    </div>
    </>
    
  )
}

export default Avatar

// 
