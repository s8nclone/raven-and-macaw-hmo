import React from 'react';
import { useState } from 'react';
import './contact.scss';
import logo from './logo.png';
    

const Contact = () => {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs);
    }

    return (
        <div className="contact bg-orange-200 p-2">
            <div className="grid grid-cols-1 lg:grid-cols-3 space-x-4" >
                <div className="contact-container p-2">
                    <div className="flex items-center space-x-1">
                        <img className="rounded-r-lg w-8 h-8" alt="company logo" src={logo} />
                        <h1 className="text-xl font-extrabold">Raven&Macaw<span className="text-orange-600">HMO</span></h1>
                    </div>
                    <div className="text-left pt-2">
                        <h2>Contact Us</h2>
                        <div>
                            <h3>Address:</h3>
                            <p className="text-sm font-medium">Abuja - 21 Abeokuta Street, Area 8, Garki, FCT, Nigeria</p>
                        </div>
                        <h3>Tel:<a href="tel:+2248096661116">+234 809 666 1116</a></h3>
                        <div className="pt-2">
                            <h3>Follow us on social media</h3>
                            <ul>
                                <li className="font-medium text-sm">Twitter:<a className="text-white px-2" href="?">@RavenMacawHMO</a></li>
                                <li className="font-medium text-sm">Facebook:<a className="text-white px-2" href="?">RavenMacawHMO</a></li>
                                <li className="font-medium text-sm">LinkedIn:<a className="text-white px-2" href="?">RavenMacawHMO</a></li>
                                <li className="font-medium text-sm">Instagram:<a className="text-white px-2" href="?">RavenMacawHMO</a></li>
                                <li className="font-medium text-sm">Email us:<a className="text-white px-2" href="mailto:hello@ravenandmacaw.com">hello@ravenandmacaw.com</a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className="plan-container flex flex-wrap justify-between lg:col-span-2 p-2 text-left lg:justify-around">
                    <div className="w-[50%] my-2 md:w-max">
                        <h2>Company</h2>
                        <ul>
                            <li><a href="?" >About</a></li>
                            <li><a href="?">Team</a></li>
                            <li><a href="?">Board</a></li>
                            <li><a href="?">Blog</a></li>
                            <li><a href="?">Careers</a></li>
                        </ul>
                    </div>

                    <div className="w-[50%] my-2 md:w-max">
                        <h2>Health Plans</h2>
                        <ul>
                            <li><a href="?">Just YOU</a></li>
                            <li><a href="?">Me & my family</a></li>
                            <li><a href="?">Workers health</a></li>
                            <li><a href="?">Large family</a></li>
                            <li><a href="?">Old but young</a></li>
                        </ul>
                    </div>

                    <div className="w-[50%] my-2 md:w-max">
                        <h2>Resources</h2>
                        <ul>
                            <li><a href="?">Available hospitals</a></li>
                            <li><a href="?">Benefit list</a></li>
                            <li><a href="?">Download Health App</a></li>
                            <li><a href="?">Terms of use</a></li>
                            <li><a href="?">FAQs</a></li>
                            <li><a href="?">Privacy policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div>
                <form onSubmit={handleSubmit} className="">
                    <h2>Subscribe to our newsletter</h2>
                    <div className="block mx-9 md:space-x-2 lg:flex lg:justify-center lg:space-x-2">
                        <input 
                            type="text" 
                            name="username" 
                            value={inputs.username || ""} 
                            placeholder="Name"
                            onChange={handleChange}
                            className="form-input rounded-md font-semibold border-orange-600 hover:border-orange-800 focus:border-orange-800 my-1"
                        />
                        <input
                            type="email" 
                            name="email" 
                            placeholder="you@email.com"
                            value={inputs.email || ""} 
                            onChange={handleChange}
                            className="form-input rounded-md font-semibold border-orange-600 hover:border-orange-800 focus:border-orange-800 my-1"
                        />
                    </div>
                    
                    <input type="button" value="Subscribe" className=" form-input font-bold border-orange-600 bg-orange-600 text-white p-2 my-2 rounded-md" />
                </form>
            </div>
            <h4 className="text-center text-sm">@2023 Raven&MacawHMO. All Rights Reserved.</h4>
        </div>
    );
}

export default Contact;