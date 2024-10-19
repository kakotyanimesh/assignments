import React, {useState, useContext, createContext} from 'react'

export const authContextProvider = createContext()

const AuthContext = ({children}) => {
    const [username, setUsername ] = useState('')
    const [isLogIn, setIsLogIn] = useState(false)
  return (
    <authContextProvider.Provider value={{username, setUsername, isLogIn, setIsLogIn}}>
        {children}
    </authContextProvider.Provider>
  )
}

export default AuthContext