import React from 'react';
import { useState } from "react"
import logo from './logo.png';
import Hamburger from '../Hamburger';


const Navigation = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <nav className="bg-white lg:sticky top-0 left-0 right-0 z-50">
            <div className="p-2 flex justify-between md:flex md:justify-between lg:flex lg:justify-between">
                <div className="flex w-4/5 justify-around md:w-max md:space-x-2 lg:space-x-4 items-center">
                    <img  className="rounded-r-lg" style={{maxWidth:50, maxHeight:50}} alt="raven and macaw logo" src={logo} />
                    <h1 className="text-xl font-bold">Raven&Macaw<span className="text-orange-600">HMO</span></h1>
                </div>
                
                <div className="md:flex md:space-x-3 md:items-center lg:flex lg:space-x-6 lg:items-center text-lg font-semibold navigation">
                    <div className="overflow-hidden hover:block">
                        <button className="underline decoration-orange-500 underline-offset-2 decoration-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 ">Health Plans</button>
                        <div className="hidden absolute">
                            <a href="#link1">Link 1</a>
                            <a href="#link2">Link 2</a>
                            <a href="#link3">Link 3</a>
                        </div>
                    </div>
                    <div className="overflow-hidden hover:block">
                        <button className="underline decoration-orange-500 underline-offset-2 decoration-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 ">Services</button>
                        <div className="hidden absolute">
                            <a href="#link1">Link 1</a>
                            <a href="#link2">Link 2</a>
                            <a href="#link3">Link 3</a>
                        </div>
                    </div>
                    <div className="overflow-hidden hover:block">
                        <button className="underline decoration-orange-500 underline-offset-2 decoration-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 ">Support</button>
                        <div className="hidden absolute">
                            <a href="#link1">Link 1</a>
                            <a href="#link2">Link 2</a>
                            <a href="#link3">Link 3</a> 
                        </div>
                    </div>

                    <div className="flex flex-col space-y-1 my-2 md:flex md:flex-row md:space-y-0 md:space-x-2 lg:space-x-4">
                        <a 
                            className="border-solid px-3 h-7 w-fill font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300" 
                            href="#login">Login</a>
                        <a 
                            className="border-solid px-3 h-7 w-fill font-medium text-white bg-orange-600 rounded hover:bg-orange-400 transition duration-300" 
                            href="#getstarted">Get Started</a>
                    </div>
                    
                </div>

                <div className="hamburgers" onClick={toggleHamburger}>
                    <Hamburger />
                </div>
            </div>
            
            <style jsx>{`
                .hamburgers {
                    display: none;
                }

                @media (max-width: 767px){
                    .hamburgers {
                        float: right;
                        display: flex;
                        padding-top: 5px;
                        margin-right: 5px;
                        z-index: 50;
                    }
                    
                    .navigation {
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                        position: absolute;
                        top: 15px;
                        right: 10px;
                        background-color: #f7f7f7;
                        border-radius: 5px;
                        height: 27vh;
                        width: 50vw;
                        margin-top: 40px;
                        padding: 10px;
                        
                    }
                }

                
            `}
            </style>
        </nav>

        
       
    );
}

export default Navigation;