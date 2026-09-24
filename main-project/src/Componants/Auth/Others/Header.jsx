import React from 'react'

const Header = () => {
    return (
        <div>
            <div className='flex items-end justify-between'>
            <h1 className='text-xl font-medium'>
                Hello <br /><span className='text-2xl font-semibold'> harshit👋</span>
                
            </h1>
              <button className= 'text-lg font-medium bg-red-500 text-white px-5 py-2 rounded-sm'>Log Out</button>
            </div>
        </div>
    )
}

export default Header