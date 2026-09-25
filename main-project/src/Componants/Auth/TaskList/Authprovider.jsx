import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../../../utils/LocalStorage'

export const AuthContext = createContext()

const Authprovider = ({ children }) => {

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    setLocalStorage()
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