import React from 'react';
import './customer.scss';
import access from './images/accesslogo.png';
import accion from './images/accionlogo.png';
import amazon from './images/amazonlogo.png';
import bmw from './images/bmwlogo.png';
import dangote from './images/dangotelogo.png';
import deloitte from './images/deloittelogo.png';
import fidelity from './images/fidelitylogo.png';
import firstb from './images/firstlogo.png';
import gtbank from './images/gtbanklogo.png';
import kuda from './images/kudalogo.png';
import lapo from './images/lapologo.png';
import microsoft from './images/microsoftlogo.png';
import pepsi from './images/pepsilogo.png';
import samsung from './images/samsunglogo.png';
import total from './images/totallogo.png';
import uba from './images/ubalogo.png';
import vbank from './images/vbanklogo.png';
import versace from './images/versacelogo.png';
import who from './images/whologo.png';


const Customers = () => {
    return (
        <div className="bg-orange-100 rounded-xl shadow-inner m-3 p-5">
            <div>
                <h2 className="text-center text-xl font-extrabold text-orange-600 tracking-wider">
                    We provide services to a plethora of organizations and individuals</h2>
            </div>
            <div className="customer p-5 grid grid-cols-3 md:grid-cols-4 gap-3 lg:grid-cols-7 lg:gap-4">
                <div className="rounded-md w-12 h-12 lg:w-18 lg:h-16 m-4  ">
                    <img alt="company logo" src={access}/>
                </div>
                <div className="rounded-md w-12 h-12 lg:w-18 lg:h-16 m-4 ">
                    <img alt="company logo" src={who} />
                </div>
                <div className="rounded-md w-12 h-12 lg:w-18 lg:h-16 m-4 ">
                    <img alt="company logo" src={gtbank} />
                </div>
                <div className="rounded-md w-12 h-12 lg:w-18 lg:h-16 m-4 ">
                    <img alt="company logo" src={fidelity} />
                </div>
                <div className="rounded-md w-12 h-12 lg:w-18 lg:h-16 m-4 ">
                    <img alt="company logo" src={versace} />
                </div>
                <div className="rounded-md w-12 h-12 lg:w-18 lg:h-16 m-4 ">
                    <img alt="company logo" src={microsoft} />
                </div>
                <div className="rounded-md w-12 h-12 lg:w-18 lg:h-16 m-4 ">
                    <img alt="company logo" src={kuda} />
                </div>
                <div className="rounded-md w-12 h-12 lg:w-18 lg:h-16 m-4 ">
                    <img alt="company logo" src={vbank} />
                </div>
                <div className="rounded-md w-12 h-12 lg:w-18 lg:h-16 m-4 ">
                    <img alt="company logo" src={samsung} />
                </div>
                <div className="rounded-md w-12 h-12 lg:w-18 lg:h-16 m-4 ">
                    <img alt="company logo" src={uba} />
                </div>
                <div className="rounded-md w-12 h-12 lg:w-18 lg:h-16 m-4 ">
                    <img alt="company logo" src={total} />
                </div>
                <div className="rounded-md w-12 h-12 lg:w-18 lg:h-16 m-4 ">
                    <img alt="company logo" src={lapo} />
                </div>
                <div className="rounded-md w-12 h-12 lg:w-18 lg:h-16 m-4 ">
                    <img alt="company logo" src={deloitte} />
                </div>
                <div className="rounded-md w-12 h-12 lg:w-18 lg:h-16 m-4 ">
                    <img alt="company logo" src={dangote} />
                </div>
                <div className="rounded-md w-12 h-12 lg:w-18 lg:h-16 m-4 ">
                    <img alt="company logo" src={accion} />
                </div>
                <div className="rounded-md w-12 h-12 lg:w-18 lg:h-16 m-4 ">
                    <img alt="company logo" src={bmw} />
                </div>
                <div className="rounded-md w-12 h-12 lg:w-18 lg:h-16 m-4 ">
                    <img alt="company logo" src={amazon} />
                </div>
                <div className="rounded-md w-12 h-12 lg:w-18 lg:h-16 m-4 ">
                    <img alt="company logo" src={firstb} />
                </div>
                <div className="rounded-md w-12 h-12 lg:w-18 lg:h-16 m-4 ">
                    <img alt="company logo" src={pepsi} />
                </div>
            </div>
        </div>
    );
}

export default Customers;