import React from 'react';

const Header = () => {

    // const btn = document.querySelector("button.mobile-menu-button");
    // const menu = document.querySelector(".mobile-menu");

    // btn.addEventListener("click", () => {
    //     menu.classList.toggle("hidden");
    // });

    return (
        <div>
            <nav className=" shadow">
            <div className=" max-w-6xl mx-auto">
              <div className="flex justify-between px-2">
                    <div className="flex space-x-4">
                        {/* logo */}
                        <div >
                            <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                                <svg className="h-8 w-8 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
                                </svg>
                                <button>Better Dev</button>
                            </a>
                        </div>
                        {/* primary nav */}
                        <div className="hidden md:flex items-center space-x-1">
                            <a href="#" className="py-5 px-3 text-gray-700">Resume</a>
                            <a href="#"  className="py-5 px-3 text-gray-700">Portfolio</a>

                        </div>
                    </div>
                        
                        {/* secondary nav */}
                        <div  className="hidden md:flex items-center space-x-1">
                            <a href="#"  className="py-5 px-3 text-gray-700 hover:text-red-900">Login</a> 
                            <a href="#" className="py-2 px-3 text-gray-700 bg-blue-400 rounded hover:bg-blue-900 hover:text-white">Signup</a>
                           
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
                                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-400">Resume</a>
                                <a href="#"  className="block py-2 px-4 text-sm">Portfolio</a>
                            </div>
                        </div>

        </nav>
      

    

                        <div className="py-50 text-center">
                            <h2 className="text-4xl font-bold uppercase text-blue-500">Hamed Hussaon</h2>
                            <h2 className="text-xl font-base text-blue-900">Junior Web Developer</h2>
                        </div>

        </div>


    
    );
};

export default Header;