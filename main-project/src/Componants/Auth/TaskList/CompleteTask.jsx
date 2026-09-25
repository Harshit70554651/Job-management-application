import React from 'react'

const CompleteTask = () => {
  return (
    <div>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 rounded  text-sm'>High</h3>
          <h4 className=' text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold '>Make Portfolio</h2>
        <p className='text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, laudantium?</p>
        <div className='mt-6'>
            <button className='w-full text-gray-500 bg-red-300 rounded-2xl px-2 py-2'>Completed</button>
        </div>
    </div>
  )
}

export default CompleteTask