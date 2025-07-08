import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
      <footer className='bg-rose-100 text-gray-800 pt-10 pb-6 px-6 md:px-20'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10'>
                        {/** Logo & Description */}
                        <div>
                            <h2 className='text-2xl font-bold text-rose-600 mb-2'>TechXom</h2>
                            <p className='text-sm'>Your trusted hub for modern tech gadgets, and great deals</p>
                        </div>
                       
    
                        {/** Quick Links */}
                        <div>
                            <h3 className='font-semibold mb-3'>Quicks Links</h3>
                            <ul className='space-y-2 text-sm'>
                                <li><NavLink to='/'>
                                    Home</NavLink></li>
                                <li><NavLink to='/products'>Products</NavLink></li>
                                <li>
                                    <NavLink to='/about'>
                                         About
                                    </NavLink>
                                </li>
                                <li><NavLink to='/contact'>Contact</NavLink></li>
                            </ul>
                        </div>
                        {/** Help */}
                        <div>
                            <ul>
                                <li><a href="#">Shipping & Returns</a></li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">FAQs</a>
                                </li>
                                <li>
                                    <a href="#">Terms of Services</a>
                                </li>
                            </ul>
                        </div>
    
                        <div>
                            <h3 className='font-semibold mb-3'>Connect with Us</h3>
                            <div className='flex space-x-4 text-rose-600'>
                                <a href="#"><i className='fab fa-facebook-f'></i></a>
                                <a href="#"><i className='fab fa-instagram'></i></a>
                                <a href="#"><i className='fab fa-twitter'></i></a>
                                <a href="#"><i className='fab fa-youtube'></i></a>
                            </div>
                        </div>
    
                    </div>
                    <div className='border-t border-rose-300 pt-4 text-center text-sm text-gray-600'>
               © {new Date().getFullYear()} TechXom. All rights reserved.
                    </div>
                </footer>
  )
}

export default Footer