import React from 'react'

export default function Why() {
  return (
    <div className='pl-5 rounded-md mt-10'>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        <div className='hidden lg:block md:text-xs mt-5'> <img className='object-contain md:object-scale-down'
          src="../assets/agreement3.jpg"
          width={800}
          alt=""
        /></div>
         
          <div className='text-justify p-4'>
            <p className='text-xl font-bold text-green-600  m-5'>Reasons for choosing the Eagle Assets & Resource Management</p>
            <p className='text-lg font-light m-4'>At its heart, our platform is a secure place  where all your investments can be held and viewed in one place.
            With up-to-date valuations and a birds-eye of your whole portfolio, it’s easy for you and your Financial Adviser to review and monitor your financial position.</p>
          </div>

        </div>

    </div>
  )
}
