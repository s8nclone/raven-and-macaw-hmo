import React from 'react';
import './healthplans.scss';
import person from './images/singleperson.png';
import family from './images/happyfamily.png';
import exFamily from './images/extendedfamily.png';
import workers from './images/coworkers.png';
import oldies from './images/oldies.png';

const HealthPlans = () => {
    return (
        <div className="my-3 p-5">
            <div className="font-extrabold text-2xl tracking-wider text-orange-600">
                <h2>Our health plans are inclusive</h2>
            </div>
            <div className="text-center flex flex-col justify-center md:flex md:flex-row md:space-x-4 md:flex-wrap lg:flex lg:space-x-6 lg:flex-nowrap lg:justify-around">
                <div className="img-container">
                    <img alt="single person" src={person} />
                    <h3>just <span>YOU</span></h3>
                    <p> Heath insurance tailored just for you!</p>
                    <button>Learn more</button>
                </div>
                <div className="img-container">
                    <img alt="for your family" src={family} />
                    <h3>Me & my family</h3>
                    <p> Get medical coverage for you and your family</p>
                    <button>Learn more</button>
                </div>
                <div className="img-container">
                    <img alt="for your workers" src={workers} />
                    <h3>Workers Health</h3>
                    <p>Health insurance that won't dissapoint you and your employees</p>
                    <button>Learn more</button>
                </div>
                <div className="img-container">
                    <img alt="for extended family" src={exFamily} />
                    <h3>large families</h3>
                    <p> Have a large family? Our plans cover for you and every other member of the family</p>
                    <button>Learn more</button>
                </div>
                <div className="img-container">
                    <img alt="for old parents" src={oldies} />
                    <h3>Old but Young</h3>
                    <p>Put your mind at ease knowing that your older folks health is covered</p>
                    <button>Learn more</button>
                </div>
            </div>
        </div>
    );
}

export default HealthPlans;