import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '../firebase';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => unsubscribe()
    }, [])

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, provider)
        } catch (error) {
            console.log('Login failed', error)
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth)
        } catch (error) {
            console.error('Logout failed: ', error)
        }
    }

    return (
        <nav className="bg-white shadow-md px-8 md:px-20 py-4 relative z-20 flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-semibold">
                    Tech<span className="text-rose-700">Xom</span>
                </h1>
            </div>

            <ul className="text-gray-800 hidden md:flex items-center font-semibold space-x-8">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'text-rose-600' : 'hover:text-rose-600'
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/products' className={({ isActive }) =>
                        isActive ? 'text-rose-600' : 'hover:text-rose-600'
                    } >
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({ isActive }) => isActive ? 'text-rose-600' : 'hover:text-rose-600'} >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-rose-600' : 'hover:text-rose-600'} >
                        Contact
                    </NavLink>
                </li>
                <li>
                   {
                    user ? (
                          <div className='flex items-center space-x-3'>
                            <img src={user.photoURL || "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"} alt='user' className='w-8 h-8 rounded-full'
                            referrerPolicy='no-referrer'
                            />
                            <span>{user.displayName}</span>
                            <button onClick={handleLogout} className='ml-2 bg-gray-200 px-3 py-1 rouded hover:bg-gray-300'>Logout</button>
                          </div>
                    ) : (
                        <button onClick={handleGoogleLogin}
                        className='bg-rose-600 text-white px-4 py-2 rounded hover:bg-rose-700'
                        >Sign in with Google</button>
                    )
                   }

                </li>
            </ul>

            <div className='md:hidden'>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
                </button>
            </div>

            {
                isOpen && (
                    <ul className='top-16 right-4 bg-rose-300/30 backdrop-blur-lg border border-rose-00 w-44 shadow-lg px-3 z-50 py-4 space-y-3 absolute text-sm font-semibold transition-all duration-300 ease-in-out text-gray-700'>
                        <li>
                            <NavLink to='/' onClick={() => setIsOpen(false)}>Home</NavLink>
                        </li>
                         <li>
                            <NavLink to='/products' onClick={() => setIsOpen(false)}>Products</NavLink>
                        </li>
                         <li>
                            <NavLink to='/contact' onClick={() => setIsOpen(false)}>Contact</NavLink>
                        </li>
                         <li>
                            <NavLink to='/About' onClick={() => setIsOpen(false)}>About</NavLink>
                        </li>
                        <li>
                             {
                    user ? (
                          <div className='text-sm flex flex-col items-start space-y-1'>
                            <img src={user.photoURL || "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"} alt='user' className='w-6 h-6 rounded-full'
                            referrerPolicy='no-referrer'
                            />
                            <span>{user.displayName}</span>
                            <button onClick={() => {handleLogout(); setIsOpen(fale) }} className='ml-2 bg-gray-200 px-3 py-1 rouded hover:bg-gray-300'>Logout</button>
                          </div>
                    ) : (
                        <button onClick={handleGoogleLogin}
                        className='bg-rose-600 text-white px-3 py-1 rounded hover:bg-rose-700'
                        >Sign in with Google</button>
                    )
                   }
                        </li>
                    </ul>
                )
            }
        </nav>

    )
}

export default Navbar