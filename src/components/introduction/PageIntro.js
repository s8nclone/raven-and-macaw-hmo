import React from 'react';
import image from './family-picture.png';

const PageIntro = () => {
    return (
        <div className="m-2 p-4 grid grid-cols-2 shadow-lg text-left leading-loose">
            <div className="shadow-inner">
                <h1 className="text-orange-400 tracking-wide subpixel-antialiased font-extrabold text-5xl">Health insurance plans for you, your family and your employees</h1>
                <br/>
                <p className="font-bold text-2xl tracking-normal">Our goal is to improve the health and well-being of Nigerians by making health care simple, affordable, and easily accessible</p>
                <p className="font-medium text-xl">Sign up now and gain access to treatments and services for anyone and everyone</p>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mt-3 rounded-full animate-bounce">Browse Plans</button>
            </div>
            <div>
                <img className="rounded float-right" style={{maxHeight: 400, maxWidth: 600}} src={image} alt="family and business partnerss" />
            </div>
        </div>
    );
}

export default PageIntro;