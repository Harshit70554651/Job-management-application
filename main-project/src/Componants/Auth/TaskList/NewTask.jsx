import React from 'react'

const NewTask = () => {
  return (
    <div>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 rounded  text-sm'>High</h3>
          <h4 className=' text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold '>Make Portfolio</h2>
        <p className='text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, laudantium?</p>
   <div className='mt-4'>
    <button className='text-gray-800 bg-pink-500 rounded-2xl px-2 py-2 font-semibold'>Accept Task</button>
    
   </div>
    </div>
  )
}

export default NewTask