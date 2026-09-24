import React, { createContext, useState } from 'react'
export const AuthContext = createContext()

const Authprovider = ({children}) => {

  const [userData, setUserData] = useState(null)
  return (
    <div>
        <AuthContext.Provider value={'harshit'}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default Authprovider