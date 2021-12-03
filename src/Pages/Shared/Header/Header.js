import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    // const btn = document.querySelector("button.mobile-menu-button");
    // const menu = document.querySelector(".mobile-menu");

    // btn.addEventListener("click", () => {
    //     menu.classList.toggle("hidden");
    // });

    return (
        <div className="sticky">
            <nav className=" shadow">
            <div className="px-10 mx-auto">
              <div className="flex justify-between px-4">
                    <div className="flex space-x-4">
                        {/* logo */}
                        <div >
                            <Link to="/home"  className="flex items-center py-4 px-3 text-gray-700 hover:text-gray-900">
                                <button className="border border-gray-400 p-2 font-extrabold text-3xl">H.</button>
                                <span className="text-2xl font-bold text-gray-500">Hamed Hussain</span>
                            </Link>
                        </div>
                        {/* primary nav */}
                        {/* <div className="hidden md:flex items-center space-x-1">
                            <a href="#" className="py-5 px-3 text-gray-700">Resume</a>
                            <a href="#"  className="py-5 px-3 text-gray-700">Portfolio</a>

                        </div> */}
                    </div>
                        
                        {/* secondary nav */}
                        <div  className="hidden md:flex items-center space-x-1">
                        <Link to="/" className="py-4 px-3 text-blue-400 font-bold">Home</Link>
                            <Link to="/about"  className="py-5 px-3 text-gray-600">My Intro</Link>
                            <Link to="/resume"   className="py-5 px-3 text-gray-600 hover:text-red-900">Resume</Link> 
                            <Link to="/portfolio"  className="py-2 px-3 text-gray-600" >Portfolio</Link>
                            <Link to="/testimonial"  className="py-2 px-3 text-gray-600">Testimonial</Link>
                           
                        </div>

                       {/* //mobile button */}
                       <div className="md:hidden flex items-center">
                           <button className="mobile-menu-button">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                           </button>
                       </div>
                       
           
                </div>
                            {/* mobile menu */}
                            <div className="mobile-menu hidden md:hidden">
                                <Link to="/"  className="block py-2 px-4 text-sm hover:bg-gray-400">Resume</Link>
                                <Link to="/"  className="block py-2 px-4 text-sm">Portfolio</Link>
                            </div>
                        </div>

                </nav>

        </div>


    
    );
};

export default Header;