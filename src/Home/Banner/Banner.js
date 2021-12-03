import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Assets/Images/PORTFOLIO1-removebg-preview.png'

const Banner = () => {
    return (
       <div>
            <div className="px-10 bg-gray-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center ">
                    <div className="">
                        <img className="w-full bg-contain bg-center" src={img} alt=""/>
                    </div>
                    <div className=" p-8">
                        <h6 className="text-yellow-500 text-xl">This is me</h6>
                        <h2 className="text-4xl text-white font-bold py-4">Passionate Designer and Developer remotely from Chittagong</h2>
                        <p className="font-base text-gray-100 my-4 ">A professional UX designer and front-end web developer . Loves to add clarity to complicated concepts by design and open for new opportunities and interesting projects</p>

                        <button className=" bg-blue-400 rounded p-2 hover:bg-blue-500 hover:text-white mr-2">Download CV</button>
                        <button className="bg-blue-400 hover:bg-blue-500 hover:text-white rounded p-2">Connect Me</button>
                    </div>                                                                                                                  
                </div>
            </div>
            <div className="text-center grid grid-cols-3 gap-4 px-28 -mt-16">
                <div className= " flex bg-gray-100 rounded shadow-lg">
                    <div className="mx-12 py-8">
                        <Link to="/home">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white bg-blue-400 rounded-full " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </Link>
                    </div>
                    <div className="py-8">
                        <h2 className="text-base font-bold uppercase text-gray-700">10+ Projects</h2>
                        <h2 className="text-base font-base text-blue-400">of react completed</h2>
                    </div>
                </div>
                <div className="  flex bg-gray-100 rounded shadow-lg ">
                    <div className="mx-12 py-8">
                        <Link to="/home">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white bg-blue-400 rounded-full " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </Link>
                    </div>
                    <div className="py-8">
                        <h2 className="text-base font-bold uppercase text-gray-700">1 Year Experience</h2>
                        <h2 className="text-base font-base text-blue-400">with comprehensive training</h2>
                    </div>
                </div>
                <div className="flex bg-gray-100 rounded shadow-lg">
                    <div className="mx-12 py-8">
                        <Link to="/home">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white bg-blue-400 rounded-full " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </Link>
                    </div>
                    <div className="py-8">
                        <h2 className="text-base font-bold uppercase text-gray-700">Support </h2>
                        <h2 className="text-base font-base text-blue-400">Online 24/7</h2>
                    </div>
                </div>
                
            </div>

       </div>
        
    );
};

export default Banner;
