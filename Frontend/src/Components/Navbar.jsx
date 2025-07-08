import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md px-20 py-4 relative z-20 flex justify-between items-center">
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
        </nav>

    )
}

export default Navbar