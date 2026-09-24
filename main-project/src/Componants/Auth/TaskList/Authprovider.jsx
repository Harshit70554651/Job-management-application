import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../../../utils/LocalStorage'
export const AuthContext = createContext()

const Authprovider = ({ children }) => {

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const { employee, admin } =getLocalStorage()
    setUserData({ employee, admin })


  },[])


  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default Authprovider