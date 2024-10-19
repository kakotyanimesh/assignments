import React, {useState, useContext, useEffect, useRef} from 'react'
import { authContextProvider } from './AuthContext'
import AuthContext from './AuthContext' 


const Navbar = () => {
    const ref = useRef()
    const [showForm, setshowForm] = useState(false)
    const [alert, setAlert] = useState(false)
    const {username, setUsername, isLogIn, setIsLogIn } = useContext(authContextProvider)

    const logIn = (e) => {
        e.preventDefault()
        if(username.trim() === ''){
            ref.current.focus()
            setAlert(true)
            return
        }
        setIsLogIn(true)
        setshowForm(false) 
        setAlert(false)       
        localStorage.setItem('username', username)
    }

    useEffect(() => {
      const storedUsername = localStorage.getItem('username')
      if(storedUsername){
        setUsername(storedUsername)
        setIsLogIn(true)
      }
      
    }, [setIsLogIn, setUsername])
    
  return (
    <div className='flex flex-col items-center p-10 font-bold'>
        <h1 className='sm:text-3xl text-xl'>Auth System Demo</h1>
        <div className='sm:mt-5 mt-3 text-xs sm:text-xl'>
        {
            !isLogIn ? !showForm ? 
            <button className='bg-gray-200 text-black p-2 rounded-xl border-2 border-black' onClick={(e) => {
                e.preventDefault()
                setshowForm(true)
            }}>LogIn</button>
            : 
            <form onSubmit={logIn} className='text-center'>
                <input ref={ref} type="text" placeholder='username' className='p-1 rounded-lg text-black' value={username} onChange={(e) => setUsername(e.target.value)}/> <br />
                {
                    alert && (
                            <p className='text-yellow-400'>input box is empty</p>
                    )
                }
                <button className='bg-gray-200 text-black p-1 mt-2 rounded-xl border-2 border-black' type='submit'>log in </button>
            </form>
            :
            <div className='text-center'>
                <h1>Welcome <span className='text-white'>{username.toUpperCase()}</span></h1>
                <button onClick={e => {
                    e.preventDefault()
                    localStorage.removeItem('username')
                    setUsername('')
                    setIsLogIn(false)}                    }
                    className='bg-gray-200 text-black p-1 mt-2 rounded-xl border-2 border-black'
                    >logOUT</button>
            </div>
        }
        </div>
        
    </div>
  )
}

export default Navbar