
import React, { useContext, useState } from 'react'

import Login from './Componants/Auth/Login'
import EmployeeDashboard from './Componants/Auth/Dashboard/EmployeeDashboard'
import AdminDashboard from './Componants/Auth/Dashboard/AdminDashboard'
import { AuthContext } from './Componants/Auth/TaskList/Authprovider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInuserData, setLoggedInuserData] = useState(null)

  const authData = useContext(AuthContext)


  const handleLogin = (email, password) => {

    // ================= ADMIN =================

    if (email === "admin@me.com" && password === "123") {

      setUser("admin")

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "admin"
        })
      )

      return
    }

    if (authData && authData.employee) {

      const employee = authData.employee.find(
        (e) =>
          e.email === email &&
          e.password === password
      )

      if (employee) {

        setUser("employee")
        setLoggedInuserData(employee)

        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            role: "employee",
            employee: employee
          })
        )

        return
      }
    }


    // ================= INVALID =================

    alert("Invalid email or password")
  }


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}

      {user === "admin" ? <AdminDashboard /> : (user == "employee" ? <EmployeeDashboard data={loggedInuserData} /> : null) }

      {user === "employee" && (<EmployeeDashboard data={loggedInuserData}/>
      )}
    </>
  )
}

export default App
