import { Layout } from '@components/common'
import Head from '@components/common/Head/Head'

import QuestionsList from '@components/faq/Questions/QuestionsList'
import Selections from '@components/faq/Selections/Selections'

import React from 'react'

interface FaqList {

  icon: 'string'
  name: 'string'

}



const faq = () => {
  const listOfLists = [
    {
      que: 'How can I order ?',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nostrum natus dignissimos at veniam tempore?',
    },
    {
      que: 'I ordered What happens then ?',
      ans: 'Lorem ipsum dolor sit ameicing elit. Iure nostrum natus dignissimos at veniam tempore?',
    },
    {
      que: 'Is there a minimum order ?',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ieniam tempore?',
    },
    {
      que: 'How can I order ?',
      ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. dignissimos at veniam tempore?',
    },
  ]
  const faqList= [
    {
      icon: 'production_quantity_limits',
      name: 'Order',
    },
    {
      icon: 'local_shipping',
      name: 'Shipping',
    },
    {
      icon: 'payment',
      name: 'Payment',
    },
    {
      icon: 'keyboard_return',
      name: 'Return',
    },
  ]
  return (
    <div className="bg-gray-100 sm:p-8 p-6">
    <Head title="FAQS"/>
    
      <h1 className="text-2xl py-2 font-semibold text-gray-800">
        Frequent Asked Questions
      </h1>
      {/* Main parent */}
      <div className="md:flex md:flex-row sm:flex-row md:justify-between sm:justify-between md:items-start sm:gap-3 md:gap-4 flex flex-col">
        {/* Select box to be shown on mobile devices */}
        <select className="w-15 my-2 p-2 md:hidden sm:hidden block" >
          
        <option value="
          " disabled>Select</option>
        {

            faqList.map(faq => (
              <option className="flex items-center">
             <span className="flex space-x-3 justify-between"> 
             {/* <span className="material-icons">{faq.icon}</span> */}
              <span className="w-12 font-medium">{faq.name}</span></span>
              </option>

            ))
          }
        </select>
   {/* Children 1  Selection*/}
   <div className="md:ml-0 md:block sm:block bg-white md:mb-0 mb-6 sm:flex-1 md:w-1/4 shadow-md py-4 w-full hidden sm:h-auto">
        <ul>
        {faqList.map((selection,i) => (
          <Selections key={i} selection={selection}/>
          ))}
        </ul>
         
      

      </div>
      {/* Children 2 Questions & Answers */}
  
      <div className="md:w-3/4 sm:flex-1 md:px-5 md:py-4 sm:py-3 sm:px-4 py-3 px-4 bg-white shadow-md w-full">
        <h1 className="font-bold mb-2 text-xl px-2">Orders</h1>
  
          {listOfLists.map((ques, i) => (
         <QuestionsList key={i} questions={ques} length={i}/>
          ))}
       
      </div>
      </div>
     
    </div>
  )
}

export default faq
faq.Layout = Layout


// npm install @tailwindcss/custom-forms --save-dev