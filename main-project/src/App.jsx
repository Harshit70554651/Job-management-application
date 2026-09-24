import React, { useContext, useEffect, useState } from 'react'

import Login from './Componants/Auth/Login'
import EmployeeDashboard from './Componants/Auth/Dashboard/EmployeeDashboard'
import AdminDashboard from './Componants/Auth/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './Componants/Auth/TaskList/Authprovider'

const App = () => {

  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
  useEffect(() => {
    if(authData){
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        setUser(loggedInUser.role)
      }

    }
  
    
  }, [authData])
  


 
  

  useEffect(() => {
    setLocalStorage()
    getLocalStorage()
  }, [])

  const handleLogin = (email, password) => {

    if (email === "admin@me.com" && password === "123") {

      setUser("admin")
      localStorage.setItem("loggedInUser", JSON.stringify({rule:"admin"}))

    } else if (authData &&  authData.employee.find((e)=> email == e.email && password == e.password) ) {

      setUser("employee")
            localStorage.setItem("loggedInUser", JSON.stringify({rule:"employee"}))


    } else {

      alert("Invalid details. Please try again")

    }

  }


  

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : (
        <EmployeeDashboard />
      )}
    </>
  )
}

export default App