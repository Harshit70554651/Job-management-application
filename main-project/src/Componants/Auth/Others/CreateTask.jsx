import React from 'react'

const CreateTask = () => {
  return (
    <div>
         <div className='p-5 bg-[#1c1c1c] mt-7 rounded text-white '>
        <form className='flex items-start justify-between w-full flex-wrap border-gray-600 rounded'>
          <div className='w-1/2 flex flex-col gap-2.5'>

           <div>
            <h3 className='text-sm text-gray-200 mb-0.5 font-bold p-2 '>Task Title</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent bg-[1px] border-2'
             type="text" placeholder='Make a Ui interface' />

          </div>

            <div className='text-sm text-gray-200 mb-0.5 '>
            <h3 className='text-sm text-gray-200 mb-0.5 font-bold'>Date</h3>
            <input type="date" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent bg-[1px] border-2' />
          </div>
 
          <div>
            <h3 className='text-sm text-gray-200 mb-0.5 font-bold  '>Asign To</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent bg-[1px] border-2' 
             type="text" placeholder='employee name' />
          </div>

          <div>
            <h3 className='text-sm text-gray-200 mb-0.5 font-bold  '>Category</h3>
            <input type="text" placeholder='desine, dev, etc'
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent bg-[1px]  border-green-400 border-2'
            />
            
          </div>

          </div>
         
          <div className='w-1/2'>
            <h3 className='text-sm font-bold text-gray mb-3 border-green-400'>Description</h3>
            <textarea name="" id="" className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-2 '></textarea>
             <button className='bg-emerald-600 py-3 px-5 hover:bg-emerald-300 rounded text-sm mt-4 w-full'>Create Task</button>
          </div>
          

          
        
        </form>
      </div>
    </div>
  )
}

export default CreateTask