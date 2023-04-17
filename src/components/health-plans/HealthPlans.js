import React from 'react';
import './healthplans.scss';
import person from './images/singleperson.png';
import family from './images/happyfamily.png';
import exFamily from './images/extendedfamily.png';
import workers from './images/coworkers.png';
import oldies from './images/oldies.png';

const HealthPlans = () => {
    return (
        <div className="m-3 p-5">
            <div className="font-extrabold text-2xl tracking-wider text-orange-600">
                <h2>Our health plans are inclusive</h2>
            </div>
            <div className="text-center flex space-x-10 snap-x snap-mandatory">
                <div className="img-container">
                    <img alt="single person" src={person} />
                    <h3>just <span>YOU</span></h3>
                    <p> lorem ipsum dolor emet</p>
                </div>
                <div className="img-container">
                    <img alt="for your family" src={family} />
                    <h3>Me and my family</h3>
                    <p> lorem ipsum dolor emet</p>
                </div>
                <div className="img-container">
                    <img alt="for your workers" src={workers} />
                    <h3>Workers Health</h3>
                    <p> lorem ipsum dolor emet</p>
                </div>
                <div className="img-container">
                    <img alt="for extended family" src={exFamily} />
                    <h3>large families</h3>
                    <p> lorem ipsum dolor emet</p>
                </div>
                <div className="img-container">
                    <img alt="for old parents" src={oldies} />
                    <h3>Old but Young</h3>
                    <p> lorem ipsum dolor emet</p>
                </div>
            </div>
        </div>
    );
}

export default HealthPlans;