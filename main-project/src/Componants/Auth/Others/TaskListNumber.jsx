import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 mb-10'>
        <div className='h-40 w-[40%] bg-red-400 px-6 rounded-xl py-6'>
            <h2 className='text-3xl'>0</h2>
            <h3 className='text-2xl'>New Task</h3>
        </div>
         <div className='h-40 w-[40%] bg-green-400 px-6 rounded-xl py-6'>
            <h2 className='text-3xl'>0</h2>
            <h3 className='text-2xl'>New Task</h3>
        </div>
         <div className='h-40 w-[40%] bg-pink-400 px-6 rounded-xl py-6'>
            <h2 className='text-3xl'>0</h2>
            <h3 className='text-2xl'>New Task</h3>
        </div>
         <div className='h-40 w-[40%] bg-gray-400 px-6 rounded-xl py-6'>
            <h2 className='text-3xl'>0</h2>
            <h3 className='text-2xl'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber