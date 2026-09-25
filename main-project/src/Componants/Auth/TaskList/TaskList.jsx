import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'

const TaskList = ({data}) => {
  return (
    <div id='taskList' className=' h-70 w-full py-3 mt-10 px-2 flex gap-5 flex-nowrap overflow-x-auto '>
    <AcceptTask/>
       <div className='h-full w-[300px] rounded-xl flex-shrink-0 p-5  bg-sky-300'>
      <NewTask/>
      </div>
       <div className='h-full w-[300px] rounded-xl flex-shrink-0 p-5 bg-taupe-500'>
        <CompleteTask/>

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