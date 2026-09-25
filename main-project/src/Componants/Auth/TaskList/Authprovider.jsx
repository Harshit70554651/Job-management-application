import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../../../utils/LocalStorage'

export const AuthContext = createContext()

const Authprovider = ({ children }) => {

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const data = getLocalStorage()

    setUserData(data)
  }, [])

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default Authprovider