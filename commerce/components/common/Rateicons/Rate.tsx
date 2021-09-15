import React, { useState, useEffect } from 'react'
 interface Props {
  w?:string,
  h?:string,
  m?:string,
}
const Rate = (props:Props) => {
  const [star, setStar] = useState(0)
  const [reset, setReset] = useState(false)
const {h,w,m}=props;
 

  useEffect(() => {
    console.log(star)
  }, [star])

  return (
    <>
      {[1, 3, 3, 4, 1].map((v, i) => (
        <span
          key={i}
          style={{ cursor: 'default' }}
          className={`material-icons w-${w} h-${h} mr-${m} text-yellow-500`}
          onClick={() => {
            if (star === 1 && reset) {
              console.log('if' + star)
      

              setStar(0)
              setReset(false)
            } else if (star === 1) {
              // 2nd
              console.log('Else if' + star)

              setReset(true)
              setStar(i + 1)
            } else {
              console.log('else' + star)

              // Initial
              setStar(i + 1)
            }
          }}
        >
          {star > i ? 'star' : 'star_border'}
        </span>
      ))}
    </>
  )
}

Rate.prototype={
  w:"5",
  h:"5",
  m:"1",
}
export default Rate
