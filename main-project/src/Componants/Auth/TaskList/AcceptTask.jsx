import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div> 
          <div className='h-full w-[300px] bg-gray-400 rounded-xl flex-shrink-0 p-5'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 rounded  text-sm'>High</h3>
          <h4 className=' text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold '>Make Portfolio</h2>
        <p className='text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, laudantium?</p>
   <div className='flex justify-between mt-4 '>
         <button className='bg-green-500 px-2 py-2 text-sm rounded-2xl'>Mark as Completed</button>
         <button className='bg-red-500 px-2 py-2 text-sm rounded-2xl'>Mark as Failed</button>
     </div>
      </div>
    
    </div>
  )
}

export default AcceptTask