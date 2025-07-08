import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { Menu, X, ShoppingCart, Search } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

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
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-md font-semibold transition-colors duration-300 ${isActive
                                ? "bg-rose-700 text-white"
                                : "bg-rose-600 text-white hover:bg-rose-700"
                            }`
                        }
                    >
                        Login
                    </NavLink>

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
                            <NavLink to='/' onClick={() => setIsOpen(false)}><button className='bg-rose-500 px-2 py-1 text-white'>Sign-in</button></NavLink>
                        </li>
                    </ul>
                )
            }
        </nav>

    )
}

export default Navbar