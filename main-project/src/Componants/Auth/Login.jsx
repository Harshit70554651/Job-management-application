import React, { useState } from 'react'


const Login = ({handleLogin}) => {


  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail("")
    setPassword("")
    

  }
  return (
    <div className='flex items-center justify-center h-screen' >
      <div className=' border-2  border-emerald-500 rounded-2xl'>
        <form action="" className='flex flex-col items-center  justify-center p-20' onSubmit={(e) => {
          submitHandler(e)
        }}>
          <input
            value={email}
            type="email" required placeholder='Enter Your Email'
            className='border-2  border-emerald-600 rounded-full  px-6 py-3 text-xl outline-none bg-transparent placeholder:text-gray-600 placeholder:font-bold '
            onChange={(e) => {
              setEmail(e.target.value)


            }}
          />


          <input type="password " required placeholder='Enter password'
           className='border-2  border-emerald-600 rounded-full  px-5 py-3 text-xl outline-none bg-transparent placeholder:text-gray-600 mt-3 '
           value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
           />
          <button 
          className=' text-white border-none outline-none  rounded-full mt-5 px-20 py-3 text-xl bg-emerald-600  '
          >Login</button>
        </form>

      </div>
    </div>
  )
}

export default Login