import React, { useState } from 'react'
import { auth, provider } from '../firebase'
import {signInWithPopup} from 'firebase/auth'

const Login = () => {
   
    const [user, setUser] = useState(null)

    const loginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider)
            setUser(result.user)
            console.log('Logged in:', result.user)
        } catch (error) {
            console.error('Login failed: ', error)
        }
    };

  return (
    <div className='text-center p-6'>
      {
        user ? (
            <>
             <h2>Welcome, {user.displayName}</h2> 
             <button onClick={() => auth.signOut()} className='bg-rose-500 text-white px-4 py-2 rounded mt-4'>Logout</button>
             </>
        
        ) : (
            <button className='bg-rose-600 text-white px-6 py-2 rounded' onClick={loginWithGoogle}>Sign in with Google</button>
        )
      }
    </div>
  )
}

export default Login
