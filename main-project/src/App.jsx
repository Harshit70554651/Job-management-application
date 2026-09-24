import React, { useContext, useEffect, useState } from 'react'

import Login from './Componants/Auth/Login'
import EmployeeDashboard from './Componants/Auth/Dashboard/EmployeeDashboard'
import AdminDashboard from './Componants/Auth/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './Componants/Auth/TaskList/Authprovider'

const App = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    setLocalStorage()
    getLocalStorage()
  }, [])

  const handleLogin = (email, password) => {

    if (email === "admin@me.com" && password === "123") {

      setUser("admin")

    } else if (email === "user@me.com" && password === "123") {

      setUser("employee")

    } else {

      alert("Invalid details. Please try again")

    }

  }


  const data = useContext(AuthContext)

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