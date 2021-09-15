import React from 'react'

interface Props {
  questions:{
    que:string,
    ans:string,
  }
    length:number,
}
const QuestionsList = ({questions,length}:Props) => {

    
    return (
        <>
               <div  className="p-2 my-2">
              <h3 className="text-sm font-medium">Q{length+1}.{" "}{questions.que}</h3>
              <p className="text-sm text-gray-600 font-base">{questions.ans}</p>
            </div>
        </>
    )
}

export default QuestionsList
