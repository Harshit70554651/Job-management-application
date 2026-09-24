import React from 'react'

const TaskList = () => {
  return (
    <div id='taskList' className=' h-70 w-full py-3 mt-10 px-2 flex gap-5 flex-nowrap overflow-x-auto '>
      <div className='h-full w-[300px] bg-gray-400 rounded-xl flex-shrink-0 p-5'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 rounded  text-sm'>High</h3>
          <h4 className=' text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold '>Make Portfolio</h2>
        <p className='text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, laudantium?</p>

      </div>
       <div className='h-full w-[300px] rounded-xl flex-shrink-0 p-5  bg-sky-300'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 rounded  text-sm'>High</h3>
          <h4 className=' text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold '>Make Portfolio</h2>
        <p className='text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, laudantium?</p>

      </div>
       <div className='h-full w-[300px] rounded-xl flex-shrink-0 p-5 bg-taupe-500'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 rounded  text-sm'>High</h3>
          <h4 className=' text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold '>Make Portfolio</h2>
        <p className='text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, laudantium?</p>

      </div>
       <div className='h-full w-[300px]  rounded-xl flex-shrink-0 p-5 bg-lime-300 '>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-1 rounded  text-sm'>High</h3>
          <h4 className=' text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold '>Make Portfolio</h2>
        <p className='text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, laudantium?</p>

      </div>


    </div>
  )
}

export default TaskList