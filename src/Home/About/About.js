import React from 'react';
import img from '../../Assets/Images/about.jpg'

const About = () => {
    return (
        <div className=" bg-gray-500 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center ">
                    <div className="">
                        <img className="w-full bg-contain bg-center" src={img} alt=""/>
                    </div>
                    <div className=" p-10">
                        <h6 className="text-yellow-500 text-xl">My Intro</h6>
                        <h2 className="text-4xl text-white font-bold py-4">About Me</h2>
                        <p className="font-base text-gray-100 my-4 ">A professional UX designer and front-end web developer . Loves to add clarity to complicated concepts by design and open for new opportunities and interesting projects</p>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white text-blue-400 rounded-full " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg> 
                            <h4 className="font-bold">Name : <span className="text-gray-900 font-thin">Md. Hamed Hussain</span></h4>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white text-blue-400 rounded-full " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg> 
                            <h4 className="font-bold">Phone : <span className="text-gray-900 font-thin">+88 01879979328</span></h4>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white text-blue-400 rounded-full " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg> 
                            <h4 className="font-bold">Email : <span className="text-gray-900 font-thin">hamed.mgt.cu@gmail.com</span></h4>
                        </div>
                        <div>
                            <h2 className="text-2xl text-gray-800 font-bold py-4">My interest</h2>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white text-blue-400 rounded-full " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg> 
                                <h4 className="font-bold">Email : <span className="text-gray-900 font-thin">Reading</span></h4>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white text-blue-400 rounded-full " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg> 
                                <h4 className="font-bold">Email : <span className="text-gray-900 font-thin">Travel</span></h4>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white text-blue-400 rounded-full " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg> 
                                <h4 className="font-bold">Email : <span className="text-gray-900 font-thin">Gym</span></h4>
                            </div>
                        </div> 
                    </div> 
                                                                                                                                    
                </div>
            </div>
    );
};

export default About;