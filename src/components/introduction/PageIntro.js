import React from 'react';
import image from './family-picture.png';

const PageIntro = () => {
    return (
        <div className="m-2 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-left leading-loose">
            <div className="lg:py-2">
                <h1 className="text-orange-400 tracking-wide subpixel-antialiased font-extrabold text-2xl lg:text-6xl">Health insurance plans for you, your family and your employees</h1>
                <p className="font-extrabold text-l tracking-normal my-2 lg:text-3xl lg:font-bold lg:py-2">Our goal is to improve the health and well-being of Nigerians by making health care simple, affordable, and easily accessible</p>
                <p className="font-medium text-l my-2 lg:text-2xl">Sign up now and gain access to treatments and services for anyone and everyone</p>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mt-3 rounded-full animate-bounce">Browse Plans</button>
            </div>
            <div>
                <img className="rounded float-right md:max-h-[150] md:max-w-[350] lg:max-h-[300] lg:max-w-[400]" src={image} alt="family and business partnerss" />
            </div>
        </div>
    );
}

export default PageIntro;